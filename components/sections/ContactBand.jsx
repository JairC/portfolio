import { Button } from "../core/Button.jsx";
import styles from "./ContactBand.module.css";

const RULE_CLASSES = {
  true: "withRule",
  false: "",
  mobile: "withRuleMobile",
};

export function ContactBand({ heading = "Let's work together", cta = "GET IN TOUCH →", href = "mailto:hi@yourname.com", withRule = true, id }) {
  return (
    <section id={id} className={`${styles.band} ${styles[RULE_CLASSES[withRule]] || ""}`}>
      <span className={styles.heading}>{heading}</span>
      <Button variant="outline" href={href}>
        {cta}
      </Button>
    </section>
  );
}
