// components/support/VolunteerSection.jsx

import { motion } from "framer-motion";

const roles = [
  "Events & Community",
  "Marketing & Outreach",
  "Design & Creative",
  "Photography & Documentation",
];

const VolunteerSection = () => {
  return (
    <section className="py-16 bg-[#f5f7f8]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">

          {/* LEFT */}
          <div>

            <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
              Volunteer With Us
            </span>

            <h2 className="mt-5 text-[30px] sm:text-[42px] leading-[1.1] font-semibold tracking-tight text-[#3f3f3f]">
              Share Your Skills,
              <br />
              Create Impact
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#6b7280] max-w-md">
              Volunteers play an important role in helping us reach more
              women, tell their stories, and strengthen local communities.
            </p>

          </div>

          {/* RIGHT */}
          <div className="space-y-3">

            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                viewport={{ once: true }}
                className="bg-white border border-[#d7e3e7] rounded-[24px] px-6 py-5"
              >
                <h3 className="text-lg font-medium text-[#3f3f3f]">
                  {role}
                </h3>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default VolunteerSection;