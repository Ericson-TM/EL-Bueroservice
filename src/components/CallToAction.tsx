import { motion } from 'framer-motion'


export function CallToAction() {
  return (
    <section id="contact" className="relative py-16 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600 opacity-10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.h2
            className="text-4xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
          Let’s Work Together
        </motion.h2>

        <motion.p
            className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
          Looking to optimize your business processes or need technical consulting?
          I’m here to help transform your ideas into reality.
        </motion.p>

        <motion.a
            href="mailto:contact@el.service@gmx.de"
            className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 8px 20px rgba(255, 255, 255, 0.3)',
            }}
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  );
}