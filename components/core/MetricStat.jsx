import styles from "./MetricStat.module.css";

export function MetricStat({ value, label, size = "large", layout = "responsive", pending = false, className = "", style = {} }) {
  return (
    <div className={`${styles.wrap} ${styles[layout]} ${className}`} style={style}>
      <span className={`${styles.value} ${styles[size]} ${pending ? styles.pending : ""}`}>
        {pending ? "TBD" : value}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
