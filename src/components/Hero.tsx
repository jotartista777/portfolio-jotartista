import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePortfolioClick = () => {
    window.open('https://drive.google.com/drive/folders/1J-JEDrLkbmHToRbjZOol__5EbDTs-MUP?usp=drive_link', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden flex items-center" style={{ background: 'var(--gradient-hero)' }}>
      {/* Minimal background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full py-8">
        <div className="text-center animate-fade-in max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-4 typing-cursor">
            Salve! Eu sou o Jota 👋🏻
          </h1>
          
          <div className="glass-subtitle inline-block mb-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold hero-subtitle-gradient">
              DESIGNER GRÁFICO
            </h2>
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Crio artes que ajudam pessoas a se <span className="font-bold text-primary-light">expressarem melhor</span>, negócios a se <span className="font-bold text-primary-light">destacarem</span> e ideias a <span className="font-bold text-primary-light">ganharem vida</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('servicos')}
              className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-lg shadow-lg w-full sm:w-auto min-w-[180px]"
              aria-label="Ver serviços"
            >
              Ver serviços
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={handlePortfolioClick}
              className="btn-secondary inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-lg group w-full sm:w-auto min-w-[180px]"
              aria-label="Ver portfólio"
            >
              Ver portfólio
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;