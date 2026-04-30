import { FileText, Stethoscope, Briefcase, Eye } from "lucide-react";
import { motion } from "motion/react";

export function WhatYouGet() {
  const items = [
    {
      icon: FileText,
      title: "Documentos Reais",
      desc: "Transcrições de interrogatórios, registros autênticos e depoimentos inéditos com detalhes chocantes.",
    },
    {
      icon: Stethoscope,
      title: "Laudos Forenses",
      desc: "Resultados da autópsia, análises criminais e exames de vestígios. A ciência por trás de cada caso.",
    },
    {
      icon: Eye,
      title: "Pistas & Evidências",
      desc: "Fotografias, mapas da cena, objetos e conexões inesperadas que ligam suspeitos a conspirações.",
    },
  ];

  return (
    <section className="py-24 bg-geo-bg-alt relative px-4 border-b border-geo-border">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--color-geo-text) 0.5px, transparent 0.5px)", backgroundSize: "20px 20px" }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-geo-text tracking-tight">
              O Que Você <span className="text-geo-gold italic">Vai Receber</span>
            </h2>
            <p className="text-lg text-geo-text/70 font-sans leading-relaxed">
              Após a compra confirmada, você recebe acesso imediato a um dossiê criminal completo em PDF. São documentos confidenciais que vão te transformar em um verdadeiro detetive.
            </p>
            
            <div className="bg-[#111] p-8 border border-geo-border text-geo-text/80 font-sans text-sm leading-relaxed border-l-4 border-l-geo-red relative shadow-lg rounded-xl">
              <div className="absolute -top-3 -right-3 text-geo-gold opacity-30 text-5xl font-serif">"</div>
              Trabalhem em dupla ou em grupo. Usem seu raciocínio dedutivo, conectem as pistas e mergulhem em uma experiência investigativa.
            </div>
          </div>

          <div className="lg:w-1/2 space-y-4">
            {items.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex items-start gap-6 p-6 bg-geo-bg border border-geo-border relative overflow-hidden group hover:border-[#A59A7D] transition-colors rounded-2xl shadow-sm hover:shadow-md"
              >
                <div className="absolute right-0 top-0 h-full w-1.5 bg-geo-red scale-y-0 group-hover:scale-y-100 transition-transform origin-top z-10" />
                <div className="w-14 h-14 shrink-0 border border-[#3A3A3A] flex items-center justify-center bg-geo-bg-alt rounded-2xl">
                  <item.icon className="w-6 h-6 text-geo-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-geo-text mb-2 tracking-wide uppercase">{item.title}</h3>
                  <p className="text-geo-text/60 leading-relaxed font-sans">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
