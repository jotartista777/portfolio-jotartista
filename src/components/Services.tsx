import { useState } from 'react';
import { Check, ArrowRight, MessageCircle, Palette, Monitor, FileText, Image, Presentation, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = {
    identidade: {
      title: "Identidade Visual",
      description: "Logo, identidade completa e materiais para fortalecer sua presença",
      items: [
        { name: "Logotipo simples e profissional", price: "R$ 149" },
        { name: "Logotipo premium com conceito estratégico", price: "R$ 229" },
        { name: "Identidade visual completa (cores, tipografia, aplicações)", price: "R$ 299" },
        { name: "Kit de marca (manual de uso + elementos visuais)", price: "R$ 300" },
        { name: "Rebranding (atualização de marcas antigas)", price: "R$ 127" },
        { name: "Identidade visual para eventos (congressos, feiras, palestras)", price: "R$ 269" }
      ]
    },
    redes: {
      title: "Redes Sociais & Conteúdo Digital",
      description: "Posts, stories, capas, pacotes mensais e artes para engajamento online",
      items: [
        { name: "Artes para redes sociais (Posts avulsos)", price: "R$ 35", featured: true },
        { name: "Pacote de 10 artes", price: "R$ 297/mês", featured: true },
        { name: "Capas para YouTube, TikTok e Facebook", price: "R$ 149" },
        { name: "Fotos para anúncios patrocinados", price: "R$ 139" },
        { name: "Capa e fundo para lives (YouTube, Twitch, Instagram)", price: "R$ 219" }
      ]
    },
    impressos: {
      title: "Materiais Impressos",
      description: "Materiais gráficos para empresas, eventos e divulgação local",
      items: [
        { name: "Cartões de visita (tradicional e digital interativo com QR Code)", price: "R$ 99" },
        { name: "Flyers e panfletos promocionais", price: "R$ 149" },
        { name: "Catálogos e cardápios (digital e impresso)", price: "R$ 249" },
        { name: "Banners e outdoors", price: "R$ 179" },
        { name: "Convites para eventos", price: "R$ 139" },
        { name: "Embalagens e rótulos de produtos", price: "R$ 229" },
        { name: "Adesivos e etiquetas personalizadas", price: "R$ 119" },
        { name: "Uniformes e estampas personalizadas", price: "R$ 199" },
        { name: "Cartazes promocionais (lojas e eventos)", price: "R$ 159" },
        { name: "Brindes impressos (camisetas, canecas, sacolas)", price: "R$ 219" },
        { name: "Planners/calendários personalizados", price: "R$ 189" }
      ]
    },
    fotos: {
      title: "Fotos & Edição",
      description: "Correção, ajustes e manipulação de fotos para uso pessoal ou comercial",
      items: [
        { name: "Ensaios fotográficos (pessoal e empresarial)", price: "R$ 299" },
        { name: "Fotos de produtos para e-commerce e catálogos", price: "R$ 229" },
        { name: "Correção e manipulação profissional de fotos", price: "R$ 79 cada" },
        { name: "Modelo virtual (mockups de roupas, acessórios, etc.)", price: "R$ 159" },
        { name: "Fotografia de alimentos para cardápios e delivery", price: "R$ 250" },
        { name: "Retoque de fotografias antigas (restauração digital)", price: "R$ 97" },
        { name: "Edição para fotografia imobiliária (imóveis e ambientes)", price: "R$ 199" },
        { name: "Composição de capas para Spotify e plataformas musicais", price: "R$ 149" }
      ]
    },
    apresentacoes: {
      title: "Apresentações & Materiais Digitais",
      description: "Apresentações visuais para empresas, cursos e palestras",
      items: [
        { name: "Apresentações profissionais (PowerPoint/Google Slides)", price: "R$ 179" },
        { name: "PDFs interativos (catálogos, propostas, portfólios)", price: "R$ 149" },
        { name: "Materiais para cursos e palestras (slides didáticos)", price: "R$ 199" },
        { name: "E-books e relatórios visuais", price: "R$ 249" }
      ]
    },
    video: {
      title: "Vídeo & Motion Design",
      description: "Criação de reels, vídeos curtos, vinhetas e anúncios animados",
      items: [
        { name: "Vídeos criativos para anúncios (Facebook/Instagram/TikTok)", price: "R$ 179" },
        { name: "Vinhetas animadas para canais", price: "R$ 149" },
        { name: "Animações explicativas (motion graphics)", price: "R$ 229" },
        { name: "Edição de vídeo para empresas e criadores de conteúdo", price: "R$ 199" },
        { name: "Legendas (legendas dinâmicas para vídeos sociais)", price: "R$ 99" }
      ]
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5585987784458', '_blank');
  };

  return (
    <section id="servicos" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-secondary"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Meus serviços
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Soluções criativas com preços transparentes e entrega garantida
          </p>
        </div>

        <Tabs defaultValue="identidade" className="w-full max-w-7xl mx-auto">
          <div className="w-full overflow-x-auto mb-8 -mx-4 px-4 md:mx-0 md:px-0">
            <TabsList className="glass-card inline-flex w-auto min-w-full md:w-full gap-2 p-2">
              <TabsTrigger value="identidade" className="flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm whitespace-nowrap">
                <Palette className="w-4 h-4 shrink-0" />
                <span>Identidade</span>
              </TabsTrigger>
              <TabsTrigger value="redes" className="flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm whitespace-nowrap">
                <Monitor className="w-4 h-4 shrink-0" />
                <span>Redes</span>
              </TabsTrigger>
              <TabsTrigger value="impressos" className="flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm whitespace-nowrap">
                <FileText className="w-4 h-4 shrink-0" />
                <span>Impressos</span>
              </TabsTrigger>
              <TabsTrigger value="fotos" className="flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm whitespace-nowrap">
                <Image className="w-4 h-4 shrink-0" />
                <span>Fotos</span>
              </TabsTrigger>
              <TabsTrigger value="apresentacoes" className="flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm whitespace-nowrap">
                <Presentation className="w-4 h-4 shrink-0" />
                <span>Apresent.</span>
              </TabsTrigger>
              <TabsTrigger value="video" className="flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm whitespace-nowrap">
                <Play className="w-4 h-4 shrink-0" />
                <span>Vídeo</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(services).map(([key, category]) => (
            <TabsContent key={key} value={key} className="animate-fade-in">
              <div className="glass-card p-4 md:p-8 rounded-2xl mb-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">{category.title}</h3>
                <p className="text-sm md:text-base text-foreground/70 mb-4 md:mb-6">{category.description}</p>
                
                <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4">
                  {category.items.map((item, idx) => (
                    <div 
                      key={idx}
                      className={`glass-card p-4 md:p-6 rounded-xl transition-all duration-300 ${
                        item.featured ? 'ring-2 ring-primary' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          {item.featured && (
                            <span className="inline-block px-2 py-0.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-2">
                              Destaque
                            </span>
                          )}
                          <h4 className="font-semibold text-sm md:text-base text-foreground mb-1 line-clamp-2">{item.name}</h4>
                          {item.description && (
                            <p className="text-xs md:text-sm text-foreground/60 mb-2 hidden md:block">{item.description}</p>
                          )}
                          <p className="text-lg md:text-xl font-bold text-primary">{item.price}</p>
                        </div>
                        <button
                          onClick={handleWhatsApp}
                          className="btn-primary shrink-0 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm whitespace-nowrap"
                        >
                          Pedir
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA Final */}
        <div className="glass-card p-8 md:p-12 rounded-2xl text-center max-w-3xl mx-auto mt-16 animate-fade-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Não encontrou o que procura?
          </h3>
          <p className="text-lg text-foreground/70 mb-6">
            Conte sua ideia e vamos criar algo único para você!
          </p>
          <button
            onClick={handleWhatsApp}
            className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Conversar no WhatsApp
          </button>
          <p className="text-sm text-foreground/60 mt-4">
            Resposta em até 1 hora • Orçamento gratuito
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;