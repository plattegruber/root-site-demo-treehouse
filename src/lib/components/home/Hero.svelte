<script>
	import { HandHeart, CalendarHeart, Phone, Check, Play } from '@lucide/svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Photo from '$lib/components/ui/Photo.svelte';
	import RatingChip from '$lib/components/ui/RatingChip.svelte';
	import { reveal } from '$lib/actions/reveal.js';
	import { practice } from '$lib/data/site.js';
</script>

<section class="hero relative overflow-hidden">
	<img src="/doodle-leaf.svg" alt="" class="doodle w-[60px] -rotate-[16deg]" style="left:24px;top:70px;" />
	<img src="/doodle-star.svg" alt="" class="doodle w-[30px]" style="right:13%;top:58px;" />
	<img src="/doodle-star.svg" alt="" class="doodle w-5" style="left:15%;top:188px;" />

	<div class="mx-auto max-w-[1180px] px-7">
		<!-- Centered "storybook cover": headline + CTAs up top -->
		<div use:reveal class="relative z-[2] mx-auto max-w-[920px] pt-[66px] text-center max-[860px]:pt-[30px]">
			<div class="flex justify-center">
				<Eyebrow Icon={HandHeart}>For nervous kids &amp; the parents booking for them</Eyebrow>
			</div>
			<h1 class="t-display mx-auto my-[18px] max-w-[15em] [&_em]:not-italic [&_em]:text-green-600">
				The dentist your kid <em>actually wants</em> to come back to.
			</h1>
			<p class="t-lead sub mx-auto mb-7 max-w-[33em]">
				A Brookside pediatric office built for brave first-timers and kids who've had a rough visit
				before. We move at your kid's pace, and we tell them everything before we do it.
			</p>
			<div class="flex flex-wrap items-center justify-center gap-3.5">
				<Button href="/book" size="lg" Icon={CalendarHeart}>Book your kid's first visit</Button>
				<Button href={practice.phoneHref} size="lg" variant="secondary" Icon={Phone}
					>Call us — we love the nervous ones</Button
				>
			</div>
			<div
				class="mt-[18px] inline-flex items-center justify-center gap-2 text-[0.92rem] font-semibold text-ink-500"
			>
				<Check size={16} strokeWidth={2.2} class="text-green-500" /> Most new patients seen within a week
				· no referral needed
			</div>
		</div>

		<!-- Wide cinematic welcome-video screen with Pip + stickers -->
		<div use:reveal class="stage relative mx-auto mb-[60px] mt-[78px] max-w-[1000px] max-[860px]:mt-16">
			<div class="screen group relative">
				<div class="flex h-full flex-col items-center justify-center gap-3">
					<div class="pbtn">
						<Play size={28} strokeWidth={2} class="ml-1 fill-current" />
					</div>
					<span
						class="whitespace-nowrap rounded-pill bg-[rgba(44,40,32,0.62)] px-[15px] py-[7px] text-[0.9rem] font-bold text-white"
						>Meet Dr. Priya &amp; Pip · 1:12</span
					>
				</div>
				<span
					class="absolute inset-x-4 bottom-4 text-center text-[0.8rem] italic text-green-700 opacity-80"
					>Placeholder: warm welcome video, shot at kid eye-level</span
				>
			</div>

			<img
				src="/pip-peek.svg"
				alt="Pip the fox peeking over the screen"
				class="pointer-events-none absolute left-1/2 top-[-80px] z-[5] h-[104px] -translate-x-1/2"
			/>

			<span class="absolute left-1 top-[-22px] z-[6] -rotate-[5deg] max-[860px]:-left-1.5 max-[860px]:top-[-16px]">
				<RatingChip />
			</span>

			<span
				class="absolute -bottom-5 -right-2.5 z-[6] inline-flex items-center gap-2 rotate-[4deg] whitespace-nowrap
					rounded-pill border border-coral-200 bg-coral-50 px-[15px] py-2 text-[0.9rem] font-bold text-coral-700 shadow-md"
			>
				<HandHeart size={15} strokeWidth={2} /> We never hold them down
			</span>

			<span
				class="polaroid absolute -bottom-[30px] -left-[34px] z-[6] w-[168px] -rotate-[5deg] rounded-md border border-line bg-surface px-2 pb-2.5 pt-2 shadow-md"
			>
				<Photo intent="Candid: a kid mid-laugh in the chair" aspect="1" class="!rounded-sm" />
				<span class="mt-1.5 block text-center text-[0.68rem] font-bold italic text-ink-500"
					>brave first visit ★</span
				>
			</span>
		</div>
	</div>
</section>

<style>
	.hero {
		background:
			radial-gradient(120% 80% at 85% -5%, var(--color-honey-50) 0%, rgba(254, 246, 226, 0) 55%),
			var(--color-cream);
	}
	.doodle {
		position: absolute;
		z-index: 0;
		pointer-events: none;
		opacity: 0.85;
	}
	.screen {
		aspect-ratio: 16 / 7;
		overflow: hidden;
		border: 1px solid var(--color-line);
		border-radius: var(--radius-xl);
		box-shadow: var(--shadow-lg);
		background:
			repeating-linear-gradient(45deg, rgba(62, 139, 87, 0.07) 0 18px, rgba(62, 139, 87, 0) 18px 36px),
			var(--color-green-50);
	}
	.pbtn {
		display: flex;
		width: 70px;
		height: 70px;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background: var(--color-surface);
		box-shadow: var(--shadow-md);
		color: var(--color-coral-500);
		transition: transform var(--t-base) var(--ease-pop);
	}
	.group:hover .pbtn {
		transform: scale(1.08);
	}
	@media (max-width: 860px) {
		.screen {
			aspect-ratio: 4 / 3;
		}
		.polaroid {
			display: none;
		}
	}
</style>
