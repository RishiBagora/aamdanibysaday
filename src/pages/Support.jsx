import React from 'react'
import SupportHero from '../components/support/SupportHero'
import WaysToSupport from '../components/support/WaysToSupport'
import VolunteerSection from '../components/support/VolunteerSection'
import PartnerWithUs from '../components/support/PartnerWithUs'
import SupportFAQ from '../components/support/SupportFAQ'
import SupportCTA from '../components/support/SupportCTA'
import SEO from '../components/common/SEO'
import { useSettings } from '../context/SettingsContext'

const Collaborate = () => {
  const { settings } = useSettings();

  return (
    <div>
      <SEO
        title={settings.support_page_title || "Support Women Entrepreneurs"}
        description={settings.support_page_description || ""}
      />
      <SupportHero/>
      <WaysToSupport/>
      <VolunteerSection/>
      <PartnerWithUs/>
      <SupportFAQ/>
      <SupportCTA/>
          </div>
  )
}

export default Collaborate