import { Github, Linkedin, Mail } from 'lucide-react';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="relative w-full min-h-screen">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&w=2000&q=80"
          alt="Technical Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <img
            src="/src/images/Bewerbung.jpg"
            alt="Eric Lieberwirth"
            className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-blue-500/20 shadow-xl"
          />
          <h1 className="text-5xl font-bold text-white mb-4">Eric Lieberwirth</h1>
          <p className="text-xl text-blue-200 mb-8">Business Computing Student & Entrepreneur</p>
          
          <div className="flex justify-center gap-6">
            <a href="https://github.com/ericson-tm" className="text-blue-200 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/eric-noel-lieberwirth-306b8022a/" className="text-blue-200 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:contact@el.service@gmx.de" className="text-blue-200 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}