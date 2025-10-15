import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/5585987784458?text=Olá%2C%20vi%20seu%20site%20e%20quero%20falar%20sobre%20um%20projeto.",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 z-50 flex items-center justify-center hover:scale-110 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
    </button>
  );
};

export default WhatsAppFloat;