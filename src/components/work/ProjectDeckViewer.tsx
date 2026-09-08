import React, { useEffect, useRef, useState, useCallback } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { DeckControls } from "./DeckControls";
import { Loader2, AlertCircle, FileText, Sparkles, Layers } from "lucide-react";

// Configure PDF.js worker
if (typeof window !== "undefined") {
  try {
    const base = import.meta.env.BASE_URL || "/";
    pdfjsLib.GlobalWorkerOptions.workerSrc = `${base}pdf.worker.min.js`;
  } catch {
    pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  }
}

interface ProjectDeckViewerProps {
  deckUrl: string;
  projectTitle: string;
  accentText?: string;
  accentBorder?: string;
  accentGlow?: string;
}

export const ProjectDeckViewer: React.FC<ProjectDeckViewerProps> = ({
  deckUrl,
  projectTitle,
  accentText = "text-emerald-400",
  accentBorder = "border-emerald-500/20",
  accentGlow = "rgba(16, 185, 129, 0.15)",
}) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const viewerWrapperRef = useRef<HTMLDivElement>(null);
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);
  const pageContainerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const renderTasksRef = useRef<{ [key: number]: any }>({});
  const pdfDocRef = useRef<pdfjsLib.PDFDocumentProxy | null>(null);

  // Full URL resolution
  const resolvedDeckUrl = deckUrl.startsWith("http")
    ? deckUrl
    : `${import.meta.env.BASE_URL || "/"}${deckUrl.replace(/^\//, "")}`;

  // Load PDF Document
  useEffect(() => {
    let isCancelled = false;
    setIsLoading(true);
    setError(null);
    setCurrentPage(1);

    // Cancel existing render tasks
    Object.values(renderTasksRef.current).forEach((task) => {
      try {
        task.cancel();
      } catch {}
    });
    renderTasksRef.current = {};

    const loadPDF = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument({
          url: resolvedDeckUrl,
          cMapUrl: "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/",
          cMapPacked: true,
        });

        const pdf = await loadingTask.promise;
        if (isCancelled) return;

        pdfDocRef.current = pdf;
        setNumPages(pdf.numPages);
        setIsLoading(false);
      } catch (err: any) {
        if (isCancelled) return;
        console.error("Error loading PDF deck:", err);
        setError(err.message || "Failed to load PDF presentation deck.");
        setIsLoading(false);
      }
    };

    loadPDF();

    return () => {
      isCancelled = true;
    };
  }, [resolvedDeckUrl]);

  // Render individual page to canvas
  const renderPage = useCallback(
    async (pageNumber: number) => {
      if (!pdfDocRef.current) return;
      const canvas = canvasRefs.current[pageNumber - 1];
      if (!canvas) return;

      try {
        // Cancel previous task for this page if running
        if (renderTasksRef.current[pageNumber]) {
          try {
            renderTasksRef.current[pageNumber].cancel();
          } catch {}
        }

        const page = await pdfDocRef.current.getPage(pageNumber);
        
        // Calculate scale to fit container width cleanly
        const containerWidth = containerRef.current?.clientWidth || 600;
        const availableWidth = Math.max(300, containerWidth - 32);
        const unscaledViewport = page.getViewport({ scale: 1.0 });
        const baseScale = availableWidth / unscaledViewport.width;
        const scale = baseScale * zoomLevel;

        const viewport = page.getViewport({ scale });
        const pixelRatio = window.devicePixelRatio || 1;

        canvas.width = viewport.width * pixelRatio;
        canvas.height = viewport.height * pixelRatio;
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

        const renderContext = {
          canvasContext: ctx,
          viewport: viewport,
        };

        const renderTask = page.render(renderContext);
        renderTasksRef.current[pageNumber] = renderTask;
        await renderTask.promise;
      } catch (err: any) {
        if (err?.name !== "RenderingCancelledException") {
          console.error(`Error rendering page ${pageNumber}:`, err);
        }
      }
    },
    [zoomLevel]
  );

  // Render all pages when PDF is loaded or zoom changes
  useEffect(() => {
    if (!pdfDocRef.current || numPages === 0 || isLoading) return;

    for (let i = 1; i <= numPages; i++) {
      renderPage(i);
    }

    const handleResize = () => {
      for (let i = 1; i <= numPages; i++) {
        renderPage(i);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [numPages, isLoading, renderPage]);

  // Track active visible page with IntersectionObserver
  useEffect(() => {
    if (numPages === 0 || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pageIndex = Number(entry.target.getAttribute("data-page-number"));
            if (pageIndex && pageIndex !== currentPage) {
              setCurrentPage(pageIndex);
            }
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.5,
      }
    );

    pageContainerRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [numPages, isLoading, currentPage]);

  // Navigate to specific slide
  const scrollToPage = (pageNumber: number) => {
    const targetEl = pageContainerRefs.current[pageNumber - 1];
    if (targetEl && containerRef.current) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      setCurrentPage(pageNumber);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      scrollToPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < numPages) {
      scrollToPage(currentPage + 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isHovered && !isFullscreen) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        handleNextPage();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        handlePrevPage();
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollToPage(1);
      } else if (e.key === "End") {
        e.preventDefault();
        scrollToPage(numPages);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, numPages, isHovered, isFullscreen]);

  // Fullscreen handling
  const toggleFullscreen = () => {
    if (!viewerWrapperRef.current) return;

    if (!document.fullscreenElement) {
      viewerWrapperRef.current
        .requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch((err) => console.error("Fullscreen error:", err));
    } else {
      document
        .exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch((err) => console.error("Exit fullscreen error:", err));
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Progress Calculation
  const progressPercent = numPages > 0 ? (currentPage / numPages) * 100 : 0;

  return (
    <div
      ref={viewerWrapperRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex flex-col rounded-2xl border ${accentBorder} bg-[#0b0d10] overflow-hidden transition-all duration-300 shadow-2xl ${
        isFullscreen ? "p-4 sm:p-6 bg-[#07080a]" : ""
      }`}
      style={{
        boxShadow: `0 10px 30px -10px ${accentGlow}, 0 0 1px 1px rgba(255,255,255,0.05)`,
      }}
    >
      {/* Top Animated Progress Bar */}
      <div className="w-full h-1 bg-white/5 relative overflow-hidden">
        <div
          className={`h-full ${accentText.replace("text-", "bg-")} transition-all duration-300 ease-out`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Viewer Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#101318] border-b border-white/10 text-xs font-mono select-none">
        <div className="flex items-center gap-2 text-slate-300">
          <Layers size={14} className={accentText} />
          <span className="font-semibold truncate max-w-[200px] sm:max-w-xs">
            {projectTitle}
          </span>
        </div>

        <div className="flex items-center gap-3 text-slate-400">
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px]">
            <Sparkles size={11} className={accentText} />
            Interactive Deck
          </span>
          <span className="text-[11px]">
            {numPages > 0 ? `${numPages} Slides` : "Loading..."}
          </span>
        </div>
      </div>

      {/* Main Scrollable Deck Viewport */}
      <div
        ref={containerRef}
        className={`relative overflow-y-auto overflow-x-hidden p-4 sm:p-6 space-y-4 sm:space-y-6 flex flex-col items-center bg-[#07080a] ${
          isFullscreen ? "h-[calc(100vh-140px)]" : "h-[380px] sm:h-[480px] md:h-[540px] lg:h-[580px]"
        }`}
        tabIndex={0}
        aria-label="Presentation deck viewer. Use arrow keys to navigate slides."
      >
        {/* Loading Skeleton */}
        {isLoading && (
          <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center gap-3 text-slate-400">
            <Loader2 size={28} className={`animate-spin ${accentText}`} />
            <span className="text-xs font-mono tracking-wider">
              Rendering Presentation Slides...
            </span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center p-6 text-center gap-3 text-slate-300">
            <AlertCircle size={32} className="text-rose-400" />
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-white">Could not render deck inside browser</h4>
              <p className="text-xs text-slate-400 max-w-sm">{error}</p>
            </div>
            <a
              href={resolvedDeckUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 mt-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
            >
              <FileText size={14} />
              <span>Open PDF Directly</span>
            </a>
          </div>
        )}

        {/* Rendered Slides Stream */}
        {!isLoading &&
          !error &&
          Array.from({ length: numPages }, (_, index) => {
            const pageNum = index + 1;
            return (
              <div
                key={pageNum}
                data-page-number={pageNum}
                ref={(el) => (pageContainerRefs.current[index] = el)}
                className={`relative group rounded-xl overflow-hidden bg-[#101318] border transition-all duration-300 shadow-xl ${
                  currentPage === pageNum ? "border-white/30 ring-1 ring-white/10" : "border-white/10 opacity-90 hover:opacity-100"
                }`}
              >
                {/* Slide Number Tag */}
                <div className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-white/10">
                  Slide {pageNum}
                </div>

                {/* Canvas Canvas */}
                <canvas
                  ref={(el) => (canvasRefs.current[index] = el)}
                  className="block mx-auto max-w-full h-auto select-none"
                />
              </div>
            );
          })}
      </div>

      {/* Floating Sticky Deck Controls */}
      <div className="p-3 bg-[#101318] border-t border-white/10">
        <DeckControls
          currentPage={currentPage}
          totalPages={numPages}
          onPrevPage={handlePrevPage}
          onNextPage={handleNextPage}
          onZoomIn={() => setZoomLevel((z) => Math.min(2.0, z + 0.15))}
          onZoomOut={() => setZoomLevel((z) => Math.max(0.75, z - 0.15))}
          onResetZoom={() => setZoomLevel(1.0)}
          zoomLevel={zoomLevel}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
          deckUrl={resolvedDeckUrl}
          accentColorText={accentText}
        />
      </div>
    </div>
  );
};
