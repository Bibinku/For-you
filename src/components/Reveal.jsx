import { motion } from "framer-motion";
const ease = [0.2, 0.7, 0.2, 1];

// Word-by-word masked text reveal
export function Words({ text, delay = 0, className = "", as: Tag = "p" }) {
  return (
    <Tag className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span className="mask" key={i} aria-hidden>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "115%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: delay + i * 0.045, ease }}
          >{w}&nbsp;</motion.span>
        </span>
      ))}
    </Tag>
  );
}

export const Fade = ({ children, delay = 0, className = "" }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay, ease }}>{children}</motion.div>
);
