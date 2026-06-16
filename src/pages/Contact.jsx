import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import ContactSection from '../components/contact/ContactSection'
import OfficeInfo from '../components/contact/OfficeInfo'
import ContactFaq from '../components/contact/ContactFaq'
import SEO from '../components/common/SEO'
import { useSettings } from '../context/SettingsContext'

const Contact = () => {
  const { settings } = useSettings();

  return (
    <div>
      <SEO
        title={settings.contact_page_title || "Contact Aamdani"}
        description={settings.contact_page_description || ""}
      />
      <ContactHero/>
      <ContactSection/>
      <OfficeInfo/>
      <ContactFaq/>
    </div>
  )
}

export default Contact