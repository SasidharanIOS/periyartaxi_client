import React from "react";
import { motion } from "framer-motion";

const CARS = [
  { key: "tavera",  name: "Chevrolet Tavera",   emoji: "🚐", tag: "Premium MPV", color: "#3b82f6", img: `${import.meta.env.BASE_URL}tavera.png` },
  { key: "swift",   name: "Maruti Swift Dzire",  emoji: "🚗", tag: "Sedan",       color: "#ef4444", img: `${import.meta.env.BASE_URL}dezire.png`     },
  { key: "aura",    name: "Hyundai Aura",        emoji: "🚘", tag: "Sedan",       color: "#a3a3a3", img: `${import.meta.env.BASE_URL}hyundaiaura.png`        },
  { key: "innova",  name: "Innova Crysta",       emoji: "🚙", tag: "SUV",         color: "#60a5fa", img: `${import.meta.env.BASE_URL}innova.jpg`      },
];

const STATS = [
  { value: "10+",   label: "Years Experience" },
  { value: "2015",  label: "Est. Since"       },
  { value: "152",   label: "Vehicles"         },
  { value: "ERODE", label: "Tamil Nadu"       },
];

const TAGS = ["Corporate","Events","Outstation","Airport","Valet Parking","Acting Driver"];

const containerVar = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};
const itemVar = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } },
};

function CarCard({ car, index }) {
  const [imgError, setImgError] = React.useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.42, delay: 0.08 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-xl w-full h-full"
      style={{ border: `1.5px solid ${car.color}40`, boxShadow: `0 4px 16px ${car.color}1a` }}
    >
      {imgError ? (
        <div
          className="w-full h-full flex flex-col items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${car.color}22, ${car.color}44)`, minHeight: "60px" }}
        >
          <span style={{ fontSize: "clamp(28px, 5vw, 48px)" }}>{car.emoji}</span>
        </div>
      ) : (
        <img
          src={car.img} alt={car.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 55%", display: "block" }}
        />
      )}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.75) 100%)" }}
      />
      <div className="absolute bottom-0 left-0 right-0 px-2 pb-1.5 flex items-end justify-between">
        <div className="font-body font-bold text-white leading-tight" style={{ fontSize: "clamp(9px, 1.2vw, 14px)" }}>
          {car.emoji} {car.name}
        </div>
        <span
          className="px-1.5 py-0.5 rounded-full text-white font-body font-semibold flex-shrink-0 ml-1"
          style={{ background: car.color, fontSize: "clamp(7px, 0.9vw, 11px)" }}
        >
          {car.tag}
        </span>
      </div>
    </motion.div>
  );
}

export default function Slide01() {
  return (
    <div className="w-full h-full bg-taxi-yellow relative overflow-hidden flex flex-col">
      {/* Background blobs */}
      <div className="absolute top-[-12%] right-[-10%] w-72 h-72 bg-taxi-yellow-dark rounded-full opacity-30 animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[-12%] left-[-8%] w-80 h-80 bg-taxi-yellow-dark rounded-full opacity-25 animate-float pointer-events-none" />
      <div className="absolute top-[18%] left-[2%] w-36 h-36 bg-white rounded-full opacity-10 animate-float-slow pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      {/* ─────────────────────────────────────────
          DESKTOP layout  (md and above) — untouched
          ───────────────────────────────────────── */}
      <motion.div
        variants={containerVar} initial="hidden" animate="show"
        className="hidden md:flex flex-col relative z-10 w-full h-full px-3 pt-2 pb-12 gap-2"
      >
        {/* Logo */}
        <motion.div variants={itemVar} className="flex-shrink-0 flex justify-center items-center">
          <div style={{ mixBlendMode: "multiply", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <motion.img
              src={`${import.meta.env.BASE_URL}periyartaxi.png`}
              alt="Periyar Taxi – The Economic Class"
              animate={{ y: [0, -7, 0] }}
              transition={{ y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" } }}
              style={{
                height: "clamp(40px, 8vw, 88px)",
                maxWidth: "clamp(180px, 50vw, 480px)",
                objectFit: "contain",
                display: "block",
                filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.22))",
              }}
            />
          </div>
        </motion.div>

        {/* 2×2 Car Grid */}
        <motion.div
          variants={itemVar}
          className="flex-1 min-h-0 grid grid-cols-2 grid-rows-2 gap-1.5 md:gap-2"
          style={{
            borderTop: "1.5px solid rgba(0,0,0,0.10)",
            borderBottom: "1.5px solid rgba(0,0,0,0.10)",
            paddingTop: "6px", paddingBottom: "6px",
          }}
        >
          {CARS.map((car, i) => <CarCard key={car.key} car={car} index={i} />)}
        </motion.div>

        {/* Stats + Tags */}
        <motion.div variants={itemVar} className="flex-shrink-0 flex flex-col items-center gap-1">
          <div className="flex items-center justify-center gap-2 md:gap-6 flex-wrap px-1">
            {STATS.map((s, i) => (
              <React.Fragment key={s.value}>
                <div className="text-center">
                  <div className="font-display text-taxi-black leading-none" style={{ fontSize: "clamp(18px, 4vw, 52px)" }}>
                    {s.value}
                  </div>
                  <div className="font-body text-taxi-black/60 font-semibold uppercase tracking-wider" style={{ fontSize: "clamp(7px, 1vw, 12px)" }}>
                    {s.label}
                  </div>
                </div>
                {i < STATS.length - 1 && (
                  <div className="w-px bg-taxi-black/20" style={{ height: "clamp(20px, 3.5vw, 38px)" }} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="w-16 h-px bg-taxi-black/25" />
          <div className="flex flex-wrap justify-center gap-1 px-1">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full bg-taxi-black/10 text-taxi-black/75 font-body font-semibold border border-taxi-black/20"
                style={{ fontSize: "clamp(8px, 1.2vw, 13px)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ─────────────────────────────────────────
          MOBILE layout  (below md) — scrollable
          ───────────────────────────────────────── */}
      <motion.div
        variants={containerVar} initial="hidden" animate="show"
        className="md:hidden relative z-10 flex flex-col w-full h-full overflow-y-auto"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* Inner content — NOT h-full, grows naturally so scroll works */}
        <div className="flex flex-col px-3 pt-2 pb-16 gap-2">

          {/* Logo */}
          <motion.div variants={itemVar} className="flex justify-center items-center">
            <div style={{ mixBlendMode: "multiply", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <motion.img
                src={`${import.meta.env.BASE_URL}periyartaxi.png`}
                alt="Periyar Taxi – The Economic Class"
                animate={{ y: [0, -7, 0] }}
                transition={{ y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" } }}
                style={{
                  height: "clamp(40px, 8vw, 88px)",
                  maxWidth: "clamp(180px, 50vw, 480px)",
                  objectFit: "contain",
                  display: "block",
                  filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.22))",
                }}
              />
            </div>
          </motion.div>

          {/* 2×2 Car Grid — uses aspectRatio instead of flex-1 so height is natural */}
          <motion.div
            variants={itemVar}
            className="grid grid-cols-2 gap-1.5"
            style={{
              borderTop: "1.5px solid rgba(0,0,0,0.10)",
              borderBottom: "1.5px solid rgba(0,0,0,0.10)",
              paddingTop: "6px", paddingBottom: "6px",
            }}
          >
            {CARS.map((car, i) => (
              // aspectRatio gives each cell a natural height — no flex-1 / h-full needed
              <div key={car.key} style={{ aspectRatio: "4 / 3" }}>
                <CarCard car={car} index={i} />
              </div>
            ))}
          </motion.div>

          {/* Stats + Tags */}
          <motion.div variants={itemVar} className="flex flex-col items-center gap-1">
            <div className="flex items-center justify-center gap-2 flex-wrap px-1">
              {STATS.map((s, i) => (
                <React.Fragment key={s.value}>
                  <div className="text-center">
                    <div className="font-display text-taxi-black leading-none" style={{ fontSize: "clamp(18px, 4vw, 52px)" }}>
                      {s.value}
                    </div>
                    <div className="font-body text-taxi-black/60 font-semibold uppercase tracking-wider" style={{ fontSize: "clamp(7px, 1vw, 12px)" }}>
                      {s.label}
                    </div>
                  </div>
                  {i < STATS.length - 1 && (
                    <div className="w-px bg-taxi-black/20" style={{ height: "clamp(20px, 3.5vw, 38px)" }} />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="w-16 h-px bg-taxi-black/25" />
            <div className="flex flex-wrap justify-center gap-1 px-1">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full bg-taxi-black/10 text-taxi-black/75 font-body font-semibold border border-taxi-black/20"
                  style={{ fontSize: "clamp(8px, 1.2vw, 13px)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}