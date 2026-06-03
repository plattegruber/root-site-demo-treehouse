<script>
	import { BookOpen, ShieldCheck, Image as ImageIcon, ArrowRight } from '@lucide/svelte';
	import Seo from '$lib/components/site/Seo.svelte';
	import PageHero from '$lib/components/site/PageHero.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Tag from '$lib/components/ui/Tag.svelte';
	import Avatar from '$lib/components/ui/Avatar.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Photo from '$lib/components/ui/Photo.svelte';
	import PillSoft from '$lib/components/ui/PillSoft.svelte';

	const categories = ['Popular', 'Teething', 'Brushing', 'Anxiety', 'Nutrition'];

	const posts = [
		{ title: 'Thumb-sucking: when to worry (and when not to)', desc: 'Most kids stop on their own. Here’s the age that changes the math, and gentle ways to help.', cat: 'Teething', read: '5 min' },
		{ title: 'Your anxious kid’s first visit: a calm prep plan', desc: 'A day-by-day script for the week before, from a pediatric dentist who sees nervous kids daily.', cat: 'Anxiety', read: '7 min' },
		{ title: 'When do baby teeth come in? A parent’s timeline', desc: 'A simple chart, what’s normal, and the teething myths worth ignoring.', cat: 'Teething', read: '4 min' }
	];

	/** @type {Record<string, 'honey' | 'teal' | 'green'>} */
	const catTone = { Teething: 'honey', Anxiety: 'teal', Brushing: 'green' };

	let cat = $state('Popular');
	const empty = $derived(cat === 'Nutrition');
</script>

<Seo
	title="Parent Education — Treehouse Pediatric Dentistry"
	description="Straight answers from an actual pediatric dentist. Every article is reviewed by Dr. Priya and cites the AAPD and AAP — no fear-mongering, no fluff."
	path="/parent-education"
/>

<PageHero
	eyebrow="Parent education"
	EyebrowIcon={BookOpen}
	heading="Straight answers from an actual pediatric dentist."
	lede="No fear-mongering, no fluff. Every article is reviewed by Dr. Priya and cites real pediatric sources."
/>

<Section class="!pt-8">
	<div class="mb-[30px] flex flex-wrap gap-2.5">
		{#each categories as c (c)}
			<button
				class="font-body rounded-pill border-[1.5px] px-[15px] py-2 text-[0.95rem] font-bold transition-colors
					{cat === c
					? 'border-green-500 bg-green-50 text-green-700'
					: 'border-line-strong bg-surface text-ink-600 hover:border-green-400'}"
				aria-pressed={cat === c}
				onclick={() => (cat = c)}
			>
				{c}
			</button>
		{/each}
	</div>

	{#if empty}
		<Card class="px-6 py-12 text-center">
			<img src="/pip-peek.svg" alt="Pip the fox" class="mx-auto mb-1.5 h-[92px]" />
			<h3 class="font-display mb-2 mt-1.5 text-[1.3rem] font-semibold text-ink-900">
				Pip’s still writing this one.
			</h3>
			<p class="t-body mx-auto mb-[18px] max-w-[32em]">
				No nutrition posts published yet. Want a heads-up when they land? Grab our prep guide and
				we’ll let you know.
			</p>
			<Button href="/book" variant="secondary">Get the parent prep guide</Button>
		</Card>
	{:else}
		<Card class="mb-[26px] grid grid-cols-1 items-center gap-[26px] md:grid-cols-[1fr_1.2fr]">
			<Photo intent="Featured article hero — warm flat-lay of a toothbrush and a picture book" aspect="16 / 10" Icon={ImageIcon} />
			<div>
				<Tag tone="honey">Brushing · Featured</Tag>
				<h2 class="t-h2 my-2.5">When should I actually start brushing my baby’s teeth?</h2>
				<p class="t-body mb-3.5">
					The short answer: sooner than most parents think. Here’s exactly when, with what, and how
					much.
				</p>
				<div class="mb-2 flex flex-wrap items-center gap-3">
					<Avatar initial="P" tone="green" />
					<div>
						<div class="text-[0.92rem] font-extrabold text-ink-800">By Dr. Priya Raman, DDS</div>
						<div class="text-[0.8rem] text-ink-500">
							Board-certified pediatric dentist · Updated May 28, 2026
						</div>
					</div>
				</div>
				<PillSoft Icon={ShieldCheck}>Reviewed by Dr. Priya Raman, DDS</PillSoft>
			</div>
		</Card>

		<div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
			{#each posts as { title, desc, cat: c, read } (title)}
				<Card hoverable href="/parent-education" class="group flex h-full flex-col">
					<Photo intent={`Article thumbnail — ${c}`} aspect="16 / 9" Icon={ImageIcon} class="mb-3.5" />
					<Tag tone={catTone[c]}>{c}</Tag>
					<h3 class="font-display mb-1.5 mt-2.5 text-[1.22rem] font-semibold text-ink-900">{title}</h3>
					<p class="mb-3 flex-1 text-[0.98rem] leading-[1.5] text-ink-600">{desc}</p>
					<div class="flex items-center justify-between text-[0.82rem] text-ink-500">
						<span>Reviewed by Dr. Priya · {read} read</span>
						<ArrowRight size={16} strokeWidth={2} class="text-coral-600 transition-transform group-hover:translate-x-[3px]" />
					</div>
				</Card>
			{/each}
		</div>
		<p class="t-small mt-5">
			Sources cited in our articles include the American Academy of Pediatric Dentistry (AAPD) and
			the American Academy of Pediatrics (AAP).
		</p>
	{/if}
</Section>
