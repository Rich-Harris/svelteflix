<script>
	import ResultsPage from '$lib/components/ResultsPage.svelte';

	export let data;
</script>

<div class="h-full flex flex-col">
	<div class="p-2 flex flex-col w-full max-w-3xl mx-auto">
		<div class="text-3xl p-2">Search</div>

		<form class="p-2">
			<input
				placeholder="Search for something..."
				name="query"
				value={data.query}
				autocomplete="off"
				spellcheck="false"
				autofocus
			/>
		</form>
	</div>

	{#if data.query}
		{#key data.query}
			<ResultsPage movies={data.movies} next={null} />
		{/key}
	{/if}
</div>

<style>
	input {
		font-family: inherit;
		font-size: 1.5rem;
		padding: 0.5rem;
		width: 100%;
		background: rgba(255, 255, 255, 0.1);
		border: none;
		border-radius: 0.25rem;
		color: white;
	}

	input:focus-visible {
		outline: 2px solid var(--accent);
	}
</style>
