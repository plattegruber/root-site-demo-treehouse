<script>
	import { HeartHandshake, Clock, Eye, Ear, ReceiptText } from '@lucide/svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import SectionHead from '$lib/components/ui/SectionHead.svelte';
	import IconBadge from '$lib/components/ui/IconBadge.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	const items = [
		{
			Icon: Clock,
			title: "We move at your kid's pace",
			body: 'No rushing, no holding kids down. If they need a minute, they get a minute.'
		},
		{
			Icon: Eye,
			title: 'Tell-show-do',
			body: 'We tell them what’s next, show them the tool, then do it. Nothing is a surprise.'
		},
		{
			Icon: Ear,
			title: 'Sensory-friendly & special needs',
			body: 'Quiet mornings, fewer people in the room, headphones, social-story previews.'
		},
		{
			Icon: ReceiptText,
			title: 'Honest pricing up front',
			body: 'Published starting ranges and a clear no-hidden-fees explainer before you book.'
		}
	];
</script>

<Section band="cream">
	<SectionHead
		eyebrow="Our comfort promise"
		EyebrowIcon={HeartHandshake}
		heading="Built for nervous kids and nervous parents"
		sub="Four things we promise out loud, on day one — so you know exactly what walking in feels like."
	/>
	<div class="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
		{#each items as { Icon, title, body }, i (title)}
			<div use:reveal={{ delay: i * 60 }} class="flex flex-col gap-2.5">
				<IconBadge {Icon} tone="green" />
				<h3 class="font-display m-0 text-[1.12rem] font-semibold text-ink-900">{title}</h3>
				<p class="m-0 text-[0.98rem] leading-relaxed text-ink-600">{body}</p>
			</div>
		{/each}
	</div>
</Section>
