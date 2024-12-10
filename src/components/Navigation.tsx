import { motion } from 'framer-motion';

export function Navigation() {
  return (
    <motion.div 
      className="fixed top-4 left-0 right-0 z-50 flex justify-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <nav className="glass-nav px-12 py-4 rounded-full shadow-2xl">
        <div className="flex items-center space-x-8">
          {/* Logo */}
            <img
                src="/src/images/Logo.png"
                alt="Logo"
                className="w-12 h-12 cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}/>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="text-gray-400 hover:text-white transition-colors text-lg font-medium"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-gray-400 hover:text-white transition-colors text-lg font-medium"
            >
              Projects
            </a>

          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="bg-white text-black px-6 py-2 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>
    </motion.div>
  );
}