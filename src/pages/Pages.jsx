import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Words, Fade } from "../components/Reveal.jsx";
import { opening, chapters, photos, thanks, ending, video } from "../content.js";

const step = 0.9; // seconds between lines

/* 1 · Opening */
export function Opening({ next }) {
  const ref = useRef(null);
  useEffect(() => { const v = ref.current; if (v) { v.muted = true; v.play().catch(() => {}); } }, []);
  return (
    <section className="page center" onTouchStart={() => ref.current?.play().catch(() => {})}>
      <video ref={ref} className="bgvideo" src={video.src} poster={video.poster} autoPlay muted loop playsInline preload="auto" disablePictureInPicture />
      <div className="veil" />
      <Words as="h1" className="display" text={opening.title} delay={0.8} />
      {opening.lines.map((l, i) => <Words key={i} className="line accent" text={l} delay={2.2 + i * 1.2} />)}
      <Fade delay={5}><button className="btn" onClick={next}>Begin</button></Fade>
    </section>
  );
}

/* Generic chapter */
export function Chapter({ id }) {
  const c = chapters[id];
  const st = c.small ? 0.3 : step;
  return (
    <section className="page scroll">
      <Words as="h2" className="title" text={c.title} delay={0.2} />
      <div className={`body ${c.small ? "sm" : ""}`}>
        {c.lines.map((l, i) => l === "" ? <div key={i} className="gap" /> :
          <Words key={i} className="line" text={l} delay={0.9 + i * st} />)}
      </div>
    </section>
  );
}

/* 5 · Us — two silhouettes walking hand in hand under parallax layers */
export function Us() {
  const x = useMotionValue(0);
  const far = useTransform(x, [-1, 1], [-14, 14]);
  const near = useTransform(x, [-1, 1], [-34, 34]);
  const onMove = (e) => {
    const p = e.touches ? e.touches[0].clientX : e.clientX;
    x.set((p / window.innerWidth) * 2 - 1);
  };
  return (
    <section className="page center us" onMouseMove={onMove} onTouchMove={onMove}>
      <motion.div className="moon" style={{ x: far }} animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 8, repeat: Infinity }} />
      <motion.svg style={{ x: near }} viewBox="0 0 400 200" className="walkers" aria-label="Two people walking together">
        <motion.g animate={{ x: [-18, 18, -18] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}>
          <g fill="currentColor">
            <circle cx="170" cy="70" r="9" /><path d="M160 84h20l4 52h-6l-2 40h-8l-2-40-2 40h-8l-2-40h-6z" />
            <circle cx="222" cy="76" r="8" /><path d="M213 89h18l3 46h-5l-2 41h-7l-2-41-2 41h-7l-2-41h-5z" />
            <path d="M184 100q8 10 30 2" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
        </motion.g>
        <motion.line x1="0" x2="400" y1="176" y2="176" stroke="currentColor" strokeOpacity=".25"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3 }} />
      </motion.svg>
      <Words as="h2" className="title small" text="Chapter 04 · Us" delay={1.5} />
      <Words className="line" text="No matter how far the road goes, I always want to walk it with you." delay={2.2} />
    </section>
  );
}

/* 6 · Our photos — blurred depth backdrop, mask reveal, drag-linked tilt */
export function Memories() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [bad, setBad] = useState({});
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-6, 6]);
  const go = (d) => { setDir(d); setI((v) => (v + d + photos.length) % photos.length); };
  const p = photos[i];
  useEffect(() => { [1, 2, -1].forEach((d) => { new Image().src = photos[(i + d + photos.length) % photos.length].src; }); }, [i]);
  return (
    <section className="page center" data-noswipe>
      <AnimatePresence>
        <motion.img key={"bg" + i} className="backdrop" src={p.src} alt="" initial={{ opacity: 0 }} animate={{ opacity: 0.28 }}
          exit={{ opacity: 0 }} transition={{ duration: 1.2 }} />
      </AnimatePresence>
      <Words as="h2" className="title small" text="OUR PHOTOS" delay={0.2} />
      <div className="gallery">
        <AnimatePresence mode="popLayout" custom={dir}>
          <motion.figure key={i} custom={dir} className="photo" style={{ x, rotate }}
            drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.5}
            onDragEnd={(_, { offset }) => Math.abs(offset.x) > 60 && go(offset.x < 0 ? 1 : -1)}
            onTap={() => go(1)}
            variants={{
              enter: (d) => ({ x: d * 90, opacity: 0, scale: 0.96, clipPath: "inset(0 0 100% 0)" }),
              center: { x: 0, opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0)" },
              exit: (d) => ({ x: d * -90, opacity: 0, scale: 0.94 }),
            }}
            initial="enter" animate="center" exit="exit" transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}>
            {bad[i] ? <div className="ph" /> : (
              <motion.img src={p.src} alt={`Photo ${i + 1}`} draggable={false} style={{ objectPosition: p.pos }} onError={() => setBad((b) => ({ ...b, [i]: 1 }))}
                initial={{ scale: 1.25 }} animate={{ scale: 1 }} transition={{ duration: 2, ease: "easeOut" }} />
            )}
          </motion.figure>
        </AnimatePresence>
      </div>
      <small className="hint">{String(i + 1).padStart(2, "0")} / {photos.length} · swipe or tap</small>
    </section>
  );
}

/* 7 · Things I'm thankful for — one by one */
export function Thankful() {
  const [n, setN] = useState(1);
  useEffect(() => {
    if (n >= thanks.length) return;
    const t = setTimeout(() => setN(n + 1), 2600);
    return () => clearTimeout(t);
  }, [n]);
  return (
    <section className="page center" onClick={() => setN((v) => Math.min(v + 1, thanks.length))}>
      <span className="kicker">Chapter 06 · Things I'm thankful for</span>
      <div className="stack">
        {thanks.slice(0, n).map((t, i) => (
          <motion.p key={t} className={`line ${i === n - 1 ? "" : "dim"}`}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: i === n - 1 ? 1 : 0.35, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.2 }}>{t}</motion.p>
        ))}
      </div>
    </section>
  );
}

/* 7 · The End */
export function Final() {
  return (
    <section className="page center final">
      <motion.div className="orb a" animate={{ x: [-90, -8], opacity: [0, 1] }} transition={{ duration: 4, ease: "easeInOut" }} />
      <motion.div className="orb b" animate={{ x: [90, 8], opacity: [0, 1] }} transition={{ duration: 4, ease: "easeInOut" }} />
      <motion.div className="bloom" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 5, delay: 3.5 }} />
      <Words as="h1" className="display" text={ending.title} delay={4.5} />
      {ending.lines.map((l, i) => <Words key={i} className="line accent" text={l} delay={5.8 + i * 1.2} />)}
    </section>
  );
}
