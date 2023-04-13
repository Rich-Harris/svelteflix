import { tmdb } from '$lib/server/tmdb.js';

export async function load({ url }) {
	const query = url.searchParams.get('query')!;

	return {
		movies: tmdb.searchMovie({ query })
	};
}
