<script>
	import { BadgeCheck, CalendarHeart, ArrowRight, ShieldCheck, Users, MapPin } from '@lucide/svelte';
	import Seo from '$lib/components/site/Seo.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import SectionHead from '$lib/components/ui/SectionHead.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import IconBadge from '$lib/components/ui/IconBadge.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Img from '$lib/components/ui/Img.svelte';
	import FinalCTA from '$lib/components/site/FinalCTA.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	const team = [
		{ name: 'Priya Raman, DDS', role: 'Pediatric dentist · Owner', bio: 'Board-certified pediatric dentist (ABPD). Twelve years with kids, two of her own, and a soft spot for the criers. She trained in hospital-based care at Children’s Mercy.', ask: 'Ask me about: the fastest way to lose a loose tooth', img: '/images/dr-priya.jpg', position: 'center 22%' },
		{ name: 'Dani Okafor, RDH', role: 'Registered hygienist', bio: 'Dani has “tooth-tickling” down to an art and a playlist for every age. Kids ask for her by name.', ask: 'Ask me about: my terrible knock-knock jokes', img: '/images/team-dani.jpg', position: 'center 25%' },
		{ name: 'Marcus Lee', role: 'Front desk & first hellos', bio: 'The first voice you’ll hear. Marcus books the nervous-kid visits and remembers every comfort toy’s name.', ask: 'Ask me about: best taco truck in Brookside', img: '/images/team-marcus.jpg', position: 'center 20%' }
	];
</script>

<Seo
	title="Meet Dr. Priya — Treehouse Pediatric Dentistry"
	description="Board-certified pediatric dentist Dr. Priya Raman, DDS — trained in hospital-based care at Children’s Mercy. Honest, gentle, and built for the kid who hates the dentist."
	path="/meet-dr-priya"
/>

<section
	class="relative overflow-hidden pb-10 pt-14"
	style="background: radial-gradient(120% 80% at 85% -5%, var(--color-honey-50) 0%, rgba(254,246,226,0) 55%), var(--color-cream);"
>
	<div class="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-7 md:grid-cols-2">
		<div use:reveal>
			<Eyebrow Icon={BadgeCheck}>Meet Dr. Priya</Eyebrow>
			<h1 class="t-h1 mt-2.5">“Is this the right dentist for my kid?”</h1>
			<p class="t-lead mt-4 max-w-[34em]">
				It’s the only question that matters, so let me answer it honestly — who I am, how I was
				trained, and what your kid’s first hour with me actually feels like.
			</p>
			<div class="mt-5 flex flex-wrap gap-3">
				<Button href="/book" Icon={CalendarHeart}>Book with Dr. Priya</Button>
				<Button href="/nervous-kids" variant="secondary" IconRight={ArrowRight}
					>How she handles nervous kids</Button
				>
			</div>
		</div>
		<div use:reveal={{ delay: 80 }}>
			<Img
				src="/images/dr-priya.jpg"
				alt="Dr. Priya Raman smiling in the treatment room"
				aspect="4 / 3.4"
				position="center 22%"
				eager
				class="shadow-md"
			/>
		</div>
	</div>
</section>

<!-- Credentials + philosophy -->
<Section class="!pt-[88px]" innerClass="max-w-[760px]">
	<div use:reveal>
		<Card class="mb-[30px] flex items-center gap-4 !border-green-200 !bg-green-50">
			<IconBadge Icon={ShieldCheck} tone="green" />
			<div>
				<b class="font-display text-[1.05rem] text-ink-900">Board-certified pediatric dentist (ABPD)</b>
				<p class="t-small mt-1">
					DDS, University of Missouri–Kansas City · Pediatric residency, Children’s Mercy Kansas City
					· 12 years in practice · American Academy of Pediatric Dentistry member
				</p>
			</div>
		</Card>
	</div>
	<div use:reveal class="t-body flex flex-col gap-4">
		<p class="m-0">
			I went into pediatric dentistry because I was the kid who hated the dentist. I remember the
			bright light and the feeling of being talked over while grown-ups decided things about my
			mouth. I promised myself that if I ever did this, I’d do it the opposite way.
		</p>
		<p class="m-0">
			So here’s how I work: I explain everything to your kid in their own language before I do it. I
			let them touch the tools. I stop the second they need me to. And I’ll tell you the honest
			version of what their teeth need — never more treatment than makes sense, and always the price
			before we start.
		</p>
		<p class="m-0">
			I see a lot of kids who arrive after a hard visit somewhere else. If that’s you, take a breath.
			We’ll go slow, and we’ll get there.
		</p>
	</div>
	<p class="font-display mt-[22px] text-[1.3rem] font-semibold text-green-600">— Dr. Priya</p>
</Section>

<!-- Team -->
<Section band="cream">
	<SectionHead
		eyebrow="The whole team"
		EyebrowIcon={Users}
		heading="The people your kid will actually meet"
	/>
	<div class="mt-9 grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
		{#each team as { name, role, bio, ask, img, position }, i (name)}
			<div use:reveal={{ delay: (i % 3) * 60 }}>
				<Card class="h-full">
					<Img src={img} alt={`${name} — ${role}`} aspect="1" {position} class="mb-3.5" />
					<h3 class="font-display mb-0.5 text-[1.12rem] font-semibold text-ink-900">{name}</h3>
					<p class="mb-2 text-[0.88rem] font-bold text-green-600">{role}</p>
					<p class="mb-2.5 text-[0.94rem] leading-[1.5] text-ink-600">{bio}</p>
					<p class="border-t border-dashed border-line pt-2.5 text-[0.86rem] italic text-ink-500">{ask}</p>
				</Card>
			</div>
		{/each}
	</div>
	<div use:reveal class="mt-6">
		<Card class="flex flex-wrap items-center gap-3.5">
			<IconBadge Icon={MapPin} tone="honey" />
			<p class="t-body m-0 min-w-[240px] flex-1">
				We’re Brookside born — two blocks from the farmers’ market, sponsors of the little-league
				Acorns, and yes, that’s our treehouse mural you can see from the Blvd.
			</p>
		</Card>
	</div>
</Section>

<FinalCTA />
