<script>
	import ResultsPage from '$lib/components/ResultsPage.svelte';

	export let data;
</script>

<div class=" p-2 flex flex-col">
	<div class="text-3xl p-2">Watchlist</div>

	{#if data.movies.length > 0}
		<ResultsPage movies={data.movies} next={null} />
	{:else}
		<p>You haven't added anything to your watchlist yet.</p>
	{/if}
</div>
