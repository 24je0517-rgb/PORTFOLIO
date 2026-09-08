import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X, ExternalLink } from "lucide-react";
import { SlideItem } from "../../data/portfolioData";

interface DeckProps {
  slides: SlideItem[];
  name: string;
  deckUrl: string;
  theme: {
    grad: string;
    glow: string;
    text: string;
    border: string;
  };
}

export const Deck: React.FC<DeckProps> = ({ slides, name, deckUrl, theme }) => {
  const [idx, setIdx] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [drag, setDrag] = useState<{ startX: number; dx: number } | null>(null);

  const total = slides.length;
  const clamp = (i: number) => Math.min(total - 1, Math.max(0, i));
  const go = useCallback((d: number) => setIdx((i) => clamp(i + d)), [total]);

  // Reset to slide 0 when project changes
  useEffect(() => {
    setIdx(0);
  }, [name]);

  // Fullscreen keyboard events & body scroll lock
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, go]);

  const onDown = (e: React.PointerEvent) => {
    setDrag({ startX: e.clientX, dx: 0 });
  };

  const onMove = (e: React.PointerEvent) => {
    if (drag) setDrag((d) => (d ? { ...d, dx: e.clientX - d.startX } : null));
  };

  const onUp = () => {
    if (!drag) return;
    if (Math.abs(drag.dx) > 40) go(drag.dx < 0 ? 1 : -1);
    setDrag(null);
  };

  const dragPct = drag
    ? (drag.dx / (typeof window !== "undefined" ? window.innerWidth : 1200)) * 60
    : 0;

  // Resolve slide src with base path
  const resolveSrc = (src: string) => {
    if (src.startsWith("http") || src.startsWith("/")) return src;
    const base = import.meta.env.BASE_URL || "/";
    return `${base}${src.replace(/^\//, "")}`;
  };

  const Track: React.FC = () => (
    <div
      className="flex h-full w-full"
      style={{
        transform: `translateX(calc(${-idx * 100}% + ${dragPct}px))`,
        transition: drag ? "none" : "transform 0.45s cubic-bezier(0.22, 0.8, 0.2, 1)",
      }}
    >
      {slides.map((s, i) => (
        <div key={i} className="flex-[0_0_100%] relative h-full w-full bg-[#0a0a0c] flex items-center justify-center">
          <img
            src={resolveSrc(s.src)}
            alt={s.label || `Slide ${i + 1}`}
            draggable={false}
            loading={Math.abs(i - idx) <= 2 ? "eager" : "lazy"}
            className="w-full h-full object-contain select-none block"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full space-y-3 select-none">
      {/* 16:9 Interactive Deck Frame */}
      <div
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") go(-1);
          if (e.key === "ArrowRight") go(1);
        }}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        className={`group relative w-full aspect-[16/9] rounded-2xl overflow-hidden border ${theme.border} bg-[#0a0a0c] shadow-2xl transition-all duration-300 focus:outline-none`}
        style={{
          boxShadow: `0 24px 60px rgba(0,0,0,0.6), 0 0 35px -5px ${theme.glow}`,
          cursor: drag ? "grabbing" : "grab",
        }}
        aria-label="Presentation deck viewer. Swipe or use arrow keys to flip slides."
      >
        <Track />

        {/* Left Arrow Button */}
        <button
          aria-label="Previous slide"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          disabled={idx === 0}
          className="absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-[#0c0c0e]/85 text-white flex items-center justify-center transition-all hover:scale-105 disabled:opacity-20 disabled:hover:scale-100 disabled:cursor-default z-10 backdrop-blur-sm"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Arrow Button */}
        <button
          aria-label="Next slide"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          disabled={idx === total - 1}
          className="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-[#0c0c0e]/85 text-white flex items-center justify-center transition-all hover:scale-105 disabled:opacity-20 disabled:hover:scale-100 disabled:cursor-default z-10 backdrop-blur-sm"
        >
          <ChevronRight size={20} />
        </button>

        {/* Expand / Fullscreen Button */}
        <button
          aria-label="Open presentation in full screen modal"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          className="absolute top-3 right-3 w-9 h-9 rounded-xl border border-white/20 bg-[#0c0c0e]/85 text-white flex items-center justify-center transition-all hover:bg-white/20 z-10 backdrop-blur-sm"
          title="Expand Fullscreen Presentation"
        >
          <Maximize2 size={15} />
        </button>

        {/* Current Slide Label Tag */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-white/15 z-10">
          <span>{slides[idx]?.label || `Slide ${idx + 1}`}</span>
        </div>

        {/* Counter Pill */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0c0c0e]/90 border border-white/20 text-xs font-mono font-bold tracking-widest text-slate-200 z-10 backdrop-blur-md shadow-md">
          <span className={theme.text}>{String(idx + 1).padStart(2, "0")}</span>
          <span className="text-slate-500 mx-1">/</span>
          <span className="text-slate-400">{String(total).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex items-center justify-center gap-1.5 flex-wrap pt-1">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Jump to slide ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
              i === idx
                ? `w-7 ${theme.text.replace("text-", "bg-")}`
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Fullscreen Presentation Lightbox Modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Top Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between gap-4 pb-4 border-b border-white/10 text-white"
          >
            <div>
              <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                PRESENTATION DECK
              </span>
              <h4 className="text-lg sm:text-xl font-bold tracking-tight">{name}</h4>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-sm tracking-wider font-semibold text-slate-300">
                {idx + 1} / {total}
              </span>

              <a
                href={resolveSrc(deckUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
              >
                <ExternalLink size={13} />
                <span>Open PDF</span>
              </a>

              <button
                aria-label="Close fullscreen view"
                onClick={() => setOpen(false)}
                className="w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl transition-all"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Large Slide Display Area */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-4 sm:gap-6 min-h-0 py-4"
          >
            <button
              aria-label="Previous slide"
              onClick={() => go(-1)}
              disabled={idx === 0}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/10 hover:bg-white/25 disabled:opacity-20 text-white flex items-center justify-center transition-all flex-shrink-0"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex-1 max-w-6xl aspect-[16/9] max-h-[82vh] relative overflow-hidden rounded-2xl border border-white/15 shadow-2xl bg-[#0a0a0c]">
              <Track />
            </div>

            <button
              aria-label="Next slide"
              onClick={() => go(1)}
              disabled={idx === total - 1}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/10 hover:bg-white/25 disabled:opacity-20 text-white flex items-center justify-center transition-all flex-shrink-0"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
