<script>
	import { Star, CalendarHeart, Play } from '@lucide/svelte';
	import Seo from '$lib/components/site/Seo.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Tag from '$lib/components/ui/Tag.svelte';
	import Avatar from '$lib/components/ui/Avatar.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Img from '$lib/components/ui/Img.svelte';
	import RatingChip from '$lib/components/ui/RatingChip.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	/** @type {Array<{ tone: 'coral' | 'teal' | 'honey' | 'green', label: string, quote: string, initial: string, avatar: 'honey' | 'green' | 'teal' | 'coral', name: string, meta: string }>} */
	const reviews = [
		{ tone: 'coral', label: 'Screamed everywhere else', quote: '"He cried at two other offices. Here he asked to go back. I teared up in the parking lot."', initial: 'M', avatar: 'honey', name: 'Maya A.', meta: 'Parent of Theo, 6 · Mar 2026' },
		{ tone: 'teal', label: 'Sensory-sensitive / autistic', quote: '"They sent a photo tour the week before and let us come see the room first. First full cleaning Sam has ever finished."', initial: 'J', avatar: 'teal', name: 'Jordan P.', meta: 'Parent of Sam, 9 · Feb 2026' },
		{ tone: 'honey', label: 'Needle-phobic', quote: '"Dr. Priya called it ‘sleepy air’ and explained every step. He held my hand and did it. Calm the whole drive home."', initial: 'R', avatar: 'coral', name: 'Renée D.', meta: 'Parent of Eli, 8 · Jan 2026' },
		{ tone: 'green', label: 'First-ever visit', quote: '"Our 14-month-old’s first visit. I braced for a meltdown and got giggles. They counted her teeth like a game."', initial: 'C', avatar: 'green', name: 'Chris & Bea', meta: 'Parents of Junie, 1 · Jan 2026' },
		{ tone: 'coral', label: 'Had a bad experience', quote: '"After a scary filling elsewhere, my daughter shut down at dentists. Three slow visits here and she walks in herself now."', initial: 'T', avatar: 'honey', name: 'Tasha W.', meta: 'Parent of Nia, 7 · Dec 2025' },
		{ tone: 'teal', label: 'Wheelchair user', quote: '"They asked how to make the room work for us before we arrived, not after. That never happens."', initial: 'D', avatar: 'teal', name: 'Devon M.', meta: 'Parent of Asha, 10 · Dec 2025' }
	];

	const filters = ['All', 'Screamed everywhere else', 'Sensory-sensitive / autistic', 'Needle-phobic', 'First-ever visit', 'Had a bad experience'];

	let active = $state('All');
	const shown = $derived(active === 'All' ? reviews : reviews.filter((r) => r.label === active));
</script>

<Seo
	title="Reviews & Stories — Treehouse Pediatric Dentistry"
	description="Sample stories and a sample rating illustrate how reviews could be presented."
	path="/reviews"
/>

<section
	class="relative overflow-hidden pb-10 pt-14"
	style="background: radial-gradient(120% 80% at 85% -5%, var(--color-honey-50) 0%, rgba(254,246,226,0) 55%), var(--color-cream);"
>
	<div class="mx-auto max-w-[1180px] px-7">
		<Eyebrow Icon={Star}>Reviews &amp; stories</Eyebrow>
		<h1 class="t-h1 mt-2.5">Fictional family stories, grouped by visit concerns.</h1>
		<p class="t-lead mt-4 max-w-[34em]">
			These examples are fictional and do not reflect real reviews or patient outcomes.
		</p>
		<div class="mt-[18px]"><RatingChip /></div>
	</div>
</section>

<Section class="!pt-8">
	<div class="mb-[30px] flex flex-wrap gap-2.5">
		{#each filters as f (f)}
			<button
				class="font-body rounded-pill border-[1.5px] px-[15px] py-2 text-[0.95rem] font-bold transition-colors
					{active === f
					? 'border-green-500 bg-green-50 text-green-700'
					: 'border-line-strong bg-surface text-ink-600 hover:border-green-400'}"
				aria-pressed={active === f}
				onclick={() => (active = f)}
			>
				{f}
			</button>
		{/each}
	</div>

	<div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
		{#each shown as r (r.name)}
			<Card class="flex h-full flex-col">
				<div><Tag tone={r.tone}>{r.label}</Tag></div>
				<p class="my-3.5 flex-1 text-[1.05rem] font-medium leading-[1.55] text-ink-800">{r.quote}</p>
				<div class="flex items-center gap-[11px]">
					<Avatar initial={r.initial} tone={r.avatar} />
					<div>
						<div class="text-[0.92rem] font-extrabold text-ink-800">{r.name}</div>
						<div class="text-[0.8rem] font-semibold text-ink-400">{r.meta}</div>
					</div>
				</div>
			</Card>
		{/each}
	</div>

	<div use:reveal class="mt-[22px]">
		<Card class="flex flex-wrap items-center gap-[18px]">
			<button
				class="group relative w-[220px] max-w-full shrink-0 overflow-hidden rounded-lg"
				aria-label="Play video review"
			>
				<Img src="/images/review-couch.jpg" alt="A parent and child reading together at home" aspect="16 / 10" />
				<span class="absolute inset-0 bg-[rgba(44,40,32,0.18)]"></span>
				<span
					class="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-coral-500 shadow-md transition-transform duration-[260ms] ease-[var(--ease-pop)] group-hover:scale-110"
				>
					<Play size={20} strokeWidth={2} class="ml-0.5 fill-current" />
				</span>
			</button>
			<div class="min-w-[220px] flex-1">
				<Tag tone="green">First-ever visit · video</Tag>
				<p class="my-3 text-[1.05rem] font-medium leading-[1.55] text-ink-800">
					“Two minutes of why we drive across town for this office.”
				</p>
				<Button href="/book" Icon={CalendarHeart}>Book your kid’s first visit</Button>
			</div>
		</Card>
	</div>
</Section>
