import styles from "./PlaceholderSlot.module.css";

export function PlaceholderSlot({ children, size = "block", className = "", style = {} }) {
  return (
    <div className={`${styles.slot} ${styles[size]} ${className}`} style={style}>
      {children}
    </div>
  );
}
