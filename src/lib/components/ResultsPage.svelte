<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	export let items: any[];
	export let next: string;

	const dispatch = createEventDispatcher();

	let viewport: HTMLDivElement;
	let results: HTMLDivElement;
	let item_width: number;
	let item_height: number;
	let num_columns: number;

	// render items.slice(a, b);
	let a = 0;
	let b = items.length;
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
		padding_bottom = Math.floor((items.length - b) / num_columns) * item_height;
	}

	onMount(handle_resize);
</script>

<svelte:window on:resize={handle_resize} />

<div class="viewport" bind:this={viewport} on:scroll={handle_scroll}>
	<div
		bind:this={results}
		class="results"
		style:padding-top="{padding_top}px"
		style:padding-bottom="{padding_bottom}px"
	>
		{#each items.slice(a, b) as item}
			<div class="item">
				<div class="poster">
					{item}
				</div>
			</div>
		{/each}
	</div>

	<a href={next}>next page</a>
</div>

<style>
	.viewport {
		height: 0;
		flex: 1;
		overflow-y: auto;
	}

	.results {
		--columns: 4;
		display: grid;
		grid-template-rows: 2em repeat(auto, 1fr);
		grid-template-columns: repeat(var(--columns), 1fr);
	}

	.item {
		padding: 0.5rem;
	}

	.poster {
		display: grid;
		place-items: center;
		background: #aaa;
		aspect-ratio: 2 / 3;
		color: black;
	}
</style>
