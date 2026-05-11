import React, { useState } from "react";
import { motion } from "framer-motion";

const LT = {
  bg: "#f5f3ee", surface: "#ffffff", surface2: "#faf9f6",
  border: "rgba(0,0,0,0.07)", text: "#1a1814",
  textMuted: "#6b6860", textFaint: "#b0ada8",
  amber: "#d97706", amberLight: "#fef3c7",
  shadow: "0 2px 10px rgba(0,0,0,0.07)",
  shadowMd: "0 8px 28px rgba(0,0,0,0.10)",
  shadowHover: "0 16px 44px rgba(0,0,0,0.14)",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 36, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] } },
};

const bookings = [
  {
    title: "One Way\nTrip",
    subtitle: "Point A → Point B",
    tag: "MOST POPULAR",
    tagColor: "#d97706", tagText: "#fff",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    accent: "#d97706",
  },
  {
    title: "Round\nTrip",
    subtitle: "Go & Return",
    tag: "BEST VALUE",
    tagColor: "#16a34a", tagText: "#fff",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/4e4aa4d85f6256cb7cfb4d2b40fb5ff1ec0348fa.jpg",
    accent: "#16a34a",
  },
  {
    title: "Hourly\nRental",
    subtitle: "Pay Per Hour",
    tag: "FLEXIBLE",
    tagColor: "#2563eb", tagText: "#fff",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    accent: "#2563eb",
  },
  {
    title: "Bulk\nBooking",
    subtitle: "Groups & Fleets",
    tag: "CORPORATE",
    tagColor: "#7c3aed", tagText: "#fff",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/5f160111c41e3308e5d08020d1425e829ef57c39.jpg",
    accent: "#7c3aed",
  },
  {
    title: "Airport\nTaxi",
    subtitle: "24 / 7 Pickup & Drop",
    tag: "24 / 7",
    tagColor: "#dc2626", tagText: "#fff",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/8a708215343c31d22848e72b2f5b189562e85e7d.jpg",
    accent: "#dc2626",
  },
];

function CardInner({ b, i, hovered }) {
  const isHov = hovered === i;
  return (
    <>
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: "72%" }}>
        <img
          src={b.image}
          alt={b.title.replace("\n", " ")}
          className="w-full h-full object-cover"
          style={{
            transform: isHov ? "scale(1.08)" : "scale(1.0)",
            filter: isHov ? "brightness(0.95) saturate(1.1)" : "brightness(0.88) saturate(1.0)",
            transition: "transform 0.7s ease, filter 0.35s ease",
            objectPosition: i === 3 ? "center 60%" : "center center",
          }}
          loading="eager"
        />
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: "55%", background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.58) 100%)" }} />

        <div className="absolute top-2.5 left-2.5">
          <span className="font-body font-black rounded-full px-2 py-0.5 leading-tight"
            style={{
              fontSize: "clamp(7px, 0.68vw, 11px)",
              backgroundColor: b.tagColor, color: b.tagText,
              letterSpacing: "0.06em", boxShadow: `0 2px 8px ${b.tagColor}50`,
            }}>
            {b.tag}
          </span>
        </div>

        <div className="absolute top-2 right-3 font-display leading-none select-none"
          style={{ fontSize: "clamp(30px, 3.6vw, 60px)", color: "rgba(255,255,255,0.15)" }}>
          {String(i + 1).padStart(2, "0")}
        </div>

        {i === 3 && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }} className="absolute bottom-10 right-2.5">
            <div className="rounded-xl px-2 py-1 text-center"
              style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(6px)", border: `1px solid ${b.accent}35`, boxShadow: `0 4px 12px ${b.accent}20` }}>
              <div className="font-display leading-none" style={{ fontSize: "clamp(16px, 1.7vw, 26px)", color: b.accent }}>87</div>
              <div className="font-body uppercase tracking-wider" style={{ fontSize: "clamp(6px, 0.5vw, 9px)", color: LT.textMuted }}>Vehicles</div>
            </div>
          </motion.div>
        )}

        <div className="absolute bottom-0 left-0 right-0 px-3 pb-2.5">
          <h3 className="font-display leading-tight whitespace-pre-line"
            style={{ fontSize: "clamp(17px, 2vw, 32px)", color: "#ffffff", textShadow: "0 2px 14px rgba(0,0,0,0.7)" }}>
            {b.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-col flex-1 px-3 pt-2 pb-2.5 justify-between"
        style={{ borderTop: `2px solid ${b.accent}22` }}>
        <p className="font-accent uppercase tracking-widest font-semibold"
          style={{ fontSize: "clamp(7px, 0.68vw, 11px)", color: LT.textMuted, letterSpacing: "0.12em" }}>
          {b.subtitle}
        </p>
        {i === 3 && (
          <p className="font-body font-medium" style={{ fontSize: "clamp(7px, 0.62vw, 10px)", color: b.accent, marginTop: "2px" }}>
            SUV · Coach · Bus · Tempo
          </p>
        )}
        <motion.div className="rounded-full flex-shrink-0"
          animate={{ width: isHov ? "88%" : "24%", opacity: isHov ? 1 : 0.4 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ height: "2.5px", backgroundColor: b.accent, marginTop: "5px" }} />
        <motion.div animate={{ opacity: isHov ? 1 : 0, y: isHov ? 0 : 6 }} transition={{ duration: 0.2 }}>
          <span className="font-body font-bold rounded-lg px-2.5 py-1 inline-block"
            style={{ fontSize: "clamp(8px, 0.78vw, 12px)", backgroundColor: b.accent, color: "#fff", boxShadow: `0 4px 14px ${b.accent}40` }}>
            Book Now →
          </span>
        </motion.div>
      </div>

      <motion.div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full"
        animate={{ opacity: isHov ? 1 : 0, scaleY: isHov ? 1 : 0.2 }}
        transition={{ duration: 0.3 }}
        style={{ backgroundColor: b.accent, transformOrigin: "top" }} />

      <motion.div animate={{ opacity: isHov ? 1 : 0 }} transition={{ duration: 0.3 }}
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${b.accent}0d 0%, transparent 65%)` }} />
    </>
  );
}

export default function Slide04() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col" style={{ background: LT.bg }}>
      {/* Blobs */}
      <div className="absolute top-[-15%] right-[-8%] w-[460px] h-[460px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.09) 0%, transparent 70%)", filter: "blur(70px)" }} />
      <div className="absolute bottom-[-12%] left-[-6%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)", filter: "blur(65px)" }} />
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* HEADER */}
      <div className="flex-shrink-0 px-4 md:px-10 pt-4 md:pt-5 pb-2.5"
        style={{ background: "linear-gradient(180deg, rgba(217,119,6,0.05) 0%, transparent 100%)", borderBottom: "1px solid rgba(217,119,6,0.12)" }}>
        <p className="font-accent uppercase tracking-[7px] font-semibold mb-1"
          style={{ fontSize: "clamp(10px, 1.1vw, 13px)", color: LT.amber }}>
          Book Your Ride
        </p>
        <div className="flex items-end justify-between">
          {/* ✅ FIXED: "BOOKING" is now solid amber — fully visible and readable */}
          <h2 className="font-display leading-none"
            style={{ fontSize: "clamp(28px, 5.5vw, 72px)", color: LT.text }}>
            FLEXIBLE{" "}
            <span style={{ color: LT.amber }}>BOOKING</span>
          </h2>
          <span className="hidden md:block font-body font-medium mb-1"
            style={{ fontSize: "clamp(11px, 1vw, 13px)", color: LT.textMuted }}>
            5 Options Available
          </span>
        </div>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="w-14 h-[3px] rounded-full mt-1.5 origin-left"
          style={{ background: `linear-gradient(90deg, ${LT.amber}, transparent)` }} />
      </div>

      {/* ── DESKTOP: 5-col horizontal cards ── */}
      <motion.div variants={container} initial="hidden" animate="show"
        className="hidden md:grid md:grid-cols-5 flex-1 gap-2 lg:gap-3 px-5 lg:px-6 py-3 overflow-hidden"
      >
        {bookings.map((b, i) => (
          <motion.div key={i} variants={cardVariant}
            onHoverStart={() => setHovered(i)} onHoverEnd={() => setHovered(null)}
            className="relative rounded-2xl overflow-hidden flex flex-col cursor-default"
            style={{
              background: LT.surface,
              border: `1.5px solid ${hovered === i ? b.accent + "55" : LT.border}`,
              boxShadow: hovered === i ? `0 16px 44px ${b.accent}20, 0 4px 16px rgba(0,0,0,0.08)` : LT.shadowMd,
              transition: "border 0.3s, box-shadow 0.35s, transform 0.3s",
              transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
            }}>
            <CardInner b={b} i={i} hovered={hovered} />
          </motion.div>
        ))}
      </motion.div>

      {/* ── MOBILE: scrollable 2-col grid ── */}
      <motion.div variants={container} initial="hidden" animate="show"
        className="md:hidden px-3 py-3 flex flex-col gap-2.5"
        style={{
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          flex: "1 1 0",
          minHeight: 0,
        }}
      >
        {/* Row 1: cards 0 & 1 */}
        <div className="grid grid-cols-2 gap-2 flex-shrink-0">
          {bookings.slice(0, 2).map((b, i) => (
            <motion.div key={i} variants={cardVariant}
              onTouchStart={() => setHovered(i)} onTouchEnd={() => setHovered(null)}
              className="relative rounded-2xl overflow-hidden flex flex-col cursor-default"
              style={{
                background: LT.surface,
                border: `1.5px solid ${hovered === i ? b.accent + "55" : LT.border}`,
                boxShadow: LT.shadowMd,
                aspectRatio: "3 / 4",
              }}>
              <CardInner b={b} i={i} hovered={hovered} />
            </motion.div>
          ))}
        </div>

        {/* Row 2: cards 2 & 3 */}
        <div className="grid grid-cols-2 gap-2 flex-shrink-0">
          {bookings.slice(2, 4).map((b, i) => {
            const idx = i + 2;
            return (
              <motion.div key={idx} variants={cardVariant}
                onTouchStart={() => setHovered(idx)} onTouchEnd={() => setHovered(null)}
                className="relative rounded-2xl overflow-hidden flex flex-col cursor-default"
                style={{
                  background: LT.surface,
                  border: `1.5px solid ${hovered === idx ? b.accent + "55" : LT.border}`,
                  boxShadow: LT.shadowMd,
                  aspectRatio: "3 / 4",
                }}>
                <CardInner b={b} i={idx} hovered={hovered} />
              </motion.div>
            );
          })}
        </div>

        {/* Row 3: card 4 — full width landscape */}
        <motion.div variants={cardVariant}
          onTouchStart={() => setHovered(4)} onTouchEnd={() => setHovered(null)}
          className="relative rounded-2xl overflow-hidden flex flex-col flex-shrink-0 cursor-default"
          style={{
            background: LT.surface,
            border: `1.5px solid ${hovered === 4 ? bookings[4].accent + "55" : LT.border}`,
            boxShadow: LT.shadowMd,
            height: "160px",
          }}>
          <img src={bookings[4].image} alt={bookings[4].title.replace("\n", " ")}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.82) saturate(1.0)" }} />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }} />
          <div className="absolute top-2.5 left-3">
            <span className="font-body font-black rounded-full px-2 py-0.5 leading-tight"
              style={{ fontSize: "11px", backgroundColor: bookings[4].tagColor, color: "#fff", letterSpacing: "0.06em" }}>
              {bookings[4].tag}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 top-0 flex flex-col justify-center px-4"
            style={{ width: "60%" }}>
            <h3 className="font-display leading-tight whitespace-pre-line"
              style={{ fontSize: "clamp(22px, 7vw, 34px)", color: "#fff", textShadow: "0 2px 14px rgba(0,0,0,0.7)" }}>
              {bookings[4].title}
            </h3>
            <p className="font-accent uppercase tracking-widest font-semibold mt-1"
              style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)" }}>
              {bookings[4].subtitle}
            </p>
            <div className="mt-2 h-[2.5px] w-10 rounded-full" style={{ backgroundColor: bookings[4].accent }} />
          </div>
        </motion.div>

        {/* Bottom padding */}
        <div className="flex-shrink-0 h-1" />
      </motion.div>

      {/* BOTTOM STRIP */}
      <div className="flex-shrink-0 flex items-center justify-between px-4 md:px-10 py-2"
        style={{ background: "rgba(217,119,6,0.04)", borderTop: "1px solid rgba(217,119,6,0.12)" }}>
        <div className="flex items-center gap-3 md:gap-7 flex-wrap overflow-x-auto no-scrollbar">
          {bookings.map((b, i) => (
            <button key={i}
              onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
              className="font-body font-medium transition-all duration-200 whitespace-nowrap"
              style={{ fontSize: "clamp(9px, 0.85vw, 13px)", color: hovered === i ? b.accent : LT.textFaint }}>
              {b.title.replace("\n", " ")}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0 ml-3">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: LT.amber }} />
          <span className="font-body font-medium whitespace-nowrap"
            style={{ fontSize: "clamp(9px, 0.8vw, 11px)", color: LT.amber + "99" }}>
            8012357078 — 24/7
          </span>
        </div>
      </div>
    </div>
  );
}