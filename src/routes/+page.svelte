<script>
	import Hero from '$lib/components/home/Hero.svelte';
	import ComfortBand from '$lib/components/home/ComfortBand.svelte';
	import Services from '$lib/components/home/Services.svelte';
	import Walkthrough from '$lib/components/home/Walkthrough.svelte';
	import Reviews from '$lib/components/home/Reviews.svelte';
	import TrustStrip from '$lib/components/home/TrustStrip.svelte';
	import FinalCTA from '$lib/components/site/FinalCTA.svelte';
	import Seo from '$lib/components/site/Seo.svelte';
</script>

<Seo
	title="Treehouse Pediatric Dentistry — The dentist your kid actually wants to visit"
	description="A Brookside (Kansas City) pediatric dentist built for nervous kids and brave first-timers. We move at your kid’s pace, never hold them down, and tell them everything before we do it."
	path="/"
/>

<Hero />
<ComfortBand />
<Services />
<Walkthrough />
<Reviews />
<TrustStrip />
<FinalCTA />
