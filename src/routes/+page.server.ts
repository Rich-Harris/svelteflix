import { tmdb } from '$lib/server/tmdb.js';
import type { Image, MovieResult, TvResult } from 'moviedb-promise';

export async function load() {
	const [{ results: movies }, { results: tv }] = await Promise.all([
		tmdb.trending({ media_type: 'movie', time_window: 'day' }),
		tmdb.trending({ media_type: 'tv', time_window: 'day' })
	]);

	const featured = movies!.shift() as MovieResult;

	const images = await tmdb.movieImages({
		id: featured.id!,
		include_image_language: 'en'
	});

	const backdrop = images.backdrops![0] as Image;

	return {
		movies: movies as MovieResult[],
		tv: tv as TvResult[],
		featured: {
			backdrop,
			info: featured
		}
	};
}
