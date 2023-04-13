<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { smoothload } from '$lib/actions';
	import { media } from '$lib/api';
	import type { MovieDetails, MovieListResult } from '$lib/types';
	import { createEventDispatcher, onMount } from 'svelte';

	export let movies: Array<MovieListResult | MovieDetails>;
	export let next: string | null;

	const dispatch = createEventDispatcher();

	let viewport: HTMLDivElement;
	let results: HTMLDivElement;
	let item_width: number;
	let item_height: number;
	let num_columns: number;

	// render movies.slice(a, b);
	let a = 0;
	let b = movies.length;
	let padding_top = 0;
	let padding_bottom = 0;

	function handle_resize() {
		const first = results.firstChild as HTMLDivElement;

		item_width = first.offsetWidth;
		item_height = first.offsetHeight;

		num_columns = Number(getComputedStyle(results).getPropertyValue('--columns'));

		handle_scroll();
	}

	function handle_scroll() {
		const { scrollHeight, scrollTop, clientHeight } = viewport;

		const remaining = scrollHeight - (scrollTop + clientHeight);
		if (remaining < 400) {
			dispatch('end');
		}

		a = Math.floor(scrollTop / item_height) * num_columns;
		b = Math.ceil((scrollTop + clientHeight) / item_height) * num_columns;

		padding_top = Math.floor(a / num_columns) * item_height;
		padding_bottom = Math.floor((movies.length - b) / num_columns) * item_height;
	}

	onMount(handle_resize);

	afterNavigate(() => {
		viewport.scrollTo(0, 0);
	});
</script>

<svelte:window on:resize={handle_resize} />

<div class="viewport" bind:this={viewport} on:scroll={handle_scroll}>
	<div
		bind:this={results}
		class="results"
		style:padding-top="{padding_top}px"
		style:padding-bottom="{padding_bottom}px"
	>
		{#each movies.slice(a, b) as movie}
			<a href="/movies/{movie.id}">
				{#if movie.poster_path}
					<img alt={movie.title} src={media(movie.poster_path, 500)} use:smoothload />
				{:else}
					<span>{movie.title}</span>
				{/if}
			</a>
		{/each}
	</div>

	{#if next}
		<a href={next}>next page</a>
	{/if}
</div>

<style>
	.viewport {
		height: 0;
		flex: 1;
		overflow-y: auto;
	}

	.results {
		--columns: 2;
		display: grid;
		grid-template-rows: 2em repeat(auto, 1fr);
		grid-template-columns: repeat(var(--columns), 1fr);
		margin: 0 -0.5rem;
	}

	a {
		padding: 0.5rem;
	}

	img {
		width: 100%;
		aspect-ratio: 2 / 3;
		height: auto;
	}

	@media (min-width: 30rem) {
		.results {
			--columns: 3;
		}
	}

	@media (min-width: 40rem) {
		.results {
			--columns: 4;
		}
	}

	@media (min-width: 50rem) {
		.results {
			--columns: 5;
		}
	}

	@media (min-width: 60rem) {
		.results {
			--columns: 6;
		}
	}
</style>
