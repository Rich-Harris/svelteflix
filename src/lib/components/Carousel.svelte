<script lang="ts">
	type T = $$Generic;

	export let items: T[];
</script>

<div class="carousel">
	{#each items as item}
		<div class="item">
			<slot {item} />
		</div>
	{/each}
</div>

<style>
	.carousel {
		display: flex;
		height: 20rem;
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;
		overscroll-behavior-x: contain;
		scroll-snap-type: x mandatory;
		scroll-padding-left: var(--side);
		padding: 0 var(--side);
		gap: 1rem;
	}

	.item {
		scroll-snap-align: start;
	}
</style>
