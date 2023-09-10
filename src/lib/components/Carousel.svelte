<script lang="ts">
	import { smoothload } from '$lib/actions';
	import { media } from '$lib/api';
	import type { MovieListResult } from '$lib/types';

	export let title: string;
	export let href: string | undefined = undefined;
	export let movies: MovieListResult[];
</script>

<div class="flex flex-col mb-5">
	<div class="text-2xl my-2">
		{title}
		{#if href}<a {href} class="text-[--accent]">see all</a>{/if}
	</div>

	<div class="carousel">
		{#each movies as movie}
			<a href="/movies/{movie.id}" class="">
				<div class="overflow-hidden rounded-lg">
					<img
						src={media(movie.poster_path, 500)}
						alt={movie.title}
						use:smoothload
						class="md:hover:scale-[102%] md:hover:saturate-[125%] rounded-lg object-cover transition-all duration-500"
					/>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.carousel {
		display: flex;
		height: clamp(10rem, 25vw, 20rem);
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;
		overscroll-behavior-x: contain;
		scroll-snap-type: x mandatory;
		scroll-padding-left: var(--padding);
		padding: 0 var(--padding);
		gap: 0.5rem;
		scrollbar-width: none;
	}

	.carousel::-webkit-scrollbar {
		display: none;
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
