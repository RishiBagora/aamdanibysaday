// components/common/Footer.jsx

import { Link } from "react-router-dom";
import { useSettings } from "../../context/SettingsContext";

const Footer = () => {
  const { settings } = useSettings();

  const businessName =
  settings.business_name || "Aamdani";

const footerText =
  settings.footer_text ||
  "Empowering Women Through Sustainable Livelihoods";

const supportEmail =
  settings.support_email ||
  "projectaamdani@gmail.com";

const phone =
  settings.phone ||
  "+91 96434 24286";

const instagram =
  settings.instagram || "https://www.instagram.com/aamdani_by_saday?igsh=Z253dzczdG54MmY1";

const facebook =
  settings.facebook || "#";

const linkedin =
  settings.linkedin || "#";

const copyrightText =
  settings.copyright_text ||
  "© 2026 Aamdani. All rights reserved."



  return (
    <footer className="bg-[#f5f7f8] border-t border-[#d7e3e7]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP */}
        <div className="py-14 md:py-16 grid lg:grid-cols-[1.1fr_.9fr] gap-12">

          {/* LEFT */}
          <div className="max-w-xl">

            {/* LOGO */}
            <Link to="/" className="inline-block">
              <img
  src="/images/logo.png"
  alt="Aamdani"
  className="h-34 w-auto"
/>
            </Link>

            {/* DESC */}
            <p className="mt-5 text-[15px] leading-7 text-[#6b7280]">
              {footerText}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 mt-7">

              <div className="px-4 py-2 rounded-full bg-[#e8f1f4] text-[#5A97A9] text-sm font-medium">
                Women Empowerment
              </div>

              <div className="px-4 py-2 rounded-full bg-[#fff1e7] text-[#FF7A1A] text-sm font-medium">
                Handmade Products
              </div>

              <div className="px-4 py-2 rounded-full bg-[#eef3ee] text-[#6c8c74] text-sm font-medium">
                Community Growth
              </div>

            </div>

            {/* SOCIALS */}
            <div className="flex items-center gap-3 mt-8">

              {/* INSTAGRAM */}
              <a
                href={instagram}
target="_blank"
rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-[#d7e3e7] bg-white flex items-center justify-center hover:border-[#5A97A9] hover:bg-[#e8f1f4] transition-all duration-300"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[#5A97A9]"
                >
                  <path
                    d="M17 3H7C4.79 3 3 4.79 3 7V17C3 19.21 4.79 21 7 21H17C19.21 21 21 19.21 21 17V7C21 4.79 19.21 3 17 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* FACEBOOK */}
              <a
                href={facebook}
target="_blank"
rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-[#d7e3e7] bg-white flex items-center justify-center hover:border-[#FF7A1A] hover:bg-[#fff1e7] transition-all duration-300"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[#FF7A1A]"
                >
                  <path
                    d="M17 2H14C11.79 2 10 3.79 10 6V9H7V13H10V22H14V13H17L18 9H14V6C14 5.45 14.45 5 15 5H18V2H17Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* LINKEDIN */}
              <a
                href={linkedin}
target="_blank"
rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-[#d7e3e7] bg-white flex items-center justify-center hover:border-[#6c8c74] hover:bg-[#eef3ee] transition-all duration-300"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[#6c8c74]"
                >
                  <path
                    d="M16 8C18.21 8 20 9.79 20 12V21H16V12C16 11.45 15.55 11 15 11C14.45 11 14 11.45 14 12V21H10V8H14V9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="2"
                    y="8"
                    width="4"
                    height="13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="4"
                    cy="4"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-10">

            {/* NAVIGATION */}
            <div>

              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#e8f1f4] text-[#5A97A9] text-xs font-medium uppercase tracking-wide">
                Navigation
              </div>

              <div className="flex flex-col gap-4 mt-6">

                <Link to="/" className="text-[#6b7280] hover:text-[#5A97A9] transition-all duration-300">
                  Home
                </Link>

                <Link to="/about" className="text-[#6b7280] hover:text-[#5A97A9] transition-all duration-300">
                  About
                </Link>

                <Link to="/products" className="text-[#6b7280] hover:text-[#5A97A9] transition-all duration-300">
                  Products
                </Link>

                <Link to="/impact" className="text-[#6b7280] hover:text-[#5A97A9] transition-all duration-300">
                  Impact
                </Link>

                <Link to="/support" className="text-[#6b7280] hover:text-[#5A97A9] transition-all duration-300">
                  Support
                </Link>

              </div>

            </div>

            {/* CONTACT */}
            <div>

              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#fff1e7] text-[#FF7A1A] text-xs font-medium uppercase tracking-wide">
                Contact
              </div>

              <div className="flex flex-col gap-4 mt-6">

                <a
                  href={`mailto:${supportEmail}`}
                  className="text-[#6b7280] hover:text-[#FF7A1A] transition-all duration-300"
                >
                  {supportEmail}
                </a>

                <a
                  href={`tel:${phone}`}
                  className="text-[#6b7280] hover:text-[#FF7A1A] transition-all duration-300"
                >
                  {phone}
                </a>

                <p className="text-[#6b7280] leading-7">
                  Supporting local women
                  <br />
                  through handmade businesses.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-[#d7e3e7] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-sm text-[#7b8790]">
            {copyrightText}
          </p>

          <Link
            to="/support"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8f1f4] text-[#5A97A9] text-sm font-medium hover:gap-3 transition-all duration-300"
          >
            Support The Initiative

            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 17L17 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M8 7H17V16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

          </Link>

        </div>

      </div>
    </footer>
  );
};

export default Footer;