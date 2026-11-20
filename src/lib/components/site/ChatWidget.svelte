<script>
	import {
		MessagesSquare,
		X,
		Siren,
		Sprout,
		HandHeart,
		CalendarHeart,
		ArrowRight
	} from '@lucide/svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import IconBadge from '$lib/components/ui/IconBadge.svelte';

	/** @type {Array<{ Icon: import('svelte').Component, tone: 'green' | 'honey' | 'teal' | 'coral', title: string, sub: string, reply: string, action: 'info' | 'book' | 'nervous' }>} */
	const intents = [
		{
			Icon: Siren,
			tone: 'coral',
			title: "It's an emergency",
			sub: 'Knocked-out tooth, bad fall, swelling',
			reply: 'This is a fictional demo, not a dental clinic. It cannot help with an emergency.',
			action: 'info'
		},
		{
			Icon: Sprout,
			tone: 'green',
			title: "We're new patients",
			sub: 'First visit, booking, what to expect',
			reply: 'Wonderful. The fastest path is our 1-minute booking — want me to open it?',
			action: 'book'
		},
		{
			Icon: HandHeart,
			tone: 'teal',
			title: 'My kid is nervous or sensory-sensitive',
			sub: 'A scared kid, autism, special needs',
			reply:
				"You're in the right place. Tell us what helps and we'll plan the whole visit around your kid.",
			action: 'nervous'
		}
	];

	let open = $state(false);
	/** @type {number | null} */
	let picked = $state(null);

	function toggle() {
		open = !open;
		if (!open) picked = null;
	}
</script>

<button
	class="font-display fixed bottom-6 right-6 z-[60] inline-flex items-center gap-2.5 rounded-pill
		bg-green-600 px-5 py-3.5 text-base font-semibold text-white shadow-lg
		transition-[transform,background-color] duration-[160ms] hover:-translate-y-0.5 hover:bg-green-700"
	onclick={toggle}
	aria-label="Open demo chat"
	aria-expanded={open}
>
	{#if open}<X size={20} strokeWidth={2} />{:else}<MessagesSquare size={20} strokeWidth={2} />Need a
		hand?{/if}
</button>

{#if open}
	<div
		class="pop-in fixed bottom-[88px] right-6 z-[60] w-[340px] max-w-[calc(100vw-2rem)] overflow-hidden
			rounded-lg border border-line bg-surface shadow-lg"
		style="transform-origin: bottom right;"
		role="dialog"
		aria-label="Help"
	>
		<div class="flex items-center gap-3 bg-green-600 px-[18px] py-4 text-white">
			<img src="/pip-mark.svg" alt="" class="h-[34px]" />
			<div>
				<div class="font-display text-[1.02rem] font-semibold">Hi, I'm Pip</div>
				<div class="text-[0.8rem] text-white/80">Fictional demo chat</div>
			</div>
			<button
				class="ml-auto text-white/85 hover:text-white"
				onclick={() => (open = false)}
				aria-label="Close">
				<X size={18} strokeWidth={2} />
			</button>
		</div>

		<div class="p-4">
			{#if picked === null}
				<p class="mb-3.5 text-[0.95rem] font-semibold text-ink-700">
					Pick whatever fits — we'll point you the right way.
				</p>
				{#each intents as intent, i (intent.title)}
					<button
						class="font-body mb-2.5 flex w-full items-center gap-3 rounded-md border-[1.5px] border-line
							bg-cream px-3.5 py-3 text-left transition-[border-color,background-color] duration-[160ms]
							hover:border-green-400 hover:bg-green-50"
						onclick={() => (picked = i)}
					>
						<IconBadge Icon={intent.Icon} tone={intent.tone} size="sm" class="!w-9 !h-9 !rounded-[11px]" />
						<span>
							<b class="block text-[0.92rem] font-extrabold text-ink-900">{intent.title}</b>
							<span class="text-[0.8rem] text-ink-500">{intent.sub}</span>
						</span>
					</button>
				{/each}
			{:else}
				{@const intent = intents[picked]}
				<div class="pop-in">
					<button
						class="font-display mb-2 text-green-700 hover:text-coral-600"
						onclick={() => (picked = null)}>← Back</button
					>
					<p class="t-body mb-4">{intent.reply}</p>
					{#if intent.action === 'book'}
						<Button href="/book" block Icon={CalendarHeart} onclick={() => (open = false)}
							>Open demo booking</Button
						>
					{:else if intent.action === 'nervous'}
						<Button href="/nervous-kids" block IconRight={ArrowRight} onclick={() => (open = false)}
							>See how we help nervous kids</Button
						>
					{/if}
				</div>
			{/if}
		</div>
	</div>
{/if}
