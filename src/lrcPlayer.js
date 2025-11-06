export default class LRC {
	constructor() {
		this.isReady = false;
	}

	loadLRC(text) {
		this.timedLyrics = [];
		const lines = text.split("\n");
		const regex = /\[(\d{2}):(\d{2}\.\d{2})\]\s*(.*)/;
		for (const line of lines) {
			const match = line.match(regex);

			const minutes = parseInt(match[1]);
			const seconds = parseFloat(match[2]);
			let lyric = match[3].trim();
			const time = (minutes * 60 + seconds) * 1000;

			if (lyric === "") lyric = "(Music)";

			this.timedLyrics.push({ time, lyric });
		}

		this.prevIndex = -1;
		this.isReady = true;
	}

	update(currentTimeMs) {
		if (this.timedLyrics.length === 0) return ["No lyrics found?", true];

		const newIndex = this.timedLyrics.findLastIndex((lyric) => currentTimeMs >= lyric.time);

		if (newIndex >= 0) {
			const changed =  newIndex !== this.prevIndex;
			this.prevIndex = newIndex;
			return [this.timedLyrics[newIndex].lyric, changed];
		}

		return ["(Music)", true];
	}

	async getLRCLIB(trackName, artistName) {
		this.isReady = false;

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
			console.error(`Error ${response.status}: ${response.statusText}`);
			return;
		}

		const results = await response.json();

		if (results.length === 0) {
			console.log("No lyrics found.");
			return;
		}

		//console.log(results[0].syncedLyrics);
		this.loadLRC(results[0].syncedLyrics);
	}
}
