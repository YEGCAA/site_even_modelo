import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

// --- SVGs for Icons ---
const CheckIcon = () => (
  <svg className="w-6 h-6 text-even-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const PlayIcon = () => (
  <svg className="w-16 h-16 text-white opacity-80 hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
);

const RocketIcon = () => (
  <svg className="w-8 h-8 text-even-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
);

const ChartIcon = () => (
  <svg className="w-8 h-8 text-even-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"></path></svg>
);

const PhoneIcon = () => (
  <svg className="w-8 h-8 text-even-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
);

const FilterIcon = () => (
  <svg className="w-8 h-8 text-even-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
);

const SearchIcon = () => (
  <svg className="w-8 h-8 text-even-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
);

const UserIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
);

const PhoneCallIcon = () => (
   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
);

const MoneyIcon = () => (
  <svg className="w-8 h-8 text-even-primary mb-2 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

const StarIcon = () => (
  <svg className="w-8 h-8 text-even-primary mb-2 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
);

const TrendUpIcon = () => (
  <svg className="w-8 h-8 text-even-primary mb-2 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
);

const GlobeIcon = () => (
  <svg className="w-8 h-8 text-even-primary mb-2 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
);

const PiggyBankIcon = () => (
  <svg className="w-8 h-8 text-even-primary mb-2 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

const ClockIcon = () => (
  <svg className="w-8 h-8 text-even-primary mb-2 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

// New Icons for Methodology
const PencilIcon = () => (
  <svg className="w-8 h-8 text-even-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
);

const MegaphoneIcon = () => (
  <svg className="w-8 h-8 text-even-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
);

const HeadsetIcon = () => (
  <svg className="w-8 h-8 text-even-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
);


// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-black text-white tracking-tighter cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            EVEN<span className="text-even-primary">.</span>
        </div>
        
        {/* Menu Items */}
        <div className="hidden md:flex items-center space-x-8">
           <a href="#clientes" className="text-white hover:text-even-primary transition-colors text-sm font-medium uppercase tracking-wide">Clientes</a>
           <a href="#sobre" className="text-white hover:text-even-primary transition-colors text-sm font-medium uppercase tracking-wide">Sobre Even</a>
           <a href="#formulario" className="bg-even-primary hover:bg-blue-500 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 text-sm uppercase shadow-md border border-transparent hover:border-white/20">Contrate</a>
        </div>

        {/* Mobile Menu Icon Placeholder (Visible only on small screens) */}
        <div className="md:hidden">
            <button className="text-white focus:outline-none" onClick={() => document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' })}>
                 <span className="bg-even-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Contrate</span>
            </button>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById('formulario');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden" id="hero">
      
      {/* Background Decor - Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-even-primary/40 via-black/90 to-black z-0"></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-5xl mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-2xl">
          A assessoria de marketing especializada em <span className="text-even-primary">aquisição, funil e vendas</span> para incorporadoras.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-10">
          Estruturamos a geração de demanda, o funil digital e o setor de pré-vendas (SDR) dentro da sua operação para aumentar vendas, reduzir custo com corretores e criar previsibilidade comercial.
        </p>
        
        <button onClick={scrollToForm} className="bg-even-primary hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_30px_rgba(22,147,227,0.4)] transform hover:scale-105 transition-all duration-300 uppercase tracking-wide text-lg">
          Quero aumentar as vendas do meu empreendimento
        </button>
      </div>

      {/* New Form Section - Dark & Split */}
      <div id="formulario" className="container mx-auto px-6 relative z-10 w-full">
        <div className="bg-[#111] rounded-2xl shadow-2xl overflow-hidden border border-gray-800 max-w-6xl mx-auto flex flex-col lg:flex-row">
            
            {/* Left Side: Steps */}
            <div className="w-full lg:w-5/12 p-8 md:p-12 bg-[#161616] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-800">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 leading-tight">
                    Cadastre-se e receba o contato do nosso time!
                </h3>

                <div className="space-y-10">
                    {/* Step 1 */}
                    <div className="relative">
                        <div className="flex items-center mb-3">
                             <div className="h-[2px] w-8 bg-even-primary mr-3"></div>
                             <span className="text-even-primary font-bold uppercase text-xs tracking-widest">Passo 1</span>
                        </div>
                        <div className="flex">
                            <div className="mr-5 mt-1">
                                <div className="w-12 h-12 bg-even-primary rounded-lg flex items-center justify-center shadow-lg transform -rotate-3">
                                    <UserIcon />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-2">Complete o formulário</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Forneça suas informações de contato. Garantimos a segurança total de seus dados. Serão usados apenas para contato.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative">
                         <div className="flex items-center mb-3">
                             <div className="h-[2px] w-8 bg-even-primary mr-3"></div>
                             <span className="text-even-primary font-bold uppercase text-xs tracking-widest">Passo 2</span>
                        </div>
                        <div className="flex">
                            <div className="mr-5 mt-1">
                                <div className="w-12 h-12 bg-even-primary rounded-lg flex items-center justify-center shadow-lg transform -rotate-3">
                                    <PhoneCallIcon />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-2">Receba uma ligação personalizada</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Em um prazo de até 8 horas, um dos nossos especialistas entrará em contato diretamente para agendar a reunião mais crucial com você.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full lg:w-7/12 p-8 md:p-12 bg-[#1a1a1a]">
                <form className="grid grid-cols-1 gap-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-1">
                        <input type="text" placeholder="Seu nome" className="w-full bg-[#252525] border border-gray-700 rounded-lg px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-even-primary focus:ring-1 focus:ring-even-primary transition-colors" />
                    </div>
                    
                    <div className="space-y-1">
                         <input type="email" placeholder="Seu melhor e-mail" className="w-full bg-[#252525] border border-gray-700 rounded-lg px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-even-primary focus:ring-1 focus:ring-even-primary transition-colors" />
                    </div>

                    <div className="space-y-1 relative">
                        <div className="absolute left-4 top-4 flex items-center pointer-events-none">
                             {/* Brazil Flag Simple SVG */}
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 640 480">
                                <path fill="#009b3a" d="M0 0h640v480H0z"/>
                                <path fill="#fedf00" d="M320 74L69 240l251 166 251-166z"/>
                                <circle cx="320" cy="240" r="84" fill="#002776"/>
                                <path fill="#fff" d="M320 240h640v20H320z" transform="rotate(-26 320 240)"/>
                            </svg>
                        </div>
                         <input type="tel" placeholder="Telefone" className="w-full bg-[#252525] border border-gray-700 rounded-lg pl-12 pr-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-even-primary focus:ring-1 focus:ring-even-primary transition-colors" />
                    </div>

                    <div className="space-y-1">
                         <input type="text" placeholder="Nome da empresa" className="w-full bg-[#252525] border border-gray-700 rounded-lg px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-even-primary focus:ring-1 focus:ring-even-primary transition-colors" />
                    </div>

                    <div className="space-y-1">
                        <select className="w-full bg-[#252525] border border-gray-700 rounded-lg px-4 py-3.5 text-gray-400 focus:outline-none focus:border-even-primary focus:ring-1 focus:ring-even-primary transition-colors appearance-none">
                            <option value="">Qual seu segmento?</option>
                            <option value="incorporadora">Incorporadora</option>
                            <option value="loteadora">Loteadora</option>
                            <option value="outros">Outros</option>
                        </select>
                    </div>

                    <div className="space-y-1">
                        <select className="w-full bg-[#252525] border border-gray-700 rounded-lg px-4 py-3.5 text-gray-400 focus:outline-none focus:border-even-primary focus:ring-1 focus:ring-even-primary transition-colors appearance-none">
                            <option value="">Qual o VGV geral?</option>
                            <option value="menor-10">Menor de 10 mi</option>
                            <option value="10-20">10 a 20 mi</option>
                            <option value="20-30">20 a 30 mi</option>
                            <option value="30-50">30 a 50 mi</option>
                            <option value="50-100">50 a 100 mi</option>
                            <option value="acima-100">Acima de 100 mi</option>
                        </select>
                    </div>

                    <button type="submit" className="w-full bg-even-primary hover:bg-blue-600 text-white font-extrabold py-4 rounded-lg shadow-lg transform transition-all duration-300 uppercase tracking-wide mt-2">
                        Receber mais informações
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

const ClientsSection = () => {
  const [vgvCount, setVgvCount] = useState(0);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  // Data for Carousel (Duplicated for infinite scroll effect)
  const clientNames = ["High Contorno", "Wave Itaúna", "La Vita", "Sunset Tower", "Reserva do Sal", "Vivaz", "Terras Altas", "Morada do Sol"];
  const carouselItems = [...clientNames, ...clientNames, ...clientNames]; // Tripled to ensure smoothness

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let start = 0;
          const end = 250;
          const duration = 2000;
          const incrementTime = 20;
          const steps = duration / incrementTime;
          const incrementAmount = end / steps;

          const timer = setInterval(() => {
            start += incrementAmount;
            if (start >= end) {
              setVgvCount(end);
              clearInterval(timer);
            } else {
              setVgvCount(Math.ceil(start));
            }
          }, incrementTime);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-black text-white overflow-hidden border-t border-gray-800" id="clientes">
      <div className="container mx-auto px-6 mb-12 flex flex-col items-center justify-center text-center">
        <h2 className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4">Impacto Gerado</h2>
        <div className="flex items-baseline space-x-2">
           <span className="text-5xl md:text-7xl font-black text-white tracking-tighter">
             + R$ <span className="text-even-primary">{vgvCount}</span>
           </span>
           <span className="text-2xl md:text-4xl font-bold text-gray-300">Milhões</span>
        </div>
        <p className="text-gray-500 mt-2 text-lg">em VGV sob gestão ativa da EVEN.</p>
      </div>

      {/* Infinite Carousel */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Fade Edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black z-10"></div>

        {/* Updated animation class: animate-scroll-fast on mobile, normal on md+ */}
        <div className="flex w-[200%] animate-scroll-fast md:animate-scroll">
          {carouselItems.map((client, index) => (
             <div key={index} className="flex-shrink-0 w-64 flex items-center justify-center mx-8">
                <span className="text-2xl font-bold text-gray-600 hover:text-white transition-colors duration-300 uppercase tracking-tight whitespace-nowrap cursor-default">
                  {client}
                </span>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReinforcementCTA = () => {
  const scrollToForm = () => {
    const element = document.getElementById('formulario');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-even-primary py-12 text-center text-white">
      <div className="container mx-auto px-6">
        <button onClick={scrollToForm} className="bg-white text-even-primary hover:bg-gray-100 font-extrabold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-lg md:text-xl uppercase mb-4">
          Quero estruturar meu funil de vendas
        </button>
        <p className="text-blue-100 text-sm font-medium tracking-wide">
          Atendimento exclusivo para incorporadoras com VGV a partir de R$ 20 milhões.
        </p>
      </div>
    </section>
  );
};

// Reusable CountUp Component for Animations with Formatting
const CountUp = ({ end, duration = 2000, formatter = (val) => val }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            let start = 0;
            const incrementTime = 20;
            const steps = duration / incrementTime;
            const incrementAmount = end / steps;
  
            const timer = setInterval(() => {
              start += incrementAmount;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.ceil(start));
              }
            }, incrementTime);
          }
        },
        { threshold: 0.5 }
      );
  
      if (ref.current) observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, [end, duration]);
  
    return <span ref={ref}>{formatter(count)}</span>;
};

const ResultsShowcase = () => {
  const formatMoney = (val) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 });
  const formatNumber = (val) => val.toLocaleString('pt-BR');
  const formatPercent = (val) => `${val}%`;

  return (
    <section className="py-20 bg-black border-t border-gray-900" id="resultados">
      <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Resultados Comprovados</h2>
            <div className="rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
                
                {/* Changed: Removed h-full, added padding bottom for mobile to avoid cutoff */}
                <div className="flex flex-col md:flex-row p-6 pb-12 md:p-8 gap-6">
                     {/* Building Image - Reduced height on mobile to ensure stats are visible */}
                    <div className="w-full md:w-5/12 relative min-h-[300px] md:min-h-[500px]">
                        {/* Frame Effect */}
                        <div className="h-full w-full border border-gray-800 rounded-xl p-3 bg-gray-800/50">
                             <div className="relative overflow-hidden rounded-lg h-full w-full group bg-black">
                                <img 
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                                    alt="Edifício High Contorno" 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                     <h3 className="text-white font-bold text-2xl drop-shadow-lg">High Contorno</h3>
                                     <p className="text-even-primary text-sm font-bold uppercase tracking-widest drop-shadow-lg">Salvador - BA</p>
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* Stats Grid - Right Side - Stacked Vertically */}
                    <div className="w-full md:w-7/12 flex flex-col justify-center">
                        <div className="flex flex-col gap-3">
                            {/* Card 1 - VGV */}
                            <div className="bg-black border border-even-primary rounded-xl p-4 md:p-5 shadow-[0_0_15px_rgba(22,147,227,0.15)] flex items-center justify-between hover:scale-[1.01] transition-transform">
                                <span className="text-xs md:text-sm font-bold text-even-primary uppercase tracking-widest flex-1 pr-2">VGV Atual</span>
                                <span className="text-xl md:text-2xl lg:text-3xl font-black text-white">
                                    <CountUp end={25000000} formatter={formatMoney} />
                                </span>
                            </div>

                             {/* Card 2 - Unidades */}
                             <div className="bg-black border border-even-primary rounded-xl p-4 md:p-5 shadow-[0_0_15px_rgba(22,147,227,0.15)] flex items-center justify-between hover:scale-[1.01] transition-transform">
                                <span className="text-xs md:text-sm font-bold text-even-primary uppercase tracking-widest flex-1 pr-2">Unidades Vendidas</span>
                                <span className="text-2xl md:text-3xl font-black text-white">
                                    <CountUp end={46} formatter={formatNumber} />
                                </span>
                            </div>
                            
                            {/* Card 3 - Restored: Empreendimento Vendido */}
                             <div className="bg-black border border-even-primary rounded-xl p-4 md:p-5 shadow-[0_0_15px_rgba(22,147,227,0.15)] flex items-center justify-between hover:scale-[1.01] transition-transform">
                                <span className="text-xs md:text-sm font-bold text-even-primary uppercase tracking-widest flex-1 pr-2">Vendido</span>
                                <span className="text-2xl md:text-3xl font-black text-white">
                                    <CountUp end={86} formatter={formatPercent} />
                                </span>
                            </div>

                            {/* Card 4 - Restored: Investimento */}
                             <div className="bg-black border border-even-primary rounded-xl p-4 md:p-5 shadow-[0_0_15px_rgba(22,147,227,0.15)] flex items-center justify-between hover:scale-[1.01] transition-transform">
                                <span className="text-xs md:text-sm font-bold text-even-primary uppercase tracking-widest flex-1 pr-2">Investimento Ads</span>
                                <span className="text-2xl md:text-3xl font-black text-white">
                                    <CountUp end={35000} formatter={formatMoney} />
                                </span>
                            </div>

                            {/* Card 5 - Economia */}
                            <div className="bg-black border border-even-primary rounded-xl p-4 md:p-5 shadow-[0_0_15px_rgba(22,147,227,0.15)] flex items-center justify-between hover:scale-[1.01] transition-transform">
                                <span className="text-xs md:text-sm font-bold text-even-primary uppercase tracking-widest flex-1 pr-2">Economia Corretagem</span>
                                <span className="text-xl md:text-2xl lg:text-3xl font-black text-white">
                                    <CountUp end={540000} formatter={formatMoney} />
                                </span>
                            </div>

                            {/* Card 6 - Dias */}
                            <div className="bg-black border border-even-primary rounded-xl p-4 md:p-5 shadow-[0_0_15px_rgba(22,147,227,0.15)] flex items-center justify-between hover:scale-[1.01] transition-transform">
                                <span className="text-xs md:text-sm font-bold text-even-primary uppercase tracking-widest flex-1 pr-2">Dias Pré-Lançamento</span>
                                <span className="text-2xl md:text-3xl font-black text-white">
                                    <CountUp end={180} formatter={formatNumber} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </section>
  )
}

const MethodologyV4Section = () => {
    const steps = [
        { icon: SearchIcon, title: "Estudo de Produto", fullTitle: "1. Estudo de produto", desc: "Análise técnica do empreendimento e do público." },
        { icon: PencilIcon, title: "Roteirização", fullTitle: "2. Roteirização", desc: "Definição de mensagens para anúncios de alta conversão." },
        { icon: MegaphoneIcon, title: "Gestão de Campanhas", fullTitle: "3. Campanhas", desc: "Produção e otimização diária de tráfego pago." },
        { icon: HeadsetIcon, title: "Implementação SDR", fullTitle: "4. SDR", desc: "Treinamento e estruturação do time de pré-vendas." },
        { icon: FilterIcon, title: "Funil e CRM", fullTitle: "5. Funil e CRM", desc: "Configuração completa das etapas e automações." },
        { icon: CheckIcon, title: "Qualificação", fullTitle: "6. Qualificação", desc: "Agendamento de visitas somente com leads qualificados." },
        { icon: ChartIcon, title: "Otimização", fullTitle: "7. Otimização", desc: "Ajustes estratégicos semanais para escalar resultados." }
    ];

    return (
        <section className="py-20 bg-black text-white overflow-hidden" id="sobre">
            <div className="container mx-auto px-6 flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 leading-tight">
                    Como funciona a metodologia
                </h2>
                 <p className="text-gray-400 text-center max-w-2xl mb-16 text-lg">
                    Criamos um novo braço de vendas para sua incorporadora, integrando estratégia, marketing, tráfego e SDR em um único fluxo.
                </p>

                {/* Central Diagram (V4 Model Style) */}
                {/* Changed: Enabled flex for all breakpoints, added scaling for mobile */}
                <div className="relative w-full max-w-4xl h-[360px] md:h-[500px] mb-20 flex items-center justify-center scale-[0.55] md:scale-100 origin-center -my-16 md:my-0">
                    {/* Center Text */}
                    <div className="absolute z-20 text-center">
                        <span className="text-gray-500 uppercase tracking-widest text-sm mb-2 block">Método</span>
                        <h3 className="text-4xl font-black text-white">EVEN</h3>
                    </div>

                    {/* Circular Orbit Ring */}
                     <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] border border-gray-800 rounded-full z-0"></div>

                     {/* Icons positioned in a circle */}
                    {steps.map((step, index) => {
                        const totalSteps = steps.length;
                        const angle = (index * (360 / totalSteps)) - 90; // Start from top (-90deg)
                        const radius = 225; // Half of 450px
                        // Calculate position
                        const x = Math.cos((angle * Math.PI) / 180) * radius;
                        const y = Math.sin((angle * Math.PI) / 180) * radius;
                        
                        return (
                            <div 
                                key={index}
                                className="absolute flex flex-col items-center justify-center w-24 transform transition-all hover:scale-110 cursor-default group"
                                style={{ 
                                    transform: `translate(${x}px, ${y}px)` 
                                }}
                            >
                                <div className="bg-[#111] p-4 rounded-full border border-gray-800 shadow-lg mb-2 group-hover:border-even-primary transition-colors z-10 relative">
                                    <div className="absolute -inset-1 bg-even-primary rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-md"></div>
                                    <step.icon />
                                </div>
                                <span className="text-xs font-bold text-gray-400 uppercase text-center group-hover:text-white transition-colors w-32">
                                    {step.title}
                                </span>
                                
                                {/* Simple Arrow to next step (decorative) */}
                                {index < totalSteps && (
                                     <div 
                                        className="absolute top-1/2 left-1/2 w-full h-px bg-gray-800 -z-10 origin-left hidden" 
                                        style={{ 
                                            transform: `rotate(${360/totalSteps}deg)` 
                                        }}
                                     ></div>
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-[#111] border border-gray-800 p-6 rounded-2xl hover:border-even-primary transition-all duration-300 group hover:-translate-y-1 shadow-lg">
                            <h4 className="text-even-primary font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                                {step.fullTitle}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center max-w-3xl">
                    <p className="text-xl md:text-2xl font-bold text-white italic">
                         "Esse modelo adiciona um braço de vendas previsível, técnico e orientado a dados — aumentando resultado sem alterar sua estrutura atual."
                    </p>
                </div>
            </div>
        </section>
    );
};

const ServicesSection = () => {
  const services = [
    { title: "Estratégia de lançamento", icon: <RocketIcon />, desc: "Planejamento completo do Go-to-Market para maximizar impacto." },
    { title: "Gestão de tráfego imobiliário", icon: <SearchIcon />, desc: "Campanhas segmentadas focadas em leads qualificados." },
    { title: "SDR / Pré-vendas", icon: <PhoneIcon />, desc: "Implementação de equipe e scripts para triagem de leads." },
    { title: "Funil e CRM", icon: <FilterIcon />, desc: "Configuração de pipeline para evitar perda de oportunidades." },
    { title: "Análises e otimizações", icon: <ChartIcon />, desc: "Relatórios semanais baseados em dados reais de venda." },
  ];

  return (
    <section className="py-20 bg-black border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que a EVEN faz pela sua incorporadora</h2>
          <p className="text-xl text-even-primary font-medium">Da aquisição ao fechamento.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-[#111] p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-800 hover:border-even-primary group">
              {s.icon}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-even-primary transition-colors">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalBox = () => {
  const scrollToForm = () => {
    const element = document.getElementById('formulario');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-black" id="contato">
      <div className="container mx-auto px-6">
        <div className="bg-[#111] border border-gray-800 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Decorative Circle */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-even-primary rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-even-secondary rounded-full opacity-10 blur-3xl"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Seu próximo lançamento pode vender mais e custar menos em comissões
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Para incorporadoras com VGV a partir de R$ 20 milhões que precisam de previsibilidade, estrutura e escala comercial.
            </p>
            
            <button onClick={scrollToForm} className="bg-even-primary hover:bg-blue-500 text-white font-bold py-5 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 uppercase tracking-wide text-lg w-full md:w-auto mb-4">
              Falar com um especialista da EVEN
            </button>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-4">Retorno em até 24h úteis.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
    return (
        <footer className="bg-black text-gray-500 py-8 text-center text-sm border-t border-gray-900">
            <div className="container mx-auto px-6">
                <p>&copy; {new Date().getFullYear()} EVEN Assessoria. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

const App = () => {
  return (
    <div className="antialiased bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <ReinforcementCTA />
      <ResultsShowcase />
      <MethodologyV4Section />
      <ServicesSection />
      <FinalBox />
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}