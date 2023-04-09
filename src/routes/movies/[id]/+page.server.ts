import { tmdb } from '$lib/server/tmdb';

export async function load({ params }) {
	const movie = await tmdb.movieInfo({
		id: params.id,
		append_to_response: 'images,videos'
	});

	const images = await tmdb.movieImages({
		id: params.id,
		include_image_language: 'en'
	});

	const videos = await tmdb.movieVideos({
		id: params.id
	});

	const trailer = videos.results!.find((video) => {
		return video.official && video.site === 'YouTube' && (video.type === 'Trailer' || video.type === 'Teaser');
	});

	return {
		movie,
		images,
		trailer
	};
}
