// components/contact/OfficeInfo.jsx
import { useSettings } from "../../context/SettingsContext";
import { motion } from "framer-motion";



const OfficeInfo = () => {

  const { settings } = useSettings();

const details = [
  {
    label: "Response Time",
    value:
      settings.response_time ||
      "Within 24–48 Hours",
    color: "text-[#5A97A9]",
  },
  {
    label: "Working Days",
    value:
      settings.working_days ||
      "Monday – Saturday",
    color: "text-[#FF7A1A]",
  },
  {
    label: "Location",
    value:
      settings.address ||
      "Nathdwara, Rajasthan",
    color: "text-[#6c8c74]",
  },
  {
    label: "Support",
    value:
      settings.support_type ||
      "Email & WhatsApp",
    color: "text-[#7c68b2]",
  },
];



  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <div className="border-y border-[#d7e3e7]">

            {details.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-6 border-b border-[#d7e3e7] last:border-b-0"
              >
                <h3 className="text-[15px] font-medium text-[#6b7280]">
                  {item.label}
                </h3>

                <p className={`text-lg font-medium ${item.color}`}>
                  {item.value}
                </p>
              </div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default OfficeInfo;