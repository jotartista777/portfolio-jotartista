import { Heart, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    window.open('https://wa.me/5585987784458?text=Olá%2C%20vi%20seu%20site%20e%20quero%20falar%20sobre%20um%20projeto.', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="sobre" className="py-20 md:py-24 relative overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-glass opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Main content - Single centered card */}
          <div className="animate-fade-in">
            <div className="glass-card-elevated p-8 md:p-12 lg:p-16 rounded-3xl max-w-4xl mx-auto animate-fade-in">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl leading-relaxed text-foreground/95 text-center">
                    <em>Sou um <span className="font-bold text-foreground">criador</span> apaixonado por transformar <span className="font-bold text-foreground">ideias</span> em <span className="font-bold text-foreground">realidade visual</span>.</em>
                  </p>
                  <p className="text-xl md:text-2xl leading-relaxed text-foreground/95 text-center">
                    <em>Cada <span className="font-bold text-foreground">projeto</span> é um <span className="font-bold text-foreground">diálogo</span> entre <span className="font-bold text-foreground">imaginação</span> e <span className="font-bold text-foreground">propósito</span>.</em>
                  </p>
                  <p className="text-xl md:text-2xl leading-relaxed text-foreground/95 text-center">
                    <em>Quer alguém que entenda a sua <span className="font-bold text-foreground">visão</span>? <span className="font-bold text-foreground">Fala comigo!</span></em>
                  </p>
                </div>


                {/* Skills grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
                  {[
                    {
                      icon: Sparkles,
                      title: "Design Visual",
                      description: "Criação de identidades visuais marcantes e arte digital"
                    },
                    {
                      icon: Heart,
                      title: "Paixão",
                      description: "Cada projeto recebe atenção especial e cuidado único"
                    }
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group text-center"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300 mx-auto mb-4 icon-hover">
                        <skill.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">{skill.title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">{skill.description}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <button
                    onClick={handleContactClick}
                    className="btn-primary px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 text-lg group"
                  >
                    Falar sobre o projeto
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating decorations */}
          <div className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full animate-float blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default About;