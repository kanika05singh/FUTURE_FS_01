import { useRef } from "react";

// Applies a subtle perspective tilt that follows the cursor — a small
// "premium portfolio" touch. Automatically does nothing on touch devices
// or when the visitor prefers reduced motion, so it never gets in the way.
export function useTilt(maxDegrees = 6) {
  const ref = useRef(null);

  function isEligible() {
    if (typeof window === "undefined") return false;
    const fineHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return fineHover && !reducedMotion;
  }

  function handleMouseMove(event) {
    const node = ref.current;
    if (!node || !isEligible()) return;

    const bounds = node.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    node.style.transform = `perspective(700px) rotateX(${(-y * maxDegrees).toFixed(
      2
    )}deg) rotateY(${(x * maxDegrees).toFixed(2)}deg) translateY(-4px)`;
  }

  function handleMouseLeave() {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "";
  }

  return { ref, handleMouseMove, handleMouseLeave };
}
