import React from "react";
import { motion } from "framer-motion";
import useCountUp from "../../hooks/useCountUp";

const LT = {
  bg: "#f5f3ee", surface: "#ffffff",
  text: "#1a1814", textMuted: "#6b6860", textFaint: "#b0ada8",
  amber: "#d97706", border: "rgba(0,0,0,0.07)",
  shadowMd: "0 8px 28px rgba(0,0,0,0.10)",
  shadowLg: "0 16px 44px rgba(0,0,0,0.13)",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const CARDS = [
  {
    img: "/tempotraveller.png",
    fallbackImg: "https://images.unsplash.com/photo-1626202568600-b6f7fbc41042?w=800&q=80",
    value: 15, suffix: "",
    label: "Tempo Traveller", sub: "12–17 Seater",
    accent: "#d97706", accentBg: "#fef3c7",
    fallback: "Tempo Traveller", objectPosition: "center center",
  },
  {
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80",
    value: 12, suffix: "",
    label: "Coach Van", sub: "Luxury AC Coach",
    accent: "#2563eb", accentBg: "#dbeafe",
    fallback: "Coach Van", objectPosition: "center center",
  },
  {
    img: "/minibus.png",
    fallbackImg: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    value: 4, suffix: "",
    label: "Mini Bus", sub: "20–35 Seater",
    accent: "#16a34a", accentBg: "#dcfce7",
    fallback: "Mini Bus", objectPosition: "center center",
  },
  {
    img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    value: 12, suffix: "",
    label: "Bus Services", sub: "36–52 Seater",
    accent: "#dc2626", accentBg: "#fee2e2",
    fallback: "Tourist Bus", objectPosition: "center center",
  },
  {
    img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=800&q=80",
    value: 60, suffix: "+",
    label: "Acting Drivers", sub: "Verified Driver Support",
    accent: "#7c3aed", accentBg: "#ede9fe",
    fallback: "Driver Service", objectPosition: "center center",
  },
  {
    img: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
    value: 100, suffix: "+",
    label: "Valet Parking", sub: "Safe Vehicle Handover",
    accent: "#0d9488", accentBg: "#ccfbf1",
    fallback: "Valet Parking", objectPosition: "center center",
  },
];

function StatCard({ img, fallbackImg, value, suffix, label, sub, accent, accentBg, fallback, objectPosition, isMobile }) {
  const count = useCountUp(value, 1600);

  const handleError = (e) => {
    if (fallbackImg && e.currentTarget.src !== fallbackImg) {
      e.currentTarget.src = fallbackImg;
      return;
    }
    e.currentTarget.style.display = "none";
    const fb = e.currentTarget.parentElement.querySelector(".img-fallback");
    if (fb) fb.style.display = "flex";
  };

  /* ── Mobile: horizontal card ── */
  if (isMobile) {
    return (
      <motion.div variants={item}
        className="relative rounded-2xl overflow-hidden flex flex-row flex-shrink-0"
        style={{
          background: LT.surface,
          border: `1.5px solid ${accent}22`,
          boxShadow: LT.shadowMd,
          height: "80px",
        }}>
        {/* Image — left 40% */}
        <div className="relative overflow-hidden flex-shrink-0" style={{ width: "40%" }}>
          <img src={img} alt={label} loading="lazy" decoding="async" onError={handleError}
            className="w-full h-full object-cover"
            style={{ objectPosition: objectPosition || "center", filter: "brightness(0.92) saturate(1.05)" }} />
          <div className="img-fallback hidden absolute inset-0 items-center justify-center px-2 text-center text-xs font-bold"
            style={{ background: `linear-gradient(135deg, ${accent}15, ${accent}05)`, color: accent }}>
            {fallback}
          </div>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent 55%, rgba(255,255,255,0.12) 100%)" }} />
          {/* Count badge */}
          <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full font-display leading-none"
            style={{ fontSize: "17px", background: "rgba(255,255,255,0.92)", backdropFilter: "blur(6px)", color: accent, border: `1.5px solid ${accent}35` }}>
            {count}{suffix}
          </div>
        </div>
        {/* Text — right 60% */}
        <div className="flex flex-col justify-center flex-1 px-3"
          style={{ borderLeft: `3px solid ${accent}` }}>
          <div className="font-body font-black leading-tight"
            style={{ fontSize: "13px", color: LT.text }}>
            {label}
          </div>
          <span className="font-body font-semibold px-1.5 py-0.5 rounded-full mt-1 inline-block w-fit"
            style={{ fontSize: "10px", background: accentBg, color: accent }}>
            {sub}
          </span>
          <div className="w-6 h-[2.5px] rounded-full mt-1.5" style={{ background: accent }} />
        </div>
      </motion.div>
    );
  }

  /* ── Desktop: vertical card (UNCHANGED) ── */
  return (
    <motion.div variants={item} whileHover={{ y: -5, scale: 1.015 }}
      className="relative rounded-[22px] overflow-hidden h-full flex flex-col"
      style={{ background: LT.surface, border: `1.5px solid ${accent}22`, boxShadow: LT.shadowMd, transition: "box-shadow 0.3s, border-color 0.3s" }}>
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: "72%" }}>
        <img src={img} alt={label} loading="lazy" decoding="async" onError={handleError}
          className="w-full h-full object-cover"
          style={{ objectPosition: objectPosition || "center", filter: "brightness(0.92) saturate(1.05)" }} />
        <div className="img-fallback hidden absolute inset-0 items-center justify-center px-4 text-center"
          style={{ background: `linear-gradient(135deg, ${accent}15, ${accent}05)`, color: accent, fontWeight: 800, fontSize: "clamp(18px, 2vw, 28px)" }}>
          {fallback}
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: "45%", background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.42) 100%)" }} />
        <div className="absolute top-2.5 right-2.5 px-3 py-1 rounded-full font-display leading-none z-10"
          style={{ fontSize: "clamp(24px, 3.4vw, 44px)", background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", color: accent, border: `1.5px solid ${accent}35`, boxShadow: `0 4px 14px ${accent}25` }}>
          {count}{suffix}
        </div>
      </div>
      <div className="flex flex-col justify-center flex-1 px-4 md:px-5 py-3"
        style={{ borderTop: `2.5px solid ${accent}20` }}>
        <div className="w-8 h-[3px] rounded-full mb-2" style={{ background: accent }} />
        <div className="font-body font-black leading-[1.05]"
          style={{ fontSize: "clamp(15px, 2vw, 26px)", color: LT.text }}>
          {label}
        </div>
        <div className="mt-1.5 flex items-center gap-1.5">
          <span className="font-body font-semibold px-2 py-0.5 rounded-full"
            style={{ fontSize: "clamp(9px, 1.1vw, 13px)", background: accentBg, color: accent }}>
            {sub}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Slide05() {
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col" style={{ background: LT.bg }}>
      {/* Blobs */}
      <div className="absolute top-[-12%] right-[-8%] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.09) 0%, transparent 70%)", filter: "blur(70px)" }} />
      <div className="absolute bottom-[-12%] left-[-6%] w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)", filter: "blur(65px)" }} />
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* HEADER */}
      <motion.div initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
        className="flex-shrink-0 px-4 md:px-6 pt-4 md:pt-5 pb-2"
        style={{ borderBottom: "1px solid rgba(217,119,6,0.12)", background: "linear-gradient(180deg, rgba(217,119,6,0.05) 0%, transparent 100%)" }}>
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 mb-1.5">
              <div className="h-[2px] w-5 rounded" style={{ background: LT.amber + "88" }} />
              <p className="font-accent uppercase font-semibold tracking-[5px]"
                style={{ fontSize: "clamp(10px, 1.1vw, 13px)", color: LT.amber }}>
                Bread &amp; Butter
              </p>
              <div className="h-[2px] w-5 rounded" style={{ background: LT.amber + "88" }} />
            </div>
            {/* ✅ FIXED: "SERVICE" is now solid amber — fully readable on both desktop & mobile */}
            <h2 className="font-display leading-[0.92]"
              style={{ fontSize: "clamp(26px, 5.2vw, 80px)", color: LT.text }}>
              CORE{" "}
              <span style={{ color: LT.amber }}>SERVICE</span>{" "}
              CAPACITY
            </h2>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="w-14 h-[3px] rounded-full mt-1.5 origin-left"
              style={{ background: `linear-gradient(90deg, ${LT.amber}, transparent)` }} />
          </div>
          <div className="hidden md:flex items-center gap-2 mb-1 flex-shrink-0">
            <div className="w-8 h-0.5 rounded" style={{ background: LT.amber + "60" }} />
            <span className="font-body font-medium" style={{ fontSize: "clamp(12px, 1vw, 14px)", color: LT.textMuted }}>
              Periyar Taxi Fleet
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── DESKTOP: 3×2 grid (UNCHANGED) ── */}
      <motion.div variants={container} initial="hidden" animate="show"
        className="hidden md:grid md:grid-cols-3 flex-1 min-h-0 px-5 lg:px-6 py-3 gap-3 lg:gap-4"
        style={{ gridTemplateRows: "1fr 1fr" }}>
        {CARDS.map((card, i) => (
          <StatCard key={i} {...card} isMobile={false} />
        ))}
      </motion.div>

      {/* ── MOBILE: scrollable vertical list ── */}
      <motion.div variants={container} initial="hidden" animate="show"
        className="md:hidden px-3 py-3 flex flex-col gap-2.5"
        style={{
          flex: "1 1 0",
          minHeight: 0,
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}>
        {CARDS.map((card, i) => (
          <StatCard key={i} {...card} isMobile={true} />
        ))}
        {/* Bottom padding so last card clears footer */}
        <div className="flex-shrink-0 h-1" />
      </motion.div>

      {/* FOOTER */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.4 }}
        className="flex-shrink-0 px-4 md:px-6 pb-3"
        style={{ borderTop: "1px solid rgba(217,119,6,0.10)", paddingTop: "7px" }}>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: LT.amber }} />
          <p className="font-body" style={{ fontSize: "clamp(10px, 1vw, 13px)", color: LT.textMuted }}>
            Valet parking: owners hand over the car to trained staff in crowded areas for safe parking and smooth vehicle return.
          </p>
        </div>
      </motion.div>
    </div>
  );
}