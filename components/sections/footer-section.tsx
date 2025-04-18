export default function FooterSection() {
  return (
    <footer className="bg-luxury-darker py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-luxury-gold">Chiamaka Joy Anigbo</h2>
            <p className="text-white/60 mt-2">Actress • Performer • Storyteller</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <a href="#home" className="text-white/80 hover:text-luxury-gold transition-colors">
              Home
            </a>
            <a href="#about" className="text-white/80 hover:text-luxury-gold transition-colors">
              About
            </a>
            <a href="#portfolio" className="text-white/80 hover:text-luxury-gold transition-colors">
              Portfolio
            </a>
            <a href="#testimonials" className="text-white/80 hover:text-luxury-gold transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-white/80 hover:text-luxury-gold transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="divider-luxury my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Chiamaka Joy Anigbo. All rights reserved.
          </p>

          <p className="text-white/60 text-sm">
            Designed with <span className="text-luxury-gold">♥</span> for exceptional talent
          </p>
        </div>
      </div>
    </footer>
  )
}
