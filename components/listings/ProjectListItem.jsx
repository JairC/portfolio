import { ImagePlate } from "../core/ImagePlate.jsx";
import { MetricStat } from "../core/MetricStat.jsx";
import { Eyebrow } from "../core/Eyebrow.jsx";
import { PlaceholderSlot } from "../core/PlaceholderSlot.jsx";
import styles from "./ProjectListItem.module.css";

export function ProjectListItem({ index, category, title, description, stat, statLabel, pending = false, href = "#" }) {
  const eyebrow = category ? `${index} — ${category}` : index;
  return (
    <a href={href} className={styles.item}>
      {/* mobile: full-width card, image on top */}
      <div className={styles.card}>
        <ImagePlate chip={category} className={styles.cardPlate} />
        <div className={styles.cardBody}>
          <Eyebrow size="responsive">{eyebrow}</Eyebrow>
          <span className={styles.cardTitle}>{title}</span>
          {pending ? (
            <PlaceholderSlot size="chip">ONE-LINE DESCRIPTION — TBD</PlaceholderSlot>
          ) : (
            <span className={styles.cardDescription}>{description}</span>
          )}
          <MetricStat value={stat} label={statLabel} pending={pending} size="xlarge" className={styles.cardStat} />
        </div>
      </div>

      {/* desktop: text-left / image-right row */}
      <div className={styles.row}>
        <div className={styles.rowText}>
          <Eyebrow size="medium">{eyebrow}</Eyebrow>
          <span className={styles.rowTitle}>{title}</span>
          {pending ? (
            <PlaceholderSlot size="chip">ONE-LINE DESCRIPTION — TBD</PlaceholderSlot>
          ) : (
            <span className={styles.rowDescription}>{description}</span>
          )}
          <MetricStat value={stat} label={statLabel} pending={pending} size="large" layout="inline" className={styles.rowStat} />
        </div>
        <div className={styles.rowPlate} />
      </div>
    </a>
  );
}
