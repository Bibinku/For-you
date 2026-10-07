import { useRef } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Opening, Chapter, Us, Memories, Thankful, Final } from "./pages/Pages.jsx";

// Order of the story = order of this array. Each item is its own route.
const pages = [
  { path: "/", el: (n) => <Opening next={n} /> },
  { path: "/why", el: () => <Chapter id="why" /> },
  { path: "/best-friend", el: () => <Chapter id="friend" /> },
  { path: "/thanks", el: () => <Chapter id="thanks" /> },
  { path: "/photos", el: () => <Memories /> },
  { path: "/all-the-best", el: () => <Chapter id="wish" /> },
  { path: "/the-end", el: () => <Final /> },
];

export default function App() {
  const loc = useLocation();
  const nav = useNavigate();
  const idx = Math.max(0, pages.findIndex((p) => p.path === loc.pathname));
  const touch = useRef(null);
  const go = (d) => { const t = pages[idx + d]; if (t) nav(t.path); };

  const onStart = (e) => (touch.current = e.target.closest("[data-noswipe]") ? null : e.touches[0].clientX);
  const onEnd = (e) => {
    if (touch.current == null) return;
    const dx = e.changedTouches[0].clientX - touch.current;
    if (Math.abs(dx) > 70) go(dx < 0 ? 1 : -1);
  };

  return (
    <div className="app" onTouchStart={onStart} onTouchEnd={onEnd} tabIndex={0}
      onKeyDown={(e) => e.key === "ArrowRight" ? go(1) : e.key === "ArrowLeft" && go(-1)}>
      <div className="grain" />
      <AnimatePresence mode="wait">
        <motion.main key={loc.pathname} className="stage"
          initial={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.97, filter: "blur(8px)" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}>
          <Routes location={loc}>
            {pages.map((p) => <Route key={p.path} path={p.path} element={p.el(() => go(1))} />)}
          </Routes>
        </motion.main>
      </AnimatePresence>
      {idx > 0 && (
        <nav className="nav">
          <button onClick={() => go(-1)} aria-label="Previous" disabled={idx === 0}>←</button>
          <div className="bar"><motion.i animate={{ scaleX: (idx + 1) / pages.length }} /></div>
          <button onClick={() => go(1)} aria-label="Next" disabled={idx === pages.length - 1}>→</button>
        </nav>
      )}
    </div>
  );
}
