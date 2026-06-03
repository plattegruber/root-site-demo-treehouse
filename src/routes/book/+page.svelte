<script>
	import { CalendarHeart, Phone, MapPin, Clock, Mail, Map as MapPinned } from '@lucide/svelte';
	import Seo from '$lib/components/site/Seo.svelte';
	import PageHero from '$lib/components/site/PageHero.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import IconBadge from '$lib/components/ui/IconBadge.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Photo from '$lib/components/ui/Photo.svelte';
	import BookingWidget from '$lib/components/book/BookingWidget.svelte';
	import { reveal } from '$lib/actions/reveal.js';
	import { practice } from '$lib/data/site.js';
</script>

<Seo
	title="Book or Call — Treehouse Pediatric Dentistry"
	description="Booking takes under a minute. Prefer a human? Call and we’ll talk it through, nervous kid and all. Quiet sensory mornings on request."
	path="/book"
/>

<PageHero
	eyebrow="Book or call"
	EyebrowIcon={CalendarHeart}
	heading="Let’s get your kid in the chair — gently."
	lede="Booking takes under a minute. Prefer a human? Call and we’ll talk it through, nervous kid and all."
/>

<Section class="!pt-[30px]">
	<div use:reveal>
		<BookingWidget />
	</div>

	<div class="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
		<Card class="flex items-start gap-3.5">
			<IconBadge Icon={Phone} tone="green" />
			<div>
				<h3 class="font-display mb-0.5 mt-0.5 font-semibold text-ink-900">Call us</h3>
				<a href={practice.phoneHref} class="text-[1.05rem] font-extrabold text-green-700"
					>{practice.phoneDisplay}</a
				>
				<p class="t-small mt-1">We love the nervous ones.</p>
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

	<div use:reveal class="mt-5">
		<Card class="flex flex-wrap items-center gap-4 !border-teal-200 !bg-teal-50">
			<IconBadge Icon={Mail} tone="teal" />
			<div class="min-w-[220px] flex-1">
				<h3 class="font-display mb-0.5 font-semibold text-ink-900">Not ready to book?</h3>
				<p class="t-small m-0">
					Get our free guide: <b>“First dental visit — a parent’s prep guide.”</b>
				</p>
			</div>
			<form class="flex gap-2" onsubmit={(e) => e.preventDefault()}>
				<label for="lead-email" class="sr-only">Email address</label>
				<input
					id="lead-email"
					type="email"
					placeholder="you@email.com"
					class="w-[200px] max-w-full rounded-md border-[1.5px] border-line-strong bg-surface px-3.5 py-3 font-body text-base text-ink-900 focus:border-teal-400 focus:shadow-[0_0_0_3px_var(--color-teal-100)] focus:outline-none"
				/>
				<Button type="submit" variant="secondary">Send it</Button>
			</form>
		</Card>
	</div>
</Section>
