import { motion } from 'framer-motion';
import { Quote } from './Quote';
import { SkillsGrid } from './SkillsGrid';

export function Introduction() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            As a dedicated Business Computing student and founder of EL Büroservice, 
            I bridge the gap between technology and business solutions. My passion lies in 
            creating efficient systems that drive business growth and innovation.
          </p>
          <Quote />
        </motion.div>
        
        <motion.h2 
          className="text-3xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Expertise
        </motion.h2>
        
        <SkillsGrid />
      </div>
    </section>
  );
}