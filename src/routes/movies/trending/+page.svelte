<script>
	import { afterNavigate } from '$app/navigation';
	import ResultsPage from '$lib/components/ResultsPage.svelte';

	export let data;

	afterNavigate(() => {
		// TODO reset scroll
	});

	$: console.log(data);
</script>

<div>
	<h1>Trending movies</h1>

	<ResultsPage
		items={data.movies}
		next={data.next_page ? `/movies/trending?page=${data.next_page}` : null}
	/>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>
