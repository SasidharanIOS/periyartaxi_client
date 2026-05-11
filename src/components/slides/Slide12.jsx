import React from "react";
import { motion } from "framer-motion";
import {
  MdMap, MdNotifications, MdTimer, MdSecurity,
  MdPayment, MdStar, MdPhoneAndroid,
} from "react-icons/md";
import { FaApple, FaAndroid } from "react-icons/fa";

const LT = {
  bg: "#f5f3ee", surface: "#ffffff",
  text: "#1a1814", textMuted: "#6b6860", textFaint: "#b0ada8",
  amber: "#d97706", amberLight: "#f59e0b", amberBg: "#fef3c7",
  border: "rgba(0,0,0,0.07)",
  shadowMd: "0 8px 28px rgba(0,0,0,0.09)",
  shadowLg: "0 16px 44px rgba(0,0,0,0.13)",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, scale: 0.9, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const features = [
  { icon: <MdMap size={22} />, title: "Live Map Tracking", desc: "Customer sees driver in real-time. Driver navigates to exact customer pin.", user: "Both", accent: "#d97706", accentBg: "#fef3c7" },
  { icon: <MdNotifications size={22} />, title: "Smart Booking Alerts", desc: "Nearest driver auto-assigned. Push notifications for booking status.", user: "Both", accent: "#d97706", accentBg: "#fef3c7" },
  { icon: <MdTimer size={22} />, title: "Time Management", desc: "ETA displayed live. SLA tracking ensures on-time arrivals.", user: "Admin", accent: "#2563eb", accentBg: "#dbeafe" },
  { icon: <MdSecurity size={22} />, title: "Safety Features", desc: "Driver verification, trip sharing, emergency SOS for customers.", user: "Customer", accent: "#16a34a", accentBg: "#dcfce7" },
  { icon: <MdPayment size={22} />, title: "Digital Payments", desc: "UPI, card, wallet & cash — all payment modes fully supported.", user: "Customer", accent: "#16a34a", accentBg: "#dcfce7" },
  { icon: <MdStar size={22} />, title: "Ratings & Reviews", desc: "Post-trip feedback loop. Top drivers earn bonus incentives.", user: "Both", accent: "#d97706", accentBg: "#fef3c7" },
];

const userBadge = {
  Both:     { color: "#d97706", bg: "#fef3c7", border: "#d9770640" },
  Admin:    { color: "#2563eb", bg: "#dbeafe", border: "#2563eb40" },
  Customer: { color: "#16a34a", bg: "#dcfce7", border: "#16a34a40" },
  Driver:   { color: "#dc2626", bg: "#fee2e2", border: "#dc262640" },
};

const techStack = [
  { label: "React Native", color: "#2563eb", bg: "#dbeafe" },
  { label: "Node.js",      color: "#16a34a", bg: "#dcfce7" },
  { label: "Google Maps",  color: "#dc2626", bg: "#fee2e2" },
  { label: "Firebase",     color: "#d97706", bg: "#fef3c7" },
  { label: "Razorpay",     color: "#7c3aed", bg: "#ede9fe" },
  { label: "MySQL",        color: "#0d9488", bg: "#ccfbf1" },
  { label: "AWS",          color: "#d97706", bg: "#fff7ed" },
];

export default function Slide12() {
  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center"
      style={{ background: LT.bg }}>
      {/* Blobs */}
      <div className="absolute top-[-5%] right-[-5%] w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.10) 0%, transparent 70%)", filter: "blur(70px)" }} />
      <div className="absolute bottom-[-5%] left-[-5%] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)", filter: "blur(65px)" }} />
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <motion.div variants={container} initial="hidden" animate="show"
        className="relative z-10 w-full h-full flex flex-col justify-between"
        style={{ padding: "clamp(10px,2vw,24px)", gap: "clamp(6px,1.2vh,14px)" }}>

        {/* Header */}
        <motion.div variants={item} className="flex-shrink-0">
          <div className="inline-flex items-center gap-2 mb-1">
            <div className="h-[2px] w-5 rounded" style={{ background: LT.amber + "80" }} />
            <p className="font-accent uppercase font-semibold tracking-[4px]"
              style={{ fontSize: "clamp(9px,1vw,13px)", color: LT.amber }}>
              🏦 Bank Loan Proposal — Slide 2 of 5
            </p>
          </div>

          {/* Title + platform badges — stack on mobile */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-2 flex-wrap">
            <h2 className="font-display leading-none"
              style={{ fontSize: "clamp(28px,6vw,88px)", color: LT.text }}>
              APP FEATURES{" "}
              <span style={{ WebkitTextStroke: `2px ${LT.amber}`, color: "transparent" }}>& TECH</span>
            </h2>

            {/* Platform badges — scroll on very small screens */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <div className="flex items-center gap-1.5 rounded-full px-2.5 py-1"
                style={{ background: "#dcfce7", border: "1.5px solid #16a34a30" }}>
                <FaAndroid style={{ color: "#16a34a" }} size={13} />
                <span className="font-body font-semibold" style={{ fontSize: "clamp(10px,1vw,13px)", color: "#16a34a" }}>Android</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full px-2.5 py-1"
                style={{ background: LT.surface, border: `1.5px solid ${LT.border}`, boxShadow: LT.shadowMd }}>
                <FaApple style={{ color: LT.text }} size={13} />
                <span className="font-body font-semibold" style={{ fontSize: "clamp(10px,1vw,13px)", color: LT.text }}>iOS</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full px-2.5 py-1"
                style={{ background: LT.amberBg, border: `1.5px solid ${LT.amber}35` }}>
                <MdPhoneAndroid style={{ color: LT.amber }} size={14} />
                <span className="font-body font-semibold" style={{ fontSize: "clamp(9px,1vw,13px)", color: LT.amber }}>
                  <span className="hidden sm:inline">3 Apps — Customer · Driver · Admin</span>
                  <span className="inline sm:hidden">3 Apps</span>
                </span>
              </div>
            </div>
          </div>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="rounded-full mt-1.5 origin-left"
            style={{ width: "clamp(40px,5vw,60px)", height: 4, background: `linear-gradient(90deg, ${LT.amber}, transparent)` }} />
        </motion.div>

        {/* Features grid — 2 cols mobile, 3 cols desktop */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 min-h-0"
          style={{ gap: "clamp(6px,1vw,14px)" }}>
          {features.map((f, i) => {
            const badge = userBadge[f.user];
            return (
              <motion.div key={i} variants={item}
                whileHover={{ y: -4, scale: 1.012 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="rounded-xl flex flex-col gap-2 relative overflow-hidden"
                style={{ background: LT.surface, border: `1.5px solid ${f.accent}22`, boxShadow: LT.shadowMd, padding: "clamp(10px,1.6vw,20px)" }}>
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-b-sm" style={{ background: f.accent }} />
                <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 100% 0%, ${f.accent}0d 0%, transparent 65%)` }} />

                {/* Icon + badge */}
                <div className="flex items-center justify-between relative z-10 mt-0.5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: f.accentBg, border: `1.5px solid ${f.accent}30`, color: f.accent }}>
                    {f.icon}
                  </div>
                  <span className="font-body font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                    style={{ fontSize: "clamp(7px,0.75vw,10px)", background: badge.bg, color: badge.color, border: `1px solid ${badge.border}` }}>
                    {f.user}
                  </span>
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h3 className="font-body font-bold leading-tight mb-0.5"
                    style={{ fontSize: "clamp(11px,1.3vw,16px)", color: LT.text }}>
                    {f.title}
                  </h3>
                  {/* Hide desc on very small viewports to save space */}
                  <p className="font-body leading-snug hidden sm:block"
                    style={{ fontSize: "clamp(9px,1vw,13px)", color: LT.textMuted }}>
                    {f.desc}
                  </p>
                  {/* Short version on mobile */}
                  <p className="font-body leading-snug block sm:hidden"
                    style={{ fontSize: "clamp(9px,2.8vw,11px)", color: LT.textMuted }}>
                    {f.desc.split(".")[0]}.
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-8 h-8 rounded-tr-2xl opacity-[0.07] pointer-events-none"
                  style={{ background: f.accent }} />
              </motion.div>
            );
          })}
        </div>

        {/* Tech stack strip */}
        <motion.div variants={item}
          className="flex-shrink-0 rounded-xl flex flex-wrap items-center gap-1.5"
          style={{ background: LT.surface, border: `1.5px solid ${LT.amber}22`, boxShadow: LT.shadowMd, padding: "clamp(8px,1.2vw,14px) clamp(12px,1.5vw,20px)" }}>
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-4 h-[2px] rounded" style={{ background: LT.amber + "80" }} />
            <span className="font-body font-bold uppercase tracking-widest"
              style={{ fontSize: "clamp(9px,1vw,12px)", color: LT.textMuted }}>Tech Stack:</span>
          </div>
          {techStack.map((t) => (
            <span key={t.label} className="px-2.5 py-1 rounded-full font-body font-semibold"
              style={{ fontSize: "clamp(9px,1vw,12px)", background: t.bg, border: `1px solid ${t.color}30`, color: t.color }}>
              {t.label}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}