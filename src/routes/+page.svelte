<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import Featured from '$lib/components/Featured.svelte';

	export let data;
</script>

<a href="/movies/{data.featured.movie.id}">
	<Featured movie={data.featured.movie} backdrop={data.featured.backdrop} />
</a>

<Carousel title="Trending" href="/movies/trending" movies={data.trending} />
<Carousel title="Now playing" href="/movies/now_playing" movies={data.now_playing} />
<Carousel title="Upcoming" href="/movies/upcoming" movies={data.upcoming} />
