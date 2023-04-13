<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import Featured from '$lib/components/Featured.svelte';

	export let data;
</script>

<a href="/movies/{data.featured.movie.id}">
	<Featured
		item={data.featured.movie}
		backdrop={data.featured.backdrop}
		title={data.featured.movie.title}
	/>
</a>

<section>
	<h2>Trending <a href="/movies/trending">see all</a></h2>
	<Carousel items={data.trending} />
</section>

<section>
	<h2>Now playing <a href="/movies/now_playing">see all</a></h2>
	<Carousel items={data.now_playing} />
</section>

<section>
	<h2>Upcoming <a href="/movies/upcoming">see all</a></h2>
	<Carousel items={data.upcoming} />
</section>

<style>
	section {
		margin: 4em 0;
	}

	h2 {
		font-size: 2.4rem;
	}

	h2 a {
		color: var(--accent);
		font-size: 1.6rem;
	}
</style>
