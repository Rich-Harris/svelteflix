<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import Featured from '$lib/components/Featured.svelte';

	export let data;
</script>

<a href="/movies/{data.featured.info.id}">
	<Featured
		item={data.featured.info}
		backdrop={data.featured.backdrop}
		title={data.featured.info.title}
	/>
</a>

<section>
	<h2>Trending movies</h2>
	<Carousel items={data.movies.slice(1)} type="movies" />
</section>

<section>
	<h2>Trending TV</h2>
	<Carousel items={data.tv} type="tv" />
</section>
