import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getSettings } from "../services/api";

const defaultSettings = {
  business_name: "Aamdani",
  tagline: "Empowering Women Through Sustainable Livelihoods",
  support_email: "projectaamdani@gmail.com",
  contact_email: "projectaamdani@gmail.com",
  phone: "+91 96434 24286",
  whatsapp_number: "919643424286",
  address: "Delhi, India",
  instagram: "https://www.instagram.com/aamdani_by_saday?igsh=Z253dzczdG54MmY1",
  facebook: "https://facebook.com/aamdani",
  linkedin: "https://linkedin.com/company/aamdani",
  youtube: "https://youtube.com/@aamdani",
  website_url: "https://aamdani.com",
  footer_text: "Empowering Women Through Sustainable Livelihoods",
  copyright_text: "© 2026 Aamdani. All rights reserved.",
  meta_title: "Aamdani | Handmade Products By Women Entrepreneurs",
  meta_description: "Discover handmade products crafted by women entrepreneurs and support sustainable livelihoods.",
  contact_page_title: "Contact Aamdani",
  contact_page_description: "Get in touch with the Aamdani team.",
  support_page_title: "Support Women Entrepreneurs",
  support_page_description: "Help women-led businesses grow through your support.",
  about_page_title: "About Aamdani",
  about_page_description: "Learn about our mission and impact.",
  products_page_title: "Handmade Products",
  products_page_description: "Explore handcrafted products created by talented women entrepreneurs.",
  impact_page_title: "Our Impact",
  impact_page_description: "See how Aamdani is creating sustainable livelihoods.",
  hero_heading: "Empowering Women Through Handmade Businesses",
  hero_subheading: "Supporting local women entrepreneurs through digital commerce.",
  shipping_info: "Free Shipping Available",
  return_policy: "Returns accepted within 7 days of delivery.",
  working_days: "Monday to Saturday 10 AM - 6 PM",
  currency: "INR",
  currency_symbol: "₹",
  response_time: "Within 24-48 hours",
};

const SettingsContext =
  createContext();

export const SettingsProvider = ({
  children,
}) => {
  const [settings, setSettings] =
    useState(defaultSettings);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadSettings =
      async () => {
        const data =
          await getSettings();

        setSettings(prev => ({
          ...prev,
          ...data
        }));

        setLoading(false);
      };

    loadSettings();
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        settings,
        loading,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  return useContext(
    SettingsContext
  );
};