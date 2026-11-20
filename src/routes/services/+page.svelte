<script>
	import {
		Stethoscope,
		Sprout,
		Sparkles,
		ShieldCheck,
		Droplets,
		Ear,
		Baby,
		Apple,
		Siren,
		HandHeart,
		ArrowRight
	} from '@lucide/svelte';
	import Seo from '$lib/components/site/Seo.svelte';
	import PageHero from '$lib/components/site/PageHero.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import IconBadge from '$lib/components/ui/IconBadge.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Img from '$lib/components/ui/Img.svelte';
	import FinalCTA from '$lib/components/site/FinalCTA.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	/** @type {Array<{ Icon: import('svelte').Component, tone: 'green' | 'honey' | 'teal' | 'coral', title: string, body: string }>} */
	const services = [
		{ Icon: Sprout, tone: 'green', title: 'First visits & infant exams', body: 'A no-pressure hello by age one.' },
		{ Icon: Sparkles, tone: 'teal', title: 'Cleanings & sealants', body: 'Tickle-free cleanings, cavity-blocking sealants.' },
		{ Icon: ShieldCheck, tone: 'honey', title: 'Fillings & gentle treatment', body: 'Every step explained, breaks any time.' },
		{ Icon: Droplets, tone: 'teal', title: 'Fluoride & cavity prevention', body: 'Quick fluoride that toughens little teeth between visits.' },
		{ Icon: Ear, tone: 'teal', title: 'Sensory-friendly & special-needs', body: 'A visit planned around your kid.' },
		{ Icon: Baby, tone: 'honey', title: 'Infant tongue & lip ties', body: 'Feeding or latch trouble? We assess ties and explain the options.' },
		{ Icon: Apple, tone: 'green', title: 'Diet & habit coaching', body: 'Thumb-sucking, sippy cups, and snack swaps — practical, no shaming.' },
		{ Icon: Siren, tone: 'coral', title: 'Emergency visit example', body: 'This demo does not provide urgent dental care.' },
		{ Icon: Stethoscope, tone: 'green', title: 'Growth & referral guidance', body: 'Honest calls on braces and beyond.' }
	];
</script>

<Seo
	title="Services — Treehouse Pediatric Dentistry"
	description="Plain-language pediatric dental care: first visits, cleanings, sealants, gentle fillings, sensory-friendly care, and an example emergency service. The price before we start."
	path="/services"
/>

<PageHero
	eyebrow="Services"
	EyebrowIcon={Stethoscope}
	heading="Plain-language care, start to finish."
	lede="Each visit follows the same path: what’s worrying you, how we handle it, what actually happens, and the price before we start."
/>

<Section class="!pt-8">
	<div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
		{#each services as { Icon, tone, title, body }, i (title)}
			<div use:reveal={{ delay: (i % 3) * 60 }}>
				<Card class="h-full">
					<IconBadge {Icon} {tone} />
					<h3 class="font-display mb-[7px] text-[1.22rem] font-semibold text-ink-900">{title}</h3>
					<p class="m-0 text-[0.98rem] leading-relaxed text-ink-600">{body}</p>
				</Card>
			</div>
		{/each}
	</div>

	<div use:reveal class="mt-[26px]">
		<Card class="grid grid-cols-1 items-center gap-7 md:grid-cols-2">
			<Img
				src="/images/services-room.jpg"
				alt="A bright, modern open-bay treatment area"
				aspect="16 / 10"
			/>
			<div>
				<Eyebrow Icon={HandHeart}>Our flagship walkthrough</Eyebrow>
				<h2 class="t-h2 my-2.5">Your child’s first visit, fully explained</h2>
				<p class="t-body mb-4">
					The most-read page we have: worry → how we handle it → what happens → proof → book. Built
					for parents of nervous first-timers.
				</p>
				<div class="flex flex-wrap gap-3">
					<Button href="/nervous-kids" IconRight={ArrowRight}>Read the first-visit guide</Button>
					<Button href="/for-parents" variant="secondary">See it by age</Button>
				</div>
			</div>
		</Card>
	</div>
</Section>

<FinalCTA />
