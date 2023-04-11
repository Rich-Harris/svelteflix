<!--
	TODO build a grid of results that can a) take a page parameter, for no-JS users,
	or b) has infinite scroll
-->

<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let items: any[];

	const dispatch = createEventDispatcher();
</script>

<div
	class="results"
	on:scroll={(e) => {
		const div = e.currentTarget;

		const remaining = div.scrollHeight - (div.scrollTop + div.offsetHeight);
		if (remaining < 400) {
			dispatch('end');
		}
	}}
>
	{#each items as item}
		<div class="item">
			<div class="poster" />
		</div>
	{/each}
</div>

<style>
	.results {
		--columns: 4;
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		height: 0;
		flex: 1;
		overflow-y: auto;
	}

	.item {
		padding: 0.5rem;
	}

	.poster {
		background: #aaa;
		aspect-ratio: 2 / 3;
	}
</style>
