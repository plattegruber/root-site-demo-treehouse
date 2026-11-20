<script>
	import { CalendarHeart, Phone, MapPin, Clock, Map as MapPinned } from '@lucide/svelte';
	import Seo from '$lib/components/site/Seo.svelte';
	import PageHero from '$lib/components/site/PageHero.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import IconBadge from '$lib/components/ui/IconBadge.svelte';
	import Photo from '$lib/components/ui/Photo.svelte';
	import BookingWidget from '$lib/components/book/BookingWidget.svelte';
	import { reveal } from '$lib/actions/reveal.js';
	import { practice } from '$lib/data/site.js';
</script>

<Seo
	title="Simulated Booking — Treehouse Pediatric Dentistry"
	description="Try an interactive appointment booking example without entering personal information."
	path="/book"
/>

<PageHero
	eyebrow="Booking demo"
	EyebrowIcon={CalendarHeart}
	heading="Try a sample booking."
	lede="This simulation does not make an appointment or send any messages."
/>

<Section class="!pt-[30px]">
	<div use:reveal>
		<BookingWidget />
	</div>

	<div class="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
		<Card class="flex items-start gap-3.5">
			<IconBadge Icon={Phone} tone="green" />
			<div>
				<h3 class="font-display mb-0.5 mt-0.5 font-semibold text-ink-900">Sample phone</h3>
				<p class="t-small mt-1">{practice.phoneDisplay}</p>
			</div>
		</Card>
		<Card class="flex items-start gap-3.5">
			<IconBadge Icon={MapPin} tone="honey" />
			<div>
				<h3 class="font-display mb-0.5 mt-0.5 font-semibold text-ink-900">Find us</h3>
				<p class="t-small m-0">{practice.street}<br />{practice.city}</p>
			</div>
		</Card>
		<Card class="flex items-start gap-3.5">
			<IconBadge Icon={Clock} tone="teal" />
			<div>
				<h3 class="font-display mb-0.5 mt-0.5 font-semibold text-ink-900">Hours</h3>
				<p class="t-small m-0">Mon–Thu 8–5 · Fri 8–1<br />Quiet sensory mornings on request</p>
			</div>
		</Card>
	</div>

	<div use:reveal class="mt-5">
		<Photo intent="Embedded Google map of the Brookside Blvd office with a Pip-styled pin" tone="green" aspect="16 / 5" Icon={MapPinned} />
	</div>

</Section>
