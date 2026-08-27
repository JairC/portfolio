import styles from "./MetaGrid.module.css";

export function MetaGrid({ items = [], className = "" }) {
  return (
    <div className={`${styles.grid} ${className}`}>
      {items.map((row) => (
        <div key={row[0]}>
          <div className={styles.key}>{row[0]}</div>
          <div className={row[2] ? styles.pending : styles.value}>{row[2] ? "TBD" : row[1]}</div>
        </div>
      ))}
    </div>
  );
}
