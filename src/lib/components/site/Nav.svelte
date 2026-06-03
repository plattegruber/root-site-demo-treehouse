<script>
	import { page } from '$app/state';
	import { CalendarHeart, Phone, Menu, X } from '@lucide/svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { navLinks, practice } from '$lib/data/site.js';

	let scrolled = $state(false);
	let menuOpen = $state(false);

	$effect(() => {
		const onScroll = () => (scrolled = window.scrollY > 8);
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	});

	// Close the mobile menu whenever the route changes.
	$effect(() => {
		page.url.pathname;
		menuOpen = false;
	});

	const isActive = (/** @type {string} */ href) => page.url.pathname === href;
</script>

<header
	class="sticky top-0 z-50 border-b transition-[border-color,box-shadow] duration-[260ms]
		{scrolled || menuOpen ? 'border-line shadow-sm' : 'border-transparent'}"
	style="background: rgba(251, 245, 233, 0.82); backdrop-filter: blur(10px);"
>
	<div class="mx-auto flex h-[76px] max-w-[1180px] items-center gap-[22px] px-7">
		<a href="/" class="flex items-center" aria-label="Treehouse home">
			<img src="/logo-wordmark.svg" alt="Treehouse Pediatric Dentistry" class="block h-10" />
		</a>

		<nav class="hidden flex-1 items-center gap-1 min-[901px]:flex" aria-label="Primary">
			{#each navLinks as { href, label } (href)}
				{@const active = isActive(href)}
				<a
					{href}
					aria-current={active ? 'page' : undefined}
					class="font-body whitespace-nowrap rounded-sm px-3 py-[9px] text-[0.95rem] font-bold
						transition-colors duration-[160ms] hover:bg-honey-50 hover:text-ink-900
						{active ? 'text-green-700' : 'text-ink-700'}"
				>
					{label}
				</a>
			{/each}
		</nav>

		<div class="ml-auto flex items-center gap-3.5 min-[901px]:ml-0">
			<a
				href={practice.phoneHref}
				class="hidden items-center gap-1.5 text-[0.95rem] font-extrabold text-green-700 no-underline min-[901px]:inline-flex"
			>
				<Phone size={17} strokeWidth={2} />
				<span>{practice.phoneDisplay}</span>
			</a>
			<Button href="/book" Icon={CalendarHeart}>Book</Button>

			<button
				class="flex h-11 w-11 items-center justify-center rounded-md border border-line-strong bg-surface text-ink-800 min-[901px]:hidden"
				aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={menuOpen}
				onclick={() => (menuOpen = !menuOpen)}
			>
				{#if menuOpen}<X size={20} strokeWidth={2} />{:else}<Menu size={20} strokeWidth={2} />{/if}
			</button>
		</div>
	</div>

	{#if menuOpen}
		<div class="border-t border-line bg-surface shadow-md min-[901px]:hidden">
			<nav class="mx-auto flex max-w-[1180px] flex-col px-7 py-2.5" aria-label="Primary mobile">
				{#each navLinks as { href, label } (href)}
					{@const active = isActive(href)}
					<a
						{href}
						aria-current={active ? 'page' : undefined}
						class="font-display flex min-h-[44px] items-center border-b border-line py-3.5 text-[1.05rem] font-medium
							{active ? 'text-green-700' : 'text-ink-900'}"
					>
						{label}
					</a>
				{/each}
				<a
					href={practice.phoneHref}
					class="flex min-h-[44px] items-center gap-2 py-3.5 font-extrabold text-green-700"
				>
					<Phone size={18} strokeWidth={2} />
					{practice.phoneDisplay}
				</a>
			</nav>
		</div>
	{/if}
</header>
