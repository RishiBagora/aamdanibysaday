import React from 'react'
import SupportHero from '../components/support/SupportHero'
import ContactGrid from '../components/support/ContactGrid'
import CollaborateSection from '../components/support/CollaborateSection'
import SupportFAQ from '../components/support/SupportFAQ'
import SEO from '../components/common/SEO'
import { useSettings } from '../context/SettingsContext'

const Collaborate = () => {
  const { settings } = useSettings();

  return (
    <div>
      <SEO
        title="Connect With Aamdani"
        description="We welcome collaborations, partnerships, product enquiries, and support opportunities."
      />
      <SupportHero/>
      <ContactGrid/>
      <CollaborateSection/>
      <SupportFAQ/>
    </div>
  )
}

export default Collaborate