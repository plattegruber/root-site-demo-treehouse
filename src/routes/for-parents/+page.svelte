<script>
	import { Footprints, Cake, Download, ReceiptText, FileText, FileHeart, CalendarHeart } from '@lucide/svelte';
	import Seo from '$lib/components/site/Seo.svelte';
	import PageHero from '$lib/components/site/PageHero.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import SectionHead from '$lib/components/ui/SectionHead.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import IconBadge from '$lib/components/ui/IconBadge.svelte';
	import Tag from '$lib/components/ui/Tag.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	const ages = [
		{ badge: 'Baby', title: 'By age 1 / first tooth', body: 'The AAP and AAPD both say the first visit should happen by the first birthday, or within 6 months of the first tooth. It’s short, mostly a lap exam, and lots of reassurance for you.' },
		{ badge: 'Toddler', title: 'Ages 1–3', body: 'We count teeth, check for early decay, and coach brushing. Tantrums are welcome and expected; we work right through them, gently.' },
		{ badge: 'Big kid', title: 'Ages 4–10', body: 'Cleanings, sealants, and honest cavity talk. This is the age we build the brave-patient habits that last.' },
		{ badge: 'Tween', title: 'Ages 11+', body: 'Cavity prevention, sports-mouthguards, and a referral plan if braces are on the horizon.' }
	];

	const prices = [
		['First visit & exam', '$95–$160'],
		['Cleaning & fluoride', '$120–$210'],
		['Simple filling', 'from $180']
	];
</script>

<Seo
	title="For Parents — Treehouse Pediatric Dentistry"
	description="Everything you want to know before you walk in: the first visit by age, new-patient forms, and honest starting prices — no surprises."
	path="/for-parents"
/>

<PageHero
	eyebrow="For parents · what to expect"
	EyebrowIcon={Footprints}
	heading="Everything you want to know before you walk in."
	lede="The first visit by age, the forms, and the honest money talk — no surprises, because surprises are the whole problem."
/>

<Section class="!pt-12">
	<SectionHead
		eyebrow="The first visit, by age"
		EyebrowIcon={Cake}
		heading="What “normal” looks like at every stage"
	/>
	<div class="mt-9 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
		{#each ages as { badge, title, body }, i (title)}
			<div use:reveal={{ delay: (i % 4) * 60 }}>
				<Card class="h-full">
					<Tag tone="green">{badge}</Tag>
					<h3 class="font-display mb-1.5 mt-3 text-[1.08rem] font-semibold text-ink-900">{title}</h3>
					<p class="m-0 text-[0.94rem] leading-[1.5] text-ink-600">{body}</p>
				</Card>
			</div>
		{/each}
	</div>
</Section>

<Section band="cream">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		<div use:reveal>
			<Card class="h-full">
				<IconBadge Icon={Download} tone="honey" />
				<h3 class="font-display mb-2 text-[1.18rem] font-semibold text-ink-900">
					New-patient & medical-history forms
				</h3>
				<p class="t-body mb-4">
					Fill these out at home so the first visit is all hellos, no clipboards. Takes about five
					minutes.
				</p>
				<div class="flex flex-wrap gap-2.5">
					<Button href="/for-parents" variant="secondary" Icon={FileText}>New-patient form (PDF)</Button>
					<Button href="/for-parents" variant="secondary" Icon={FileHeart}>Medical history (PDF)</Button>
				</div>
			</Card>
		</div>
		<div use:reveal={{ delay: 80 }}>
			<Card class="h-full">
				<IconBadge Icon={ReceiptText} tone="green" />
				<h3 class="font-display mb-2 text-[1.18rem] font-semibold text-ink-900">Honest money talk</h3>
				<ul class="mb-2 flex flex-col gap-2.5">
					{#each prices as [label, price] (label)}
						<li class="t-body m-0 flex justify-between">
							<span>{label}</span><b class="text-ink-900">{price}</b>
						</li>
					{/each}
				</ul>
				<p class="t-small m-0">
					Starting ranges, shown before we start. We take most major insurance and offer
					interest-free payment plans — no hidden fees, no surprise bills.
				</p>
			</Card>
		</div>
	</div>
	<div use:reveal class="mt-[26px]">
		<Button href="/book" size="lg" Icon={CalendarHeart}>Book the first visit</Button>
	</div>
</Section>
