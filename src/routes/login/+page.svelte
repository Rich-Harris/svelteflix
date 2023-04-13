<script>
	export let data;
</script>

<div class="column">
	<h1>Log in or register</h1>

	<form method="POST">
		<label>
			email
			<input type="email" name="email" required />
		</label>

		<label>
			password
			<input type="password" name="password" required />
		</label>

		<div class="buttons">
			<button formaction="?/login&redirect_to={data.redirect_to}" type="submit">login</button>
			<button formaction="?/register&redirect_to={data.redirect_to}" type="submit">register</button>
		</div>
	</form>
</div>

<style>
	.column {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	form {
		width: 20em;
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	label {
		display: block;
	}

	.buttons {
		display: flex;
		width: 100%;
		margin-top: 1rem;
		gap: 1rem;
	}

	input,
	button {
		font-family: inherit;
		font-size: 1rem;
		padding: 0.5rem;
	}

	input {
		display: block;
		margin: 0.5rem 0 0 0;
		width: 100%;
	}

	button {
		flex: 1;
	}
</style>
