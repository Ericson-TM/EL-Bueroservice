import { Github, Linkedin, Mail } from 'lucide-react';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="relative w-full min-h-screen">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90">
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <img
              src="/src/images/Bewerbung.jpg"
              alt="Eric Lieberwirth"
              className="w-60 h-60 rounded-full mx-auto mb-8 shadow-xl"
              style={{
                WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                maskImage: "radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",
              }}
          />
          <h1 className="text-5xl font-bold text-white mb-4">Eric Lieberwirth</h1>
          <p className="text-xl text-blue-200 mb-8">Business Computing Student & Owner of EL Büroservice</p>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/ericson-tm" className="text-blue-200 hover:text-white transition-colors"
               target={"_blank"}>
              <Github className="w-6 h-6"/>
            </a>
            <a href="https://www.linkedin.com/in/eric-noel-lieberwirth-306b8022a/"
               className="text-blue-200 hover:text-white transition-colors" target={"_blank"}>
              <Linkedin className="w-6 h-6"/>
            </a>
            <a href="mailto:contact@el.service@gmx.de" className="text-blue-200 hover:text-white transition-colors"
               target={"_blank"}>
              <Mail className="w-6 h-6"/>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}