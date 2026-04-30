import { motion } from "motion/react";
import { Download, Fingerprint } from "lucide-react";

export function DownloadPage() {
  return (
    <div className="bg-geo-bg text-geo-text selection:bg-geo-red selection:text-white min-h-screen font-serif flex flex-col items-center justify-center relative overflow-hidden p-4">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1475503572774-15a45e5d00b9?auto=format&fit=crop&q=80&w=1920" alt="" className="w-full h-full object-cover opacity-[0.15] grayscale" />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-geo-bg/80 via-geo-bg/95 to-geo-bg"></div>
      
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(var(--color-geo-text) 0.5px, transparent 0.5px)", backgroundSize: "20px 20px" }}></div>
      <div className="absolute inset-x-0 top-0 h-2 bg-geo-red z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-2xl bg-geo-bg-alt border border-geo-border p-8 md:p-14 rounded-3xl shadow-2xl flex flex-col items-center text-center"
      >
        <div className="w-20 h-20 border border-[#3A3A3A] flex items-center justify-center rounded-2xl bg-geo-bg mb-8 relative shadow-inner">
          <Fingerprint className="w-10 h-10 text-geo-gold" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-geo-red rounded-full animate-ping"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-geo-red rounded-full"></div>
        </div>

        <div className="mb-4 inline-block bg-green-500/10 border border-green-500/30 px-4 py-1.5 rounded-full">
          <span className="text-green-500 font-sans text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
            ACESSO LIBERADO COM SUCESSO
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tight mb-6 leading-tight">
          A Sua Investigação <br/> <span className="text-geo-gold italic">Vai Começar...</span>
        </h1>

        <p className="text-geo-text/80 font-sans text-base sm:text-lg mb-10 max-w-md mx-auto leading-relaxed font-medium">
          O seu pagamento foi confirmado! Você está realmente preparado para entrar neste mundo cheio de mistérios, segredos e se tornar um verdadeiro detetive?
        </p>

        {/* The single CTA Button */}
        <a 
          href="/arquivos-do-caso.pdf" 
          download
          className="w-full sm:w-auto px-8 sm:px-12 py-5 sm:py-6 bg-geo-red text-white font-sans font-black uppercase tracking-[0.1em] text-sm md:text-base hover:bg-red-700 transition-all flex items-center justify-center gap-3 group rounded-xl shadow-[0_4px_25px_rgba(209,17,17,0.4)] active:scale-95"
        >
          <Download className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          BAIXAR OS ARQUIVOS OFICIAIS
        </a>
        
        <div className="mt-10 pt-6 border-t border-geo-border w-full">
          <p className="text-xs font-sans text-geo-text/40 uppercase tracking-widest font-bold">
            Protocolo #88-X2 • Altamente Confidencial
          </p>
        </div>
      </motion.div>
    </div>
  );
}
