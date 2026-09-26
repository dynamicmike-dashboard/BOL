import { useEffect, useRef, useState, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function Reveal({
  children,
  className,
  delay = 0,
  animation = "fadeUp",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale" | "rotateIn";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const animations = {
        fadeUp: { y: 60, opacity: 0 },
        fadeIn: { opacity: 0 },
        slideLeft: { x: -60, opacity: 0 },
        slideRight: { x: 60, opacity: 0 },
        scale: { scale: 0.8, opacity: 0 },
        rotateIn: { rotation: -5, opacity: 0, scale: 0.9 },
      };

      const startState = animations[animation] || animations.fadeUp;

      gsap.fromTo(
        el,
        startState,
        {
          ...Object.fromEntries(
            Object.keys(startState).map((k) => [k, 0])
          ),
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [animation, delay]);

  if (!mounted) {
    return <div ref={ref} className={cn("opacity-0", className)}>{children}</div>;
  }

  return <div ref={ref} className={cn(className)}>{children}</div>;
}