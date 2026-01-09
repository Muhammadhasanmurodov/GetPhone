import { motion } from "framer-motion";
import { Instagram, Send, Phone, MapPin } from "lucide-react";

function App() {
  const links = [
    {
      label: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/getphone_uz",
    },
    {
      label: "Instagram account 2",
      icon: Instagram,
      href: "https://www.instagram.com/getphone_1?igsh=MTVod3RqaHRlanFteg%3D%3D&utm_source=qr",
    },
    { label: "Telegram", icon: Send, href: "https://t.me/GetPhone_uz" },
    {
      label: "+998 91 124 22 21",
      icon: Phone,
      href: "tel:+998911242221",
    },
    {
      label: "+998 91 676 34 34",
      icon: Phone,
      href: "tel:+998916763434",
    },
    {
      label: "Manzil",
      icon: MapPin,
      href: "https://maps.app.goo.gl/UaoHvYuAy9gchvkV9",
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* HERO + CONTACT */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* background glow */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[#C9A24D]/20 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-72 w-72 bg-[#C9A24D]/10 blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-full max-w-md text-center"
        >
          {/* LOGO */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto mb-6 h-36 w-36 rounded-full border border-[#C9A24D] flex items-center justify-center bg-black"
          >
            <img src="/02.png" alt="GetPhone" />
          </motion.div>

          {/* TITLE */}
          <h1 className="text-4xl tracking-wide font-light">
            Get <span className="text-[#C9A24D]">Phone</span>
          </h1>

          <p className="mt-3 text-sm text-gray-400">
            Premium telefonlar • Savdo • Servis
          </p>

          {/* CONTACT LINKS */}
          <div className="mt-10 space-y-4">
            {links.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.12 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-between rounded-full border border-[#C9A24D]/40 bg-white/5 backdrop-blur px-6 py-4"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-[#C9A24D]" />
                    <span className="text-sm font-light">{item.label}</span>
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#C9A24D]" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* INFO */}
      <section className="py-28 px-6 bg-gradient-to-b from-black to-[#0E0E0E]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-2xl font-light mb-14"
          >
            Get Phone haqida
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Savdo",
                text: "Yangi va ishlatilgan premium telefonlar hamda original aksessuarlar.",
              },
              {
                title: "Sotib olish",
                text: "Telefoningizni tez, ishonchli va adolatli narxda sotib olamiz.",
              },
              {
                title: "Servis",
                text: "Malakali ustalar tomonidan professional ta’mirlash.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[#C9A24D]/30 bg-white/5 p-8 text-center"
              >
                <h3 className="mb-3 text-lg text-[#C9A24D]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-xs text-gray-500">
        © 2026 Get Phone — Premium Experience
      </footer>
    </div>
  );
}

export default App;
