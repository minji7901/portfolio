"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type ProofModalProps = {
  open: boolean;
  title: string;
  imageSrc: string;
  onClose: () => void;
};

const ProofModal = ({ open, title, imageSrc, onClose }: ProofModalProps) => {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
            aria-label="Close modal backdrop"
          />

          {/* Panel */}
          <motion.div
            className="relative w-full max-w-3xl rounded-3xl bg-white border border-line shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-line bg-warm">
              <p className="font-bold text-text-primary">{title}</p>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center"
                aria-label="Close modal"
              >
                <X size={18} className="text-text-secondary" />
              </button>
            </div>

            <div className="p-4 md:p-6">
              <div className="relative w-full h-[50vh] rounded-2xl border border-line bg-warm overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 900px"
                  priority
                />
              </div>

              <p className="mt-3 text-sm text-text-muted">
                * 민감 정보는 블러 처리되었습니다.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProofModal;
