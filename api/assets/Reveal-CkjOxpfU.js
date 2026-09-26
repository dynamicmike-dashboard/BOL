import { a as cn } from "./SiteLayout-BDpFgqEx.js";
import { useEffect, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region src/components/Reveal.tsx
gsap.registerPlugin(ScrollTrigger);
function Reveal({ children, className, delay = 0, animation = "fadeUp" }) {
	const ref = useRef(null);
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
		const el = ref.current;
		if (!el) return;
		const ctx = gsap.context(() => {
			const animations = {
				fadeUp: {
					y: 60,
					opacity: 0
				},
				fadeIn: { opacity: 0 },
				slideLeft: {
					x: -60,
					opacity: 0
				},
				slideRight: {
					x: 60,
					opacity: 0
				},
				scale: {
					scale: .8,
					opacity: 0
				},
				rotateIn: {
					rotation: -5,
					opacity: 0,
					scale: .9
				}
			};
			const startState = animations[animation] || animations.fadeUp;
			gsap.fromTo(el, startState, {
				...Object.fromEntries(Object.keys(startState).map((k) => [k, 0])),
				opacity: 1,
				duration: .8,
				ease: "power3.out",
				delay: delay / 1e3,
				scrollTrigger: {
					trigger: el,
					start: "top 85%",
					once: true
				}
			});
		}, el);
		return () => ctx.revert();
	}, [animation, delay]);
	if (!mounted) return /* @__PURE__ */ jsx("div", {
		ref,
		className: cn("opacity-0", className),
		children
	});
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: cn(className),
		children
	});
}
//#endregion
export { Reveal as t };
