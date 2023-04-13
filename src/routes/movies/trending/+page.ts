import * as api from '$lib/api.js';
import type { MovieList, MovieListResult } from '$lib/types.js';

export async function load({ url, fetch }) {
	const page = url.searchParams.get('page') ?? '1';

	const data = (await api.get(fetch, 'trending/movie/day', {
		page
	})) as MovieList;

	return {
		movies: data.results,
		next_page: data.page! < data.total_pages ? data.page + 1 : null,
		infinite: true
	};
}
