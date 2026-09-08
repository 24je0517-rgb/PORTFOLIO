import React from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  ExternalLink,
  Download
} from "lucide-react";

interface DeckControlsProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
  zoomLevel: number;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  deckUrl: string;
  accentColorText?: string;
}

export const DeckControls: React.FC<DeckControlsProps> = ({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  zoomLevel,
  isFullscreen,
  onToggleFullscreen,
  deckUrl,
  accentColorText = "text-emerald-400",
}) => {
  const pad = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-[#13161c]/95 backdrop-blur-md border border-white/10 shadow-2xl text-slate-200 select-none">
      {/* Page Counter & Slide Navigation */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 font-mono text-xs font-semibold px-2 py-1 rounded bg-[#0b0d10] border border-white/10">
          <span className={accentColorText}>{pad(currentPage)}</span>
          <span className="text-slate-500">/</span>
          <span className="text-slate-400">{pad(totalPages || 1)}</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={onPrevPage}
            disabled={currentPage <= 1}
            className="p-1.5 rounded-lg border border-white/10 bg-[#0b0d10] hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-[#0b0d10] transition-colors focus:outline-none focus:ring-1 focus:ring-emerald-400/50"
            aria-label="Previous slide"
            title="Previous slide (Left Arrow)"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={onNextPage}
            disabled={currentPage >= totalPages}
            className="p-1.5 rounded-lg border border-white/10 bg-[#0b0d10] hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-[#0b0d10] transition-colors focus:outline-none focus:ring-1 focus:ring-emerald-400/50"
            aria-label="Next slide"
            title="Next slide (Right Arrow)"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Center: Slide Progress Pill */}
      <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-400">
        <span>SLIDE {currentPage} OF {totalPages || 1}</span>
      </div>

      {/* Right Side: Zoom, Fullscreen & External */}
      <div className="flex items-center gap-1.5">
        {/* Zoom Controls */}
        <div className="hidden sm:flex items-center gap-1 pr-2 border-r border-white/10">
          <button
            onClick={onZoomOut}
            disabled={zoomLevel <= 0.75}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-30 transition-colors focus:outline-none"
            aria-label="Zoom out"
            title="Zoom out"
          >
            <ZoomOut size={15} />
          </button>

          <span className="text-[10.5px] font-mono text-slate-400 w-9 text-center">
            {Math.round(zoomLevel * 100)}%
          </span>

          <button
            onClick={onZoomIn}
            disabled={zoomLevel >= 2.0}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-30 transition-colors focus:outline-none"
            aria-label="Zoom in"
            title="Zoom in"
          >
            <ZoomIn size={15} />
          </button>

          {zoomLevel !== 1.0 && (
            <button
              onClick={onResetZoom}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Reset zoom"
              title="Reset zoom"
            >
              <RotateCcw size={13} />
            </button>
          )}
        </div>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          className="p-1.5 rounded-lg border border-white/10 bg-[#0b0d10] hover:bg-white/10 text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-emerald-400/50"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          title={isFullscreen ? "Exit fullscreen (Esc)" : "Fullscreen deck view"}
        >
          {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
        </button>

        {/* Open Deck PDF in New Tab */}
        <a
          href={deckUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-lg border border-white/10 bg-[#0b0d10] hover:bg-white/10 text-slate-300 hover:text-white transition-colors focus:outline-none"
          aria-label="Open original PDF in new tab"
          title="Open original PDF in new tab"
        >
          <ExternalLink size={15} />
        </a>

        {/* Download Deck */}
        <a
          href={deckUrl}
          download
          className="p-1.5 rounded-lg border border-white/10 bg-[#0b0d10] hover:bg-white/10 text-slate-300 hover:text-white transition-colors focus:outline-none hidden xs:inline-flex"
          aria-label="Download presentation deck"
          title="Download presentation deck"
        >
          <Download size={15} />
        </a>
      </div>
    </div>
  );
};
