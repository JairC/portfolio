import styles from "./SectionDivider.module.css";

function RingIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true" className={styles.ring}>
      <circle cx="4.5" cy="4.5" r="4" stroke="currentColor" />
    </svg>
  );
}

export function SectionDivider({ ticker = "PROJECTS", words = [], caption, id }) {
  const tickerItems = Array(8).fill(ticker);
  return (
    <section id={id} className={styles.divider}>
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i} className={styles.tickerItem}>
              {t}
              <RingIcon />
            </span>
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.words}>
          {words.map((w, i) => (
            <span key={i} className={w.size === "small" ? styles.small : styles.big}>
              {w.text}
            </span>
          ))}
        </p>
        {caption ? <p className={styles.caption}>{caption}</p> : null}
      </div>
    </section>
  );
}
