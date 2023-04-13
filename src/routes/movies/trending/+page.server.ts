import { tmdb } from '$lib/server/tmdb.js';
import type { MovieResult } from 'moviedb-promise';

export async function load({ url }) {
	const page = url.searchParams.get('page') ?? '1';

	const data = await tmdb.trending(
		{ media_type: 'movie', time_window: 'day' },
		{
			params: {
				page
			}
		}
	);

	return {
		movies: data.results as MovieResult[],
		next_page: data.page! < data.total_pages! ? data.page! + 1 : null,
		infinite: true
	};
}
