import React from 'react'
import ImpactHero from '../components/impact/ImpactHero'
import StoriesOfChange from '../components/impact/StoriesOfChange'
import ImpactInNumbers from '../components/impact/ImpactInNumbers'
import ImpactGallery from '../components/impact/ImpactGallery'
import CommunitiesSupported from '../components/impact/CommunitiesSupported'
import Testimonials from '../components/impact/Testimonials'
import ImpactCTA from '../components/impact/ImpactCTA'
import SEO from '../components/common/SEO'
import { useSettings } from '../context/SettingsContext'

const Impact = () => {
  const { settings } = useSettings();

  return (
    <>
      <SEO
        title={settings.impact_page_title || "Our Impact"}
        description={settings.impact_page_description || ""}
      />
      <ImpactHero/>
    <StoriesOfChange/> 
    <ImpactInNumbers/>
    <ImpactGallery/>
    <CommunitiesSupported/>
    <Testimonials/>
    <ImpactCTA/>
    </>
  )
}

export default Impact