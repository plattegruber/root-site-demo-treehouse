<script>
	import { BadgeCheck, CalendarCheck, Building2, Ear, MapPin } from '@lucide/svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	const items = [
		{ Icon: BadgeCheck, title: 'Board-certified', sub: 'Pediatric dentist (ABPD)' },
		{ Icon: CalendarCheck, title: '12 years', sub: 'Caring for KC kids' },
		{ Icon: Building2, title: "Children's Mercy", sub: 'Hospital affiliation' },
		{ Icon: Ear, title: 'Sensory-ready', sub: 'Headphones, quiet AM' },
		{ Icon: MapPin, title: 'Brookside born', sub: 'Your neighbors on the Blvd' }
	];
</script>

<Section band="green" tight>
	<div class="grid grid-cols-2 gap-x-[18px] gap-y-7 sm:grid-cols-3 lg:grid-cols-5">
		{#each items as { Icon, title, sub }, i (title)}
			<div use:reveal={{ delay: i * 60 }} class="flex flex-col items-center gap-2.5 text-center">
				<div class="flex h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-white/15">
					<Icon size={23} strokeWidth={2} class="text-white" />
				</div>
				<b class="font-display text-base font-semibold text-white">{title}</b>
				<span class="text-[0.82rem] leading-snug text-white/80">{sub}</span>
			</div>
		{/each}
	</div>
</Section>
