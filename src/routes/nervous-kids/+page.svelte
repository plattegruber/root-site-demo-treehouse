<script>
	import {
		HandHeart,
		CalendarHeart,
		Phone,
		Footprints,
		Hand,
		Eye,
		MessagesSquare,
		Wind,
		Moon,
		Ear,
		Lightbulb,
		Headphones,
		BookOpen,
		Users,
		MessageCircle,
		CircleCheckBig,
		CircleX,
		CircleHelp,
		Check,
		X
	} from '@lucide/svelte';
	import Seo from '$lib/components/site/Seo.svelte';
	import PageHero from '$lib/components/site/PageHero.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import SectionHead from '$lib/components/ui/SectionHead.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import IconBadge from '$lib/components/ui/IconBadge.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import FinalCTA from '$lib/components/site/FinalCTA.svelte';
	import FaqItem from '$lib/components/nervous/FaqItem.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	const pace = [
		{ Icon: Hand, title: 'We go at their pace', body: 'Your kid sets the speed. We pause the moment they raise a hand, and we never hold a child down or strap them in.' },
		{ Icon: Eye, title: 'Tell-show-do, every time', body: 'We tell them what’s next in plain words, show them the tool on their finger first, then do it. Nothing is a surprise.' },
		{ Icon: MessagesSquare, title: 'We narrate everything', body: 'No silent surprises. They hear what each sound is before they hear it — even the little water sprayer.' }
	];

	const sedation = [
		{ Icon: Wind, title: '“Sleepy air” (laughing gas)', body: 'A sweet-smelling air through a little nose mask that helps kids feel floaty and calm. They’re awake and talking the whole time, and it wears off in minutes. We explain it to your kid as “the air that makes your nose feel giggly.”' },
		{ Icon: Moon, title: 'Deeper sedation, when it’s truly needed', body: 'For longer treatment or very anxious kids, we discuss oral or IV sedation and our hospital option at Children’s Mercy. We walk you through the real risks and the prep, and it’s always your call.' }
	];

	const sensory = [
		{ Icon: Moon, title: 'Quiet sensory mornings', body: 'First appointments of the day, before the lobby fills up.' },
		{ Icon: Lightbulb, title: 'Dimmed lights & sunglasses', body: 'We can drop the overheads and offer shades for bright-light sensitivity.' },
		{ Icon: Headphones, title: 'Noise-reducing headphones', body: 'Bring their own or borrow ours. Music or quiet — their choice.' },
		{ Icon: BookOpen, title: 'Social-story preview', body: 'We send a photo walkthrough of the room and team before you come in.' },
		{ Icon: Footprints, title: 'A pre-visit walkthrough', body: 'Come see the chair with nothing scheduled. Sit in it. Press the buttons.' },
		{ Icon: Users, title: 'Fewer people in the room', body: 'One familiar face leads the whole visit. You stay right there.' }
	];

	const say = [
		'We’re going to meet a dentist who counts teeth.',
		'You can bring your comfort toy.',
		'If you want a break, you just raise your hand.',
		'It’s okay to feel nervous. I’ll be right there.'
	];
	const dont = [
		'“It won’t hurt.” (It plants the idea of hurt.)',
		'“Don’t be scared.”',
		'“Be brave / big kids aren’t scared.”',
		'Words like shot, drill, pull, or needle.'
	];

	const faqs = [
		['What if my kid won’t open their mouth?', 'That’s a normal first visit, and it’s genuinely fine. We don’t force it. Sometimes we just count Pip’s teeth, or your kid’s stuffed animal’s teeth, and call it a win. Lots of kids open up on visit two once they know us. There’s no rush and no judgment.'],
		['What if they’ve already had a bad experience?', 'Tell us everything before you come — what happened, what set them off, what helped. We’ll plan a shorter, slower first visit with no treatment, just trust-building. A lot of our patients arrived after a rough visit somewhere else; it’s kind of our specialty.'],
		['Can I stay in the room?', 'Always. You’re welcome right beside the chair the entire time. Some older kids like a little independence, but that’s their call and yours — never ours.'],
		['Do you ever restrain kids?', 'No. We don’t hold kids down or use papoose boards. If a child is too distressed to continue safely, we stop, regroup, and talk with you about gentler options like sensory accommodations or sedation.'],
		['How do you handle a kid who cries the whole time?', 'Calmly and without shame — for them or you. We slow down, narrate, offer breaks, and often shorten the visit. Tears don’t mean failure; they mean we go gentler. You will never get a judgmental look from our team.']
	];
</script>

<Seo
	title="Nervous Kids & First Visits — Treehouse Pediatric Dentistry"
	description="If your kid is scared of the dentist, you’re exactly who we built this for. How we handle nervous and sensory-sensitive kids — at their pace, narrated, and never restrained."
	path="/nervous-kids"
/>

<PageHero
	eyebrow="Nervous kids & first visits"
	EyebrowIcon={HandHeart}
	heading="If your kid is scared of the dentist, you’re exactly who we built this for."
	lede="Maybe they melted down somewhere else. Maybe loud rooms are too much. Maybe it’s their very first time. Here’s precisely how we handle it — in plain words, no surprises."
>
	<div class="flex flex-wrap gap-3">
		<Button href="/book" Icon={CalendarHeart}>Book a gentle first visit</Button>
		<Button href="/book" variant="secondary" Icon={Phone}>Talk it through with us first</Button>
	</div>
</PageHero>

<!-- How we handle a scared kid -->
<Section class="!pt-12">
	<SectionHead
		eyebrow="How we handle a scared kid"
		EyebrowIcon={Footprints}
		heading="We go at their pace, and we never restrain"
	/>
	<div class="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
		{#each pace as { Icon, title, body }, i (title)}
			<div use:reveal={{ delay: i * 60 }}>
				<Card class="h-full">
					<IconBadge {Icon} tone="green" />
					<h3 class="font-display mb-[7px] text-[1.18rem] font-semibold text-ink-900">{title}</h3>
					<p class="m-0 text-[0.98rem] leading-[1.55] text-ink-600">{body}</p>
				</Card>
			</div>
		{/each}
	</div>
</Section>

<!-- Sedation, explained plainly -->
<Section band="cream">
	<SectionHead
		eyebrow="Calming options, explained plainly"
		EyebrowIcon={Wind}
		heading="“Laughing gas” and sedation, in words that make sense"
	/>
	<div class="mt-9 grid grid-cols-1 gap-[22px] md:grid-cols-2">
		{#each sedation as { Icon, title, body }, i (title)}
			<div use:reveal={{ delay: i * 60 }}>
				<Card class="flex h-full gap-4">
					<IconBadge {Icon} tone="honey" />
					<div>
						<h3 class="font-display mb-[7px] text-[1.12rem] font-semibold text-ink-900">{title}</h3>
						<p class="m-0 text-[0.98rem] leading-[1.55] text-ink-600">{body}</p>
					</div>
				</Card>
			</div>
		{/each}
	</div>
</Section>

<!-- Sensory-friendly -->
<Section>
	<SectionHead
		eyebrow="Sensory-friendly & special-needs care"
		EyebrowIcon={Ear}
		heading="We plan the whole visit around your kid"
		sub="Tell us what helps and what doesn’t. We’ll set the room up before you arrive."
	/>
	<div class="mt-9 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
		{#each sensory as { Icon, title, body }, i (title)}
			<div use:reveal={{ delay: (i % 3) * 60 }} class="flex gap-3.5">
				<IconBadge {Icon} tone="teal" size="sm" />
				<div>
					<h3 class="font-display mb-1 mt-0.5 text-[1.05rem] font-semibold text-ink-900">{title}</h3>
					<p class="m-0 text-[0.92rem] leading-[1.5] text-ink-600">{body}</p>
				</div>
			</div>
		{/each}
	</div>
</Section>

<!-- Parent cheat-sheet -->
<Section band="cream" innerClass="max-w-[920px]">
	<SectionHead
		eyebrow="A quick parent cheat-sheet"
		EyebrowIcon={MessageCircle}
		heading="What to say — and what to skip — before the visit"
		class="!mb-7"
	/>
	<div use:reveal class="overflow-hidden rounded-lg border border-line bg-surface shadow-md">
		<div class="grid grid-cols-1 sm:grid-cols-2">
			<div class="bg-green-50 p-7">
				<h4 class="font-display mb-3.5 flex items-center gap-2.5 text-[1.1rem] font-semibold text-green-700">
					<CircleCheckBig size={20} strokeWidth={2} /> Try saying
				</h4>
				<ul class="flex flex-col gap-3">
					{#each say as s (s)}
						<li class="flex gap-2.5 text-[0.98rem] leading-[1.45] text-ink-700">
							<Check size={18} strokeWidth={2} class="mt-0.5 shrink-0 text-green-500" />{s}
						</li>
					{/each}
				</ul>
			</div>
			<div class="bg-coral-50 p-7">
				<h4 class="font-display mb-3.5 flex items-center gap-2.5 text-[1.1rem] font-semibold text-coral-700">
					<CircleX size={20} strokeWidth={2} /> Better to skip
				</h4>
				<ul class="flex flex-col gap-3">
					{#each dont as s (s)}
						<li class="flex gap-2.5 text-[0.98rem] leading-[1.45] text-ink-700">
							<X size={18} strokeWidth={2} class="mt-0.5 shrink-0 text-coral-500" />{s}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</Section>

<!-- FAQ -->
<Section innerClass="max-w-[820px]">
	<SectionHead
		eyebrow="Honest answers"
		EyebrowIcon={CircleHelp}
		heading="The questions nervous parents actually ask"
		class="!mb-3.5"
	/>
	<div use:reveal>
		{#each faqs as [q, a] (q)}
			<FaqItem {q} {a} />
		{/each}
	</div>
</Section>

<FinalCTA />
