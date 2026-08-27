import { Navbar } from "@/components/navigation/Navbar.jsx";
import { Footer } from "@/components/navigation/Footer.jsx";
import { ChapterBlock } from "@/components/sections/ChapterBlock.jsx";
import { ResultsBand } from "@/components/sections/ResultsBand.jsx";
import { NextProjectBand } from "@/components/sections/NextProjectBand.jsx";
import { ContactBand } from "@/components/sections/ContactBand.jsx";
import { MetaGrid } from "@/components/sections/MetaGrid.jsx";
import { ImagePlate } from "@/components/core/ImagePlate.jsx";
import styles from "./page.module.css";

export const metadata = {
  title: "Cashi — Rebrand | Your Name",
};

const CHAPTERS = [
  { number: "01", label: "CONTEXT" },
  { number: "02", label: "PROBLEM" },
  { number: "03", label: "APPROACH" },
  { number: "04", label: "SYSTEM" },
];

export default function CashiRebrandPage() {
  return (
    <div className={styles.page}>
      <Navbar activeLink="PROJECTS" />

      <div className={styles.titleBlock}>
        <h1 className={styles.title}>
          Digital Wallet — <em>Relaunch</em>
        </h1>
        <p className={styles.lede}>A full IA rebuild that cut support tickets in half and lifted installs past 700K.</p>
        <MetaGrid
          items={[
            ["ROLE", null, true],
            ["DURATION", null, true],
            ["TEAM", null, true],
            ["SCOPE", "IDENTITY, SYSTEM, APP"],
          ]}
        />
      </div>

      <ImagePlate label="HERO PLACEHOLDER" className={styles.heroPlate} />

      <div className={styles.chapters}>
        {CHAPTERS.map((c, i) => (
          <div key={c.number} className={styles.chapter}>
            <ChapterBlock number={c.number} label={c.label} heading="Chapter heading — TBD" active={i === 0} />
            {i === 0 ? <ImagePlate label="BEFORE / AFTER PLACEHOLDER" className={styles.chapterPlate} /> : null}
          </div>
        ))}
      </div>

      <ResultsBand value="700K+ installs" />
      <NextProjectBand title="ircode_admin_panel" href="/" />
      <ContactBand withRule="mobile" />
      <Footer />
    </div>
  );
}
