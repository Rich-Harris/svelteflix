<script>
	import Carousel from './Carousel.svelte';

	/** @type {import('moviedb-promise').MovieResult[]} */
	export let items;
</script>

<Carousel {items} let:item>
	<div class="item">
		<img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
		<div class="info">
			<h3>{item.title}</h3>
			<p>{item.overview}</p>
		</div>
	</div>
</Carousel>
