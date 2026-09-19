import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Award, ShieldCheck } from "lucide-react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificateUrl: string;
  title: string;
  projectTitle: string;
  themeColor?: {
    text: string;
    bg: string;
    border: string;
    glow: string;
  };
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  certificateUrl,
  title,
  projectTitle,
  themeColor,
}) => {
  // Body scroll lock & escape key handling
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === "undefined") return null;

  // Resolve image URL
  const resolveUrl = (url: string) => {
    if (url.startsWith("http") || url.startsWith("/")) return url;
    const base = import.meta.env.BASE_URL || "/";
    return `${base}${url.replace(/^\//, "")}`;
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${projectTitle} Certificate Viewer`}
      onClick={onClose}
      className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-xl flex flex-col p-3 sm:p-6 md:p-8 animate-in fade-in duration-200 select-none overflow-hidden"
    >
      {/* Modal Top Bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex items-center justify-between gap-4 pb-3 sm:pb-4 border-b border-white/10 text-white w-full max-w-6xl mx-auto flex-shrink-0"
      >
        <div className="min-w-0 pr-2">
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            <Award size={13} className="text-cyan-400" />
            <span>OFFICIAL CERTIFICATE</span>
          </div>
          <h4 className="text-base sm:text-xl font-bold tracking-tight text-white truncate">
            {title || projectTitle}
          </h4>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Verified Badge */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-mono text-xs text-emerald-400 font-semibold">
            <ShieldCheck size={14} />
            <span>Verified Credential</span>
          </div>

          {/* Close X Button */}
          <button
            type="button"
            aria-label="Close certificate modal"
            onClick={onClose}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/25 bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xl z-20 focus:outline-none focus:ring-2 focus:ring-white/50"
            title="Close (Esc)"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Main Certificate View Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex-1 flex items-center justify-center min-h-0 py-3 sm:py-6 w-full max-w-6xl mx-auto relative"
      >
        <div
          onContextMenu={(e) => e.preventDefault()}
          className="relative max-h-[75vh] sm:max-h-[82vh] max-w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#0a0a0c] flex items-center justify-center"
          style={{
            boxShadow: `0 24px 60px rgba(0,0,0,0.85), 0 0 40px -5px ${themeColor?.glow || "rgba(6, 182, 212, 0.3)"}`,
          }}
        >
          <img
            src={resolveUrl(certificateUrl)}
            alt={`${projectTitle} Certificate`}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className="max-h-[75vh] sm:max-h-[82vh] w-auto max-w-full object-contain select-none block pointer-events-none"
          />
        </div>
      </div>

      {/* Modal Bottom Bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="pt-2 pb-1 flex items-center justify-center text-xs font-mono text-slate-400 flex-shrink-0"
      >
        <span>View-Only Protected Credential • IIT (ISM) Dhanbad</span>
      </div>
    </div>,
    document.body
  );
};
