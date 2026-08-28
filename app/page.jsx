import { HeroStatement } from "@/components/sections/HeroStatement.jsx";
import { ContactBand } from "@/components/sections/ContactBand.jsx";
import { SectionDivider } from "@/components/sections/SectionDivider.jsx";
import { FeaturedProject } from "@/components/listings/FeaturedProject.jsx";
import { ProjectListItem } from "@/components/listings/ProjectListItem.jsx";
import { Rule } from "@/components/core/Rule.jsx";
import { Button } from "@/components/core/Button.jsx";
import styles from "./page.module.css";

const PROJECTS_INTRO = [
  { text: "Browse", size: "big" },
  { text: "a", size: "small" },
  { text: "small", size: "big" },
  { text: "index", size: "big" },
  { text: "of", size: "small" },
  { text: "shipped", size: "big" },
  { text: "work.", size: "big" },
];

const PROJECTS = [
  {
    index: "02",
    category: "BRAND · PRODUCT",
    title: "cashi_rebrand",
    description: "A full IA rebuild that cut support tickets in half.",
    stat: "700K+",
    statLabel: "INSTALLS",
    href: "/work/cashi-rebrand",
  },
  { index: "03", category: "ENTERPRISE TOOLING", title: "ircode_admin_panel", statLabel: "HEADLINE METRIC", pending: true, href: "#" },
  { index: "04", category: "ONBOARDING", title: "ircode_progressive_onboarding", statLabel: "HEADLINE METRIC", pending: true, href: "#" },
  { index: "05", category: "EDITORIAL · WEB", title: "fil", statLabel: "HEADLINE METRIC", pending: true, href: "#" },
];

export default function HomePage() {
  return (
    <div className={styles.page}>
      <HeroStatement
        intro="Designer and consultant — turning ambiguous problems into interfaces people trust."
        meta={[
          ["ROLE", "PRODUCT DESIGN / UX"],
          ["BASE", null, true],
          ["SINCE", null, true],
        ]}
        actions={
          <>
            <Button variant="primary" href="#contact">
              CONTACT →
            </Button>
            <Button variant="outline" href="#cv">
              DOWNLOAD CV ↓
            </Button>
          </>
        }
      >
        Strategy first.
        <br />
        Then design <em>that works</em>.
      </HeroStatement>

      <SectionDivider
        id="work"
        ticker="PROJECTS"
        words={PROJECTS_INTRO}
        caption="Selected for what shipped, not what looked good in a deck."
      />
      <div className={styles.work}>
        <FeaturedProject
          category="FINTECH · WALLET"
          title="cashi_bill_payments"
          description="Turning a stressful payment flow into one users trust."
          stat="81.8% → 85.1%"
          statLabel="TRANSACTION SUCCESS"
          href="/work/cashi-rebrand"
          className={styles.featured}
        />
        {PROJECTS.map((p) => (
          <div key={p.index}>
            <Rule />
            <ProjectListItem {...p} />
          </div>
        ))}
      </div>

      <ContactBand id="contact" />
    </div>
  );
}
