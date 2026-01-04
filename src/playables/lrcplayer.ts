export default class LRC {
	isReady: boolean;
	timedLyrics: { time: number; lyric: string }[];
	prevIndex: number;

	async getLRCLIB(trackName: string, artistName: string) {
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
		});

		if (!response.ok) {
			console.error("Error getting lyrics, LRCLIB didn't respond");
			this.isReady = true;
			return;
		}

		const results = await response.json(); //returns any?

		if (results.length === 0) {
			console.log("No lyrics found. Are you sure the track name and artist name are correct?");
			this.isReady = true;
			return;
		}

		const lines: string = results[0].syncedLyrics.split("\n");

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

	update(currentTimeMs: number) {
		if (this.timedLyrics.length === 0) return ["No lyrics found? Check console", "init"];

		const newIndex = this.timedLyrics.findLastIndex((index: { time: number; lyric: string }) => currentTimeMs >= index.time);

		if (newIndex >= 0) {
			const changed = newIndex !== this.prevIndex;
			this.prevIndex = newIndex;
			return [this.timedLyrics[newIndex].lyric, changed ? "changed" : "null"];
		}

		return ["(Music)", "init"];
	}
}
