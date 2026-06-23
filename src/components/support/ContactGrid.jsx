// components/support/ContactGrid.jsx

import { motion } from "framer-motion";
import { MessageSquare, Mail, Phone } from "lucide-react";

const contactItems = [
  {
    name: "WhatsApp",
    value: "+91 96434 24286",
    href: "https://wa.me/919643424286?text=Hello%20Aamdani%2C%20I%20have%20an%20enquiry.",
    icon: (props) => <MessageSquare {...props} />,
    color: "bg-[#e8f1f4] text-[#5A97A9] border-[#cce0e6]",
    hoverColor: "hover:border-[#5A97A9] hover:bg-[#e8f1f4]/30",
  },
  {
    name: "Email",
    value: "projectaamdani@gmail.com",
    href: "mailto:projectaamdani@gmail.com",
    icon: (props) => <Mail {...props} />,
    color: "bg-[#fff1e7] text-[#FF7A1A] border-[#ffd9c0]",
    hoverColor: "hover:border-[#FF7A1A] hover:bg-[#fff1e7]/30",
  },
  {
    name: "Phone Number",
    value: "+91 96434 24286",
    href: "tel:+919643424286",
    icon: (props) => <Phone {...props} />,
    color: "bg-[#eef3ee] text-[#6c8c74] border-[#d4ebd9]",
    hoverColor: "hover:border-[#6c8c74] hover:bg-[#eef3ee]/30",
  },
  {
    name: "Instagram",
    value: "@aamdani_by_saday",
    href: "https://www.instagram.com/aamdani_by_saday?igsh=Z253dzczdG54MmY1",
    icon: (props) => (
      <svg
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    color: "bg-[#f1eef8] text-[#7c68b2] border-[#e2daf5]",
    hoverColor: "hover:border-[#7c68b2] hover:bg-[#f1eef8]/30",
  },
];

const ContactGrid = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                target={item.name === "Email" || item.name === "Phone Number" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`flex flex-col items-center text-center p-8 rounded-[28px] border bg-[#fcfcfc] transition-all duration-300 shadow-sm ${item.hoverColor}`}
              >
                {/* ICON WRAPPER */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.color} border shadow-inner`}>
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#3f3f3f]">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm text-[#6b7280] font-medium break-all">
                  {item.value}
                </p>

                <span className="mt-4 text-xs font-semibold text-[#5A97A9] uppercase tracking-wider group-hover:underline">
                  Connect &rarr;
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactGrid;
