import styles from "./NextProjectBand.module.css";

export function NextProjectBand({ label = "NEXT PROJECT", title, href = "#" }) {
  return (
    <a href={href} className={styles.band}>
      <div className={styles.text}>
        <span className={styles.label}>{label}</span>
        <div className={styles.titleRow}>
          <span className={styles.title}>{title}</span>
          <span className={styles.arrow}>→</span>
        </div>
      </div>
      <div className={styles.plate} />
    </a>
  );
}
