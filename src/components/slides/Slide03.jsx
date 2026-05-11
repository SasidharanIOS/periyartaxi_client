import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

const LT = {
  bg: "#f5f3ee", surface: "#ffffff",
  border: "rgba(0,0,0,0.07)", text: "#1a1814",
  textMuted: "#6b6860", amber: "#d97706",
  shadow: "0 2px 12px rgba(0,0,0,0.07)",
  shadowMd: "0 8px 28px rgba(0,0,0,0.10)",
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};
const headerVariants = {
  hidden: { opacity: 0, x: -36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 44, scale: 0.88, filter: "blur(5px)" },
  show: (i) => ({
    opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
    transition: {
      delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1],
      opacity: { duration: 0.4 }, filter: { duration: 0.3 },
    },
  }),
};
const emojiVariants = {
  hidden: { scale: 0, rotate: -25, opacity: 0 },
  show: (i) => ({
    scale: 1, rotate: 0, opacity: 1,
    transition: { delay: i * 0.07 + 0.25, type: "spring", stiffness: 340, damping: 16 },
  }),
};
const underlineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  show: (i) => ({
    scaleX: 1,
    transition: { delay: i * 0.07 + 0.38, duration: 0.35, ease: "easeOut" },
  }),
};
const shimmerVariants = {
  hidden: { x: "-100%", opacity: 0 },
  show: (i) => ({
    x: "220%", opacity: [0, 0.5, 0],
    transition: { delay: i * 0.07 + 0.15, duration: 0.6, ease: "easeInOut" },
  }),
};
const labelContainerVariants = {
  hidden: {},
  show: (i) => ({ transition: { staggerChildren: 0.05, delayChildren: i * 0.07 + 0.28 } }),
};
const wordVariants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

const services = [
  { image: "/corporatetravel.png",         label: "Corporate & Business Travel",  accent: "#0ea5e9", emoji: "🏢" },
  { image: "/wedding.png",                 label: "Wedding & Event Transport",    accent: "#ec4899", emoji: "💒" },
  { image: "/localtrips.png",              label: "Local Trips",                  accent: "#16a34a", emoji: "📍" },
  { image: "/outstationtrips.png",         label: "Outstation Trips",             accent: "#7c3aed", emoji: "✈️" },
  { image: "/monthlycontractservices.png", label: "Monthly Contract Services",    accent: "#ea580c", emoji: "📅" },
  { image: "/valetparking.png",            label: "Valet Parking Services",       accent: "#d97706", emoji: "🅿️" },
  { image: "/actingdriverservices.png",    label: "Acting Driver Services",       accent: "#0d9488", emoji: "👨‍✈️" },
  { image: "/tempocoachbusservices.png",   label: "Tempo / Coach / Bus Services", accent: "#dc2626", emoji: "🚌" },
];

function TiltCard({ children, accent, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [7, -7]);
  const rotateY = useTransform(x, [-80, 80], [-7, 7]);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); setHovered(false); };

  return (
    <motion.div style={{ perspective: 900 }}
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)} className="w-full h-full">
      <motion.div custom={index} variants={cardVariants}
        style={{
          rotateX, rotateY, transformStyle: "preserve-3d",
          border: `1.5px solid ${hovered ? accent + "55" : LT.border}`,
          background: LT.surface,
          boxShadow: hovered ? `0 16px 40px ${accent}28, 0 4px 16px rgba(0,0,0,0.09)` : LT.shadowMd,
        }}
        animate={{ scale: hovered ? 1.04 : 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative rounded-2xl overflow-hidden flex flex-col h-full cursor-default">
        {children}
        <motion.div custom={index} variants={shimmerVariants}
          className="absolute inset-0 pointer-events-none"
          style={{ background: `linear-gradient(105deg, transparent 38%, ${accent}40 50%, transparent 62%)`, zIndex: 10 }} />
        <motion.div animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.3 }}
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${accent}12 0%, transparent 65%)`, zIndex: 3 }} />
      </motion.div>
    </motion.div>
  );
}

function MobileCard({ svc, index, isActive, onTap }) {
  return (
    <motion.div custom={index} variants={cardVariants}
      onClick={onTap}
      whileTap={{ scale: 0.97 }}
      className="relative rounded-2xl overflow-hidden cursor-pointer flex flex-col"
      style={{
        background: LT.surface,
        border: `1.5px solid ${isActive ? svc.accent + "66" : LT.border}`,
        boxShadow: isActive ? `0 8px 28px ${svc.accent}28` : LT.shadow,
        transition: "border-color 0.25s, box-shadow 0.25s",
      }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
        <img src={svc.image} alt={svc.label} loading="lazy"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const fb = e.currentTarget.nextElementSibling;
            if (fb) fb.style.display = "flex";
          }}
        />
        <div className="absolute inset-0 items-center justify-center text-4xl"
          style={{ display: "none", background: `${svc.accent}15` }}>
          {svc.emoji}
        </div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.48) 100%)" }} />
        <div className="absolute top-1.5 right-1.5 w-7 h-7 rounded-lg flex items-center justify-center text-sm"
          style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(4px)", border: `1px solid ${svc.accent}28` }}>
          {svc.emoji}
        </div>
        <div className="absolute bottom-7 left-2 font-display leading-none"
          style={{ fontSize: "18px", color: "rgba(255,255,255,0.4)" }}>
          {String(index + 1).padStart(2, "0")}
        </div>
        {isActive && (
          <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
            className="absolute top-0 left-0 h-[3px]"
            style={{ background: svc.accent }} />
        )}
      </div>
      <div className="px-2.5 pb-2 pt-1.5 flex-shrink-0"
        style={{ borderTop: `1px solid ${svc.accent}18` }}>
        <p className="font-body font-bold leading-snug"
          style={{ fontSize: "11px", color: isActive ? svc.accent : LT.text, transition: "color 0.2s" }}>
          {svc.label}
        </p>
        <div className="mt-1 h-[2px] w-5 rounded-full" style={{ backgroundColor: svc.accent }} />
      </div>
    </motion.div>
  );
}

function ActiveDot({ accent, visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="absolute top-2 left-2 w-2 h-2 rounded-full z-20"
          style={{ backgroundColor: accent, boxShadow: `0 0 8px ${accent}90` }} />
      )}
    </AnimatePresence>
  );
}

export default function Slide03() {
  const [activeCard, setActiveCard] = useState(null);
  const [allVisible, setAllVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAllVisible(true), 200 + services.length * 80 + 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col" style={{ background: LT.bg }}>
      {/* Blobs */}
      <div className="absolute top-[-12%] right-[-8%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.10) 0%, transparent 70%)", filter: "blur(70px)" }} />
      <div className="absolute bottom-[-10%] left-[-6%] w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.09) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute inset-0 opacity-[0.45] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      {/* ── DESKTOP layout (unchanged) ── */}
      <motion.div variants={containerVariants} initial="hidden" animate="show"
        className="hidden md:flex md:flex-col relative z-10 h-full px-10 lg:px-14 pt-5 pb-14"
      >
        <motion.div variants={headerVariants} className="mb-3.5 flex-shrink-0">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.4 }} className="inline-flex items-center gap-2 mb-1.5">
            <motion.div animate={{ scaleX: [0, 1] }} transition={{ delay: 0.1, duration: 0.4 }}
              className="h-[2px] w-8 rounded origin-left" style={{ background: LT.amber + "88" }} />
            <p className="font-accent uppercase tracking-[8px] font-semibold"
              style={{ color: LT.amber, fontSize: "clamp(9px, 1vw, 13px)" }}>What We Offer</p>
            <motion.div animate={{ scaleX: [0, 1] }} transition={{ delay: 0.2, duration: 0.4 }}
              className="h-[2px] w-8 rounded origin-left" style={{ background: LT.amber + "88" }} />
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2 initial={{ y: "105%" }} animate={{ y: 0 }}
              transition={{ delay: 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="font-display leading-none"
              style={{ fontSize: "clamp(40px, 7.5vw, 96px)", color: LT.text }}>
              OUR{" "}
              <span style={{ WebkitTextStroke: `2.5px ${LT.amber}`, color: "transparent" }}>SERVICES</span>
            </motion.h2>
          </div>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="w-20 h-[4px] rounded-full mt-2 origin-left"
            style={{ background: `linear-gradient(90deg, ${LT.amber}, transparent)` }} />
        </motion.div>

        <div className="flex-1 grid grid-cols-4 grid-rows-2 gap-3 min-h-0" style={{ perspective: "1200px" }}>
          {services.map((svc, i) => (
            <TiltCard key={i} accent={svc.accent} index={i}>
              <ActiveDot accent={svc.accent} visible={activeCard === i} />
              <div className="relative w-full flex-1 overflow-hidden min-h-0">
                <motion.img src={svc.image} alt={svc.label} loading="lazy"
                  initial={{ scale: 1.14, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.07 + 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fb = e.currentTarget.nextElementSibling;
                    if (fb) fb.style.display = "flex";
                  }}
                />
                <div className="absolute inset-0 items-center justify-center text-5xl"
                  style={{ display: "none", background: `${svc.accent}15` }}>{svc.emoji}</div>
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.52) 100%)" }} />
                <motion.div custom={i} variants={emojiVariants}
                  className="absolute top-2 right-2 w-8 h-8 rounded-lg flex items-center justify-center text-base z-10"
                  style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(6px)", border: `1px solid ${svc.accent}30`, boxShadow: `0 2px 8px ${svc.accent}22` }}>
                  {svc.emoji}
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.07 + 0.48, duration: 0.3 }}
                  className="absolute bottom-7 left-2 font-display leading-none z-10"
                  style={{ fontSize: "clamp(16px, 2vw, 26px)", color: "rgba(255,255,255,0.45)" }}>
                  {String(i + 1).padStart(2, "0")}
                </motion.div>
              </div>
              <div className="flex-shrink-0 px-3 pb-3 pt-2 relative z-10"
                style={{ background: LT.surface, borderTop: `1px solid ${svc.accent}18` }}
                onMouseEnter={() => setActiveCard(i)} onMouseLeave={() => setActiveCard(null)}>
                <motion.div custom={i} variants={labelContainerVariants} className="flex flex-wrap gap-x-1">
                  {svc.label.split(" ").map((word, wi) => (
                    <motion.span key={wi} variants={wordVariants}
                      className="font-body font-bold leading-snug"
                      style={{ fontSize: "clamp(10px, 1.05vw, 13px)", color: activeCard === i ? svc.accent : LT.text, transition: "color 0.2s" }}>
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div custom={i} variants={underlineVariants}
                  className="mt-1.5 h-[2.5px] w-7 rounded-full"
                  style={{ backgroundColor: svc.accent, transformOrigin: "left" }} />
              </div>
              <motion.div
                animate={{ opacity: activeCard === i ? 0.18 : 0.07, scale: activeCard === i ? 1.2 : 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none"
                style={{ background: svc.accent }} />
            </TiltCard>
          ))}
        </div>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: services.length * 0.07 + 0.7, duration: 0.45 }}
          className="flex-shrink-0 mt-3 font-body text-center font-medium"
          style={{ color: LT.textMuted, fontSize: "clamp(10px, 1.1vw, 13px)" }}>
          End-to-end travel solutions for personal, corporate & event transportation needs
        </motion.p>
      </motion.div>

      {/* ── MOBILE: fully scrollable ── */}
      <motion.div variants={containerVariants} initial="hidden" animate="show"
        className="md:hidden relative z-10 w-full overflow-y-auto"
        style={{ WebkitOverflowScrolling: "touch", paddingBottom: "72px" }}
      >
        <div className="flex flex-col px-3.5 pt-3 gap-3">
          {/* Mobile header */}
          <motion.div variants={headerVariants}>
            <div className="inline-flex items-center gap-2 mb-1">
              <div className="h-[2px] w-5 rounded" style={{ background: LT.amber + "88" }} />
              <p className="font-accent uppercase tracking-[6px] font-semibold"
                style={{ color: LT.amber, fontSize: "10px" }}>What We Offer</p>
            </div>
            <h2 className="font-display leading-none"
              style={{ fontSize: "clamp(34px, 11vw, 54px)", color: LT.text }}>
              OUR{" "}
              <span style={{ WebkitTextStroke: `2px ${LT.amber}`, color: "transparent" }}>SERVICES</span>
            </h2>
            <div className="w-14 h-[3px] rounded-full mt-1.5"
              style={{ background: `linear-gradient(90deg, ${LT.amber}, transparent)` }} />
          </motion.div>

          {/* 2×4 mobile grid — natural height, no constraints */}
          <div className="grid grid-cols-2 gap-2">
            {services.map((svc, i) => (
              <MobileCard
                key={i} svc={svc} index={i}
                isActive={activeCard === i}
                onTap={() => setActiveCard(activeCard === i ? null : i)}
              />
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: services.length * 0.07 + 0.6 }}
            className="font-body text-center font-medium"
            style={{ color: LT.textMuted, fontSize: "11px" }}>
            End-to-end travel solutions for personal, corporate & event transportation
          </motion.p>
        </div>
      </motion.div>

      <AnimatePresence>
        {allVisible && (
          <motion.div key="flash" initial={{ opacity: 0.15 }} animate={{ opacity: 0 }}
            exit={{}} transition={{ duration: 0.8 }}
            className="absolute inset-0 pointer-events-none z-30"
            style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(217,119,6,0.10) 0%, transparent 65%)" }} />
        )}
      </AnimatePresence>
    </div>
  );
}