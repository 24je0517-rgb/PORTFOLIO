import React, { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { SlideItem } from "../../data/portfolioData";

interface DeckProps {
  slides: SlideItem[];
  name: string;
  deckUrl?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  theme: {
    grad: string;
    glow: string;
    text: string;
    border: string;
  };
}

export const Deck: React.FC<DeckProps> = ({
  slides,
  name,
  isOpen: externalIsOpen,
  onOpenChange,
  theme,
}) => {
  const [idx, setIdx] = useState<number>(0);
  const [internalOpen, setInternalOpen] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);

  const open = externalIsOpen !== undefined ? externalIsOpen : internalOpen;
  const setOpen = useCallback(
    (newOpen: boolean) => {
      if (onOpenChange) {
        onOpenChange(newOpen);
      }
      setInternalOpen(newOpen);
    },
    [onOpenChange]
  );

  const total = slides.length;

  const goPrev = useCallback(() => {
    setIdx((prev) => Math.max(0, prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setIdx((prev) => Math.min(total - 1, prev + 1));
  }, [total]);

  const goTo = useCallback((targetIndex: number) => {
    setIdx(Math.max(0, Math.min(total - 1, targetIndex)));
  }, [total]);

  // Reset to slide 0 when project changes
  useEffect(() => {
    setIdx(0);
  }, [name]);

  // Keyboard navigation & body scroll lock for modal
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      } else if (e.key === "ArrowLeft") {
        goPrev();
      } else if (e.key === "ArrowRight") {
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, goPrev, goNext]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        goNext();
      } else {
        goPrev();
      }
    }
    touchStartX.current = null;
  };

  // Resolve slide src with base path
  const resolveSrc = (src: string) => {
    if (src.startsWith("http") || src.startsWith("/")) return src;
    const base = import.meta.env.BASE_URL || "/";
    return `${base}${src.replace(/^\//, "")}`;
  };

  return (
    <div className="w-full space-y-3 select-none">
      {/* 16:9 Interactive Inline Deck Frame */}
      <div
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") goPrev();
          if (e.key === "ArrowRight") goNext();
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`group relative w-full aspect-[16/9] rounded-2xl overflow-hidden border ${theme.border} bg-[#0a0a0c] shadow-2xl transition-all duration-300 focus:outline-none`}
        style={{
          boxShadow: `0 24px 60px rgba(0,0,0,0.6), 0 0 35px -5px ${theme.glow}`,
        }}
        aria-label="Presentation deck viewer. Swipe or use arrow keys to flip slides."
      >
        {/* Slide Carousel Track */}
        <div
          className="flex h-full w-full"
          style={{
            transform: `translateX(-${idx * 100}%)`,
            transition: "transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] relative h-full w-full bg-[#0a0a0c] flex items-center justify-center overflow-hidden"
            >
              <img
                src={resolveSrc(s.src)}
                alt={s.label || `Slide ${i + 1}`}
                draggable={false}
                className="w-full h-full object-contain select-none block"
              />
            </div>
          ))}
        </div>

        {/* Left Arrow Button */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          disabled={idx === 0}
          className="absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-[#0c0c0e]/85 text-white flex items-center justify-center transition-all hover:scale-105 disabled:opacity-20 disabled:hover:scale-100 disabled:cursor-default z-10 backdrop-blur-sm shadow-md"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          aria-label="Next slide"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          disabled={idx === total - 1}
          className="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-[#0c0c0e]/85 text-white flex items-center justify-center transition-all hover:scale-105 disabled:opacity-20 disabled:hover:scale-100 disabled:cursor-default z-10 backdrop-blur-sm shadow-md"
        >
          <ChevronRight size={20} />
        </button>

        {/* Expand / Fullscreen Button */}
        <button
          type="button"
          aria-label="Open presentation in full screen modal"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          className="absolute top-3 right-3 w-9 h-9 rounded-xl border border-white/20 bg-[#0c0c0e]/85 text-white flex items-center justify-center transition-all hover:bg-white/20 z-10 backdrop-blur-sm cursor-pointer shadow-md"
          title="Expand Fullscreen Presentation"
        >
          <Maximize2 size={15} />
        </button>

        {/* Current Slide Label Tag */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-white/15 z-10 pointer-events-none">
          <span>{slides[idx]?.label || `Slide ${idx + 1}`}</span>
        </div>

        {/* Counter Pill */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0c0c0e]/90 border border-white/20 text-xs font-mono font-bold tracking-widest text-slate-200 z-10 backdrop-blur-md shadow-md pointer-events-none">
          <span className={theme.text}>{String(idx + 1).padStart(2, "0")}</span>
          <span className="text-slate-500 mx-1">/</span>
          <span className="text-slate-400">{String(total).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex items-center justify-center gap-1.5 flex-wrap pt-1">
        {slides.map((_, i) => (
          <button
            type="button"
            key={i}
            aria-label={`Jump to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
              i === idx
                ? `w-7 ${theme.text.replace("text-", "bg-")}`
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Fullscreen Modal / Lightbox rendered in document.body via Portal */}
      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${name} presentation modal`}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-xl flex flex-col p-3 sm:p-6 md:p-8 animate-in fade-in duration-200 select-none overflow-hidden"
          >
            {/* Top Bar */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-between gap-4 pb-3 sm:pb-4 border-b border-white/10 text-white w-full max-w-7xl mx-auto flex-shrink-0"
            >
              <div className="min-w-0 pr-2">
                <span className="text-[10px] sm:text-xs font-mono tracking-widest text-slate-400 uppercase block">
                  PRESENTATION DECK
                </span>
                <h4 className="text-base sm:text-xl font-bold tracking-tight text-white truncate">
                  {name}
                </h4>
              </div>

              <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                {/* Slide Counter */}
                <div className="px-3 py-1 rounded-full bg-white/10 border border-white/15 font-mono text-xs sm:text-sm tracking-wider font-semibold text-slate-200">
                  <span className={theme.text}>{String(idx + 1).padStart(2, "0")}</span>
                  <span className="text-slate-500 mx-1">/</span>
                  <span className="text-slate-400">{String(total).padStart(2, "0")}</span>
                </div>

                {/* Prominent Close X Button */}
                <button
                  type="button"
                  aria-label="Close fullscreen view"
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/25 bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xl z-20 focus:outline-none focus:ring-2 focus:ring-white/50"
                  title="Close (Esc)"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Slide Presentation Center Display */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-3 sm:gap-6 min-h-0 py-3 sm:py-4 w-full max-w-7xl mx-auto relative"
            >
              {/* Prev Button */}
              <button
                type="button"
                aria-label="Previous slide"
                onClick={goPrev}
                disabled={idx === 0}
                className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-white/20 bg-[#161922]/90 hover:bg-white/20 disabled:opacity-20 text-white flex items-center justify-center transition-all flex-shrink-0 cursor-pointer disabled:cursor-default shadow-xl z-10"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Main Slide 16:9 Viewport */}
              <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="flex-1 max-w-6xl aspect-[16/9] max-h-[72vh] sm:max-h-[78vh] relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl bg-[#0a0a0c]"
                style={{
                  boxShadow: `0 24px 60px rgba(0,0,0,0.8), 0 0 35px -5px ${theme.glow}`,
                }}
              >
                <div
                  className="flex h-full w-full"
                  style={{
                    transform: `translateX(-${idx * 100}%)`,
                    transition: "transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                >
                  {slides.map((s, i) => (
                    <div
                      key={i}
                      className="flex-[0_0_100%] relative h-full w-full bg-[#0a0a0c] flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={resolveSrc(s.src)}
                        alt={s.label || `Slide ${i + 1}`}
                        draggable={false}
                        className="w-full h-full object-contain select-none block"
                      />
                    </div>
                  ))}
                </div>

                {/* Current Slide Label in Modal */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-xs font-mono text-slate-200 border border-white/15 pointer-events-none">
                  <span>{slides[idx]?.label || `Slide ${idx + 1}`}</span>
                </div>
              </div>

              {/* Next Button */}
              <button
                type="button"
                aria-label="Next slide"
                onClick={goNext}
                disabled={idx === total - 1}
                className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-white/20 bg-[#161922]/90 hover:bg-white/20 disabled:opacity-20 text-white flex items-center justify-center transition-all flex-shrink-0 cursor-pointer disabled:cursor-default shadow-xl z-10"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Modal Bottom Bar with Jump-To Dots */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="pt-2 pb-1 flex flex-col items-center justify-center gap-2 flex-shrink-0"
            >
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {slides.map((s, i) => (
                  <button
                    type="button"
                    key={i}
                    aria-label={`Jump to slide ${i + 1}: ${s.label || ""}`}
                    onClick={() => goTo(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                      i === idx
                        ? `w-8 ${theme.text.replace("text-", "bg-")}`
                        : "w-2.5 bg-white/25 hover:bg-white/50"
                    }`}
                    title={s.label || `Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};
