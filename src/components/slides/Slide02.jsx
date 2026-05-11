import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdVerified, MdLocationOn, MdFlashOn, MdStar,
  MdShield, MdGroups,
} from "react-icons/md";
import { FaTaxi } from "react-icons/fa";

const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const pillars = [
  { icon: <MdFlashOn size={20} />, title: "Mission",    desc: "Safe, punctual & professional transport — customer-first, always.", color: "#d97706" },
  { icon: <MdStar size={20} />,    title: "Vision",     desc: "Trusted leader in travel, transport & driver services across Tamil Nadu.", color: "#2563eb" },
  { icon: <MdShield size={20} />,  title: "Since 2015", desc: "10+ years — corporate, event & personal travel from Erode, TN.", color: "#16a34a" },
];

const stats = [
  { icon: <MdVerified size={18} />,   value: "10+", label: "Years",      color: "#d97706" },
  { icon: <MdLocationOn size={18} />, value: "TN",  label: "Tamil Nadu", color: "#16a34a" },
  { icon: <FaTaxi size={16} />,       value: "152", label: "Vehicles",   color: "#2563eb" },
  { icon: <MdGroups size={18} />,     value: "88",  label: "Team",       color: "#db2777" },
];

const CAR_IMGS = {
  innova: `/innova.jpg`,
  swift:  `/dezire.png`,
  aura:   `/hyundaiaura.png `,
  creta:  `/ertiga.png`,
};

const carData = [
  { key: "innova", name: "Toyota Innova Crysta",   color: "#1e40af", accent: "#3b82f6" },
  { key: "swift",  name: "Maruti Swift Dzire",      color: "#991b1b", accent: "#ef4444" },
  { key: "aura",   name: "Hyundai Aura",            color: "#1d4ed8", accent: "#6366f1" },
  { key: "creta",  name: "Maruti Ertiga",           color: "#166534", accent: "#22c55e" },
];

const LT = {
  bg: "#f5f3ee", surface: "#ffffff",
  border: "rgba(0,0,0,0.08)", text: "#1a1814",
  textMuted: "#6b6860", textFaint: "#a8a49e",
  yellow: "#d97706", yellowLight: "#fef3c7",
  shadow: "0 4px 20px rgba(0,0,0,0.08)",
  shadowMd: "0 8px 32px rgba(0,0,0,0.12)",
};

function CarCard({ car, isActive, onClick }) {
  return (
    <motion.div
      variants={scaleIn}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      animate={isActive ? { scale: 1.03 } : { scale: 1 }}
      transition={{ duration: 0.22 }}
      className="relative rounded-xl overflow-hidden cursor-pointer w-full"
      style={{
        aspectRatio: "1 / 1",
        border: `2px solid ${isActive ? car.accent : LT.border}`,
        boxShadow: isActive ? `0 8px 24px ${car.accent}35` : LT.shadow,
      }}
    >
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ width: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute top-0 left-0 h-[3px] z-10"
            style={{ background: `linear-gradient(90deg, ${car.accent}, ${car.color})` }}
          />
        )}
      </AnimatePresence>
      <img
        src={CAR_IMGS[car.key]} alt={car.name}
        className="absolute inset-0 w-full h-full"
        style={{
          objectFit: "cover", objectPosition: "center",
          filter: isActive ? "brightness(1.06) saturate(1.1)" : "brightness(0.88) saturate(0.8)",
          transition: "filter 0.3s ease",
        }}
      />
      <div className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.08) 45%, transparent 70%)" }}
      />
      <div className="absolute bottom-0 left-0 right-0 px-2 pb-2 z-[2]">
        <div className="font-body font-bold text-white leading-tight"
          style={{ fontSize: "clamp(9px, 1vw, 14px)", textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}>
          {car.name}
        </div>
      </div>
      {isActive && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="absolute inset-0 rounded-xl pointer-events-none z-[3]"
          style={{ boxShadow: `inset 0 0 0 2px ${car.accent}80` }}
        />
      )}
    </motion.div>
  );
}

export default function Slide02() {
  const [activeCard, setActiveCard] = useState(0);
  const active = carData[activeCard];

  const TICKER = "✅ Erode, Tamil Nadu \u00a0•\u00a0 Innova Crysta \u00a0•\u00a0 Swift Dzire \u00a0•\u00a0 Verna \u00a0•\u00a0 Creta \u00a0•\u00a0 Tempo Traveller \u00a0•\u00a0 Mini Bus \u00a0•\u00a0 Coach Van \u00a0•\u00a0 152 Vehicles \u00a0•\u00a0 10+ Years \u00a0•\u00a0 Airport Taxi \u00a0•\u00a0 Corporate Travel \u00a0•\u00a0 TN Registered Fleet \u00a0\u00a0 ";

  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col" style={{ background: LT.bg }}>
      {/* Blobs */}
      <div className="absolute top-[-10%] left-[-6%] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-[-8%] right-[-6%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${active.accent}12 0%, transparent 70%)`, filter: "blur(60px)", transition: "background 0.5s ease" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.5 }} />

      {/* ── DESKTOP: 2-col grid (unchanged) ── */}
      <motion.div variants={containerV} initial="hidden" animate="show"
        className="hidden md:grid md:grid-cols-2 relative z-10 flex-1 min-h-0"
      >
        {/* LEFT */}
        <div className="flex flex-col justify-center px-10 lg:px-14 py-7 gap-3.5 overflow-y-auto no-scrollbar">
          <motion.p variants={fadeLeft}
            className="font-accent uppercase tracking-[8px] font-semibold"
            style={{ color: LT.yellow, fontSize: "clamp(10px, 1.1vw, 14px)" }}>
            About Us
          </motion.p>
          <motion.div variants={fadeLeft}>
            <h2 className="font-display leading-none" style={{ fontSize: "clamp(44px, 8vw, 108px)", color: LT.text }}>WHO WE</h2>
            <h2 className="font-display leading-none"
              style={{ fontSize: "clamp(44px, 8vw, 108px)", WebkitTextStroke: `2px ${LT.yellow}`, color: "transparent" }}>
              ARE
            </h2>
            <motion.div className="h-[4px] rounded-full mt-2"
              style={{ background: `linear-gradient(90deg, ${LT.yellow}, transparent)` }}
              initial={{ width: 0 }} animate={{ width: 80 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} />
          </motion.div>
          <div className="flex flex-col gap-2">
            {pillars.map((p, i) => (
              <motion.div key={i} variants={fadeLeft}
                whileHover={{ x: 5, backgroundColor: `${p.color}0c` }}
                className="rounded-xl px-3.5 py-2.5 flex items-start gap-3 cursor-default transition-all duration-200"
                style={{ background: LT.surface, border: `1px solid ${LT.border}`, borderLeft: `3px solid ${p.color}`, boxShadow: LT.shadow }}>
                <div className="mt-0.5 flex-shrink-0" style={{ color: p.color }}>{p.icon}</div>
                <div>
                  <span className="font-body font-bold" style={{ color: p.color, fontSize: "clamp(11px, 1.2vw, 15px)" }}>
                    {p.title}{" — "}
                  </span>
                  <span className="font-body" style={{ color: LT.textMuted, fontSize: "clamp(10px, 1.1vw, 14px)" }}>
                    {p.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className="grid grid-cols-4 gap-2">
            {stats.map((s, i) => (
              <motion.div key={i} whileHover={{ y: -4, boxShadow: `0 8px 24px ${s.color}25` }}
                className="flex flex-col items-center text-center rounded-xl py-2.5 px-2 transition-all duration-200"
                style={{ background: LT.surface, border: `1px solid ${s.color}30`, boxShadow: LT.shadow }}>
                <div className="mb-1" style={{ color: s.color }}>{s.icon}</div>
                <div className="font-display leading-none" style={{ fontSize: "clamp(20px, 2.8vw, 36px)", color: s.color }}>{s.value}</div>
                <div className="font-body mt-0.5 font-medium" style={{ color: LT.textMuted, fontSize: "clamp(8px, 0.85vw, 11px)" }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="overflow-hidden rounded-xl"
            style={{ background: LT.yellowLight, border: "1px solid rgba(217,119,6,0.25)", boxShadow: LT.shadow }}>
            <div className="py-2 px-4 flex items-center gap-3 overflow-hidden">
              <FaTaxi className="flex-shrink-0" style={{ color: LT.yellow }} size={15} />
              <div className="overflow-hidden flex-1">
                <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="whitespace-nowrap font-body font-medium"
                  style={{ display: "inline-block", color: LT.yellow, fontSize: "clamp(10px, 1.1vw, 13px)" }}>
                  {TICKER + TICKER}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div variants={fadeRight} className="flex flex-col justify-center p-5 lg:p-6 gap-3.5">
          <motion.div variants={fadeUp} className="flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: LT.yellow }} />
              <span className="font-accent uppercase tracking-[5px] font-semibold"
                style={{ color: LT.yellow, fontSize: "clamp(9px, 1vw, 13px)" }}>Our Fleet</span>
            </div>
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ border: "2px dashed rgba(217,119,6,0.35)" }}>
              <FaTaxi style={{ color: LT.yellow, opacity: 0.6 }} size={12} />
            </motion.div>
          </motion.div>
          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
            {carData.map((car, i) => (
              <CarCard key={car.key} car={car} index={i} isActive={activeCard === i} onClick={() => setActiveCard(i)} />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── MOBILE: fully scrollable ── */}
      <motion.div variants={containerV} initial="hidden" animate="show"
        className="md:hidden relative z-10 w-full overflow-y-auto"
        style={{ WebkitOverflowScrolling: "touch", paddingBottom: "72px" }}
      >
        <div className="flex flex-col px-3.5 pt-3 gap-3">
          {/* Label + Heading */}
          <motion.div variants={fadeUp} className="flex-shrink-0">
            <p className="font-accent uppercase tracking-[6px] font-semibold mb-0.5"
              style={{ color: LT.yellow, fontSize: "11px" }}>About Us</p>
            <div className="flex items-end gap-3">
              <div>
                <h2 className="font-display leading-none" style={{ fontSize: "clamp(38px, 12vw, 58px)", color: LT.text }}>
                  WHO WE
                </h2>
                <h2 className="font-display leading-none"
                  style={{ fontSize: "clamp(38px, 12vw, 58px)", WebkitTextStroke: `2px ${LT.yellow}`, color: "transparent" }}>
                  ARE
                </h2>
                <div className="h-[3px] w-12 rounded-full mt-1.5"
                  style={{ background: `linear-gradient(90deg, ${LT.yellow}, transparent)` }} />
              </div>
              {/* Stats beside heading */}
              <div className="grid grid-cols-2 gap-1.5 flex-1 ml-2 mb-1">
                {stats.map((s, i) => (
                  <div key={i} className="flex flex-col items-center text-center rounded-xl py-2 px-1"
                    style={{ background: LT.surface, border: `1px solid ${s.color}28`, boxShadow: LT.shadow }}>
                    <div style={{ color: s.color }}>{s.icon}</div>
                    <div className="font-display leading-none mt-0.5" style={{ fontSize: "clamp(16px, 5vw, 24px)", color: s.color }}>{s.value}</div>
                    <div className="font-body font-medium" style={{ color: LT.textMuted, fontSize: "9px" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Fleet grid */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: LT.yellow }} />
              <span className="font-accent uppercase tracking-[5px] font-semibold"
                style={{ color: LT.yellow, fontSize: "10px" }}>Our Fleet</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {carData.map((car, i) => (
                <CarCard key={car.key} car={car} index={i} isActive={activeCard === i} onClick={() => setActiveCard(i)} />
              ))}
            </div>
          </motion.div>

          {/* Pillars */}
          <div className="flex flex-col gap-1.5">
            {pillars.map((p, i) => (
              <motion.div key={i} variants={fadeUp}
                className="rounded-xl px-3 py-2.5 flex items-start gap-2.5"
                style={{ background: LT.surface, border: `1px solid ${LT.border}`, borderLeft: `3px solid ${p.color}`, boxShadow: LT.shadow }}>
                <div className="mt-0.5 flex-shrink-0" style={{ color: p.color }}>{p.icon}</div>
                <div>
                  <span className="font-body font-bold" style={{ color: p.color, fontSize: "12px" }}>{p.title}{" — "}</span>
                  <span className="font-body" style={{ color: LT.textMuted, fontSize: "11px" }}>{p.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Ticker */}
          <motion.div variants={fadeUp} className="rounded-xl overflow-hidden"
            style={{ background: LT.yellowLight, border: "1px solid rgba(217,119,6,0.25)", boxShadow: LT.shadow }}>
            <div className="py-2 px-3 flex items-center gap-2 overflow-hidden">
              <FaTaxi className="flex-shrink-0" style={{ color: LT.yellow }} size={13} />
              <div className="overflow-hidden flex-1">
                <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="whitespace-nowrap font-body font-medium"
                  style={{ display: "inline-block", color: LT.yellow, fontSize: "11px" }}>
                  {TICKER + TICKER}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}