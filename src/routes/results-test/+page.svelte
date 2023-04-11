<script>
	import ResultsPage from '$lib/components/ResultsPage.svelte';

	let items = Array(80).fill('');
</script>

<div class="container">
	<h1>results</h1>

	<ResultsPage
		{items}
		on:end={() => {
			items = [...items, Array(20).fill('')];
		}}
	/>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		max-width: 40em;
		height: 100%;
		padding: 0 1rem;
		margin: 0 auto;
	}

	h1 {
		margin: 0 0 0.5em 0;
	}
</style>
