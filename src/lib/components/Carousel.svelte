<script lang="ts">
	import type { MovieResult, TvResult } from 'moviedb-promise';

	export let items: Array<MovieResult | TvResult>;
	export let type: 'movies' | 'tv';

	function get_name(item: MovieResult | TvResult) {
		if ('title' in item) return item.title;
		if ('name' in item) return item.name;
	}
</script>

<div class="carousel">
	{#each items as item}
		<div class="item">
			<a href="/{type}/{item.id}">
				<img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={get_name(item)} />
				<div class="info">
					<!-- <h3>{item.title}</h3> -->
				</div>
			</a>
		</div>
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

	.item {
		scroll-snap-align: start;
	}

	img {
		height: 100%;
		width: auto;
	}
</style>
