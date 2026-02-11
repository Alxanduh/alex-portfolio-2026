"use client";
import { useRef, useState, useCallback, useEffect } from "react";

interface DragScrollProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function DragScroll({ children, className, style }: DragScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    setIsDragging(true);
    setHasDragged(false);
    startX.current = e.pageX;
    scrollStart.current = el.scrollLeft;
    el.style.cursor = "grabbing";
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !ref.current) return;
    e.preventDefault();
    const dx = e.pageX - startX.current;
    if (Math.abs(dx) > 3) setHasDragged(true);
    ref.current.scrollLeft = scrollStart.current - dx;
  }, [isDragging]);

  const onEnd = useCallback(() => {
    setIsDragging(false);
    if (ref.current) ref.current.style.cursor = "grab";
  }, []);

  // Suppress click events if we just dragged
  const onClick = useCallback((e: React.MouseEvent) => {
    if (hasDragged) {
      e.preventDefault();
      e.stopPropagation();
      setHasDragged(false);
    }
  }, [hasDragged]);

  // Global mouseup in case cursor leaves container
  useEffect(() => {
    if (!isDragging) return;
    const handler = () => onEnd();
    window.addEventListener("mouseup", handler);
    return () => window.removeEventListener("mouseup", handler);
  }, [isDragging, onEnd]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, cursor: "grab", userSelect: isDragging ? "none" : undefined }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onEnd}
      onMouseLeave={onEnd}
      onClickCapture={onClick}
    >
      {children}
    </div>
  );
}
