<script lang="ts">
	import type { MovieListResult } from '$lib/types';

	export let items: MovieListResult[];
</script>

<div class="carousel">
	{#each items as item}
		<a href="/movies/{item.id}">
			<img src="https://image.tmdb.org/t/p/w500{item.poster_path}" alt={item.title} />
		</a>
	{/each}
</div>

<style>
	.carousel {
		display: flex;
		height: 20rem;
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;
		overscroll-behavior-x: contain;
		scroll-snap-type: x mandatory;
		scroll-padding-left: var(--side);
		padding: 0 var(--side);
		gap: 1rem;
	}

	a {
		scroll-snap-align: start;
	}

	img {
		height: 100%;
		width: auto;
	}
</style>
