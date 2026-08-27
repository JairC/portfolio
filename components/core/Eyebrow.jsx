import styles from "./Eyebrow.module.css";

export function Eyebrow({ children, tone = "meta", size = "small", className = "", style = {} }) {
  return (
    <span className={`${styles.eyebrow} ${styles[tone]} ${styles[size]} ${className}`} style={style}>
      {children}
    </span>
  );
}
