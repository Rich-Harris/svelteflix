import * as api from '$lib/api';
import type { MovieDetails } from '$lib/types.js';

export async function load({ data, fetch }) {
	const movies = (await Promise.all(
		data.ids.map((id) => {
			return api.get(fetch, `movie/${id}`);
		})
	)) as MovieDetails[];

	return {
		movies
	};
}
