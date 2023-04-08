<script>
	import CarouselMovie from '$lib/components/CarouselMovie.svelte';

	export let data;
</script>

<div class="featured">
	<!-- TODO -->
</div>

<div class="trending">
	<CarouselMovie items={data.movies} />
</div>
