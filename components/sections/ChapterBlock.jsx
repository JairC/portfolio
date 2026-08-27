import { PlaceholderSlot } from "../core/PlaceholderSlot.jsx";
import styles from "./ChapterBlock.module.css";

export function ChapterBlock({ number, label, heading, body, active = false, className = "" }) {
  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.mobileMeta}>
        {number} — {label}
      </div>
      <div className={styles.rail}>
        <span className={`${styles.number} ${active ? styles.active : ""}`}>{number}</span>
        <span className={styles.railLabel}>{label}</span>
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading}>{heading}</h2>
        {body ? (
          <p className={styles.body}>{body}</p>
        ) : (
          <PlaceholderSlot className={styles.placeholder}>BODY COPY PLACEHOLDER — 40 to 60 words.</PlaceholderSlot>
        )}
      </div>
    </section>
  );
}
