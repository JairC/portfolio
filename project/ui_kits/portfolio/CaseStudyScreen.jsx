import React from 'react';
import { Navbar } from '../../components/navigation/Navbar.jsx';
import { Footer } from '../../components/navigation/Footer.jsx';
import { ChapterBlock } from '../../components/sections/ChapterBlock.jsx';
import { ResultsBand } from '../../components/sections/ResultsBand.jsx';
import { NextProjectBand } from '../../components/sections/NextProjectBand.jsx';
import { ContactBand } from '../../components/sections/ContactBand.jsx';
import { MetaGrid } from '../../components/sections/MetaGrid.jsx';
import { ImagePlate } from '../../components/core/ImagePlate.jsx';

const CHAPTERS = [
  { number: '01', label: 'CONTEXT' },
  { number: '02', label: 'PROBLEM' },
  { number: '03', label: 'APPROACH' },
  { number: '04', label: 'SYSTEM' },
];

export function CaseStudyScreen({ density = 'desktop', onBack }) {
  const isMobile = density === 'mobile';
  return (
    <div style={{ background: 'var(--surface-card)' }}>
      <Navbar density={density} activeLink="PROJECTS" onNavigate={onBack} />
      <div style={{ padding: isMobile ? '40px var(--page-x-mobile) 32px' : '80px var(--page-x) 56px' }}>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontOpticalSizing: 'auto', fontWeight: 300, fontSize: isMobile ? 'var(--display-s)' : 'var(--display-l)', lineHeight: isMobile ? 'var(--display-s-lh)' : 'var(--display-l-lh)', letterSpacing: 'var(--display-tracking-tight)', color: 'var(--text-primary)', textWrap: 'pretty' }}>
          Digital Wallet — <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Relaunch</em>
        </h1>
        <p style={{ margin: isMobile ? '20px 0 28px' : '24px 0 40px', maxWidth: 760, fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 'var(--body-s)' : 'var(--lede)', lineHeight: isMobile ? 'var(--body-s-lh)' : 'var(--lede-lh)', color: 'var(--text-muted)' }}>
          A full IA rebuild that cut support tickets in half and lifted installs past 700K.
        </p>
        <MetaGrid columns={isMobile ? 2 : 4} items={[['ROLE', null, true], ['DURATION', null, true], ['TEAM', null, true], ['SCOPE', 'IDENTITY, SYSTEM, APP']]} />
      </div>
      <ImagePlate height={isMobile ? 300 : 520} label="HERO PLACEHOLDER" style={isMobile ? {} : { margin: '0 var(--page-x)' }} />
      <div style={{ paddingTop: isMobile ? 44 : 32 }}>
        {CHAPTERS.map((c, i) => (
          <React.Fragment key={c.number}>
            <ChapterBlock density={density} number={c.number} label={c.label} heading="Chapter heading — TBD" active={i === 0} style={isMobile ? { marginBottom: 36 } : {}} />
            {i === 0 ? <ImagePlate height={isMobile ? 240 : 400} label="BEFORE / AFTER PLACEHOLDER" style={{ margin: isMobile ? '0 0 36px' : '32px var(--page-x)' }} /> : null}
          </React.Fragment>
        ))}
      </div>
      <ResultsBand density={density} value="700K+ installs" />
      <NextProjectBand density={density} title="ircode_admin_panel" onClick={onBack} />
      <ContactBand density={density} withRule={isMobile} />
      <Footer density={density} />
    </div>
  );
}
