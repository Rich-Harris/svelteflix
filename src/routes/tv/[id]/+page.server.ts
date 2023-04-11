import { tmdb } from '$lib/server/tmdb';

export async function load({ params }) {
	const show = await tmdb.tvInfo({
		id: params.id,
		append_to_response: 'images,videos'
	});

	const images = await tmdb.tvImages({
		id: params.id,
		include_image_language: 'en'
	});

	const videos = await tmdb.tvVideos({
		id: params.id
	});

	const trailer = videos.results!.find((video) => {
		return video.official && video.site === 'YouTube' && (video.type === 'Trailer' || video.type === 'Teaser');
	});

	return {
		show,
		images,
		trailer
	};
}
