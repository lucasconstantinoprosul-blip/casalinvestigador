import { motion } from "motion/react";
import { Search, Fingerprint, Lock, ChevronRight } from "lucide-react";

export function Hero() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex border-b border-geo-border bg-geo-bg">
      <main className="flex-1 flex flex-col-reverse md:grid md:grid-cols-12 gap-0 w-full overflow-hidden">
        
        {/* Left side: Visuals */}
        <div className="col-span-1 md:col-span-6 relative border-t md:border-t-0 md:border-r border-geo-border flex flex-col items-center justify-center bg-geo-bg-alt py-12 md:py-0 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none" 
               style={{ backgroundImage: "radial-gradient(var(--color-geo-text) 0.5px, transparent 0.5px)", backgroundSize: "20px 20px" }}></div>
          
          <motion.div 
            initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
            animate={{ opacity: 1, rotate: -1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-[90%] max-w-[420px] bg-geo-gold shadow-2xl p-4 sm:p-6 border border-[#B5AA8D] rounded-2xl"
          >
            <div className="w-full h-full border border-[#A59A7D] p-5 sm:p-8 flex flex-col rounded-xl">
              <div className="mb-6 flex justify-between items-center">
                <div className="bg-geo-red text-white px-3 py-1 text-[10px] sm:text-xs uppercase font-sans font-bold tracking-tighter">Confidencial</div>
                <div className="text-[#5A5A40] text-[10px] font-sans font-bold">PROT: 88-X2</div>
              </div>
              <div className="w-full h-32 sm:h-48 bg-[#1A1A1A] mb-6 flex items-center justify-center rounded-lg shadow-inner relative overflow-hidden group border border-[#3A3A3A]">
                 <div className="absolute inset-0 bg-geo-red mix-blend-multiply opacity-20 group-hover:opacity-10 transition-opacity z-10"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=600&q=80" 
                    alt="Evidência Confidencial" 
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                  />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#110A0A] to-transparent z-10"></div>
                 <div className="absolute bottom-2 left-3 z-20 text-[8px] font-mono text-geo-text/50 uppercase tracking-widest">
                   EVIDÊNCIA_#048
                 </div>
              </div>
              <h3 className="text-[#2A2A2A] text-xl sm:text-2xl mb-2 font-black leading-tight font-sans uppercase tracking-widest text-center">Top Secret</h3>
              <p className="text-[#4A4A4A] text-xs sm:text-sm font-sans mb-6 leading-relaxed text-center font-medium">
                Um pacote completo com vários mistérios. Vocês têm coragem?
              </p>
              <div className="mt-auto border-t border-[#A59A7D] pt-4">
                 <div className="flex justify-between items-center opacity-80">
                   <span className="text-[9px] sm:text-[10px] uppercase font-sans font-bold tracking-widest text-[#2A2A2A]">Dificuldade Varia</span>
                   <span className="text-[9px] sm:text-[10px] uppercase font-sans font-bold tracking-widest text-[#2A2A2A]">+100 Arquivos</span>
                 </div>
              </div>
            </div>
            {/* Decorative Tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-40 h-8 bg-white/30 backdrop-blur-md transform rotate-3 shadow-sm"></div>
          </motion.div>
        </div>

        {/* Right side: High Conversion Copy */}
        <div className="col-span-1 md:col-span-6 px-6 py-12 md:p-16 flex flex-col justify-center bg-geo-bg relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-block bg-geo-red/10 border border-geo-red/30 px-3 py-1.5 rounded-full">
              <span className="text-geo-red font-sans text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-geo-red animate-pulse"></span>
                +100 Mistérios Criminais
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl mb-6 leading-[1.05] tracking-tight font-black font-serif">
              Transformem sua sala <br className="hidden sm:block"/>em uma <span className="text-geo-gold italic underline decoration-geo-red decoration-4 underline-offset-4">cena do crime.</span>
            </h1>

            <p className="text-geo-text/80 font-sans text-base sm:text-lg mb-8 max-w-md leading-relaxed font-medium">
              Esqueça a rotina. Analisem evidências, interroguem suspeitos e desvendem crimes reais em casal de forma 100% imersiva.
            </p>

            <div className="flex gap-6 mb-10 pb-8 border-b border-geo-border">
              <div className="flex flex-col gap-1 w-1/2">
                <span className="text-3xl md:text-4xl font-black text-geo-gold tracking-tighter">100+</span>
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-geo-text/60">Casos Em PDF</span>
              </div>
              <div className="w-px bg-geo-border"></div>
              <div className="flex flex-col gap-1 w-1/2">
                <span className="text-3xl md:text-4xl font-black text-geo-gold tracking-tighter">+10k</span>
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-geo-text/60">Casais Jogando</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 max-w-md">
              <button 
                onClick={scrollToPricing}
                className="w-full py-5 sm:py-6 bg-geo-red text-white font-sans font-black uppercase tracking-[0.1em] text-sm sm:text-base hover:bg-red-700 transition-all flex items-center justify-center gap-3 group rounded-xl shadow-[0_4px_25px_rgba(209,17,17,0.4)] active:scale-95"
              >
                QUERO ACESSO AOS CASOS
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex flex-col items-center justify-center gap-2 mt-2">
                <p className="text-xs text-green-400 font-sans font-bold">✓ Entrega imediata no seu e-mail</p>
                <div className="flex items-center gap-4 opacity-50 w-full">
                  <div className="h-px flex-1 bg-geo-text"></div>
                  <span className="text-[9px] font-sans uppercase tracking-widest flex items-center gap-1"><Lock className="w-3 h-3"/> Compra 100% Segura</span>
                  <div className="h-px flex-1 bg-geo-text"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </section>
  );
}
