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

const suvList = [
  { name: "Innova",  count: 12, img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/9608/1755846139274/front-left-side-47.jpg", tag: "7-Seater MPV", accent: "#d97706" },
  { name: "Ertiga",  count: 7,  img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/69058e1a5606b5cb853028ce61bbc0e9d185eca5.jpg", tag: "7-Seater MUV", accent: "#ea580c" },
  { name: "Xylo",    count: 5,  img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/aba27fb6c6a39f3a32fd7d6558300768e393c9e3.jpg", tag: "8-Seater SUV", accent: "#16a34a" },
  { name: "Eco",     count: 5,  img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Eeco/10376/1708671417179/front-left-side-47.jpg", tag: "Van / Cargo",  accent: "#2563eb" },
  { name: "Tavera",  count: 3,  img: "/tavera.png", tag: "8-Seater MUV", accent: "#7c3aed" },
];

const sedanList = [
  { name: "Swift Dzire",  count: 7, img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/93f8320fbefbf3c18097beb9e5e4d4b6c56bd506.jpg", tag: "Compact Sedan", accent: "#dc2626" },
  { name: "Honda Amaze",  count: 2, img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/5d593a6683b50ae65261d534d91c04cf30144f95.jpg", tag: "Sub-Compact",   accent: "#0d9488" },
  { name: "Hyundai Aura", count: 3, img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/16fe749e5d4158b6a49751da033c28439bcb4aab.jpg", tag: "Compact Sedan", accent: "#7c3aed" },
];

const row1 = suvList.slice(0, 4);
const row2 = [...suvList.slice(4), ...sedanList];
const allVehicles = [...suvList, ...sedanList];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Desktop card ── */
function VehicleCardDesktop({ name, count, img, tag, accent }) {
  const n = useCountUp(count, 1300);
  return (
    <motion.div variants={item} whileHover={{ scale: 1.03, y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="relative rounded-xl overflow-hidden cursor-default w-full h-full"
      style={{ background: LT.surface, border: `1.5px solid ${accent}25`, boxShadow: LT.shadowMd }}>
      <div className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${accent}18 0%, ${accent}30 50%, ${accent}12 100%)` }} />
      <img src={img} alt={name} className="absolute inset-0 w-full h-full" loading="lazy"
        style={{ objectFit: "contain", objectPosition: "center 55%", transform: "scale(1.15)", transformOrigin: "center 60%" }} />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: "50%", background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.72) 100%)" }} />
      <div className="absolute top-1.5 right-1.5 font-display leading-none rounded-lg px-2 py-0.5 z-10"
        style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(6px)", color: accent, border: `1.5px solid ${accent}35`, boxShadow: `0 2px 10px ${accent}25`, fontSize: "clamp(12px, 1.5vw, 19px)", minWidth: 26, textAlign: "center" }}>
        {n}
      </div>
      <div className="absolute top-0 left-0 right-0 h-[3px] z-10" style={{ background: accent }} />
      <div className="absolute bottom-0 left-0 right-0 px-2.5 pb-2 pt-4 z-10">
        <div className="font-body font-black text-white leading-tight"
          style={{ fontSize: "clamp(9px, 1.1vw, 13px)", textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>{name}</div>
        <div className="font-body font-bold mt-0.5 px-1.5 py-0.5 rounded-full inline-block"
          style={{ fontSize: "clamp(7px, 0.75vw, 9px)", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(4px)", color: "#fff", letterSpacing: "0.04em" }}>
          {tag}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Mobile card ── */
function VehicleCardMobile({ name, count, img, tag, accent }) {
  const n = useCountUp(count, 1300);
  return (
    <motion.div variants={item}
      className="relative overflow-hidden rounded-xl flex flex-col w-full"
      style={{
        background: LT.surface,
        border: `1.5px solid ${accent}25`,
        boxShadow: LT.shadowMd,
        height: "150px",
        flexShrink: 0,
      }}>
      <div className="relative overflow-hidden flex-1 min-h-0">
        <div className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${accent}18, ${accent}30)` }} />
        <img src={img} alt={name} loading="lazy"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "contain", objectPosition: "center 55%", transform: "scale(1.1)", transformOrigin: "center 60%" }} />
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: accent }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.45) 100%)" }} />
        <div className="absolute top-1.5 right-1.5 font-display leading-none rounded-md px-1.5 py-0.5 z-10"
          style={{ fontSize: "16px", background: "rgba(255,255,255,0.92)", backdropFilter: "blur(4px)", color: accent, border: `1px solid ${accent}30` }}>
          {n}
        </div>
      </div>
      <div className="flex-shrink-0 px-2.5 py-2" style={{ borderTop: `2px solid ${accent}30` }}>
        <div className="font-body font-black leading-tight" style={{ fontSize: "12px", color: LT.text }}>{name}</div>
        <div className="font-body font-bold mt-0.5 px-1.5 py-0.5 rounded-full inline-block w-fit"
          style={{ fontSize: "9px", background: `${accent}15`, color: accent, border: `1px solid ${accent}25` }}>
          {tag}
        </div>
      </div>
    </motion.div>
  );
}

export default function Slide08() {
  const suv   = useCountUp(32, 1600);
  const sedan = useCountUp(12, 1600);
  const total = useCountUp(44, 1800);

  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: LT.bg }}>
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(217,119,6,0.09)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(37,99,235,0.07)" }} />
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* ══════════════════════════════════════
          DESKTOP LAYOUT
          ══════════════════════════════════════ */}
      <motion.div variants={container} initial="hidden" animate="show"
        className="hidden md:flex relative z-10 w-full h-full flex-col px-7 pt-3 pb-3"
        style={{ gap: "clamp(4px, 0.8vh, 10px)" }}>

        {/* Header */}
        <motion.div variants={item} className="flex items-center justify-between gap-3 flex-shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 mb-1">
              <div className="h-[2px] w-5 rounded" style={{ background: LT.amber + "80" }} />
              <p className="font-accent uppercase font-semibold tracking-[4px]"
                style={{ fontSize: "clamp(8px, 0.85vw, 11px)", color: LT.amber }}>Attachment Fleet</p>
              <div className="h-[2px] w-5 rounded" style={{ background: LT.amber + "80" }} />
            </div>
            {/* ✅ FIXED: "VEHICLES" now solid amber — readable instead of outlined/stroked */}
            <h2 className="font-display leading-none"
              style={{ fontSize: "clamp(18px, 3.5vw, 48px)", color: LT.text }}>
              ATTACHMENT{" "}
              <span style={{ color: LT.amber }}>VEHICLES</span>
            </h2>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="w-10 h-[2.5px] rounded-full mt-1 origin-left"
              style={{ background: `linear-gradient(90deg, ${LT.amber}, transparent)` }} />
          </div>

          {/* Total pill */}
          <div className="flex-shrink-0 flex items-center gap-3 rounded-2xl px-3 py-2"
            style={{ background: LT.surface, border: `1.5px solid ${LT.amber}30`, boxShadow: LT.shadowMd }}>
            <div className="text-center">
              <div className="font-display leading-none"
                style={{ fontSize: "clamp(20px, 3.5vw, 44px)", color: LT.amber }}>{total}</div>
              <div className="font-body font-semibold"
                style={{ fontSize: "clamp(8px, 0.8vw, 11px)", color: LT.textMuted }}>Total Vehicles</div>
            </div>
            <div className="flex flex-col gap-1 pl-3" style={{ borderLeft: `1px solid ${LT.amber}25` }}>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: LT.amber }} />
                <span className="font-body font-medium"
                  style={{ fontSize: "clamp(9px, 0.85vw, 11px)", color: LT.textMuted }}>{suv} SUV / MUV</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#2563eb" }} />
                <span className="font-body font-medium"
                  style={{ fontSize: "clamp(9px, 0.85vw, 11px)", color: LT.textMuted }}>{sedan} Sedans</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4×2 grid */}
        <div className="flex flex-col flex-1 min-h-0 gap-2">
          <div className="flex-1 min-h-0 grid gap-2"
            style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
            {row1.map((v, i) => <VehicleCardDesktop key={`r1-${i}`} {...v} />)}
          </div>
          <div className="flex-1 min-h-0 grid gap-2"
            style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
            {row2.map((v, i) => <VehicleCardDesktop key={`r2-${i}`} {...v} />)}
          </div>
        </div>
      </motion.div>

      {/* ══════════════════════════════════════
          MOBILE LAYOUT
          ══════════════════════════════════════ */}
      <motion.div variants={container} initial="hidden" animate="show"
        className="md:hidden relative z-10 w-full h-full flex flex-col">

        {/* Sticky header */}
        <div className="flex-shrink-0 px-4 pt-4 pb-3" style={{ background: LT.bg }}>
          <motion.div variants={item} className="flex items-start justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <div className="h-[2px] w-4 rounded" style={{ background: LT.amber + "80" }} />
                <p className="font-accent uppercase font-semibold tracking-[4px]"
                  style={{ fontSize: "9px", color: LT.amber }}>Attachment Fleet</p>
                <div className="h-[2px] w-4 rounded" style={{ background: LT.amber + "80" }} />
              </div>
              {/* ✅ FIXED: "VEHICLES" solid amber on mobile too */}
              <h2 className="font-display leading-none" style={{ fontSize: "22px", color: LT.text }}>
                ATTACHMENT{" "}
                <span style={{ color: LT.amber }}>VEHICLES</span>
              </h2>
              <div className="w-10 h-[2.5px] rounded-full mt-1"
                style={{ background: `linear-gradient(90deg, ${LT.amber}, transparent)` }} />
            </div>

            {/* Compact total pill */}
            <div className="flex-shrink-0 flex items-center gap-2 rounded-xl px-3 py-2"
              style={{ background: LT.surface, border: `1.5px solid ${LT.amber}30`, boxShadow: LT.shadowMd }}>
              <div className="text-center">
                <div className="font-display leading-none" style={{ fontSize: "26px", color: LT.amber }}>{total}</div>
                <div className="font-body font-semibold" style={{ fontSize: "9px", color: LT.textMuted }}>Total Vehicles</div>
              </div>
              <div className="flex flex-col gap-1 pl-2" style={{ borderLeft: `1px solid ${LT.amber}25` }}>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: LT.amber }} />
                  <span className="font-body font-medium" style={{ fontSize: "10px", color: LT.textMuted }}>{suv} SUV / MUV</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#2563eb" }} />
                  <span className="font-body font-medium" style={{ fontSize: "10px", color: LT.textMuted }}>{sedan} Sedans</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scrollable card grid */}
        <div className="flex-1 overflow-y-auto px-4 pb-4"
          style={{ WebkitOverflowScrolling: "touch" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {allVehicles.map((v, i) => <VehicleCardMobile key={i} {...v} />)}
          </div>
        </div>
      </motion.div>
    </div>
  );
}