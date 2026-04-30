import { motion } from "motion/react";
import { CheckCircle, AlertTriangle, ChevronRight, Lock } from "lucide-react";
import { useCountdown } from "../../hooks/useCountdown";

export function Pricing() {
  const { minutes, seconds } = useCountdown(15);

  return (
    <section id="pricing" className="py-16 md:py-24 bg-geo-bg-alt px-4 relative overflow-hidden text-center border-b border-geo-border">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--color-geo-text) 0.5px, transparent 0.5px)", backgroundSize: "20px 20px" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-geo-bg/50 to-transparent"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Scarcity Banner */}
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-geo-red/10 border border-geo-red text-geo-red px-4 sm:px-6 py-2.5 uppercase font-sans font-black tracking-widest text-[10px] sm:text-xs mb-10 shadow-[0_0_15px_rgba(209,17,17,0.2)] rounded-full animate-pulse">
          <AlertTriangle className="w-4 h-4" />
          <span>Oferta Encerra Em:</span>
          <span className="text-white bg-geo-red px-2 py-0.5 rounded-md tracking-wider">{minutes}:{seconds}</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-serif font-black text-geo-text tracking-tight mb-4 uppercase leading-none">
          QUAL O SEU <span className="text-geo-gold italic block sm:inline">VEREDITO?</span>
        </h2>
        <p className="text-geo-text/70 mb-12 font-sans max-w-xl mx-auto text-sm sm:text-base font-medium">Garanta 100+ casos criminais por menos do que você gastaria pedindo uma pizza. Acesso liberado no mesmo segundo.</p>

        <div className="flex justify-center w-full max-w-3xl mx-auto text-left">
          
          {/* Premium Package (Aggressive Offer) */}
          <div className="w-full p-8 sm:p-12 flex flex-col relative bg-[#110A0A] border-2 border-geo-red rounded-3xl shadow-[0_0_50px_rgba(209,17,17,0.25)] z-20">
            <div className="absolute -top-4 inset-x-0 flex justify-center">
              <span className="bg-geo-red text-white text-[10px] sm:text-xs font-black font-sans px-6 py-2 uppercase tracking-[0.2em] rounded-full shadow-[0_4px_15px_rgba(209,17,17,0.5)] transform animate-bounce">
                OFERTA IMPERDÍVEL (-80%)
              </span>
            </div>

            <div className="mb-2 mt-4 text-center">
              <h3 className="text-3xl sm:text-4xl font-serif font-black text-geo-gold uppercase tracking-tighter shadow-geo-gold drop-shadow-md">Acesso Total</h3>
            </div>
              
            <div className="flex flex-col items-center mb-8 bg-geo-red/10 border border-geo-red/30 py-4 rounded-xl mt-6">
              <span className="text-geo-text/50 line-through text-sm font-sans font-bold uppercase tracking-widest mb-1">Valor Real: R$ 97,00</span>
              <div className="flex flex-col items-center leading-none">
                <span className="text-sm font-sans font-bold text-geo-red uppercase tracking-widest mb-1">Apenas Hoje e Agora:</span>
                <span className="text-6xl sm:text-7xl font-serif font-black text-white drop-shadow-lg">R$19,90</span>
                <span className="text-xs text-green-400 font-sans font-bold mt-2">Pagamento Único. Sem Mensalidade.</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                {text: 'Leve TODOS os +100 Dossiês Criminais', highlight: true}, 
                {text: 'Centenas de Evidências em Alta Definição', highlight: false}, 
                {text: 'BÔNUS: Caso Extra "Assassino do Zodíaco"', highlight: true},
                {text: 'Risco Zero: 7 Dias de Garantia Total', highlight: false}
              ].map((feature, i) => (
                <li key={i} className={`flex items-start gap-3 sm:text-base font-sans ${feature.highlight ? 'font-black text-white' : 'font-semibold text-geo-text/80'}`}>
                  <CheckCircle className={`w-6 h-6 shrink-0 ${feature.highlight ? 'text-geo-red' : 'text-geo-gold'}`} />
                  {feature.text}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col gap-3 mt-4">
              <button className="w-full py-5 sm:py-6 bg-geo-red text-white font-black font-sans transition-all flex flex-col items-center justify-center gap-1 group hover:bg-red-700 uppercase tracking-widest text-[13px] sm:text-sm shadow-[0_8px_30px_rgba(209,17,17,0.4)] rounded-xl active:scale-95">
                <span className="flex items-center gap-2">QUERO TUDO POR SÓ R$ 19,90 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                <span className="text-[9px] font-medium text-white/70 normal-case tracking-normal">Clique para finalizar compra segura</span>
              </button>
              <div className="flex items-center justify-center gap-2 mt-2 font-sans">
                <Lock className="w-3 h-3 text-geo-text/40"/>
                <span className="text-[10px] text-geo-text/40 uppercase tracking-widest font-bold">Compra Segura • Entrega Imediata</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
