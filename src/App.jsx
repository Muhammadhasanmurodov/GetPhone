import { motion } from "framer-motion";
import { Instagram, Send, Phone, MapPin, Sparkles } from "lucide-react";

function App() {
  const links = [
    {
      label: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/getphone_uz?igsh=MW16aHdxcGJtdTB3cw==",
    },
    { label: "Telegram", icon: Send, href: "https://t.me/GetPhone_uz" },
    {
      label: "Call: +998 91 124 22 21",
      icon: Phone,
      href: "tel:+998911242221",
    },
    {
      label: "Call: +998 88 424 84 44",
      icon: Phone,
      href: "tel:+998884248444",
    },
    { label: "Manzil", icon: MapPin, href: "https://maps.google.com" },
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#1C1C1C]">
      {/* HERO – 100vh */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-gradient-to-br from-[#F5F0E6] via-white to-[#EFE6C8]"
        />

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <div className="mx-auto mb-6 h-40 w-40 rounded-full border border-[#C9A24D] flex items-center justify-center">
            <img src="./public/02.png" alt="GetPhone" />
          </div>

          <h1 className="text-4xl font-normal tracking-wide">
            Get <span className="text-[#C9A24D]">Phone</span>
          </h1>

          <p className="mt-4 max-w-sm mx-auto text-sm text-gray-600">
            Premium telefonlar, planshetlar va professional servis xizmati
          </p>
        </motion.div>
      </section>

      {/* INFO BLOCK – ixcham */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-2xl font-medium mb-12"
          >
            Get Phone haqida
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Savdo",
                text: "Yangi va ishlatilgan telefonlar, planshetlar hamda original aksessuarlar.",
              },
              {
                title: "Sotib olish",
                text: "Telefoningizni tez va adolatli narxda sotib olamiz.",
              },
              {
                title: "Servis",
                text: "Malakali ustalar tomonidan professional ta’mirlash xizmati.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[#C9A24D]/40 bg-white/80 p-6 text-center backdrop-blur"
              >
                <h3 className="mb-3 text-lg font-medium text-[#C9A24D]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LINKS */}
      <section className="py-24 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-medium mb-12"
        >
          Murojaat uchun
        </motion.h2>

        <div className="max-w-md mx-auto space-y-5">
          {links.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={i}
                href={item.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
                className="group flex items-center justify-between rounded-full border border-[#C9A24D] bg-white px-6 py-4 shadow-sm"
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-[#C9A24D]" />
                  <span className="font-light">{item.label}</span>
                </span>
                <span className="h-2 w-2 rounded-full bg-[#C9A24D] opacity-0 group-hover:opacity-100 transition" />
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-xs text-gray-400">
        © 2026 Get Phone — Premium Service
      </footer>
    </div>
  );
}

export default App;
