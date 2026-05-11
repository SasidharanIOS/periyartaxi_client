import React from "react";
import { motion } from "framer-motion";
import useCountUp from "../../hooks/useCountUp";

const LT = {
  bg: "#f5f3ee", surface: "#ffffff",
  text: "#1a1814", textMuted: "#6b6860", textFaint: "#b0ada8",
  amber: "#d97706", amberBg: "#fef3c7", border: "rgba(0,0,0,0.07)",
  shadowMd: "0 8px 28px rgba(0,0,0,0.09)",
  shadowLg: "0 16px 44px rgba(0,0,0,0.12)",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const vehicles = [
  { label: "Bus",              count: 15, img: "/touristbus.png",      accent: "#dc2626", accentBg: "#fee2e2" },
  { label: "Mini Bus",         count: 4,  img: "/coachvan.png",        accent: "#d97706", accentBg: "#fef3c7" },
  { label: "Tempo Traveller",  count: 12, img: "/tempotraveller.png",  accent: "#2563eb", accentBg: "#dbeafe" },
  { label: "Coach Van",        count: 12, img: "/minibus.jpg",         accent: "#16a34a", accentBg: "#dcfce7" },
  { label: "Mahindra Tourist", count: 6,  img: "/mahindratourist.jpg", accent: "#7c3aed", accentBg: "#ede9fe" },
  { label: "Urbania",          count: 8,  img: "/urbania.png",         accent: "#0d9488", accentBg: "#ccfbf1" },
];

/* ── Desktop card ── */
function VehicleCardDesktop({ label, count, img, accent }) {
  const n = useCountUp(count, 1400);
  return (
    <motion.div variants={item} whileHover={{ y: -5, scale: 1.02 }}
      className="relative overflow-hidden rounded-2xl group cursor-default w-full h-full"
      style={{ background: LT.surface, border: `1.5px solid ${accent}25`, boxShadow: LT.shadowMd }}>
      <img src={img} alt={label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          const fb = e.currentTarget.nextElementSibling;
          if (fb) fb.style.display = "flex";
        }} />
      <div className="hidden absolute inset-0 items-center justify-center text-5xl"
        style={{ background: `${accent}10` }}>🚌</div>
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: "52%", background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.62) 100%)" }} />
      <div className="absolute top-0 left-0 right-0 h-[3.5px] rounded-b-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        style={{ background: accent }} />
      <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full font-display leading-none z-10"
        style={{ fontSize: "clamp(22px, 3.2vw, 44px)", background: "rgba(255,255,255,0.90)", backdropFilter: "blur(6px)", color: accent, border: `1.5px solid ${accent}35`, boxShadow: `0 3px 12px ${accent}25` }}>
        {n}
      </div>
      <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 z-10">
        <span className="font-body text-white font-bold leading-tight block"
          style={{ fontSize: "clamp(11px, 1.4vw, 16px)", textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}>
          {label}
        </span>
      </div>
    </motion.div>
  );
}

/* ── Mobile card — fixed height so scroll works correctly ── */
function VehicleCardMobile({ label, count, img, accent, accentBg }) {
  const n = useCountUp(count, 1400);
  return (
    <motion.div variants={item}
      className="relative overflow-hidden rounded-2xl flex flex-col w-full"
      style={{
        background: LT.surface,
        border: `1.5px solid ${accent}25`,
        boxShadow: LT.shadowMd,
        height: "160px",
        flexShrink: 0,
      }}>
      {/* Image */}
      <div className="relative overflow-hidden flex-1 min-h-0">
        <img src={img} alt={label} className="w-full h-full object-cover" loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const fb = e.currentTarget.nextElementSibling;
            if (fb) fb.style.display = "flex";
          }} />
        <div className="hidden absolute inset-0 items-center justify-center text-3xl"
          style={{ background: `${accent}10` }}>🚌</div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)" }} />
        <div className="absolute top-1.5 right-1.5 font-display leading-none rounded-lg px-2 py-0.5 z-10"
          style={{ fontSize: "18px", background: "rgba(255,255,255,0.92)", backdropFilter: "blur(4px)", color: accent, border: `1.5px solid ${accent}30` }}>
          {n}
        </div>
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: accent }} />
      </div>
      {/* Label */}
      <div className="flex-shrink-0 px-3 py-2" style={{ borderTop: `2px solid ${accent}30` }}>
        <div className="font-body font-bold leading-tight" style={{ fontSize: "13px", color: LT.text }}>{label}</div>
        <span className="font-body font-semibold mt-0.5 px-2 py-0.5 rounded-full inline-block"
          style={{ fontSize: "10px", background: accentBg, color: accent }}>
          {n} vehicles
        </span>
      </div>
    </motion.div>
  );
}

export default function Slide07() {
  const total = useCountUp(87, 1800);
  const cars  = useCountUp(30, 1500);
  const large = useCountUp(57, 1500);

  const stats = [
    { val: total, label: "Total Tie-Up",  accent: "#d97706", accentBg: "#fef3c7" },
    { val: cars,  label: "Cars (Tie-up)", accent: "#2563eb", accentBg: "#dbeafe" },
    { val: large, label: "14–52 Seaters", accent: "#7c3aed", accentBg: "#ede9fe" },
  ];

  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: LT.bg }}>
      {/* Blobs */}
      <div className="absolute top-[-10%] left-[18%] w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(217,119,6,0.09)" }} />
      <div className="absolute bottom-[-6%] right-[-5%] w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(37,99,235,0.07)" }} />
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* ══════════════════════════════════════
          DESKTOP LAYOUT  (md and above)
          ══════════════════════════════════════ */}
      <motion.div variants={container} initial="hidden" animate="show"
        className="hidden md:flex relative z-10 w-full h-full flex-col px-8 pt-4 pb-3"
        style={{ gap: "clamp(5px, 1vh, 10px)" }}>

        {/* Header */}
        <motion.div variants={item} className="flex-shrink-0">
          <div className="inline-flex items-center gap-2 mb-1">
            <div className="h-[2px] w-5 rounded" style={{ background: LT.amber + "80" }} />
            <p className="font-accent uppercase font-semibold tracking-[5px]"
              style={{ fontSize: "clamp(9px, 1.1vw, 12px)", color: LT.amber }}>
              Tie-Up Network
            </p>
            <div className="h-[2px] w-5 rounded" style={{ background: LT.amber + "80" }} />
          </div>
          {/* ✅ FIXED: "VEHICLES" solid amber — desktop */}
          <h2 className="font-display leading-none"
            style={{ fontSize: "clamp(24px, 5.5vw, 72px)", color: LT.text }}>
            TIE-UP{" "}
            <span style={{ color: LT.amber }}>VEHICLES</span>
          </h2>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="w-10 h-[3px] rounded-full mt-1 origin-left"
            style={{ background: `linear-gradient(90deg, ${LT.amber}, transparent)` }} />
        </motion.div>

        {/* Stats */}
        <motion.div variants={item} className="grid grid-cols-3 gap-2 flex-shrink-0">
          {stats.map((s, i) => (
            <div key={i} className="rounded-xl flex flex-col items-center justify-center py-2"
              style={{ background: LT.surface, border: `1.5px solid ${s.accent}25`, boxShadow: LT.shadowMd }}>
              <div className="font-display leading-none"
                style={{ fontSize: "clamp(20px, 3.5vw, 48px)", color: s.accent }}>{s.val}</div>
              <div className="font-body font-semibold mt-0.5 text-center px-1"
                style={{ fontSize: "clamp(9px, 1vw, 12px)", color: LT.textMuted }}>{s.label}</div>
              <div className="mt-1 h-[3px] w-6 rounded-full" style={{ background: s.accent }} />
            </div>
          ))}
        </motion.div>

        {/* 3×2 image grid */}
        <div className="flex-1 min-h-0 grid grid-cols-3"
          style={{ gap: "clamp(6px, 1vh, 10px)", gridTemplateRows: "1fr 1fr" }}>
          {vehicles.map((v, i) => <VehicleCardDesktop key={i} {...v} />)}
        </div>

        {/* Footer */}
        <motion.div variants={item} className="flex-shrink-0 flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse" style={{ backgroundColor: LT.amber }} />
          <p className="font-body text-center font-medium"
            style={{ fontSize: "clamp(9px, 1vw, 12px)", color: LT.textMuted }}>
            30 Cars + 57 Large Vehicles (14 to 52 seaters) ={" "}
            <span style={{ color: LT.amber, fontWeight: 700 }}>87 Total</span>
          </p>
        </motion.div>
      </motion.div>

      {/* ══════════════════════════════════════
          MOBILE LAYOUT  (below md)
          — sticky header + scrollable cards
          ══════════════════════════════════════ */}
      <motion.div variants={container} initial="hidden" animate="show"
        className="md:hidden relative z-10 w-full h-full flex flex-col">

        {/* Sticky header — never scrolls */}
        <div className="flex-shrink-0 px-4 pt-4 pb-3" style={{ background: LT.bg }}>
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2 mb-1">
              <div className="h-[2px] w-4 rounded" style={{ background: LT.amber + "80" }} />
              <p className="font-accent uppercase font-semibold tracking-[5px]"
                style={{ fontSize: "9px", color: LT.amber }}>Tie-Up Network</p>
              <div className="h-[2px] w-4 rounded" style={{ background: LT.amber + "80" }} />
            </div>
            {/* ✅ FIXED: "VEHICLES" solid amber — mobile */}
            <h2 className="font-display leading-none" style={{ fontSize: "26px", color: LT.text }}>
              TIE-UP{" "}
              <span style={{ color: LT.amber }}>VEHICLES</span>
            </h2>
            <div className="w-10 h-[3px] rounded-full mt-1"
              style={{ background: `linear-gradient(90deg, ${LT.amber}, transparent)` }} />
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="grid grid-cols-3 gap-2 mt-3">
            {stats.map((s, i) => (
              <div key={i} className="rounded-xl flex flex-col items-center justify-center py-2"
                style={{ background: LT.surface, border: `1.5px solid ${s.accent}25`, boxShadow: LT.shadowMd }}>
                <div className="font-display leading-none" style={{ fontSize: "22px", color: s.accent }}>{s.val}</div>
                <div className="font-body font-semibold mt-0.5 text-center px-1"
                  style={{ fontSize: "9px", color: LT.textMuted }}>{s.label}</div>
                <div className="mt-1 h-[3px] w-5 rounded-full" style={{ background: s.accent }} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* ✅ Scrollable card grid — flex-1 + overflow-y-auto */}
        <div
          className="flex-1 overflow-y-auto px-4 pb-4"
          style={{ minHeight: 0, WebkitOverflowScrolling: "touch" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {vehicles.map((v, i) => <VehicleCardMobile key={i} {...v} />)}
          </div>
          {/* Footer inside scroll */}
          <div className="flex items-center justify-center gap-2 pt-3">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: LT.amber }} />
            <p className="font-body text-center font-medium" style={{ fontSize: "10px", color: LT.textMuted }}>
              30 Cars + 57 Large Vehicles ={" "}
              <span style={{ color: LT.amber, fontWeight: 700 }}>87 Total</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}