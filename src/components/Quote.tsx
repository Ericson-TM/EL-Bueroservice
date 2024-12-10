import { motion } from 'framer-motion';
import { Quote as QuoteIcon } from 'lucide-react';

export function Quote() {
  return (
    <motion.div 
      className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 relative"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <QuoteIcon className="w-8 h-8 text-white/10 absolute -top-4 -left-4" />
      <p className="text-gray-400 italic text-lg">
        "In the world of technology, the only constant is change. That's why I don't just write code – 
        I craft solutions that evolve with your business."
      </p>
      <p className="text-white mt-4 text-sm">— Eric Lieberwirth</p>
    </motion.div>
  );
}