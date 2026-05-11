import React from "react";
import { motion } from "framer-motion";
import {
  MdSmartphone,
  MdTrendingUp,
  MdLocationOn,
  MdVerified,
} from "react-icons/md";
import { FaTaxi } from "react-icons/fa";

const LT = {
  bg: "#f5f3ee",
  surface: "#ffffff",
  text: "#1a1814",
  textMuted: "#6b6860",
  textFaint: "#b0ada8",
  amber: "#d97706",
  amberLight: "#f59e0b",
  amberBg: "#fef3c7",
  border: "rgba(0,0,0,0.07)",
  shadowMd: "0 8px 28px rgba(0,0,0,0.09)",
  shadowLg: "0 16px 44px rgba(0,0,0,0.13)",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const features = [
  {
    icon: <MdSmartphone size={18} />,
    title: "Customer App",
    desc: "Book rides, set pickup & drop via live map. Android & iOS.",
    accent: "#d97706",
    accentBg: "#fef3c7",
  },
  {
    icon: <FaTaxi size={16} />,
    title: "Driver App",
    desc: "Real-time bookings, map navigation & earnings tracking.",
    accent: "#2563eb",
    accentBg: "#dbeafe",
  },
  {
    icon: <MdVerified size={18} />,
    title: "Admin Dashboard",
    desc: "Fleet, bookings, billing & full analytics control.",
    accent: "#7c3aed",
    accentBg: "#ede9fe",
  },
  {
    icon: <MdTrendingUp size={18} />,
    title: "Revenue Growth",
    desc: "App model drives 3–5× more bookings vs manual ops.",
    accent: "#16a34a",
    accentBg: "#dcfce7",
  },
];

/* ── Reusable map SVG grid ── */
function MapGrid({ dashH = "10,8", dashV = "8,8", amber }) {
  return (
    <svg width="100%" height="100%" className="absolute inset-0 opacity-40">
      <rect x="0" y="34%" width="100%" height="10%" fill="#2a2a2a" />
      <rect x="0" y="66%" width="100%" height="8%" fill="#2a2a2a" />
      <rect x="28%" y="0" width="10%" height="100%" fill="#2a2a2a" />
      <rect x="62%" y="0" width="8%" height="100%" fill="#2a2a2a" />
      <line x1="0" y1="39%" x2="100%" y2="39%" stroke={amber} strokeWidth="1" strokeDasharray={dashH} />
      <line x1="33%" y1="0" x2="33%" y2="100%" stroke={amber} strokeWidth="1" strokeDasharray={dashV} />
    </svg>
  );
}

/* ── Desktop phone mockup (tall) ── */
function PhoneMockupDesktop() {
  return (
    <div className="relative" style={{ width: 220, height: 400 }}>
      <div
        className="relative rounded-[30px] overflow-hidden w-full h-full flex flex-col"
        style={{
          background: LT.text,
          border: `3px solid ${LT.amber}`,
          boxShadow: `0 0 36px ${LT.amber}40, 0 16px 48px rgba(0,0,0,0.22)`,
        }}
      >
        {/* Status bar */}
        <div className="w-full flex items-center justify-between px-3 flex-shrink-0"
          style={{ background: LT.amber, height: 24 }}>
          <span className="font-body font-extrabold" style={{ fontSize: 8, color: "#fff" }}>9:41</span>
          <div className="w-10 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
        </div>

        <div className="flex flex-col gap-1.5 flex-1 min-h-0 overflow-hidden px-2.5 pt-1.5 pb-2">
          <div className="font-body font-extrabold flex-shrink-0" style={{ fontSize: 11, color: LT.amber }}>
            Periyar Taxi
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden relative flex-1 min-h-0"
            style={{ background: "linear-gradient(135deg, #1a2a1a, #0f1e2e)" }}>
            {/* ✅ FIXED: <line> elements inside reusable component, no corruption */}
            <MapGrid dashH="10,8" dashV="8,8" amber={LT.amber} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
              <MdLocationOn style={{ color: LT.amber }} size={22} />
            </div>
            <div className="absolute bottom-2 left-2 rounded-lg px-1.5 py-0.5"
              style={{ background: "rgba(0,0,0,0.70)" }}>
              <span className="font-body text-white font-semibold" style={{ fontSize: 7 }}>📍 Erode, TN</span>
            </div>
          </div>

          {/* Inputs */}
          <div className="rounded-lg p-1.5 flex flex-col gap-1 flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.07)" }}>
            {["Pickup Location", "Drop Location"].map((ph, i) => (
              <div key={ph} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: i === 0 ? "#4ade80" : LT.amber }} />
                <div className="flex-1 rounded-lg px-1.5 flex items-center font-body"
                  style={{ background: "rgba(255,255,255,0.08)", fontSize: 8, color: LT.textFaint, height: 16 }}>
                  {ph}
                </div>
              </div>
            ))}
          </div>

          {/* Chips */}
          <div className="flex gap-1 flex-wrap flex-shrink-0">
            {["Cab 🚗", "Innova 🚐", "Bus 🚌"].map((s) => (
              <div key={s} className="px-2 rounded-full font-body font-semibold"
                style={{ background: `${LT.amber}18`, border: `1px solid ${LT.amber}40`, color: LT.amber, fontSize: 8, lineHeight: "16px" }}>
                {s}
              </div>
            ))}
          </div>

          {/* Book button */}
          <div className="w-full rounded-lg text-center font-body font-extrabold flex-shrink-0"
            style={{ background: `linear-gradient(90deg, ${LT.amber}, ${LT.amberLight})`, color: "#fff", fontSize: 9, padding: "5px 0", boxShadow: `0 3px 10px ${LT.amber}50` }}>
            🚕 BOOK NOW
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute -top-3 -right-14 px-2.5 py-1 rounded-full font-body font-bold text-white"
        style={{ background: `linear-gradient(90deg, ${LT.amber}, ${LT.amberLight})`, boxShadow: `0 4px 14px ${LT.amber}40`, whiteSpace: "nowrap", fontSize: 10 }}>
        🤖 AI Powered
      </motion.div>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-3 -left-14 px-2.5 py-1 rounded-full font-body font-bold"
        style={{ background: LT.surface, border: `1.5px solid ${LT.amber}40`, color: LT.amber, boxShadow: LT.shadowMd, whiteSpace: "nowrap", fontSize: 10 }}>
        🌍 All India
      </motion.div>
      <div className="absolute inset-0 rounded-[30px] pointer-events-none"
        style={{ border: `1px solid ${LT.amber}28` }} />
    </div>
  );
}

/* ── Mobile phone mockup (compact vertical) ── */
function PhoneMockupMobile() {
  return (
    <div
      className="relative flex flex-col rounded-[20px] overflow-hidden flex-shrink-0"
      style={{
        width: "100%",
        background: LT.text,
        border: `2.5px solid ${LT.amber}`,
        boxShadow: `0 0 24px ${LT.amber}35, 0 8px 28px rgba(0,0,0,0.22)`,
      }}
    >
      {/* Status bar */}
      <div className="w-full flex items-center justify-between px-3 flex-shrink-0"
        style={{ background: LT.amber, height: 22 }}>
        <span className="font-body font-extrabold" style={{ fontSize: 8, color: "#fff" }}>9:41</span>
        <div className="w-8 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
      </div>

      <div className="flex flex-col gap-1.5 px-2.5 pt-1.5 pb-2">
        <div className="font-body font-extrabold" style={{ fontSize: 10, color: LT.amber }}>Periyar Taxi</div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden relative"
          style={{ height: 72, background: "linear-gradient(135deg, #1a2a1a, #0f1e2e)" }}>
          {/* ✅ FIXED: <line> elements inside reusable component, no corruption */}
          <MapGrid dashH="8,6" dashV="6,6" amber={LT.amber} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
            <MdLocationOn style={{ color: LT.amber }} size={16} />
          </div>
          <div className="absolute bottom-1 left-1.5 rounded px-1 py-0.5"
            style={{ background: "rgba(0,0,0,0.75)" }}>
            <span className="font-body text-white" style={{ fontSize: 7 }}>📍 Erode, TN</span>
          </div>
        </div>

        {/* Inputs */}
        <div className="rounded-lg p-1 flex flex-col gap-1"
          style={{ background: "rgba(255,255,255,0.07)" }}>
          {["Pickup Location", "Drop Location"].map((ph, i) => (
            <div key={ph} className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: i === 0 ? "#4ade80" : LT.amber }} />
              <div className="flex-1 rounded px-1 font-body"
                style={{ background: "rgba(255,255,255,0.08)", fontSize: 7, color: LT.textFaint, height: 14, lineHeight: "14px" }}>
                {ph}
              </div>
            </div>
          ))}
        </div>

        {/* Chips */}
        <div className="flex gap-1 flex-wrap">
          {["Cab 🚗", "Innova 🚐", "Bus 🚌"].map((s) => (
            <div key={s} className="px-1.5 rounded-full font-body"
              style={{ background: `${LT.amber}18`, border: `1px solid ${LT.amber}40`, color: LT.amber, fontSize: 7, lineHeight: "14px" }}>
              {s}
            </div>
          ))}
        </div>

        {/* Book button */}
        <div className="w-full rounded font-body font-extrabold text-center"
          style={{ background: `linear-gradient(90deg, ${LT.amber}, ${LT.amberLight})`, color: "#fff", fontSize: 8, padding: "4px 0", boxShadow: `0 2px 8px ${LT.amber}50` }}>
          🚕 BOOK NOW
        </div>
      </div>
    </div>
  );
}

export default function Slide11() {
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col" style={{ background: LT.bg }}>
      {/* Blobs */}
      <div className="absolute top-[-10%] right-[-8%] w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.10) 0%, transparent 70%)", filter: "blur(70px)" }} />
      <div className="absolute bottom-[-8%] left-[-6%] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)", filter: "blur(65px)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "55px 55px", opacity: 0.6 }} />

      {/* ══════════════════════════════════════
          DESKTOP LAYOUT (md and above)
          ══════════════════════════════════════ */}
      <motion.div
        variants={container} initial="hidden" animate="show"
        className="hidden md:flex relative z-10 flex-col flex-1 min-h-0"
        style={{ padding: "clamp(10px,2.5vw,28px)", gap: "clamp(5px,1vh,12px)" }}
      >
        {/* Badge */}
        <motion.div variants={item} className="flex-shrink-0">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-body font-bold uppercase tracking-widest"
            style={{ fontSize: "clamp(8px,1vw,11px)", background: LT.amberBg, border: `1.5px solid ${LT.amber}40`, color: LT.amber }}>
            🏦 Coming Soon
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div variants={item} className="flex-shrink-0">
          <h2 className="font-display leading-none tracking-wide"
            style={{ fontSize: "clamp(22px,5.5vw,96px)", color: LT.text }}>
            MOBILE APP{" "}
            <span style={{ color: LT.amber }}>VISION</span>
          </h2>
          <p className="font-body mt-0.5 leading-snug"
            style={{ fontSize: "clamp(9px,1.2vw,15px)", color: LT.textMuted, maxWidth: "60ch" }}>
            Transforming Periyar Taxi into a{" "}
            <span style={{ color: LT.amber, fontWeight: 700 }}>technology-driven ride-hailing platform</span>{" "}
            serving all of India.
          </p>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
            className="rounded-full mt-1 origin-left"
            style={{ width: "clamp(32px,4vw,52px)", height: 3, background: `linear-gradient(90deg, ${LT.amber}, transparent)` }} />
        </motion.div>

        {/* Feature list left + phone right */}
        <div className="grid grid-cols-2 gap-5 flex-1 min-h-0">
          <motion.div variants={item} className="flex flex-col gap-3">
            {features.map((pt, i) => (
              <motion.div key={i} whileHover={{ x: 5, scale: 1.012 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="flex items-start gap-4 rounded-2xl px-5 py-4 flex-1 relative overflow-hidden"
                style={{ background: LT.surface, border: `1.5px solid ${pt.accent}22`, boxShadow: LT.shadowMd }}>
                <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full" style={{ background: pt.accent }} />
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10"
                  style={{ background: pt.accentBg, border: `1.5px solid ${pt.accent}30`, color: pt.accent }}>
                  {pt.icon}
                </div>
                <div className="flex-1 min-w-0 relative z-10">
                  <div className="font-body font-extrabold leading-tight"
                    style={{ fontSize: "clamp(13px,1.4vw,19px)", color: LT.text }}>
                    {pt.title}
                  </div>
                  <div className="font-body mt-1 leading-relaxed"
                    style={{ fontSize: "clamp(11px,1.1vw,14px)", color: LT.textMuted }}>
                    {pt.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={item} className="flex items-center justify-center">
            <PhoneMockupDesktop />
          </motion.div>
        </div>
      </motion.div>

      {/* ══════════════════════════════════════
          MOBILE LAYOUT (below md)
          — sticky header + scrollable content
          ══════════════════════════════════════ */}
      <motion.div
        variants={container} initial="hidden" animate="show"
        className="md:hidden relative z-10 w-full h-full flex flex-col"
        style={{ background: LT.bg }}
      >
        {/* Sticky header */}
        <div className="flex-shrink-0 px-4 pt-4 pb-3">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-body font-bold uppercase tracking-widest mb-2"
              style={{ fontSize: "9px", background: LT.amberBg, border: `1.5px solid ${LT.amber}40`, color: LT.amber }}>
              🏦 Coming Soon
            </span>
            <h2 className="font-display leading-none tracking-wide" style={{ fontSize: "28px", color: LT.text }}>
              MOBILE APP{" "}
              <span style={{ color: LT.amber }}>VISION</span>
            </h2>
            <p className="font-body mt-1 leading-snug"
              style={{ fontSize: "11px", color: LT.textMuted, maxWidth: "90%" }}>
              Transforming Periyar Taxi into a{" "}
              <span style={{ color: LT.amber, fontWeight: 700 }}>technology-driven ride-hailing platform</span>{" "}
              serving all of India.
            </p>
            <div className="w-10 h-[3px] rounded-full mt-1.5"
              style={{ background: `linear-gradient(90deg, ${LT.amber}, transparent)` }} />
          </motion.div>
        </div>

        {/* Scrollable area */}
        <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-4"
          style={{ minHeight: 0, WebkitOverflowScrolling: "touch" }}>
          <motion.div variants={item} className="flex gap-3" style={{ alignItems: "flex-start" }}>
            {/* Left: 2×2 feature grid */}
            <div className="flex-1 min-w-0 grid grid-cols-2 gap-2" style={{ alignContent: "start" }}>
              {features.map((pt, i) => (
                <div key={i}
                  className="rounded-xl px-2.5 pt-3 pb-2.5 relative overflow-hidden flex flex-col gap-1"
                  style={{ background: LT.surface, border: `1.5px solid ${pt.accent}22`, boxShadow: LT.shadowMd }}>
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl" style={{ background: pt.accent }} />
                  <div className="flex items-center gap-1.5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: pt.accentBg, color: pt.accent }}>
                      {pt.icon}
                    </div>
                    <div className="font-body font-extrabold leading-tight"
                      style={{ fontSize: "clamp(10px,2.8vw,13px)", color: LT.text }}>
                      {pt.title}
                    </div>
                  </div>
                  <div className="font-body leading-snug"
                    style={{ fontSize: "clamp(9px,2.3vw,11px)", color: LT.textMuted }}>
                    {pt.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: compact phone mockup */}
            <div className="flex-shrink-0 flex flex-col"
              style={{ width: "clamp(110px, 34%, 145px)", alignSelf: "flex-start" }}>
              <PhoneMockupMobile />
            </div>
          </motion.div>
          <div className="h-2" />
        </div>
      </motion.div>
    </div>
  );
}