/**
 * Gentle "fade and rise" on scroll — matches Treehouse's calm motion.
 *
 * Progressive enhancement: runs only client-side, so prerendered / no-JS
 * content always stays visible. Elements already in view on load are revealed
 * immediately (no hidden→shown flash); only things you scroll to animate in.
 * Honors `prefers-reduced-motion`.
 *
 * @param {HTMLElement} node
 * @param {{ delay?: number }} [options]
 */
export function reveal(node, { delay = 0 } = {}) {
	if (typeof window === 'undefined') return;

	const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduce) return;

	node.classList.add('reveal');
	node.style.transitionDelay = `${delay}ms`;

	// Already on screen at load → reveal now, skip the observer entirely.
	if (node.getBoundingClientRect().top < window.innerHeight * 0.92) {
		node.classList.add('reveal-in');
		return;
	}

	const io = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.classList.add('reveal-in');
				io.disconnect();
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
	);
	io.observe(node);

	return { destroy: () => io.disconnect() };
}
