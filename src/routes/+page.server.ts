import { tmdb } from '$lib/server/tmdb.js';
import type { Image, MovieResult } from 'moviedb-promise';

export async function load() {
	const trending = tmdb.trending({ media_type: 'movie', time_window: 'day' });
	const popular = tmdb.moviePopular();
	const top_rated = tmdb.movieTopRated();
	const now_playing = tmdb.movieNowPlaying();
	const upcoming = tmdb.upcomingMovies({ region: 'us' });

	const featured = (await trending).results!.shift() as MovieResult;

	const images = await tmdb.movieImages({
		id: featured.id!,
		include_image_language: 'en'
	});

	const backdrop = images.backdrops![0] as Image;

	return {
		trending: (await trending).results as MovieResult[],
		popular: (await popular).results as MovieResult[],
		top_rated: (await top_rated).results as MovieResult[],
		now_playing: (await now_playing).results as MovieResult[],
		upcoming: (await upcoming).results as MovieResult[],
		featured: {
			movie: featured,
			backdrop
		}
	};
}
