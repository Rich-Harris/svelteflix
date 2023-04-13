import * as api from '$lib/api';
import type { MovieImages, MovieList } from '$lib/types.js';

export async function load({ fetch }) {
	const [trending, now_playing, upcoming] = await Promise.all([
		api.get(fetch, 'trending/movie/day') as Promise<MovieList>,
		api.get(fetch, 'movie/now_playing') as Promise<MovieList>,
		api.get(fetch, 'movie/upcoming') as Promise<MovieList>
	]);

	const featured = trending.results[0];
	const images = (await api.get(fetch, `movie/${featured.id}/images`)) as MovieImages;
	const backdrop = images.backdrops[0];

	return {
		trending: trending.results.slice(1),
		now_playing: now_playing.results,
		upcoming: upcoming.results,
		featured: {
			movie: featured,
			backdrop
		}
	};
}
