import { Navbar } from "@/components/navigation/Navbar.jsx";
import { Footer } from "@/components/navigation/Footer.jsx";
import { HeroStatement } from "@/components/sections/HeroStatement.jsx";
import { ContactBand } from "@/components/sections/ContactBand.jsx";
import { FeaturedProject } from "@/components/listings/FeaturedProject.jsx";
import { ProjectListItem } from "@/components/listings/ProjectListItem.jsx";
import { Rule } from "@/components/core/Rule.jsx";
import { Button } from "@/components/core/Button.jsx";
import { Eyebrow } from "@/components/core/Eyebrow.jsx";
import styles from "./page.module.css";

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
      <Navbar activeLink="PROJECTS" />
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

      <div id="work" className={styles.work}>
        <Eyebrow size="medium" className={styles.eyebrow}>
          PROJECTS(05)
        </Eyebrow>
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
      <Footer />
    </div>
  );
}
