<script>
	import Featured from '$lib/components/Featured.svelte';

	export let data;

	console.log(data);
</script>

<Featured item={data.movie} title={data.movie.title} backdrop={data.movie.images.backdrops[0]} />

<section>
	<div class="grid" class:has-trailer={!!data.trailer}>
		{#if data.trailer}
			<iframe
				src="https://www.youtube.com/embed/{data.trailer.key}"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		{/if}

		<dl class="mini-grid">
			<dt>Released</dt>
			<dd>{data.movie.release_date}</dd>

			<dt>Runtime</dt>
			<dd>{data.movie.runtime} minutes</dd>

			<dt>Budget</dt>
			<dd>{data.movie.budget}</dd>

			<dt>Box office</dt>
			<dd>{data.movie.revenue}</dd>

			<dt>Genre</dt>
			<dd>{data.movie.genres?.map((g) => g.name).join(', ')}</dd>
		</dl>
	</div>
</section>

<section>
	<h2>You might also like...</h2>
</section>

<style>
	.grid {
		display: grid;
		max-width: 80rem;
		margin: 0 auto;
		grid-template-columns: 1fr 1fr;
		gap: 1em;
	}

	iframe {
		aspect-ratio: 16 / 9;
		width: 100%;
	}

	.mini-grid {
		display: grid;
		grid-template-columns: max-content 1fr max-content 1fr;
		gap: 1em;
	}
</style>
