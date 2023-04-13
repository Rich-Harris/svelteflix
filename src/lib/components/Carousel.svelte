<script lang="ts">
	import type { MovieListResult } from '$lib/types';

	export let title: string;
	export let href: string | undefined = undefined;
	export let movies: MovieListResult[];
</script>

<h2>
	{title}
	{#if href}<a {href}>see all</a>{/if}
</h2>

<div class="carousel">
	{#each movies as movie}
		<a href="/movies/{movie.id}">
			<img src="https://image.tmdb.org/t/p/w500{movie.poster_path}" alt={movie.title} />
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

	h2 {
		font-size: 2.4rem;
		padding: 0 var(--side);
		margin-top: 4rem;
	}

	h2 a {
		color: var(--accent);
		font-size: 1.6rem;
	}

	a {
		scroll-snap-align: start;
	}

	img {
		height: 100%;
		width: auto;
	}
</style>
