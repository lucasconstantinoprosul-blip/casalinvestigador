import { motion } from "motion/react";
import { Star, MessageSquare } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Mariana & Diego",
      text: "Compramos para fazer algo diferente no sábado à noite e foi incrível! A gente ficou horas discutindo as pistas no quadro da sala. O final do caso 3 explodiu nossa cabeça.",
    },
    {
      name: "Lucas T.",
      text: "Surpreendente a qualidade dos documentos. Parece que você está lendo o arquivo real da polícia. Minha namorada amou e já estamos indo pro quinto caso.",
    },
    {
      name: "Camila R.",
      text: "Melhor investimento! Substituímos o cinema por noites de vinho e investigação. Custo-benefício sensacional pelos mais de 100 casos no pacote completo.",
    },
  ];

  return (
    <section className="py-24 bg-geo-bg px-4 border-b border-geo-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-6 border border-geo-border px-5 py-2 bg-[#0F0F0F] rounded-full shadow-sm">
            <div className="flex gap-1 text-geo-gold">
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
            </div>
            <span className="text-[10px] font-bold font-sans text-geo-text ml-2 uppercase tracking-widest opacity-80">+10.000 Investigadores</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-geo-text tracking-tight uppercase">
            Relatos <span className="text-geo-gold italic">Confidenciais</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-geo-bg p-8 relative hover:bg-neutral-900 transition-colors border border-geo-border rounded-3xl shadow-sm hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 p-4">
                <div className="font-serif text-6xl text-geo-border leading-none">"</div>
              </div>
              <div className="flex gap-1 text-geo-gold mb-6 relative z-10">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-geo-text/80 font-serif leading-relaxed mb-8 italic relative z-10">"{t.text}"</p>
              
              <div className="flex items-center gap-4 border-t border-geo-border pt-6 mt-2">
                <div className="w-10 h-10 bg-geo-bg-alt border border-geo-border flex items-center justify-center font-sans font-bold text-geo-text text-sm rounded-full shadow-inner">
                  {t.name.charAt(0)}
                </div>
                <div className="font-bold font-sans text-geo-text uppercase tracking-widest text-[10px] opacity-70">{t.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
