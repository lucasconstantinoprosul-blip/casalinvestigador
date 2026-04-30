export function Footer() {
  return (
    <footer className="bg-geo-bg py-12 px-8 border-b-[8px] border-geo-red relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--color-geo-text) 0.5px, transparent 0.5px)", backgroundSize: "20px 20px" }}></div>
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        <div className="mb-6 flex items-center gap-2">
          <div className="w-6 h-6 border-2 border-geo-red flex items-center justify-center">
            <div className="w-2 h-2 bg-geo-red"></div>
          </div>
          <span className="font-bold tracking-[0.2em] uppercase text-sm font-sans text-geo-text">Casal Investigador</span>
        </div>
        <p className="text-geo-text/40 text-xs font-sans max-w-xl mx-auto mb-8 leading-relaxed">
          Aviso Legal: Os casos apresentados são obras de ficção ou adaptações para entretenimento. Qualquer semelhança com nomes, pessoas ou eventos reais, salvo quando explicitamente indicado nos casos históricos, é mera coincidência.
        </p>
        <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest text-geo-text/60 font-sans mb-8">
          <a href="#" className="hover:text-geo-gold transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-geo-gold transition-colors">Política</a>
          <a href="#" className="hover:text-geo-gold transition-colors">Contato</a>
        </div>
        <div className="text-geo-text/30 text-[9px] font-sans uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Casal Investigador • Todos os Direitos Reservados
        </div>
      </div>
    </footer>
  );
}
