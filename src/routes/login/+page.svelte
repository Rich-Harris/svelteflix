<script>
	export let data;
</script>

<div class=" flex flex-col items-center my-5">
	<div class="text-3xl my-5">Log in | Register</div>

	<form method="POST" class="max-w-sm w-full px-4 flex flex-col gap-5">
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
		color: black;
	}

	button {
		flex: 1;
		background-color: var(--accent);
	}

	button:hover {
		cursor: pointer;
		filter: brightness(110%);
	}

	button:active {
		filter: brightness(0.9);
	}
</style>
