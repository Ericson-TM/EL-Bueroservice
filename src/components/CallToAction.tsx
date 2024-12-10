export function CallToAction() {
  return (
    <section id="contact" className="py-16 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Let's Work Together</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Looking to optimize your business processes or need technical consulting? 
          I'm here to help transform your ideas into reality.
        </p>
        <a
          href="mailto:contact@ericlieberwirth.com"
          className="inline-block bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}