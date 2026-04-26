"use client";
import { motion, useScroll, useTransform } from "framer-motion";

function GearSVG({ size = 60, teeth = 12, color = "#1d4ed8" }) {
  const R = size / 2;
  const r = R * 0.70;
  const hub = R * 0.18;
  const cx = R;
  const cy = R;
  const pts = [];
  for (let i = 0; i < teeth; i++) {
    const base = (i / teeth) * Math.PI * 2 - Math.PI / 2;
    const step = (Math.PI * 2) / teeth;
    const w = step * 0.22;
    pts.push([cx + r * Math.cos(base - step * 0.5 + w * 0.8), cy + r * Math.sin(base - step * 0.5 + w * 0.8)]);
    pts.push([cx + R * Math.cos(base - w), cy + R * Math.sin(base - w)]);
    pts.push([cx + R * Math.cos(base + w), cy + R * Math.sin(base + w)]);
    pts.push([cx + r * Math.cos(base + step * 0.5 - w * 0.8), cy + r * Math.sin(base + step * 0.5 - w * 0.8)]);
  }
  const d = "M " + pts.map(p => p[0].toFixed(2) + "," + p[1].toFixed(2)).join(" L ") + " Z";
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: "block" }}>
      <path d={d} fill={color} opacity="0.18" />
      <circle cx={cx} cy={cy} r={r * 0.55} fill="none" stroke={color} strokeWidth="1" opacity="0.12" />
      <circle cx={cx} cy={cy} r={hub} fill="white" />
      <circle cx={cx} cy={cy} r={hub * 0.45} fill={color} opacity="0.25" />
    </svg>
  );
}

export function GearDivider({ chapter }) {
  const { scrollYProgress } = useScroll();
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -1080]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 1440]);

  return (
    <div className="relative flex items-center justify-center py-10 my-4 px-4">
      <div className="absolute inset-0 flex items-center px-8">
        <div className="w-full border-t border-dashed border-blue-200" />
      </div>
      <div className="relative z-10 flex items-center gap-1 bg-slate-50 px-5 py-2 rounded-full border border-blue-100 shadow-sm">
        {chapter && (
          <span className="font-mono text-xs text-blue-500 mr-2 select-none">
            {"// "}{chapter}
          </span>
        )}
        <motion.div style={{ rotate: rotate1 }} className="flex-shrink-0">
          <GearSVG size={44} teeth={12} color="#1d4ed8" />
        </motion.div>
        <motion.div style={{ rotate: rotate2 }} className="flex-shrink-0 -ml-2">
          <GearSVG size={30} teeth={8} color="#0891b2" />
        </motion.div>
        <motion.div style={{ rotate: rotate3 }} className="flex-shrink-0 -ml-1">
          <GearSVG size={20} teeth={6} color="#0ea5e9" />
        </motion.div>
      </div>
    </div>
  );
}

export function FloatingGears() {
  const { scrollYProgress } = useScroll();
  const r1 = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const r2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const r3 = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const r4 = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div style={{ rotate: r1 }} className="absolute -top-16 -right-16">
        <GearSVG size={280} teeth={20} color="#1d4ed8" />
      </motion.div>
      <motion.div style={{ rotate: r2 }} className="absolute top-1/3 -left-20">
        <GearSVG size={200} teeth={16} color="#0891b2" />
      </motion.div>
      <motion.div style={{ rotate: r3 }} className="absolute bottom-32 -right-10">
        <GearSVG size={160} teeth={14} color="#1d4ed8" />
      </motion.div>
      <motion.div style={{ rotate: r4 }} className="absolute bottom-0 left-1/4">
        <GearSVG size={120} teeth={10} color="#0891b2" />
      </motion.div>
    </div>
  );
}
