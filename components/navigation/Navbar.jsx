"use client";

import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const LINKS = ["PROJECTS", "ABOUT", "CONTACT"];

export function Navbar({ wordmark = "papi(r)", links = LINKS, className = "" }) {
  const pathname = usePathname();
  const activeLink = pathname === "/" || pathname.startsWith("/work") ? "PROJECTS" : undefined;

  return (
    <nav className={`${styles.nav} ${className}`}>
      <div className={styles.inner}>
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
      </div>
    </nav>
  );
}
