import { PlaceholderSlot } from "../core/PlaceholderSlot.jsx";
import { Rule } from "../core/Rule.jsx";
import styles from "./ResultsBand.module.css";

export function ResultsBand({ label = "RESULTS", value, caption }) {
  return (
    <section className={styles.section}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
      <Rule className={styles.rule} />
      {caption ? (
        <span className={styles.caption}>{caption}</span>
      ) : (
        <PlaceholderSlot className={styles.placeholder}>RESULTS CAPTION PLACEHOLDER</PlaceholderSlot>
      )}
    </section>
  );
}
