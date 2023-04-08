<script lang="ts">
	type T = $$Generic;

	export let items: T[];
</script>

{#each items as item}
	<div class="item">
		<slot {item} />
	</div>
{/each}
