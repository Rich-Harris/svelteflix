<script lang="ts">
	import type { Image, MovieResult, TvResult } from 'moviedb-promise';
	import Stars from './Stars.svelte';

	export let item: MovieResult | TvResult;
	export let title: string;
	export let backdrop: Image;
</script>

<div class="featured">
	<div class="backdrop">
		<img
			src="https://image.tmdb.org/t/p/w1280{backdrop?.file_path}"
			style="aspect-ratio: {backdrop?.aspect_ratio}"
			alt={title}
		/>
	</div>

	<div class="info">
		<h1>{title}</h1>
		<Stars vote_average={item.vote_average} vote_count={item.vote_count} />
		<p>{item?.overview}</p>
	</div>
</div>

<style>
	.featured {
		position: relative;
		display: grid;
		grid-template-rows: 1fr 8em;
		background: black;
	}

	.backdrop img {
		width: 100%;
		display: block;
	}

	.backdrop::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 8em;
		left: 0;
		bottom: 0;
		background: linear-gradient(to top, black, transparent);
	}

	.info {
		display: flex;
		flex-direction: column;
		position: absolute;
		bottom: 0;
		width: 100%;
		padding: var(--side);
		gap: 1rem;
	}

	.info h1,
	.info p {
		margin: 0;
	}

	.info p {
		max-width: 40ch;
	}

	section {
		margin: 2rem 0;
	}

	@media (min-width: 80em) {
		.featured {
			grid-template-columns: 1fr 80em;
			grid-template-rows: auto;
		}

		.info {
			justify-content: center;
			bottom: auto;
			left: 0;
			width: 40em;
			height: 100%;
			grid-column: 1/2;
		}

		.backdrop {
			grid-column: 2/3;
		}

		.backdrop::after {
			height: 100%;
			left: 100px;
			left: 0;
			bottom: 0;
			background: linear-gradient(to right, black, transparent);
		}
	}
</style>
