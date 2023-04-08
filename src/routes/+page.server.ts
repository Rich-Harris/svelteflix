import { tmdb } from '$lib/tmdb';
import type { MovieResult, TvResult } from 'moviedb-promise';

export async function load() {
	const [movies, tv] = await Promise.all([
		tmdb.trending({ media_type: 'movie', time_window: 'day' }),
		tmdb.trending({ media_type: 'tv', time_window: 'day' })
	]);

	return {
		movies: movies.results as MovieResult[],
		tv: tv.results as TvResult[]
	};
}
