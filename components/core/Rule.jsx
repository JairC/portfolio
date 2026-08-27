import styles from "./Rule.module.css";

export function Rule({ tone = "hairline", className = "", style = {} }) {
  return <div className={`${styles.rule} ${tone === "strong" ? styles.strong : ""} ${className}`} style={style} />;
}
