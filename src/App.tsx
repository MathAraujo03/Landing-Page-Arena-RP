import { 
  Music, 
  Guitar, 
  Mic2, 
  Piano, 
  Drum, 
  CheckCircle2, 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  ChevronUp,
  Instagram, 
  Facebook, 
  Youtube,
  Menu,
  X,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import logoArena from './assets/img/LOGO.png';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Cursos', href: '#cursos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={scrollToTop}
        >
          <img
  src={logoArena}
  alt="Arena RP"
  className="h-33 object-contain transition-transform group-hover:scale-110"
/>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-brand-yellow transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5521991755665" 
            target="_blank"
            className="bg-brand-yellow text-black px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform active:scale-95"
          >
            Aula Experimental
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-brand-yellow"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/5521991755665" 
                className="bg-brand-yellow text-black p-4 rounded-xl text-center font-bold"
              >
                Agende uma Aula Experimental
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1920" 
          alt="Music Studio" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/60 to-brand-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-6">
            A melhor escola de música do RIO
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-[1.1] mb-6">
            Sua jornada <br />
            <span className="text-brand-yellow">musical</span> começa aqui.
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
            Transforme seu talento em performance com uma metodologia prática, 
            professores renomados e uma estrutura de alto nível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contato" 
              className="bg-brand-yellow text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,195,0,0.4)] transition-all"
            >
              <Music className="w-5 h-5" />
              Agende Aula Experimental
            </a>
            <a 
              href="https://wa.me/5521991755665" 
              className="border border-white/20 hover:bg-white/5 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-brand-yellow" />
              Fale no WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-brand-yellow/20 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=800" 
              alt="Guitar Player" 
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-yellow/20 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-yellow/20 blur-3xl rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const features = [
    { icon: <CheckCircle2 className="text-brand-yellow" />, title: "Metodologia Prática", desc: "Aprenda tocando desde a primeira aula." },
    { icon: <CheckCircle2 className="text-brand-yellow" />, title: "Estrutura Moderna", desc: "Salas climatizadas e instrumentos de ponta." },
    { icon: <CheckCircle2 className="text-brand-yellow" />, title: "Eventos Exclusivos", desc: "Apresentações em palcos reais para alunos." },
  ];

  return (
    <section id="sobre" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800" 
              alt="Arena RP School" 
              className="rounded-3xl shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Mais que uma escola, <br />
              <span className="text-brand-yellow">uma experiência musical.</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              A Arena RP nasceu com o propósito de transformar a educação musical em Ribeirão Preto. 
              Nossa missão é proporcionar um ambiente inspirador onde cada aluno possa descobrir 
              seu potencial máximo, seja por hobby ou carreira profissional.
            </p>
            
            <div className="grid gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-yellow/20 transition-colors">
                  <div className="mt-1">{f.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg">{f.title}</h4>
                    <p className="text-sm text-gray-400">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Courses = () => {
  const courses = [
    { title: "Guitarra", icon: <Guitar />, img: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?auto=format&fit=crop&q=80&w=400" },
    { title: "Bateria", icon: <Drum />, img: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80&w=400" },
    { title: "Violão", icon: <Music />, img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800" },
    { title: "Canto", icon: <Mic2 />, img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=400" },
    { title: "Teclado", icon: <Piano />, img: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=400" },
    { title: "Baixo", icon: <Music />, img: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <section id="cursos" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Nossos Cursos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Escolha seu instrumento e comece a tocar as músicas que você ama com acompanhamento profissional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer"
            >
              <img 
                src={course.img} 
                alt={course.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-black">
                    {course.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{course.title}</h3>
                </div>
                <p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  Aulas individuais ou em grupo com foco no seu estilo musical favorito.
                </p>
                <button className="text-brand-yellow font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Saiba mais <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Lucas Silva", age: 22, instrument: "Guitarra", text: "A Arena RP mudou minha forma de ver a música. Os professores são incríveis e a estrutura é nota 10!", img: "https://i.pravatar.cc/150?u=lucas" },
    { name: "Mariana Costa", age: 19, instrument: "Canto", text: "Sempre tive vergonha de cantar, mas com a metodologia da escola ganhei confiança e hoje amo me apresentar.", img: "https://i.pravatar.cc/150?u=mariana" },
    { name: "Pedro Oliveira", age: 35, instrument: "Bateria", text: "Excelente escola! Comecei do zero e em poucos meses já estava tocando minhas músicas favoritas.", img: "https://i.pravatar.cc/150?u=pedro" },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">O que dizem nossos alunos</h2>
          <div className="flex justify-center gap-1 text-brand-yellow">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={r.img} alt={r.name} className="w-14 h-14 rounded-full border-2 border-brand-yellow" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold">{r.name}</h4>
                  <p className="text-xs text-gray-400">{r.age} anos • {r.instrument}</p>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed">"{r.text}"</p>
              <div className="absolute top-8 right-8 text-brand-yellow/10">
                <Music size={48} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const polos = [
    { name: "Polo I - Bangu", phone: "5521991755665", address: "Rua Rio da Prata, 1674 - Bangu, Rj" },
    { name: "Polo II - Ilha do Governador", phone: "5521991755665", address: "Freguesia - Ilha, RJ" }
  ];

  return (
    <section id="contato" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Fale Conosco</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Escolha o polo mais próximo de você e comece sua jornada musical hoje mesmo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {polos.map((polo, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-yellow rounded-[2.5rem] p-10 text-black flex flex-col justify-between"
            >
              <div>
                <h3 className="text-3xl font-black mb-4">{polo.name}</h3>
                <p className="text-black/70 mb-8 font-medium">
                  {polo.address}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/${polo.phone}`}
                  target="_blank"
                  className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp {polo.name.split(' - ')[1]}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-dark border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20">
              <h2 className="text-4xl font-display font-bold mb-6 leading-tight">
                Envie uma <span className="text-brand-yellow">mensagem</span>
              </h2>
              <p className="text-gray-400 mb-10 text-lg">
                Prefere que a gente entre em contato? Preencha o formulário e nossa equipe retornará em breve.
              </p>
              
              <form className="grid gap-4">
                <input 
                  type="text" 
                  placeholder="Seu Nome" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:ring-2 focus:ring-brand-yellow outline-none"
                />
                <input 
                  type="tel" 
                  placeholder="Seu WhatsApp" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:ring-2 focus:ring-brand-yellow outline-none"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:ring-2 focus:ring-brand-yellow outline-none appearance-none">
                    <option className="bg-brand-dark">Selecione o Polo</option>
                    <option className="bg-brand-dark">Polo I - Bangu</option>
                    <option className="bg-brand-dark">Polo II - Ilha</option>
                  </select>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:ring-2 focus:ring-brand-yellow outline-none appearance-none">
                    <option className="bg-brand-dark">Instrumento</option>
                    <option className="bg-brand-dark">Guitarra</option>
                    <option className="bg-brand-dark">Bateria</option>
                    <option className="bg-brand-dark">Violão</option>
                    <option className="bg-brand-dark">Canto</option>
                    <option className="bg-brand-dark">Teclado</option>
                    <option className="bg-brand-dark">Musicalização</option>
                  </select>
                </div>
                <textarea 
                  placeholder="Sua Mensagem" 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:ring-2 focus:ring-brand-yellow outline-none"
                ></textarea>
                <button className="w-full bg-brand-yellow text-black py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-opacity">
                  Enviar Solicitação
                </button>
              </form>
            </div>
            <div className="hidden lg:block relative">
              <img 
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800" 
                alt="Music Class" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  const locations = [
    {
      title: "Polo I - Bangu",
      address: "Rua Rio da Prata, 1674 - Bangu, Rj",
      phone: "5521991755665",
      hours: "Seg a Sex: 09h às 21h • Sáb: 09h às 14h",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.244365445217!2d-43.469!3d-22.876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUyJzMzLjYiUyA0M8KwMjgnMDguNCJX!5e0!3m2!1spt-BR!2sbr!4v1625000000000!5m2!1spt-BR!2sbr"
    },
    {
      title: "Polo II - Ilha do Governador",
      address: "Freguesia - Ilha, RJ",
      phone: "5521991755665",
      hours: "Seg a Sex: 09h às 21h • Sáb: 09h às 14h",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5!2d-43.2!3d-22.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ4JzAwLjAiUyA0M8KwMTInMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1625000000000!5m2!1spt-BR!2sbr"
    }
  ];

  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold mb-16 text-center">Nossas Unidades</h2>
        <div className="grid gap-16">
          {locations.map((loc, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <h3 className="text-3xl font-display font-bold mb-8 text-brand-yellow">{loc.title}</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center text-brand-yellow shrink-0">
                      <MapPin />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Endereço</h4>
                      <p className="text-gray-400">{loc.address}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center text-brand-yellow shrink-0">
                      <Phone />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Telefone</h4>
                      <p className="text-gray-400">{loc.phone}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center text-brand-yellow shrink-0">
                      <Clock />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Horário</h4>
                      <p className="text-gray-400">{loc.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`h-[400px] rounded-[2rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <iframe 
                  src={loc.map} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title={loc.title}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-yellow rounded flex items-center justify-center">
              <Music className="text-black w-5 h-5" />
            </div>
            <span className="text-lg font-display font-bold">
              ARENA<span className="text-brand-yellow">RP</span>
            </span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors"><Instagram /></a>
            <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors"><Facebook /></a>
            <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors"><Youtube /></a>
          </div>

          <p className="text-sm text-gray-500">
            © 2026 Arena RP - Escola de Música. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-brand-yellow text-black rounded-full flex items-center justify-center shadow-2xl transition-all cursor-pointer"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-yellow selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Testimonials />
      <Contact />
      <Location />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
