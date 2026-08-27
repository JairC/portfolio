import styles from "./Navbar.module.css";

const LINKS = ["PROJECTS", "ABOUT", "CONTACT"];

export function Navbar({ wordmark = "papi(r)", links = LINKS, activeLink, className = "" }) {
  return (
    <nav className={`${styles.nav} ${className}`}>
      <a href="/" className={styles.wordmark}>
        {wordmark}
      </a>
      <div className={styles.links}>
        {links.map((l) => (
          <a
            key={l}
            href={l === "CONTACT" ? "#contact" : l === "PROJECTS" ? "/#work" : "#"}
            className={l === activeLink ? styles.active : ""}
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
}
