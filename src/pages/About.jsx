import React from 'react'
import AboutHero from '../components/about/AboutHero'
import OurStory from '../components/about/OurStory'
import MissionVision from '../components/about/MissionVission'
import HowItWorks from '../components/about/HowItWorks'
import ImpactThroughWork from '../components/about/ImpactThroughWork'
import MeetWomen from '../components/about/WomenWeSupoort'
import JoinMovement from '../components/about/JoinMovement'
import FaqSection from '../components/about/FaqSection'
import SEO from '../components/common/SEO'
import { useSettings } from '../context/SettingsContext'

const About = () => {
  const { settings } = useSettings();

  return (
    <div>
      <SEO
        title={settings.about_page_title || "About Aamdani"}
        description={settings.about_page_description || ""}
      />
      <AboutHero />
      <OurStory/>
      <MissionVision/>
      <HowItWorks/>
      <ImpactThroughWork/>
      <MeetWomen/>
      <JoinMovement/>
      <FaqSection/>
    </div>
  )
}

export default About