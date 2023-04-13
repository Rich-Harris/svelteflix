<script lang="ts">
	export let vote_average: number;
	export let vote_count: number;
</script>

<div class="rating">
	<span class="stars">
		<span class="stroke" />
		<span class="fill" style="--rating: {vote_average}" />
	</span>
	<span class="count">({vote_count})</span>
</div>

<style>
	.rating {
		display: flex;
		align-items: center;
		gap: 0.5em;
	}

	.stars {
		display: inline-block;
		height: 1em;
		aspect-ratio: 5 / 1;
	}

	.stroke,
	.fill {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.stroke {
		background: url($lib/images/star-outline.svg);
	}

	.fill {
		background: url($lib/images/star.svg);
		clip-path: inset(0 calc(100% - (var(--rating) * 10%)) 0 0);
	}
</style>
