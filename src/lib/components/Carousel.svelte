<script lang="ts">
	import { media } from '$lib/api';
	import type { MovieListResult } from '$lib/types';

	export let title: string;
	export let href: string | undefined = undefined;
	export let movies: MovieListResult[];
</script>

<h2 class="column">
	{title}
	{#if href}<a {href}>see all</a>{/if}
</h2>

<div class="carousel">
	{#each movies as movie}
		<a href="/movies/{movie.id}">
			<img src={media(movie.poster_path, 500)} alt={movie.title} />
		</a>
	{/each}
</div>

<style>
	.carousel {
		--padding: max(var(--side), calc(var(--side) + (100vw - var(--column)) / 2));
		display: flex;
		height: clamp(10rem, 25vw, 20rem);
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;
		overscroll-behavior-x: contain;
		scroll-snap-type: x mandatory;
		scroll-padding-left: var(--padding);
		padding: 0 var(--padding);
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
		height: 100%;
		aspect-ratio: 2 / 3;
	}

	img {
		width: 100%;
	}

	/* @media (min-width: 40rem) {
		.carousel {
			height: 15rem;
		}
	} */
</style>
