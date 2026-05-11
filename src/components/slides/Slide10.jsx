import React from "react";
import { motion } from "framer-motion";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { FaWhatsapp, FaTaxi } from "react-icons/fa";

const LT = {
  bg: "#f5f3ee", surface: "#ffffff",
  text: "#1a1814", textMuted: "#6b6860", textFaint: "#b0ada8",
  amber: "#d97706", amberBg: "#fef3c7",
  border: "rgba(0,0,0,0.07)",
  shadowMd: "0 8px 28px rgba(0,0,0,0.09)",
  shadowLg: "0 16px 44px rgba(0,0,0,0.13)",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const contacts = [
  {
    icon: <MdPhone size={22} />,
    label: "Phone",
    value: "80123 57078",
    link: "tel:8012357078",
    iconColor: "#d97706", iconBg: "#fef3c7", accent: "#d97706",
  },
  {
    icon: <FaWhatsapp size={22} />,
    label: "WhatsApp",
    value: "80123 57078 · 94440 22287",
    link: "https://wa.me/918012357078",
    iconColor: "#16a34a", iconBg: "#dcfce7", accent: "#16a34a",
  },
  {
    icon: <MdEmail size={22} />,
    label: "Email",
    value: "periyarcalltaxi@gmail.com",
    link: "mailto:periyarcalltaxi@gmail.com",
    iconColor: "#dc2626", iconBg: "#fee2e2", accent: "#dc2626",
  },
  {
    icon: <MdLocationOn size={22} />,
    label: "Address",
    value: "No.6, Vengaiyar Thottam, Kolampalayam, Erode – 638002",
    link: "https://maps.google.com/?q=Erode,Tamil+Nadu",
    iconColor: "#2563eb", iconBg: "#dbeafe", accent: "#2563eb",
  },
];

const services = ["Corporate Contracts","Event Transportation","Airport Trips","Bulk Bookings","Monthly Services","Acting Drivers"];
const tagAccents = ["#d97706","#16a34a","#2563eb","#dc2626","#7c3aed","#0d9488"];
const tagBgs     = ["#fef3c7","#dcfce7","#dbeafe","#fee2e2","#ede9fe","#ccfbf1"];

export default function Slide10() {
  return (
    <div className="w-full h-full relative overflow-hidden flex items-stretch" style={{ background: LT.bg }}>
      {/* Blobs */}
      <div className="absolute top-[-12%] right-[-8%] w-72 h-72 rounded-full opacity-80 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-[-12%] left-[-6%] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 70%)", filter: "blur(65px)" }} />
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <motion.div variants={container} initial="hidden" animate="show"
        className="relative z-10 w-full flex flex-col px-4 md:px-8 py-3 md:py-5"
        style={{ gap: "clamp(6px,1.2vh,16px)" }}>

        {/* Header */}
        <motion.div variants={item} className="flex items-center justify-center gap-2 flex-shrink-0">
          <FaTaxi className="flex-shrink-0" style={{ fontSize: "clamp(24px,4vw,46px)", color: LT.amber }} />
          <div>
            <h2 className="font-display leading-none"
              style={{ fontSize: "clamp(34px,7vw,96px)", color: LT.text }}>
              CONTACT{" "}
              <span style={{ WebkitTextStroke: `2px ${LT.amber}`, color: "transparent" }}>US</span>
            </h2>
            <p className="font-body font-semibold leading-tight"
              style={{ fontSize: "clamp(9px,1.3vw,15px)", color: LT.textMuted }}>
              Corporate • Events • Airport • Bulk Bookings
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div variants={item} className="w-full rounded-full flex-shrink-0"
          style={{ height: "1.5px", background: `linear-gradient(90deg, transparent, ${LT.amber}50, transparent)` }} />

        {/* ── Desktop: side-by-side ── */}
        <div className="hidden md:grid grid-cols-2 gap-5 flex-1 min-h-0">
          {/* Left: contacts */}
          <motion.div variants={item} className="flex flex-col gap-2.5">
            {contacts.map((c, i) => (
              <motion.a key={i} href={c.link} target="_blank" rel="noopener noreferrer"
                whileHover={{ x: 4, scale: 1.012 }} whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-200"
                style={{ background: LT.surface, border: `1.5px solid ${c.accent}22`, boxShadow: LT.shadowMd, textDecoration: "none", position: "relative", overflow: "hidden" }}>
                <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full" style={{ background: c.accent }} />
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: c.iconBg, border: `1.5px solid ${c.accent}30`, color: c.iconColor }}>
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <div className="font-accent uppercase tracking-widest font-semibold"
                    style={{ fontSize: "clamp(8px,0.9vw,10px)", color: LT.textFaint }}>{c.label}</div>
                  <div className="font-body font-bold leading-snug whitespace-pre-line"
                    style={{ fontSize: "clamp(12px,1.5vw,16px)", color: LT.text }}>{c.value}</div>
                </div>
                <div className="ml-auto flex-shrink-0 text-lg font-bold" style={{ color: c.accent + "80" }}>›</div>
              </motion.a>
            ))}
          </motion.div>
          {/* Right: CTA */}
          <motion.div variants={item} className="flex flex-col gap-3">
            <CTAPanel />
            <ServicesPanel />
          </motion.div>
        </div>

        {/* ── Mobile: stacked layout ── */}
        <div className="flex md:hidden flex-col flex-1 min-h-0" style={{ gap: "clamp(6px,2vw,10px)" }}>
          {/* Contact list — compact */}
          <motion.div variants={item} className="flex flex-col gap-1.5">
            {contacts.map((c, i) => (
              <motion.a key={i} href={c.link} target="_blank" rel="noopener noreferrer"
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 relative overflow-hidden"
                style={{ background: LT.surface, border: `1.5px solid ${c.accent}22`, boxShadow: LT.shadowMd, textDecoration: "none" }}>
                <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full" style={{ background: c.accent }} />
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: c.iconBg, color: c.iconColor }}>
                  {c.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-accent uppercase tracking-widest font-semibold"
                    style={{ fontSize: 9, color: LT.textFaint }}>{c.label}</div>
                  <div className="font-body font-bold leading-tight truncate"
                    style={{ fontSize: "clamp(11px,3.2vw,14px)", color: LT.text }}>{c.value}</div>
                </div>
                <div className="flex-shrink-0 font-bold" style={{ color: c.accent + "80" }}>›</div>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA buttons row */}
          <motion.div variants={item}
            className="rounded-2xl flex flex-col items-center justify-center py-3 px-4 relative overflow-hidden flex-shrink-0"
            style={{ background: LT.text, boxShadow: LT.shadowLg }}>
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <p className="font-accent uppercase tracking-[4px] relative z-10"
              style={{ fontSize: 10, color: `${LT.amber}99` }}>Available 24 / 7</p>
            <div className="font-display leading-none my-1 relative z-10"
              style={{ fontSize: "clamp(26px,7vw,44px)", color: LT.amber, filter: `drop-shadow(0 0 16px ${LT.amber}50)` }}>
              80123 57078
            </div>
            <div className="flex gap-2 mt-2 relative z-10">
              <motion.a href="tel:8012357078" whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-1.5 rounded-full font-body font-black"
                style={{ background: `linear-gradient(135deg, ${LT.amber}, #f59e0b)`, color: "#fff", padding: "8px 20px", fontSize: 12, textDecoration: "none", boxShadow: `0 4px 14px ${LT.amber}50` }}>
                <MdPhone size={15} /> CALL NOW
              </motion.a>
              <motion.a href="https://wa.me/918012357078" target="_blank" rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-1.5 rounded-full font-body font-bold text-white"
                style={{ background: "#16a34a", padding: "8px 18px", fontSize: 12, textDecoration: "none", boxShadow: "0 4px 14px rgba(22,163,74,0.35)" }}>
                <FaWhatsapp size={14} /> WHATSAPP
              </motion.a>
            </div>
          </motion.div>

          {/* Services tags */}
          <motion.div variants={item} className="rounded-2xl px-3 py-2.5 flex-shrink-0"
            style={{ background: LT.surface, border: `1.5px solid ${LT.amber}22`, boxShadow: LT.shadowMd }}>
            <p className="font-accent uppercase tracking-[4px] font-semibold mb-1.5"
              style={{ fontSize: 9, color: LT.amber }}>We Handle</p>
            <div className="flex flex-wrap gap-1.5">
              {services.map((s, i) => (
                <span key={s} className="font-body font-semibold rounded-full"
                  style={{ background: tagBgs[i % tagBgs.length], border: `1px solid ${tagAccents[i % tagAccents.length]}28`, color: tagAccents[i % tagAccents.length], padding: "3px 10px", fontSize: 10 }}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div variants={item} className="flex items-center justify-center gap-2 py-0.5 flex-shrink-0">
          <div className="flex-1 h-px rounded" style={{ background: `${LT.amber}30` }} />
          <span className="font-body font-semibold px-3"
            style={{ fontSize: "clamp(8px,1vw,11px)", color: LT.textFaint }}>
            PERIYAR TAXI — THE ECONOMIC CLASS — ERODE, TN
          </span>
          <div className="flex-1 h-px rounded" style={{ background: `${LT.amber}30` }} />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ── Extracted Desktop CTA & Services sub-components ── */
function CTAPanel() {
  return (
    <div className="flex-1 rounded-2xl flex flex-col items-center justify-center text-center px-5 py-5 relative overflow-hidden"
      style={{ background: LT.text, boxShadow: LT.shadowLg }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 rounded-full pointer-events-none"
        style={{ background: `${LT.amber}12`, filter: "blur(40px)" }} />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
      <p className="font-accent uppercase tracking-[5px] relative z-10"
        style={{ fontSize: "clamp(9px,1vw,12px)", color: `${LT.amber}99` }}>Available 24 / 7</p>
      <div className="font-display leading-none my-2 relative z-10"
        style={{ fontSize: "clamp(34px,6.5vw,76px)", color: LT.amber, filter: `drop-shadow(0 0 20px ${LT.amber}50)` }}>
        80123 57078
      </div>
      <p className="font-body relative z-10" style={{ fontSize: "clamp(10px,1.1vw,13px)", color: "rgba(255,255,255,0.35)" }}>
        Call or WhatsApp anytime
      </p>
      <motion.a href="tel:8012357078" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
        className="relative z-10 mt-4 inline-flex items-center gap-2 rounded-full font-body font-black"
        style={{ background: `linear-gradient(135deg, ${LT.amber}, #f59e0b)`, color: "#fff", padding: "clamp(10px,1.4vw,14px) clamp(24px,3vw,40px)", fontSize: "clamp(12px,1.5vw,17px)", boxShadow: `0 4px 20px ${LT.amber}50`, textDecoration: "none" }}>
        <MdPhone size={19} /> CALL NOW
      </motion.a>
      <motion.a href="https://wa.me/918012357078" target="_blank" rel="noopener noreferrer"
        whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
        className="relative z-10 mt-2.5 inline-flex items-center gap-2 rounded-full font-body font-bold text-white"
        style={{ background: "#16a34a", padding: "clamp(8px,1.1vw,12px) clamp(20px,2.5vw,34px)", fontSize: "clamp(11px,1.3vw,15px)", boxShadow: "0 4px 16px rgba(22,163,74,0.35)", textDecoration: "none" }}>
        <FaWhatsapp size={17} /> WHATSAPP US
      </motion.a>
    </div>
  );
}

function ServicesPanel() {
  return (
    <div className="rounded-2xl px-4 py-3"
      style={{ background: LT.surface, border: `1.5px solid ${LT.amber}22`, boxShadow: LT.shadowMd }}>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-[2px] rounded" style={{ background: LT.amber + "80" }} />
        <p className="font-accent uppercase tracking-[4px] font-semibold"
          style={{ fontSize: "clamp(8px,0.9vw,11px)", color: LT.amber }}>We Handle</p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {services.map((s, i) => (
          <span key={s} className="font-body font-semibold rounded-full"
            style={{ background: tagBgs[i % tagBgs.length], border: `1px solid ${tagAccents[i % tagAccents.length]}28`, color: tagAccents[i % tagAccents.length], padding: "clamp(3px,0.5vw,6px) clamp(10px,1.3vw,15px)", fontSize: "clamp(9px,1.1vw,12px)" }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}