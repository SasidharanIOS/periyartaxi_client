import React from "react";
import { motion } from "framer-motion";
import useCountUp from "../../hooks/useCountUp";

const LT = {
  bg: "#f5f3ee", surface: "#ffffff",
  text: "#1a1814", textMuted: "#6b6860", textFaint: "#b0ada8",
  amber: "#d97706", border: "rgba(0,0,0,0.07)",
  shadowMd: "0 8px 28px rgba(0,0,0,0.09)",
  shadowLg: "0 16px 44px rgba(0,0,0,0.12)",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const VEHICLE_IMAGES = {
  direct:     "/directcontrol.png",
  attachment: "/attachment.png",
  tieup:      "/tieupimage.png",
};

const FLEET_DATA = [
  {
    key: "direct",
    label: "Direct Control",
    sublabel: "Company-owned & operated",
    value: 21,
    accent: "#d97706", accentBg: "#fef3c7", accentDim: "rgba(217,119,6,0.08)",
    img: VEHICLE_IMAGES.direct, imgAlt: "Direct Control Vehicles",
    badge: "SEDAN / MINI",
    vehicles: ["Innova ×12", "Ertiga ×7", "Xylo ×5"],
  },
  {
    key: "attachment",
    label: "Attachment",
    sublabel: "Partner-affiliated fleet",
    value: 44,
    accent: "#2563eb", accentBg: "#dbeafe", accentDim: "rgba(37,99,235,0.07)",
    img: VEHICLE_IMAGES.attachment, imgAlt: "Attachment Vehicles",
    badge: "SUV / INNOVA",
    vehicles: ["Creta", "Swift Dzire ×7", "Amaze ×2", "Aura ×3"],
  },
  {
    key: "tieup",
    label: "Tie-Up",
    sublabel: "Network tie-up vehicles",
    value: 87,
    accent: "#7c3aed", accentBg: "#ede9fe", accentDim: "rgba(124,58,237,0.07)",
    img: VEHICLE_IMAGES.tieup, imgAlt: "Tie-Up Vehicles – Bus / Traveller",
    badge: "URBANIA / TRAVELLER",
    vehicles: ["Bus ×15", "Tempo ×12", "Coach ×12", "Urbania ×8"],
  },
];

/* ── Desktop vertical card ── */
function FleetCardDesktop({ data, total }) {
  const count = useCountUp(data.value, 1600);
  const pct = Math.round((data.value / total) * 100);

  return (
    <motion.div variants={item} whileHover={{ y: -5, scale: 1.012 }}
      className="relative overflow-hidden rounded-2xl flex flex-col h-full transition-all duration-300"
      style={{ background: LT.surface, border: `1.5px solid ${data.accent}28`, boxShadow: LT.shadowMd }}>

      {/* Image */}
      <div className="relative w-full overflow-hidden flex-1 min-h-0">
        <img src={data.img} alt={data.imgAlt}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 55%", minHeight: "160px" }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentNode.style.background = `linear-gradient(135deg, ${data.accentDim}, ${data.accentBg}44)`;
          }} />
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: "40%", background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.40) 100%)" }} />
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full font-accent font-bold tracking-widest"
          style={{ fontSize: "clamp(9px, 1vw, 12px)", background: "rgba(255,255,255,0.88)", border: `1px solid ${data.accent}35`, color: data.accent, backdropFilter: "blur(8px)", boxShadow: `0 2px 10px ${data.accent}20` }}>
          {data.badge}
        </div>
        <div className="absolute bottom-3 right-4 font-display leading-none"
          style={{ fontSize: "clamp(52px, 7.5vw, 96px)", color: "#ffffff", textShadow: `0 2px 20px rgba(0,0,0,0.55), 0 0 30px ${data.accent}50`, lineHeight: 0.9 }}>
          {count}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2.5 flex-shrink-0"
        style={{ padding: "clamp(12px, 1.8vw, 20px)", borderTop: `2.5px solid ${data.accent}20` }}>
        <div>
          <div className="w-8 h-[3px] rounded-full mb-2" style={{ background: data.accent }} />
          <div className="font-display leading-none"
            style={{ fontSize: "clamp(16px, 2.2vw, 26px)", color: LT.text, letterSpacing: "0.04em" }}>
            {data.label.toUpperCase()}
          </div>
          <div className="font-body mt-0.5" style={{ fontSize: "clamp(10px, 1.1vw, 13px)", color: LT.textMuted }}>
            {data.sublabel}
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {data.vehicles.map((v) => (
            <span key={v} className="font-body font-semibold rounded-full px-2.5 py-0.5"
              style={{ fontSize: "clamp(8px, 0.9vw, 11px)", background: data.accentBg, color: data.accent, border: `1px solid ${data.accent}30` }}>
              {v}
            </span>
          ))}
        </div>
        <div>
          <div className="w-full rounded-full overflow-hidden" style={{ height: "6px", background: "rgba(0,0,0,0.07)" }}>
            <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }}
              transition={{ duration: 1.3, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${data.accent}80, ${data.accent})`, boxShadow: `0 0 8px ${data.accent}50` }} />
          </div>
          <div className="mt-1 text-right font-body font-semibold"
            style={{ fontSize: "clamp(9px, 0.9vw, 11px)", color: LT.textFaint }}>
            {pct}% of total fleet
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Mobile horizontal card ── */
function FleetCardMobile({ data, total }) {
  const count = useCountUp(data.value, 1600);
  const pct = Math.round((data.value / total) * 100);

  return (
    <motion.div variants={item}
      className="relative overflow-hidden rounded-2xl flex flex-row"
      style={{ background: LT.surface, border: `1.5px solid ${data.accent}28`, boxShadow: LT.shadowMd, minHeight: "130px" }}>

      {/* Image — left 38% */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ width: "38%" }}>
        <img src={data.img} alt={data.imgAlt}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 55%" }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentNode.style.background = `linear-gradient(135deg, ${data.accentDim}, ${data.accentBg}44)`;
          }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent 55%, rgba(255,255,255,0.08) 100%)" }} />

        {/* Badge */}
        <div className="absolute top-2 left-1.5 px-1.5 py-0.5 rounded-full font-accent font-bold"
          style={{ fontSize: "8px", background: "rgba(255,255,255,0.9)", color: data.accent, border: `1px solid ${data.accent}30`, backdropFilter: "blur(4px)", letterSpacing: "0.04em" }}>
          {data.badge}
        </div>

        {/* Count */}
        <div className="absolute bottom-2 right-2 font-display leading-none"
          style={{ fontSize: "clamp(32px, 8vw, 46px)", color: "#fff", textShadow: `0 2px 12px rgba(0,0,0,0.6), 0 0 18px ${data.accent}50` }}>
          {count}
        </div>

        {/* Scrim */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: "50%", background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.45))" }} />
      </div>

      {/* Content — right */}
      <div className="flex flex-col justify-center flex-1 px-3 py-3 gap-2"
        style={{ borderLeft: `3px solid ${data.accent}` }}>
        <div>
          <div className="w-6 h-[2.5px] rounded-full mb-1.5" style={{ background: data.accent }} />
          <div className="font-display leading-none" style={{ fontSize: "16px", color: LT.text, letterSpacing: "0.04em" }}>
            {data.label.toUpperCase()}
          </div>
          <div className="font-body mt-0.5" style={{ fontSize: "11px", color: LT.textMuted }}>
            {data.sublabel}
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {data.vehicles.map((v) => (
            <span key={v} className="font-body font-semibold rounded-full px-2 py-0.5"
              style={{ fontSize: "9px", background: data.accentBg, color: data.accent, border: `1px solid ${data.accent}28` }}>
              {v}
            </span>
          ))}
        </div>

        {/* Progress */}
        <div>
          <div className="w-full rounded-full overflow-hidden" style={{ height: "5px", background: "rgba(0,0,0,0.07)" }}>
            <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${data.accent}80, ${data.accent})` }} />
          </div>
          <div className="mt-0.5 text-right font-body font-semibold"
            style={{ fontSize: "9px", color: LT.textFaint }}>
            {pct}% of fleet
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Slide06() {
  const total = useCountUp(152, 2000);

  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col" style={{ background: LT.bg }}>
      {/* Blobs */}
      <div className="absolute top-[-10%] right-[-6%] rounded-full blur-3xl pointer-events-none"
        style={{ width: "40vw", height: "40vw", background: "rgba(217,119,6,0.09)" }} />
      <div className="absolute bottom-[-8%] left-[-5%] rounded-full blur-3xl pointer-events-none"
        style={{ width: "34vw", height: "34vw", background: "rgba(37,99,235,0.07)" }} />
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <motion.div variants={container} initial="hidden" animate="show"
        className="relative z-10 w-full flex flex-col flex-1 min-h-0 px-4 md:px-8 pt-4 md:pt-5 pb-4 gap-2.5 md:gap-3">

        {/* TITLE ROW */}
        <motion.div variants={item}
          className="flex items-start justify-between gap-3 flex-wrap flex-shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 mb-1.5">
              <div className="h-[2px] w-5 rounded" style={{ background: LT.amber + "80" }} />
              <p className="font-accent uppercase font-semibold tracking-[5px]"
                style={{ fontSize: "clamp(10px, 1.1vw, 13px)", color: LT.amber }}>
                Vehicle Network
              </p>
              <div className="h-[2px] w-5 rounded" style={{ background: LT.amber + "80" }} />
            </div>
            <h2 className="font-display leading-none"
              style={{ fontSize: "clamp(30px, 7vw, 86px)", color: LT.text, letterSpacing: "-0.01em" }}>
              FLEET{" "}
              <span style={{ WebkitTextStroke: `2px ${LT.amber}`, color: "transparent" }}>STRENGTH</span>
            </h2>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="w-14 h-[3px] rounded-full mt-1.5 origin-left"
              style={{ background: `linear-gradient(90deg, ${LT.amber}, transparent)` }} />
          </div>

          {/* Total badge */}
          <motion.div variants={item} className="rounded-2xl px-4 py-2.5 text-center flex-shrink-0"
            style={{ background: LT.surface, border: `1.5px solid ${LT.amber}35`, boxShadow: LT.shadowMd }}>
            <p className="font-accent uppercase tracking-[4px] font-semibold"
              style={{ fontSize: "clamp(9px, 0.9vw, 11px)", color: LT.amber }}>
              Total Network
            </p>
            <div className="font-display leading-none"
              style={{ fontSize: "clamp(38px, 6vw, 96px)", lineHeight: 1, color: LT.text, WebkitTextStroke: `2px ${LT.amber}` }}>
              {total}
            </div>
            <p className="font-body mt-1 font-medium"
              style={{ fontSize: "clamp(9px, 0.85vw, 11px)", color: LT.textMuted }}>
              21 + 44 + 87 Vehicles
            </p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div variants={item} className="w-full rounded-full flex-shrink-0"
          style={{ height: "1.5px", background: `linear-gradient(90deg, ${LT.amber}, rgba(217,119,6,0.06))` }} />

        {/* ── DESKTOP: 3-col grid ── */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-4 flex-1 min-h-0">
          {FLEET_DATA.map((d) => (
            <FleetCardDesktop key={d.key} data={d} total={152} />
          ))}
        </div>

        {/* ── MOBILE: vertical stack of horizontal cards ── */}
        <div className="md:hidden flex flex-col gap-2.5 flex-1 overflow-y-auto no-scrollbar">
          {FLEET_DATA.map((d) => (
            <FleetCardMobile key={d.key} data={d} total={152} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}