<script>
	import '../styles.css';
</script>

<nav>
	<div>
		<a href="/">Home</a>
		<a href="/movies">Movies</a>
		<a href="/tv">TV</a>
	</div>

	<div>
		<a href="/watchlist">Watchlist</a>
	</div>
</nav>

<slot />

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
	}
</style>
