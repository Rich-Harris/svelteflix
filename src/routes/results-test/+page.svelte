<script lang="ts">
	import ResultsPage from '$lib/components/ResultsPage.svelte';

	let items: number[] = [];
	for (let i = 0; i < 80; i += 1) {
		items.push(i);
	}
</script>

<div class="container">
	<h1>results</h1>

	<ResultsPage
		{items}
		on:end={() => {
			for (let i = 0; i < 20; i += 1) {
				items.push(items.length);
			}

			items = items;
		}}
	/>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		max-width: 80em;
		height: 100%;
		padding: 0 1rem;
		margin: 0 auto;
	}

	h1 {
		margin: 0 0 0.5em 0;
	}
</style>
