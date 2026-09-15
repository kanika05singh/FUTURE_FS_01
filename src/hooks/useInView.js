import { useEffect, useRef, useState } from "react";

// Returns a ref to attach to any element, and whether it has scrolled
// into view yet. Used to drive the one-shot ".reveal" fade-in — once an
// element has appeared, it stays visible (no re-triggering on scroll-up).
export function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isVisible];
}
