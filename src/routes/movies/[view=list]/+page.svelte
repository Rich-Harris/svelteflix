<script>
	import * as api from '$lib/api';
	import ResultsPage from '$lib/components/ResultsPage.svelte';
	import { fade } from 'svelte/transition';

	export let data;

	let appending = false;
</script>

<div in:fade class="p-2 flex flex-col h-screen">
	<div class="text-3xl p-2">{data.title}</div>

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
