import styles from "./HeroStatement.module.css";

export function HeroStatement({ children, intro, meta = [], actions, className = "" }) {
  return (
    <header className={`${styles.hero} ${className}`}>
      <h1 className={styles.heading}>{children}</h1>
      <div className={styles.metaRow}>
        {intro ? <div className={styles.intro}>{intro}</div> : null}
        {meta.length ? (
          <div className={styles.metaGrid}>
            {meta.map((row) => (
              <span key={row[0]} className={styles.metaPair}>
                <span className={styles.metaKey}>{row[0]}</span>
                <span className={row[2] ? styles.metaPending : styles.metaValue}>{row[2] ? "TBD" : row[1]}</span>
              </span>
            ))}
          </div>
        ) : null}
      </div>
      {actions ? <div className={styles.actions}>{actions}</div> : null}
    </header>
  );
}
