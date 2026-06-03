<script>
	import '../app.css';
	import Nav from '$lib/components/site/Nav.svelte';
	import Footer from '$lib/components/site/Footer.svelte';
	import ChatWidget from '$lib/components/site/ChatWidget.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Nav />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
	<ChatWidget />
</div>
