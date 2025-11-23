"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";

// -------------------- CONTEXT --------------------
const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used inside ModalProvider");
  return ctx;
};

export function Modal({ children }) {
  return <ModalProvider>{children}</ModalProvider>;
}

// -------------------- TRIGGER --------------------
export const ModalTrigger = ({ children, className }) => {
  const { setOpen } = useModal();
  return (
    <button
      onClick={() => setOpen(true)}
      className={cn(
        "px-4 py-2 rounded-md text-black dark:text-white text-center overflow-hidden",
        className
      )}
    >
      {children}
    </button>
  );
};

// -------------------- BODY --------------------
export const ModalBody = ({ children, className }) => {
  const { open } = useModal();
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <Overlay />

          <motion.div
            ref={modalRef}
            className={cn(
              "min-h-[50%] max-h-[90%] md:max-w-[40%] bg-white dark:bg-neutral-950 border dark:border-neutral-800 rounded-2xl relative flex flex-col overflow-hidden shadow-lg",
              className
            )}
            initial={{ opacity: 0, scale: 0.5, rotateX: 40, y: 40 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
          >
            <CloseIcon />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// -------------------- CONTENT --------------------
export const ModalContent = ({ children, className }) => (
  <div className={cn("p-8 flex-1", className)}>{children}</div>
);

// -------------------- FOOTER --------------------
export const ModalFooter = ({ children, className }) => (
  <div className={cn("p-4 bg-gray-100 dark:bg-neutral-900", className)}>
    {children}
  </div>
);

// -------------------- OVERLAY --------------------
const Overlay = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/50 z-40"
  />
);

// -------------------- CLOSE BUTTON --------------------
const CloseIcon = () => {
  const { setOpen } = useModal();
  return (
    <button onClick={() => setOpen(false)} className="absolute top-4 right-4 z-50">
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        className="text-black dark:text-white hover:scale-110 transition-transform"
      >
        <path d="M18 6L6 18" />
        <path d="M6 6l12 12" />
      </svg>
    </button>
  );
};
