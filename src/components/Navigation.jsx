import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation({ current, total, onNext, onPrev, onGoTo }) {
  const [showDots, setShowDots] = useState(false);

  return (
    <>
      {/* ── DESKTOP Navigation (md and above) ── */}
      <div className="hidden md:flex fixed bottom-0 left-0 right-0 z-50 items-center justify-center gap-4 px-4 py-2"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 100%)" }}
      >
        {/* Prev */}
        <motion.button
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          onClick={onPrev}
          disabled={current === 0}
          aria-label="Previous slide"
          className="w-9 h-9 rounded-full bg-taxi-card border border-taxi-border flex items-center justify-center text-taxi-yellow hover:bg-taxi-yellow hover:text-taxi-black transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed flex-shrink-0"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
          </svg>
        </motion.button>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <motion.button
              key={i}
              onClick={() => onGoTo(i)}
              aria-label={`Slide ${i + 1}`}
              animate={{
                width: i === current ? 22 : 7,
                backgroundColor: i === current ? "#F5B800" : "#2E2E2E",
              }}
              transition={{ duration: 0.3 }}
              className="h-[6px] rounded-full"
              whileHover={{ scale: 1.3, backgroundColor: "#F5B800" }}
            />
          ))}
        </div>

        {/* Next */}
        <motion.button
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          onClick={onNext}
          disabled={current === total - 1}
          aria-label="Next slide"
          className="w-9 h-9 rounded-full bg-taxi-card border border-taxi-border flex items-center justify-center text-taxi-yellow hover:bg-taxi-yellow hover:text-taxi-black transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed flex-shrink-0"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
          </svg>
        </motion.button>

        {/* Counter */}
        <div className="absolute right-4 bottom-2 text-taxi-muted font-body"
          style={{ fontSize: "clamp(10px, 1.1vw, 13px)" }}>
          {current + 1} / {total}
        </div>
      </div>

      {/* ── MOBILE Navigation (below md) ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)" }}
      >
        <div className="flex items-center justify-between px-4 py-2.5 pb-3">

          {/* Prev arrow */}
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={onPrev}
            disabled={current === 0}
            aria-label="Previous slide"
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 disabled:opacity-25"
            style={{
              background: "rgba(245,184,0,0.15)",
              border: "1.5px solid rgba(245,184,0,0.35)",
              color: "#F5B800",
            }}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
          </motion.button>

          {/* Center: counter + dot toggle */}
          <div className="flex flex-col items-center gap-1">
            {/* Tap counter to show dot picker */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDots(!showDots)}
              className="font-body font-bold tabular-nums"
              style={{ color: "#F5B800", fontSize: "15px", letterSpacing: "0.05em" }}
            >
              {current + 1} / {total}
            </motion.button>

            {/* Condensed dot strip — always visible on mobile */}
            <div className="flex items-center gap-1">
              {Array.from({ length: total }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    width: i === current ? 16 : 5,
                    backgroundColor: i === current ? "#F5B800" : "rgba(255,255,255,0.25)",
                  }}
                  transition={{ duration: 0.25 }}
                  className="h-[4px] rounded-full"
                />
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={onNext}
            disabled={current === total - 1}
            aria-label="Next slide"
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 disabled:opacity-25"
            style={{
              background: "rgba(245,184,0,0.15)",
              border: "1.5px solid rgba(245,184,0,0.35)",
              color: "#F5B800",
            }}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </motion.button>
        </div>

        {/* Expandable full dot grid — tapping counter opens this */}
        <AnimatePresence>
          {showDots && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.22 }}
              className="absolute bottom-full left-0 right-0 mb-1 mx-3 rounded-2xl px-4 py-3"
              style={{
                background: "rgba(17,17,17,0.96)",
                border: "1px solid rgba(245,184,0,0.2)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p className="font-body text-center mb-2.5" style={{ color: "rgba(245,184,0,0.6)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Jump to slide
              </p>
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: total }).map((_, i) => (
                  <motion.button
                    key={i}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => { onGoTo(i); setShowDots(false); }}
                    className="h-9 rounded-xl font-body font-bold text-sm flex items-center justify-center transition-all"
                    style={{
                      background: i === current ? "#F5B800" : "rgba(255,255,255,0.07)",
                      color: i === current ? "#111111" : "rgba(255,255,255,0.55)",
                      border: i === current ? "none" : "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {i + 1}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}