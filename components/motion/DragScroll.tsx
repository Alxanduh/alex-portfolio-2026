"use client";

import { useRef, useEffect, useCallback } from "react";

interface DragScrollProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Horizontal drag-to-scroll wrapper.
 *
 * Adds click-and-drag scrolling with a grab/grabbing cursor.
 * Works alongside native touch swipe on mobile.
 * No external dependencies — pure pointer events.
 */
export default function DragScroll({ children, className }: DragScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onPointerDown = useCallback((e: PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    isDown.current = true;
    el.setPointerCapture(e.pointerId);
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  }, []);

  const onPointerUp = useCallback((e: PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    isDown.current = false;
    el.releasePointerCapture(e.pointerId);
    el.style.cursor = "grab";
    el.style.removeProperty("user-select");
  }, []);

  const onPointerMove = useCallback((e: PointerEvent) => {
    if (!isDown.current) return;
    const el = ref.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    el.scrollLeft = scrollLeft.current - walk;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointerleave", onPointerUp);
    el.addEventListener("pointermove", onPointerMove);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointerleave", onPointerUp);
      el.removeEventListener("pointermove", onPointerMove);
    };
  }, [onPointerDown, onPointerUp, onPointerMove]);

  return (
    <div ref={ref} className={className} style={{ cursor: "grab" }}>
      {children}
    </div>
  );
}
