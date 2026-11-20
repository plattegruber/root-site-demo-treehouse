<script>
	import { Star, ArrowRight } from '@lucide/svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Avatar from '$lib/components/ui/Avatar.svelte';
	import Stars from '$lib/components/ui/Stars.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	/** @type {Array<{ quote: string, name: string, initial: string, tone: 'honey' | 'green' | 'teal' | 'coral', date: string }>} */
	const reviews = [
		{
			quote:
				'Booked online on a Sunday night and my son was seen Tuesday. The whole team knew his name — and his comfort toy’s name — before we sat down.',
			name: 'Maya A.',
			initial: 'M',
			tone: 'honey',
			date: '2 weeks ago'
		},
		{
			quote:
				'Dr. Priya explained every step to my daughter in words she actually understood. We walked out with a plan and zero tears.',
			name: 'Renée D.',
			initial: 'R',
			tone: 'coral',
			date: '1 month ago'
		},
		{
			quote:
				'They sent a photo tour of the room before we came in. My son finished his first full cleaning ever, start to finish.',
			name: 'Jordan P.',
			initial: 'J',
			tone: 'teal',
			date: '1 month ago'
		},
		{
			quote:
				'Honest about pricing, gentle with the kids, and somehow made a filling feel like no big deal.',
			name: 'Tasha W.',
			initial: 'T',
			tone: 'green',
			date: '2 months ago'
		},
		{
			quote: 'We had a playground fall on a Friday and they found us a same-day spot. Calm, kind, and fast.',
			name: 'Devon M.',
			initial: 'D',
			tone: 'teal',
			date: '2 months ago'
		},
		{
			quote:
				'Our 14-month-old’s first visit was all giggles. I’ve recommended them to every parent at daycare.',
			name: 'Chris B.',
			initial: 'C',
			tone: 'honey',
			date: '3 months ago'
		}
	];
</script>

<Section>
	<div use:reveal class="flex flex-wrap items-end justify-between gap-6">
		<div class="max-w-[24em]">
			<Eyebrow Icon={Star}>What families say</Eyebrow>
			<h2 class="t-h2 mt-2.5">Loved by Brookside families</h2>
		</div>
		<div
			class="flex items-center gap-3.5 rounded-lg border border-line bg-surface px-[22px] py-3.5 shadow-sm"
		>
			<div class="font-display text-[2.4rem] font-bold leading-none text-ink-900">4.9</div>
			<div>
				<Stars n={5} class="text-[1.1rem]" />
				<div class="mt-1.5 text-[0.85rem] text-ink-500">
					Illustrative rating · fictional reviews
				</div>
			</div>
		</div>
	</div>

	<div class="mt-[34px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
		{#each reviews as { quote, name, initial, tone, date }, i (name)}
			<div use:reveal={{ delay: (i % 3) * 60 }}>
				<Card class="flex h-full flex-col">
					<div class="mb-3 flex items-center justify-between">
						<Stars n={5} class="text-[1.05rem]" />
						<span class="font-display text-[0.78rem] font-semibold tracking-[0.02em] text-ink-400"
							>Fictional example</span
						>
					</div>
					<p class="mb-[18px] flex-1 text-[1.02rem] font-medium leading-[1.55] text-ink-800">{quote}</p>
					<div class="flex items-center gap-[11px]">
						<Avatar {initial} {tone} />
						<div>
							<div class="text-[0.92rem] font-extrabold text-ink-800">{name}</div>
							<div class="text-[0.8rem] font-semibold text-ink-400">{date}</div>
						</div>
					</div>
				</Card>
			</div>
		{/each}
	</div>

	<div class="mt-[26px] text-center">
		<Button href="/reviews" variant="ghost" IconRight={ArrowRight}>Read all reviews &amp; stories</Button>
	</div>
</Section>
