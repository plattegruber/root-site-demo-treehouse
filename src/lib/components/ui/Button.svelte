<script>
	/**
	 * Rounded, friendly button. Renders an `<a>` when `href` is set, else a `<button>`.
	 * Icons are passed as lucide components (e.g. `Icon={CalendarHeart}`).
	 *
	 * @type {{
	 *   variant?: 'primary' | 'secondary' | 'ghost',
	 *   size?: 'md' | 'lg',
	 *   Icon?: import('svelte').Component,
	 *   IconRight?: import('svelte').Component,
	 *   href?: string,
	 *   type?: 'button' | 'submit',
	 *   disabled?: boolean,
	 *   block?: boolean,
	 *   class?: string,
	 *   onclick?: (event: MouseEvent) => void,
	 *   children?: import('svelte').Snippet
	 * }}
	 */
	let {
		variant = 'primary',
		size = 'md',
		Icon,
		IconRight,
		href,
		type = 'button',
		disabled = false,
		block = false,
		class: className = '',
		onclick,
		children
	} = $props();

	const base =
		'group inline-flex items-center justify-center gap-2.5 font-display font-semibold leading-none ' +
		'rounded-pill no-underline cursor-pointer select-none border-0 ' +
		'transition-[transform,background-color,box-shadow] duration-[160ms] ease-[var(--ease-soft)] ' +
		'focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50';

	const sizes = {
		md: 'text-base px-6 py-[13px]',
		lg: 'text-[1.12rem] px-[30px] py-4'
	};

	const variants = {
		primary:
			'bg-coral-500 text-white shadow-cta hover:bg-coral-600 hover:not-disabled:-translate-y-px active:bg-coral-600 active:scale-[.97]',
		secondary:
			'bg-surface text-green-700 border-2 border-green-500 hover:bg-green-50 hover:not-disabled:-translate-y-px active:scale-[.97]',
		ghost: 'bg-transparent text-green-700 px-2 hover:text-coral-600'
	};

	const iconSize = $derived(size === 'lg' ? 21 : 18);
	const cls = $derived(
		`${base} ${sizes[size]} ${variants[variant]} ${block ? 'w-full' : ''} ${className}`
	);
</script>

{#if href}
	<a {href} class={cls} {onclick} aria-disabled={disabled || undefined}>
		{#if Icon}<Icon size={iconSize} strokeWidth={2.2} />{/if}
		{@render children?.()}
		{#if IconRight}<IconRight size={iconSize} strokeWidth={2.2} />{/if}
	</a>
{:else}
	<button {type} {disabled} class={cls} {onclick}>
		{#if Icon}<Icon size={iconSize} strokeWidth={2.2} />{/if}
		{@render children?.()}
		{#if IconRight}<IconRight size={iconSize} strokeWidth={2.2} />{/if}
	</button>
{/if}
