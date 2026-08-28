import styles from "./Footer.module.css";

const DEFAULT_COLUMNS = [
  { heading: "CONTACT", items: [{ text: "hi@yourname.com", href: "mailto:hi@yourname.com" }, { text: "+52 33 0000 0000", href: "tel:+523300000000" }] },
  { heading: "WORK", items: [{ text: "Projects", href: "/#work" }, { text: "Case Studies", href: "/#work" }] },
  { heading: "SOCIAL", items: [{ text: "LinkedIn", href: "#" }, { text: "Behance", href: "#" }, { text: "Dribbble", href: "#" }] },
];

export function Footer({ columns = DEFAULT_COLUMNS, copyright = "© 2026 Your Name" }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {columns.map((c) => (
          <div key={c.heading} className={styles.column}>
            <span className={styles.heading}>{c.heading}</span>
            {c.items.map((i) => (
              <a key={i.text} href={i.href} className={styles.item}>
                {i.text}
              </a>
            ))}
          </div>
        ))}
        <span className={styles.copyright}>{copyright}</span>
      </div>
    </footer>
  );
}
