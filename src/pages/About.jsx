import React from 'react';
import AboutHero from '../components/about/AboutHero';
import OurStory from '../components/about/OurStory';
import WhyNeeded from '../components/about/WhyNeeded';
import WhatWeDo from '../components/about/WhatWeDo';
import BeyondFinancialImpact from '../components/about/BeyondFinancialImpact';
import MissionVision from '../components/about/MissionVision';
import GetInvolved from '../components/about/GetInvolved';
import FaqSection from '../components/about/FaqSection';
import SEO from '../components/common/SEO';
import { useSettings } from '../context/SettingsContext';

const About = () => {
  const { settings } = useSettings();

  return (
    <div>
      <SEO
        title={settings.about_page_title || "About Aamdani"}
        description={settings.about_page_description || ""}
      />
      <AboutHero />
      <OurStory />
      <WhyNeeded />
      <WhatWeDo />
      <BeyondFinancialImpact />
      <MissionVision />
      <GetInvolved />
      <FaqSection />
    </div>
  );
};

export default About;