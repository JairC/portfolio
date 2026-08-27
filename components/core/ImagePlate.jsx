import styles from "./ImagePlate.module.css";

export function ImagePlate({ label, chip, src, alt = "", className = "", style = {} }) {
  return (
    <div className={`${styles.plate} ${className}`} style={style}>
      {src ? <img src={src} alt={alt} className={styles.image} /> : null}
      {chip ? <span className={styles.chip}>{chip}</span> : null}
      {label ? <span className={styles.label}>{label}</span> : null}
    </div>
  );
}
