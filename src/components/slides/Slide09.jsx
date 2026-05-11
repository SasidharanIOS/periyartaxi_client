import React from "react";
import { motion } from "framer-motion";
import useCountUp from "../../hooks/useCountUp";
import { FaUserTie, FaUserCheck, FaUsers } from "react-icons/fa";
import { MdSupport, MdVerified } from "react-icons/md";

const LT = {
  bg: "#f5f3ee", surface: "#ffffff",
  text: "#1a1814", textMuted: "#6b6860", textFaint: "#b0ada8",
  amber: "#d97706", amberBg: "#fef3c7",
  border: "rgba(0,0,0,0.07)",
  shadowMd: "0 8px 28px rgba(0,0,0,0.09)",
  shadowLg: "0 16px 44px rgba(0,0,0,0.12)",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const team = [
  {
    icon: <FaUserCheck size={28} />,
    value: 25,
    label: "Permanent Drivers",
    desc: "Full-time professionals. Trained, verified & on payroll.",
    accent: "#d97706", accentBg: "#fef3c7",
  },
  {
    icon: <FaUserTie size={28} />,
    value: 60,
    label: "Acting Drivers",
    desc: "On-demand drivers for events, bulk bookings & peak loads.",
    accent: "#2563eb", accentBg: "#dbeafe",
  },
  {
    icon: <FaUsers size={28} />,
    value: 3,
    label: "Office Team",
    desc: "Dedicated operations & customer support staff.",
    accent: "#7c3aed", accentBg: "#ede9fe",
  },
];

/* ── Desktop card: vertical layout ── */
function TeamCardDesktop({ icon, value, label, desc, accent, accentBg }) {
  const count = useCountUp(value, 1600);
  return (
    <motion.div variants={item} whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="rounded-2xl flex flex-col items-center text-center h-full relative overflow-hidden"
      style={{ background: LT.surface, border: `1.5px solid ${accent}22`, boxShadow: LT.shadowMd, padding: "clamp(16px,2.5vw,28px)" }}>
      <div className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{ height: "55%", background: `radial-gradient(ellipse at 50% 0%, ${accent}0d 0%, transparent 70%)` }} />
      <div className="absolute top-0 left-0 right-0 h-[3.5px] rounded-b-sm" style={{ background: accent }} />
      <div className="rounded-2xl flex items-center justify-center mb-3 flex-shrink-0 relative z-10"
        style={{ width: "clamp(48px,6.5vw,72px)", height: "clamp(48px,6.5vw,72px)", backgroundColor: accentBg, border: `1.5px solid ${accent}30`, color: accent, boxShadow: `0 4px 16px ${accent}18` }}>
        {icon}
      </div>
      <div className="font-display leading-none mb-2 relative z-10"
        style={{ fontSize: "clamp(50px,8vw,96px)", color: accent, filter: `drop-shadow(0 2px 12px ${accent}30)` }}>
        {count}
      </div>
      <div className="font-body font-bold leading-tight mb-2 relative z-10"
        style={{ fontSize: "clamp(13px,1.6vw,20px)", color: LT.text }}>
        {label}
      </div>
      <div className="w-8 h-[2.5px] rounded-full mb-2 flex-shrink-0" style={{ background: accent, opacity: 0.5 }} />
      <div className="font-body leading-snug relative z-10"
        style={{ fontSize: "clamp(10px,1.1vw,14px)", color: LT.textMuted }}>
        {desc}
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-3xl opacity-[0.07] pointer-events-none"
        style={{ background: accent }} />
    </motion.div>
  );
}

/* ── Mobile card: horizontal layout ── */
function TeamCardMobile({ icon, value, label, desc, accent, accentBg }) {
  const count = useCountUp(value, 1600);
  return (
    <motion.div variants={item}
      className="rounded-2xl flex flex-row items-center gap-3 relative overflow-hidden"
      style={{ background: LT.surface, border: `1.5px solid ${accent}22`, boxShadow: LT.shadowMd, padding: "12px 14px" }}>
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: accent }} />
      {/* Icon */}
      <div className="rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ width: 44, height: 44, backgroundColor: accentBg, border: `1.5px solid ${accent}30`, color: accent }}>
        {icon}
      </div>
      {/* Count */}
      <div className="font-display leading-none flex-shrink-0"
        style={{ fontSize: "clamp(36px,10vw,52px)", color: accent }}>
        {count}
      </div>
      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="font-body font-bold leading-tight"
          style={{ fontSize: "clamp(12px,3.5vw,15px)", color: LT.text }}>
          {label}
        </div>
        <div className="font-body mt-0.5 leading-snug"
          style={{ fontSize: "clamp(10px,2.8vw,12px)", color: LT.textMuted }}>
          {desc}
        </div>
      </div>
    </motion.div>
  );
}

export default function Slide09() {
  const total = useCountUp(88, 1800);

  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col" style={{ background: LT.bg }}>
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[45vw] h-[45vw] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(217,119,6,0.09)" }} />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(37,99,235,0.07)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[30vw] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(124,58,237,0.05)" }} />
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <motion.div variants={container} initial="hidden" animate="show"
        className="relative z-10 flex flex-col h-full"
        style={{ padding: "clamp(10px,2vw,24px)" }}>

        {/* Header */}
        <motion.div variants={item} className="flex-shrink-0 mb-2 md:mb-3">
          <div className="inline-flex items-center gap-2 mb-1">
            <div className="h-[2px] w-5 rounded" style={{ background: LT.amber + "80" }} />
            <p className="font-accent uppercase font-semibold tracking-[4px]"
              style={{ fontSize: "clamp(9px,1.1vw,13px)", color: LT.amber }}>
              Behind the Wheel
            </p>
            <div className="h-[2px] w-5 rounded" style={{ background: LT.amber + "80" }} />
          </div>
          <h2 className="font-display leading-none"
            style={{ fontSize: "clamp(32px,7vw,88px)", color: LT.text }}>
            TEAM{" "}
            <span style={{ WebkitTextStroke: `2px ${LT.amber}`, color: "transparent" }}>
              STRENGTH
            </span>
          </h2>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="rounded-full mt-1.5 origin-left"
            style={{ width: "clamp(36px,5vw,60px)", height: 4, background: `linear-gradient(90deg, ${LT.amber}, transparent)` }} />
        </motion.div>

        {/* ── Desktop: 3-col cards ── */}
        <div className="hidden md:grid grid-cols-3 gap-3 flex-1 min-h-0 mb-3">
          {team.map((t, i) => <TeamCardDesktop key={i} {...t} />)}
        </div>

        {/* ── Mobile: stacked horizontal cards ── */}
        <div className="flex md:hidden flex-col gap-2 flex-1 min-h-0 mb-2">
          {team.map((t, i) => <TeamCardMobile key={i} {...t} />)}
        </div>

        {/* Summary row */}
        <motion.div variants={item} className="grid grid-cols-2 gap-2 md:gap-3 flex-shrink-0">
          {/* Total Workforce */}
          <div className="rounded-xl flex items-center gap-3 relative overflow-hidden"
            style={{ background: LT.surface, border: `1.5px solid ${LT.amber}28`, boxShadow: LT.shadowMd, padding: "clamp(10px,1.5vw,20px)" }}>
            <div className="absolute left-0 top-0 bottom-0 w-[3.5px] rounded-r-full" style={{ background: LT.amber }} />
            <div className="rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ width: "clamp(38px,5vw,56px)", height: "clamp(38px,5vw,56px)", backgroundColor: LT.amberBg, border: `1.5px solid ${LT.amber}30`, color: LT.amber }}>
              <MdSupport size={22} />
            </div>
            <div>
              <div className="font-body font-bold leading-tight"
                style={{ fontSize: "clamp(11px,1.5vw,18px)", color: LT.text }}>
                Total Workforce
              </div>
              <div className="font-body mt-0.5 flex items-baseline gap-1 flex-wrap"
                style={{ fontSize: "clamp(10px,1.1vw,14px)", color: LT.textMuted }}>
                <span className="font-display" style={{ fontSize: "clamp(18px,2.8vw,34px)", color: LT.amber }}>
                  {total}
                </span>
                <span className="hidden sm:inline">team members ready to serve</span>
                <span className="inline sm:hidden">members</span>
              </div>
            </div>
          </div>

          {/* Experienced & Verified */}
          <div className="rounded-xl flex items-center gap-3 relative overflow-hidden"
            style={{ background: LT.surface, border: "1.5px solid rgba(37,99,235,0.20)", boxShadow: LT.shadowMd, padding: "clamp(10px,1.5vw,20px)" }}>
            <div className="absolute left-0 top-0 bottom-0 w-[3.5px] rounded-r-full" style={{ background: "#2563eb" }} />
            <div className="rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ width: "clamp(38px,5vw,56px)", height: "clamp(38px,5vw,56px)", backgroundColor: "#dbeafe", border: "1.5px solid rgba(37,99,235,0.25)", color: "#2563eb" }}>
              <MdVerified size={22} />
            </div>
            <div>
              <div className="font-body font-bold leading-tight"
                style={{ fontSize: "clamp(11px,1.5vw,18px)", color: LT.text }}>
                Experienced & Verified
              </div>
              <div className="font-body mt-0.5"
                style={{ fontSize: "clamp(10px,1.1vw,14px)", color: LT.textMuted }}>
                <span className="hidden sm:inline">All drivers background-checked & trained professionals</span>
                <span className="inline sm:hidden">Background-checked & trained</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}