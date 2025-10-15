import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (item: typeof navItems[0]) => {
    // Handle external portfolio link
    if (item.external) {
      window.open(item.path, '_blank', 'noopener,noreferrer');
      setIsMobileMenuOpen(false);
      return;
    }
    
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        if (item.id !== 'inicio') {
          scrollToSection(item.id);
        }
      }, 100);
    } else {
      scrollToSection(item.id);
    }
  };

  const navItems = [
    { name: 'Início', id: 'inicio', path: '/' },
    { name: 'Quem Sou', id: 'sobre', path: '/' },
    { name: 'Serviços', id: 'servicos', path: '/' },
    { name: 'Portfólio', id: 'portfolio', path: 'https://drive.google.com/drive/folders/1J-JEDrLkbmHToRbjZOol__5EbDTs-MUP?usp=drive_link', external: true }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-card backdrop-blur-xl py-4 md:py-3' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between min-h-[64px]">
        {/* Logo */}
        <Link to="/" className="cursor-pointer z-50 transition-transform duration-300 hover:scale-105">
          <img
            src="/lovable-uploads/a3de48a9-c5d2-49e9-ab8d-002838eda3c6.png"
            alt="Jotartista Logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary/20 shadow-lg"
          />
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item)}
              className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden glass-button p-3 rounded-lg z-50"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop CTA Button */}
        <a
          href="https://wa.me/5585987784458?text=Olá%2C%20vi%20seu%20site%20e%20quero%20falar%20sobre%20um%20projeto."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex glass-button px-6 py-3 rounded-full text-sm font-semibold min-h-[44px] items-center"
        >
          Fale comigo
        </a>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
        <div className="relative flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item)}
              className="text-2xl font-semibold text-foreground/80 hover:text-primary transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.name}
            </button>
          ))}
          <a
            href="https://wa.me/5585987784458?text=Olá%2C%20vi%20seu%20site%20e%20quero%20falar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button px-8 py-4 rounded-full text-lg font-semibold mt-8 min-h-[56px] flex items-center animate-slide-up"
            style={{ animationDelay: '0.5s' }}
          >
            Fale comigo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;