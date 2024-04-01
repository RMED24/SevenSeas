// src/routes/info/[id]/+page.server.ts
import type { InfoReturn } from '$lib';
import fetcher from '$lib/utils/fetcher.js';
import { error } from '@sveltejs/kit';

/**
 * Loads game data and crack status for a given game ID.
 *
 * @param {object} params - The parameters object.
 * @param {string} params.id - The ID of the game.
 * @param {Function} fetch - The fetch function to make HTTP requests.
 *
 * @returns {Promise} A promise that resolves to an object containing the game ID,
 *                    game information, and crack status.
 * @throws {Error} Throws an error if the game ID is invalid or if there is an exception
 *                during the fetch process or parsing the response.
 */
export async function load({ params }): Promise<{
	id: string;
	gameInfo: InfoReturn;
	// crackStatus: ProviderInfoResponse | null
}> {
	if (!params || !params.id || typeof params.id !== 'string')
		throw error(500, `Invalid game ID: ${params.id}`);

	const gameDataPromise = fetcher.igdbInfo(params.id);

	const gameInfo = await gameDataPromise;
	return {
		id: params.id,
		gameInfo
		// crackStatus
	};
}
