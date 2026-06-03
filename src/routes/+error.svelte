<script>
	import { page } from '$app/state';
	import { Home } from '@lucide/svelte';
	import Button from '$lib/components/ui/Button.svelte';

	const message = $derived(
		page.status === 404
			? 'We looked everywhere — even up in the treehouse — and couldn’t find that page.'
			: 'Something went a little wobbly on our end. Try again, or head back home.'
	);
</script>

<section class="grid place-items-center px-7 py-24 text-center">
	<img src="/pip-peek.svg" alt="Pip the fox" class="mb-2 h-28" />
	<p class="font-display text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-green-600">
		Error {page.status}
	</p>
	<h1 class="t-h1 mx-auto mt-2 max-w-[14em]">
		{page.status === 404 ? 'This page wandered off.' : 'Well, that’s embarrassing.'}
	</h1>
	<p class="t-lead mx-auto mt-4 max-w-[34em]">{message}</p>
	<div class="mt-6">
		<Button href="/" Icon={Home}>Back to the homepage</Button>
	</div>
</section>
