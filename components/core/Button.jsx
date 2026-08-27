import styles from "./Button.module.css";

export function Button({ children, variant = "primary", href, onClick, className = "", style = {} }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
