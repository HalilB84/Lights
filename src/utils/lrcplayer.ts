export class LRC {
	isReady: boolean;
	timedLyrics: { time: number; lyric: string }[];
	prevIndex: number;
	abortController: AbortController;

	//https://stackoverflow.com/questions/31061838/how-do-i-cancel-an-http-fetch-request / for wallpaper engine
	async getLRCLIB(trackName: string, artistName: string) {
		if (this.abortController) this.abortController.abort();

		this.abortController = new AbortController();

		this.isReady = false;
		this.timedLyrics = [];

		const params = new URLSearchParams({
			track_name: trackName,
			artist_name: artistName,
		});

		const response = await fetch(`https://lrclib.net/api/search?${params.toString()}`, {
			headers: {
				"x-user-agent": "Lights! v0.1.0 (https://github.com/HalilB84/lights)",
			},

			signal: this.abortController.signal,
		}).catch((e) => {
			if (e.name === "AbortError") console.log("aborted");
		});

		if (!response) {
			this.isReady = true;
			return;
		}

		if (!response.ok) {
			console.log("Error getting lyrics, LRCLIB didn't respond or something else went wrong");
			this.isReady = true;
			return;
		}

		const results = await response.json();

		if (results.length === 0) {
			console.log("No lyrics found");
			this.isReady = true;
			return;
		}

		const lines: string[] = results[0].syncedLyrics?.split("\n") || [];
		if (results[0].instrumental == true) {
			this.timedLyrics = [{ time: 0, lyric: "Instrumental" }];
		}

		for (const line of lines) {
			const time = line.substring(1, 9).split(":");
			const lyric = line.substring(10).trim();

			this.timedLyrics.push({
				time: parseFloat(time[0]) * 60 + parseFloat(time[1]),
				lyric: lyric,
			});
		}

		this.prevIndex = -1;
		this.isReady = true;
	}

	update(seconds: number) {
		if (this.timedLyrics.length === 0) return ["No lyrics found", "init"];

		const newIndex = this.timedLyrics.findLastIndex((index: { time: number; lyric: string }) => seconds >= index.time);

		if (newIndex >= 0) {
			const changed = newIndex !== this.prevIndex;
			this.prevIndex = newIndex;
			return [this.timedLyrics[newIndex].lyric, changed ? "changed" : "null"];
		}

		return ["(Music)", "init"];
	}
}
