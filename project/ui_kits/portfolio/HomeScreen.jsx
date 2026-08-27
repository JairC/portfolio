import React from 'react';
import { Navbar } from '../../components/navigation/Navbar.jsx';
import { Footer } from '../../components/navigation/Footer.jsx';
import { HeroStatement } from '../../components/sections/HeroStatement.jsx';
import { ContactBand } from '../../components/sections/ContactBand.jsx';
import { FeaturedProject } from '../../components/listings/FeaturedProject.jsx';
import { ProjectRow } from '../../components/listings/ProjectRow.jsx';
import { Rule } from '../../components/core/Rule.jsx';
import { Button } from '../../components/core/Button.jsx';
import { Eyebrow } from '../../components/core/Eyebrow.jsx';

export const PROJECTS = [
  { index: '02', category: 'BRAND · PRODUCT', title: 'cashi_rebrand', description: 'A full IA rebuild that cut support tickets in half.', stat: '700K+', statLabel: 'INSTALLS' },
  { index: '03', category: 'ENTERPRISE TOOLING', title: 'ircode_admin_panel', statLabel: 'HEADLINE METRIC', pending: true },
  { index: '04', category: 'ONBOARDING', title: 'ircode_progressive_onboarding', statLabel: 'HEADLINE METRIC', pending: true },
  { index: '05', category: 'EDITORIAL · WEB', title: 'fil', statLabel: 'HEADLINE METRIC', pending: true },
];

export function HomeScreen({ density = 'desktop', onOpenProject }) {
  const isMobile = density === 'mobile';
  const open = (e) => { e.preventDefault(); if (onOpenProject) onOpenProject(); };
  return (
    <div style={{ background: 'var(--surface-card)' }}>
      <Navbar density={density} activeLink="PROJECTS" onNavigate={onOpenProject} />
      <HeroStatement
        density={density}
        intro="Designer and consultant — turning ambiguous problems into interfaces people trust."
        meta={[['ROLE', 'PRODUCT DESIGN / UX'], ['BASE', null, true], ['SINCE', null, true]]}
        actions={<><Button variant="primary" href="#contact">CONTACT →</Button><Button variant="outline" href="#cv">DOWNLOAD CV ↓</Button></>}
      >
        Strategy first.<br />Then design <em style={{ fontStyle: 'italic', fontWeight: 400 }}>that works</em>.
      </HeroStatement>

      <div style={{ padding: isMobile ? '32px var(--page-x-mobile) 40px' : '56px var(--page-x) 72px' }}>
        <Eyebrow size="medium" style={{ display: 'block', marginBottom: isMobile ? 20 : 28 }}>PROJECTS(05)</Eyebrow>
        <FeaturedProject
          density={density}
          category="FINTECH · WALLET"
          title="cashi_bill_payments"
          description="Turning a stressful payment flow into one users trust."
          stat="81.8% → 85.1%"
          statLabel="TRANSACTION SUCCESS"
          onClick={open}
          style={{ marginBottom: isMobile ? 32 : 56 }}
        />
        {PROJECTS.map((p, i) => (
          <React.Fragment key={p.index}>
            <Rule />
            {isMobile
              ? <FeaturedProject density="mobile" eyebrow={p.index + ' — ' + p.category} category={p.category} title={p.title} description={p.description} stat={p.stat} statLabel={p.statLabel} statPending={p.pending} onClick={open} style={{ margin: '24px 0 32px' }} />
              : <ProjectRow {...p} onClick={open} />}
            {i === PROJECTS.length - 1 ? null : null}
          </React.Fragment>
        ))}
      </div>

      <ContactBand density={density} />
      <Footer density={density} />
    </div>
  );
}
