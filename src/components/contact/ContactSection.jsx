// components/contact/ContactSection.jsx

import { motion } from "framer-motion";
import { useSettings } from "../../context/SettingsContext";

const ContactSection = () => {
  const { settings } = useSettings();

const supportEmail =
  settings.support_email ||
  "hello@aamdani.org";

const phone =
  settings.phone ||
  "+919999999999";

const address =
  settings.address ||
  "Nathdwara, Rajasthan, India";


  return (
    <section className="pb-16 bg-[#fcfcfc]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border border-[#d7e3e7] rounded-[32px] overflow-hidden"
        >

          <div className="grid lg:grid-cols-[420px_1fr]">

            {/* LEFT */}
            <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#d7e3e7] bg-[#f8fafb]">

              <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
                Contact Information
              </span>

              <h2 className="mt-5 text-[28px] font-semibold text-[#3f3f3f]">
                Let's Connect
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-[#6b7280]">
                We'd be happy to answer your questions, discuss
                partnerships, volunteer opportunities, or anything
                related to Aamdani.
              </p>

              <div className="mt-10 space-y-8">

                <div>
                  <p className="text-sm font-medium text-[#5A97A9]">
                    Email
                  </p>
                  <a
  href={`mailto:${supportEmail}`}
  className="mt-2 block text-[#3f3f3f]"
>
  {supportEmail}
</a>
                </div>

                <div>
                  <p className="text-sm font-medium text-[#FF7A1A]">
                    Phone
                  </p>
                  <a
  href={`tel:${phone}`}
  className="mt-2 block text-[#3f3f3f]"
>
  {phone}
</a>
                </div>

                <div>
                  <p className="text-sm font-medium text-[#6c8c74]">
                    Address
                  </p>
                  <p className="mt-2 text-[#3f3f3f] leading-7">
  {address}
</p>
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="p-8 lg:p-10">

              <h3 className="text-[28px] font-semibold text-[#3f3f3f]">
                Send A Message
              </h3>

              <form className="mt-8 space-y-5">

                <div className="grid sm:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm text-[#6b7280] mb-2">
                      Name
                    </label>

                    <input
                      type="text"
                      className="w-full h-12 px-4 rounded-xl border border-[#d7e3e7] focus:outline-none focus:border-[#5A97A9]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#6b7280] mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      className="w-full h-12 px-4 rounded-xl border border-[#d7e3e7] focus:outline-none focus:border-[#5A97A9]"
                    />
                  </div>

                </div>

                <div>
                  <label className="block text-sm text-[#6b7280] mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    className="w-full h-12 px-4 rounded-xl border border-[#d7e3e7] focus:outline-none focus:border-[#5A97A9]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#6b7280] mb-2">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl border border-[#d7e3e7] resize-none focus:outline-none focus:border-[#5A97A9]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-full bg-[#5A97A9] text-white text-sm font-medium hover:bg-[#4c8798] transition-all duration-300"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;