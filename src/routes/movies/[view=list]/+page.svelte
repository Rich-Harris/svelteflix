<script>
	import * as api from '$lib/api';
	import ResultsPage from '$lib/components/ResultsPage.svelte';

	export let data;

	let appending = false;
</script>

<div class="column flex">
	<h1>{data.title}</h1>

	<ResultsPage
		movies={data.movies}
		next={data.next_page ? `/movies/${data.view}?page=${data.next_page}` : null}
		on:end={async () => {
			if (!data.next_page) return;
			if (appending) return;

			try {
				const next = await api.get(fetch, data.endpoint, {
					page: String(data.next_page)
				});

				data.movies = [...data.movies, ...next.results];
				data.next_page = next.page < next.total_pages ? next.page + 1 : null;
			} finally {
				appending = false;
			}
		}}
	/>
</div>
