<script lang="ts">
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	export let form: { message?: string; success?: boolean };
	if (form?.message) {
		setTimeout(() => {
			form.message = '';
		}, 3000);
	}
	$: if (browser && form?.success) {
		goto('/portal');
	}
</script>

<div class="flex h-screen w-full flex-row items-center justify-center bg-[#F9FAFB]">
	<div class=" h-ful flex w-full flex-col items-center justify-center gap-4">
		<form
			class="w-3/8 flex h-fit flex-col items-center justify-center gap-4 rounded-lg bg-[#fff] p-8 shadow-lg"
			method="POST"
			action="?/login"
		>
			<h1 class="text-center text-3xl text-[#1F2937]">Welcome to Artisanica</h1>
			<input
				type="text"
				placeholder="Username"
				name="username"
				class="mb-4 w-full rounded border border-gray-300 bg-[#E5E7EB] p-2"
			/>
			<input
				type="password"
				placeholder="Password"
				name="password"
				class="mb-4 w-full rounded border border-gray-300 bg-[#E5E7EB] p-2"
			/>

			<a href="/register" class="text-[#3B82F6] hover:underline">Don't have an account? Register</a>

			<button class="rounded bg-[#1F2937] px-4 py-2 text-[#fff]">Sign in</button>
		</form>
	</div>
	{#if form?.message}
		<div class="absolute top-5 flex bg-[#1F2937] p-4 text-[#fff]">
			<p>Invalid Login</p>
		</div>
	{/if}
</div>
