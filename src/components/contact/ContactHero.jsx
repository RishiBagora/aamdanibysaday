import { motion } from "framer-motion";
import { useSettings } from "../../context/SettingsContext";

const ContactHero = () => {
  const { settings } = useSettings();

  return (
    <section className="bg-[#fcfcfc] py-16 md:py-20">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          {/* BADGE */}
          <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
            {settings.contact_page_title || "Contact Us"}
          </span>

          {/* HEADING */}
          <h1 className="mt-6 text-[34px] sm:text-[48px] lg:text-[58px] leading-[1.08] font-semibold tracking-tight text-[#3f3f3f]">
            Get In Touch
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-2xl mx-auto text-[15px] sm:text-base leading-7 text-[#6b7280]">
            {settings.contact_page_description || `Whether you have questions about our initiative, would like to
            collaborate, volunteer, or simply learn more about Aamdani,
            we would love to hear from you.`}
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default ContactHero;