<script>
	import { Sprout, Sparkles, ShieldCheck, Ear, Siren, HandHeart, Stethoscope, ArrowRight } from '@lucide/svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import SectionHead from '$lib/components/ui/SectionHead.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import IconBadge from '$lib/components/ui/IconBadge.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	/** @type {Array<{ Icon: import('svelte').Component, tone: 'green' | 'honey' | 'teal' | 'coral', title: string, body: string, href: string }>} */
	const services = [
		{
			Icon: Sprout,
			tone: 'green',
			title: 'First visits & infant exams',
			body: 'A gentle hello — we count teeth like a treasure hunt. First visit by age one.',
			href: '/services'
		},
		{
			Icon: Sparkles,
			tone: 'teal',
			title: 'Cleanings & sealants',
			body: 'Tickle-free cleanings and sealants that head off cavities before they start.',
			href: '/services'
		},
		{
			Icon: ShieldCheck,
			tone: 'honey',
			title: 'Fillings & gentle treatment',
			body: 'When a tooth needs help, we explain every step and stop the second they need a break.',
			href: '/services'
		},
		{
			Icon: Ear,
			tone: 'teal',
			title: 'Sensory-friendly & special-needs care',
			body: 'Quiet rooms, dimmed lights, headphones, and a plan built around your kid.',
			href: '/nervous-kids'
		},
		{
			Icon: Siren,
			tone: 'coral',
			title: 'Same-day emergencies',
			body: 'Knocked-out tooth or a bad fall? Call us — we keep same-day spots open.',
			href: '/book'
		},
		{
			Icon: HandHeart,
			tone: 'green',
			title: 'Nervous & first-timer visits',
			body: "Had a rough visit somewhere else? This is the page for you. We go slow.",
			href: '/nervous-kids'
		}
	];
</script>

<Section>
	<SectionHead
		eyebrow="What we do"
		EyebrowIcon={Stethoscope}
		heading="Care that meets your kid where they are"
	/>
	<div class="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
		{#each services as { Icon, tone, title, body, href }, i (title)}
			<div use:reveal={{ delay: (i % 3) * 60 }}>
				<Card {href} hoverable class="group flex h-full flex-col">
					<IconBadge {Icon} {tone} />
					<h3 class="font-display mb-[7px] text-[1.22rem] font-semibold text-ink-900">{title}</h3>
					<p class="mb-3.5 flex-1 text-[0.98rem] leading-relaxed text-ink-600">{body}</p>
					<span class="font-display inline-flex items-center gap-1.5 text-[0.98rem] font-semibold text-coral-600">
						Learn more
						<ArrowRight
							size={16}
							strokeWidth={2}
							class="transition-transform duration-[160ms] group-hover:translate-x-[3px]"
						/>
					</span>
				</Card>
			</div>
		{/each}
	</div>
</Section>
