import { Instagram, MessageCircle, Heart, Video } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/jotartista",
      label: "Instagram"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/5585987784458",
      label: "WhatsApp"
    },
    {
      icon: Video,
      href: "https://tiktok.com/@jotartista",
      label: "TikTok"
    }
  ];

  const menuItems = [
    { name: 'Quem Sou', id: 'sobre' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Portfólio', id: 'portfolio' },
    { name: 'Contato', id: 'contato' }
  ];

  return (
    <footer className="relative py-16 md:py-20 mt-0 animate-fade-up">
      {/* Background with enhanced glass effect */}
      <div className="absolute inset-0 gradient-secondary"></div>
      <div className="absolute inset-0 backdrop-blur-xl"></div>
      <div className="absolute inset-0 glass-card-elevated opacity-40"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">

          {/* Copyright */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-3 text-sm md:text-base text-foreground/70">
              <span>© 2020 jotartista</span>
              <span className="hidden md:block text-primary">•</span>
              <span>Todos os direitos reservados</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm md:text-base text-foreground/80">
              <span><em>Feito com</em></span>
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-red-500 animate-pulse" />
              <span><em>por <span className="font-semibold text-primary">Jota</span></em></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;