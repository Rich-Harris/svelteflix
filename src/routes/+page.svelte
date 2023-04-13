<script lang="ts">
	import { media } from '$lib/api';
	import Carousel from '$lib/components/Carousel.svelte';

	export let data;

	$: images = data.featured.images;
	$: backdrop = images.backdrops.find((image) => !image.iso_639_1) || images.backdrops[0];
	$: logo = images.logos.find((image) => image.iso_639_1 === 'en');
</script>

<div class="column">
	<h1>Today's top movies</h1>

	<a href="/movies/{data.featured.id}">
		<img
			class="backdrop"
			alt={data.featured.title}
			src={media(backdrop.file_path, 1280)}
			style="aspect-ratio: {backdrop.aspect_ratio}"
		/>

		{#if logo}
			<img
				class="logo"
				alt={data.featured.title}
				src={media(logo.file_path, 500)}
				style="aspect-ratio: {logo.aspect_ratio}"
			/>
		{/if}
	</a>
</div>

<Carousel title="Trending" href="/movies/trending" movies={data.trending} />
<Carousel title="Now playing" href="/movies/now_playing" movies={data.now_playing} />
<Carousel title="Upcoming" href="/movies/upcoming" movies={data.upcoming} />

<style>
	a {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.backdrop {
		width: 100%;
	}

	.logo {
		position: absolute;
		width: 30%;
		height: 100%;
		left: 1rem;
		bottom: 0;
		object-fit: contain;
		object-position: 50% 75%;
		filter: drop-shadow(0 0 3rem black) drop-shadow(0 0 0.5rem black);
	}
</style>
