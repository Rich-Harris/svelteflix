<script>
	import Featured from '$lib/components/Featured.svelte';

	export let data;

	console.log(data);
</script>

<Featured item={data.show} title={data.show.name} backdrop={data.show.images.backdrops[0]} />

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
			<dt>Genre</dt>
			<dd>{data.show.genres?.map((g) => g.name).join(', ')}</dd>
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
