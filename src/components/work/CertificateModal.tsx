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
  themeColor: _themeColor,
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
      className="fixed inset-0 z-[99999] bg-[#F7F4EF]/98 backdrop-blur-xl flex flex-col p-3 sm:p-6 md:p-8 animate-in fade-in duration-200 select-none overflow-hidden"
    >
      {/* Modal Top Bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex items-center justify-between gap-4 pb-3 sm:pb-4 border-b border-[#E6DFD3] text-[#2B2118] w-full max-w-6xl mx-auto flex-shrink-0"
      >
        <div className="min-w-0 pr-2">
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono tracking-widest text-[#8A6035] uppercase font-semibold">
            <Award size={13} className="text-[#A97F50]" />
            <span>OFFICIAL CERTIFICATE</span>
          </div>
          <h4 className="text-base sm:text-xl font-bold tracking-tight text-[#2B2118] truncate">
            {title || projectTitle}
          </h4>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Verified Badge */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 font-mono text-xs text-emerald-800 font-semibold">
            <ShieldCheck size={14} className="text-emerald-700" />
            <span>Verified Credential</span>
          </div>

          {/* Close X Button */}
          <button
            type="button"
            aria-label="Close certificate modal"
            onClick={onClose}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#E6DFD3] bg-[#FFFFFF] hover:bg-[#FBF8F3] text-[#2B2118] flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md z-20 focus:outline-none focus:ring-2 focus:ring-[#A97F50]/50"
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
          className="relative max-h-[75vh] sm:max-h-[82vh] max-w-full rounded-2xl overflow-hidden border border-[#E6DFD3] shadow-xl bg-[#FFFFFF] flex items-center justify-center"
          style={{
            boxShadow: "0 20px 48px rgba(43, 33, 24, 0.12)",
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
        className="pt-2 pb-1 flex items-center justify-center text-xs font-mono text-[#8C7B6A] flex-shrink-0"
      >
        <span>View-Only Protected Credential • IIT (ISM) Dhanbad</span>
      </div>
    </div>,
    document.body
  );
};
