import { c as cn } from './SiteLayout-Bz5Z1dGy.mjs';
import { useRef, useState, useEffect } from 'react';
import { jsx } from 'react/jsx-runtime';

function Reveal({ children, className, delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e == null ? void 0 : e.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("div", {
    ref,
    style: { transitionDelay: `${delay}ms` },
    className: cn("transition-all duration-700 ease-out", shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0", className),
    children
  });
}

export { Reveal as R };
//# sourceMappingURL=Reveal-0DjsODsP.mjs.map
