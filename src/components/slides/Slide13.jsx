import React from "react";
import { motion } from "framer-motion";
import { MdTrendingUp, MdClose, MdCheck, MdLocationOn } from "react-icons/md";
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
  divider: "rgba(0,0,0,0.07)",
  shadowMd: "0 8px 28px rgba(0,0,0,0.09)",
  shadowLg: "0 16px 44px rgba(0,0,0,0.13)",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48 } },
};

const comparison = [
  { feature: "Mobile App (Android + iOS)", us: true,  red: true  },
  { feature: "All-India Service Coverage",  us: true,  red: false },
  { feature: "Fleet of 152 Vehicles",        us: true,  red: false },
  { feature: "Acting Drivers (60+)",          us: true,  red: false },
  { feature: "Valet & Event Services",        us: true,  red: false },
  { feature: "Monthly Contract Services",     us: true,  red: false },
  { feature: "Bulk / Group Bookings",         us: true,  red: false },
  { feature: "10+ Years Operations",          us: true,  red: false },
];

const marketStats = [
  { label: "Market Size (2024)", val: "₹1.2 Lakh Cr", accent: "#d97706" },
  { label: "App-based Share",    val: "68%",            accent: "#2563eb" },
  { label: "CAGR Growth",        val: "14.3%",          accent: "#16a34a" },
  { label: "Tamil Nadu Users",   val: "2.8 Cr+",        accent: "#7c3aed" },
];

const reachTags  = ["Erode", "Coimbatore", "Chennai", "Salem", "Bangalore", "All India"];
const tagColors  = ["#d97706", "#2563eb", "#dc2626", "#16a34a", "#7c3aed", "#0d9488"];
const tagBgs     = ["#fef3c7", "#dbeafe", "#fee2e2", "#dcfce7", "#ede9fe", "#ccfbf1"];

/* ── Check / Cross icon ── */
function CheckIcon({ yes }) {
  return yes ? (
    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ background: "#dcfce7", border: "1.5px solid #16a34a40" }}>
      <MdCheck style={{ color: "#16a34a" }} size={14} />
    </div>
  ) : (
    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ background: "#fee2e2", border: "1.5px solid #dc262640" }}>
      <MdClose style={{ color: "#dc2626" }} size={14} />
    </div>
  );
}

/* ── Comparison table ── */
function ComparisonTable({ compact = false }) {
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col h-full"
      style={{ background: LT.surface, border: `1.5px solid ${LT.amber}22`, boxShadow: LT.shadowLg }}
    >
      {/* Header */}
      <div
        className="grid grid-cols-3 flex-shrink-0"
        style={{
          background: `linear-gradient(90deg, ${LT.amber}12, transparent)`,
          borderBottom: `1.5px solid ${LT.divider}`,
          padding: compact ? "8px 12px" : "12px 16px",
        }}
      >
        <div className="font-body font-bold uppercase tracking-wider"
          style={{ fontSize: "clamp(9px,1vw,13px)", color: LT.textFaint }}>
          Feature
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <div className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: LT.amberBg, color: LT.amber }}>
            <FaTaxi size={11} />
          </div>
          <span className="font-body font-bold"
            style={{ fontSize: "clamp(11px,1.2vw,16px)", color: LT.amber }}>
            <span className="hidden sm:inline">Periyar Taxi</span>
            <span className="inline sm:hidden">Us</span>
          </span>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: "#dc2626" }} />
          <span className="font-body font-bold"
            style={{ fontSize: "clamp(11px,1.2vw,16px)", color: "#dc2626" }}>
            Other Taxi
          </span>
        </div>
      </div>

      {/* Rows */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {comparison.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 + i * 0.06, duration: 0.38 }}
            className="grid grid-cols-3 items-center flex-1 transition-colors duration-150"
            style={{
              minHeight: 0,
              borderBottom: i < comparison.length - 1 ? `1px solid ${LT.divider}` : "none",
              padding: compact ? "0 12px" : "0 16px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = `${LT.amber}07`)}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <span className="font-body leading-tight pr-2"
              style={{
                fontSize: compact ? "clamp(9px,2.5vw,12px)" : "clamp(11px,1.2vw,15px)",
                color: LT.text,
              }}>
              {row.feature}
            </span>
            <div className="flex justify-center"><CheckIcon yes={row.us} /></div>
            <div className="flex justify-center"><CheckIcon yes={row.red} /></div>
          </motion.div>
        ))}
      </div>

      {/* Winner strip */}
      <div
        className="px-3 py-2 text-center flex-shrink-0 flex items-center justify-center gap-2"
        style={{
          background: `linear-gradient(90deg, transparent, ${LT.amber}14, transparent)`,
          borderTop: `1.5px solid ${LT.amber}25`,
        }}
      >
        <span className="font-body font-bold"
          style={{ fontSize: "clamp(10px,1.2vw,16px)", color: LT.amber }}>
          🏆 Periyar Taxi wins 7 / 8 categories vs Other Taxi
        </span>
      </div>
    </div>
  );
}

export default function Slide13() {
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col" style={{ background: LT.bg }}>
      {/* Blobs */}
      <div className="absolute top-[-10%] left-[15%] w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.10) 0%, transparent 70%)", filter: "blur(70px)" }} />
      <div className="absolute bottom-[-5%] right-[-5%] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(220,38,38,0.07) 0%, transparent 70%)", filter: "blur(65px)" }} />
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <motion.div
        variants={container} initial="hidden" animate="show"
        className="relative z-10 flex flex-col w-full h-full"
        style={{ padding: "clamp(10px,1.8vw,20px)", gap: "clamp(6px,1.2vh,12px)" }}
      >
        {/* ── Header ── */}
        <motion.div variants={item} className="flex-shrink-0">
          <div className="inline-flex items-center gap-2 mb-0.5">
            <div className="h-[2px] w-5 rounded" style={{ background: LT.amber + "80" }} />
            <p className="font-accent uppercase font-semibold tracking-[4px]"
              style={{ fontSize: "clamp(9px,1.2vw,13px)", color: LT.amber }}>
              🏦 Coming Soon
            </p>
          </div>

          {/* ✅ FIXED: "COMPETITION" solid amber — clear & visible on all screens */}
          <h2 className="font-display leading-none mt-0.5"
            style={{ fontSize: "clamp(26px,5.5vw,74px)", color: LT.text }}>
            MARKET &amp;{" "}
            <span style={{ color: LT.amber }}>COMPETITION</span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="rounded-full mt-1.5 origin-left"
            style={{ width: "clamp(40px,5vw,60px)", height: "3.5px", background: `linear-gradient(90deg, ${LT.amber}, transparent)` }}
          />
        </motion.div>

        {/* ══════════════════════════════════════
            DESKTOP LAYOUT (md and above) — UNCHANGED
            ══════════════════════════════════════ */}
        <div className="hidden md:flex flex-1 gap-3 min-h-0">
          {/* Left column */}
          <div className="flex flex-col gap-3 min-h-0" style={{ width: "38%" }}>
            {/* Market stats */}
            <motion.div variants={item}
              className="rounded-xl flex-1 flex flex-col relative overflow-hidden"
              style={{ background: LT.surface, border: `1.5px solid ${LT.amber}22`, boxShadow: LT.shadowMd, padding: "clamp(12px,1.5vw,18px)" }}>
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: LT.amber }} />
              <div className="flex items-center gap-2 mb-3 mt-1 flex-shrink-0">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: LT.amberBg, color: LT.amber }}>
                  <MdTrendingUp size={18} />
                </div>
                <span className="font-body font-bold"
                  style={{ fontSize: "clamp(13px,1.4vw,18px)", color: LT.text }}>
                  Indian Taxi Market
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                {marketStats.map((s, i) => (
                  <div key={i} className="flex justify-between items-center py-1.5"
                    style={{ borderBottom: i < marketStats.length - 1 ? `1px solid ${LT.divider}` : "none" }}>
                    <span className="font-body" style={{ fontSize: "clamp(11px,1.1vw,14px)", color: LT.textMuted }}>
                      {s.label}
                    </span>
                    <span className="font-body font-bold px-2.5 py-0.5 rounded-full"
                      style={{ fontSize: "clamp(12px,1.3vw,17px)", color: s.accent, background: s.accent + "12", border: `1px solid ${s.accent}28` }}>
                      {s.val}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Our Reach */}
            <motion.div variants={item}
              className="rounded-xl flex-1 flex flex-col relative overflow-hidden"
              style={{ background: LT.surface, border: "1.5px solid rgba(37,99,235,0.18)", boxShadow: LT.shadowMd, padding: "clamp(12px,1.5vw,18px)" }}>
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "#2563eb" }} />
              <div className="flex items-center gap-2 mb-2 mt-1 flex-shrink-0">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "#dbeafe", color: "#2563eb" }}>
                  <MdLocationOn size={18} />
                </div>
                <span className="font-body font-bold"
                  style={{ fontSize: "clamp(13px,1.4vw,18px)", color: LT.text }}>
                  Our Reach
                </span>
              </div>
              <p className="font-body leading-snug mb-2"
                style={{ fontSize: "clamp(11px,1.1vw,14px)", color: LT.textMuted }}>
                Origin:{" "}
                <span style={{ color: LT.amber, fontWeight: 700 }}>Erode, Tamil Nadu</span>
                <br />
                Service:{" "}
                <span style={{ color: "#2563eb", fontWeight: 700 }}>All India</span>{" "}
                — outstation, corporate, airport.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {reachTags.map((c, i) => (
                  <span key={c} className="px-2.5 py-0.5 rounded-full font-body font-semibold"
                    style={{ fontSize: "clamp(9px,1vw,12px)", background: tagBgs[i], border: `1px solid ${tagColors[i]}28`, color: tagColors[i] }}>
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Comparison table */}
          <motion.div variants={item} className="flex-1 min-h-0">
            <ComparisonTable compact={false} />
          </motion.div>
        </div>

        {/* ══════════════════════════════════════
            MOBILE LAYOUT (below md) — scrollable
            ══════════════════════════════════════ */}
        <div className="flex md:hidden flex-1 flex-col min-h-0 overflow-y-auto no-scrollbar"
          style={{ gap: "clamp(6px,2vw,10px)", WebkitOverflowScrolling: "touch" }}>

          {/* Market stats — 2×2 grid */}
          <motion.div variants={item}
            className="flex-shrink-0 rounded-xl relative overflow-hidden"
            style={{ background: LT.surface, border: `1.5px solid ${LT.amber}22`, boxShadow: LT.shadowMd, padding: "10px 12px" }}>
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: LT.amber }} />
            <div className="flex items-center gap-2 mb-2 mt-0.5">
              <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: LT.amberBg, color: LT.amber }}>
                <MdTrendingUp size={14} />
              </div>
              <span className="font-body font-bold" style={{ fontSize: 12, color: LT.text }}>
                Indian Taxi Market
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {marketStats.map((s, i) => (
                <div key={i} className="rounded-lg px-2.5 py-1.5 flex flex-col"
                  style={{ background: s.accent + "0d", border: `1px solid ${s.accent}20` }}>
                  <span className="font-body font-bold"
                    style={{ fontSize: "clamp(14px,4vw,18px)", color: s.accent }}>
                    {s.val}
                  </span>
                  <span className="font-body"
                    style={{ fontSize: "clamp(9px,2.5vw,11px)", color: LT.textMuted }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ✅ Reach tags — horizontal scroll on mobile */}
          <motion.div variants={item}
            className="flex-shrink-0 rounded-xl relative overflow-hidden"
            style={{ background: LT.surface, border: "1.5px solid rgba(37,99,235,0.18)", boxShadow: LT.shadowMd }}>
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "#2563eb" }} />
            <div
              className="flex items-center gap-2 overflow-x-auto no-scrollbar"
              style={{ padding: "8px 12px", paddingTop: "11px", WebkitOverflowScrolling: "touch" }}
            >
              <div className="flex items-center gap-1.5 flex-shrink-0"
                style={{ paddingRight: 10, borderRight: "1.5px solid rgba(37,99,235,0.25)" }}>
                <MdLocationOn size={14} style={{ color: "#2563eb" }} />
                <span className="font-body font-bold whitespace-nowrap" style={{ fontSize: 11, color: LT.text }}>
                  Our Reach:
                </span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {reachTags.map((c, i) => (
                  <span key={c} className="px-2.5 py-1 rounded-full font-body font-semibold whitespace-nowrap flex-shrink-0"
                    style={{
                      fontSize: "clamp(10px,2.8vw,12px)",
                      background: tagBgs[i],
                      border: `1.5px solid ${tagColors[i]}35`,
                      color: tagColors[i],
                      boxShadow: `0 2px 8px ${tagColors[i]}18`,
                    }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Comparison table — takes remaining space, no extra scroll */}
          <motion.div variants={item} className="flex-shrink-0"
            style={{ minHeight: "340px" }}>
            <ComparisonTable compact={true} />
          </motion.div>

          {/* Bottom padding */}
          <div className="flex-shrink-0 h-2" />
        </div>
      </motion.div>
    </div>
  );
}