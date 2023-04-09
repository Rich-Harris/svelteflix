<script>
	import CarouselMovie from '$lib/components/CarouselMovie.svelte';
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
	<CarouselMovie items={data.movies.slice(1)} />
</section>

<section>
	<h2>Trending TV</h2>
	<CarouselMovie items={data.tv} />
</section>
