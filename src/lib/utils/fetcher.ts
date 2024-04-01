import { IGDB } from '$lib/utils/igdb/client';

class Fetcher {
	private igdb = new IGDB();

	async igdbSearch(query: string) {
		return await this.igdb.search(query);
	}

	async igdbInfo(id: string) {
		return await this.igdb.info(id);
	}

	async igdbTopRated() {
		return await this.igdb.topRated();
	}

	async igdbMostAnticipated() {
		return await this.igdb.mostAnticipated();
	}
}

export default new Fetcher();
