import { ImagePlate } from "../core/ImagePlate.jsx";
import { MetricStat } from "../core/MetricStat.jsx";
import { Eyebrow } from "../core/Eyebrow.jsx";
import styles from "./FeaturedProject.module.css";

export function FeaturedProject({ eyebrow = "FEATURED — 01", category, title, description, stat, statLabel, statPending = false, href = "#", className = "" }) {
  return (
    <a href={href} className={`${styles.card} ${className}`}>
      <ImagePlate chip={category} className={styles.plate} />
      <div className={styles.body}>
        <Eyebrow tone="accent" size="responsive">
          {eyebrow}
        </Eyebrow>
        <span className={styles.title}>{title}</span>
        {description ? <span className={styles.description}>{description}</span> : null}
        <MetricStat value={stat} label={statLabel} pending={statPending} size="xlarge" className={styles.stat} />
      </div>
    </a>
  );
}
