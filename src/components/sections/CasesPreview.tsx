import { motion } from "motion/react";
import { Search, Map, Database, Clock } from "lucide-react";

export function CasesPreview() {
  const cases = [
    { title: "O Ofício da Quinta Pele", diff: "Difícil", icon: Database, bgImage: "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?auto=format&fit=crop&q=80&w=600" },
    { title: "A Conspiração Blackwood", diff: "Médio", icon: Search, bgImage: "https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?auto=format&fit=crop&q=80&w=600" },
    { title: "Maré Morta", diff: "Fácil", icon: Map, bgImage: "https://images.unsplash.com/photo-1475503572774-15a45e5d00b9?auto=format&fit=crop&q=80&w=600" },
    { title: "Ecos do Apartamento 312", diff: "Difícil", icon: Clock, bgImage: "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?auto=format&fit=crop&q=80&w=600" },
    { title: "Noite Silenciosa", diff: "Médio", icon: Search, bgImage: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=600" },
    { title: "As Badaladas de Véspera", diff: "Médio", icon: Clock, bgImage: "https://images.unsplash.com/photo-1483861217036-71d5b3644026?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <section className="py-24 bg-geo-bg px-4 relative overflow-hidden border-b border-geo-border">
      <div className="absolute top-0 inset-x-0 h-px bg-geo-border"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="mb-4">
            <span className="text-geo-red font-sans text-xs font-bold uppercase tracking-[0.3em]">O Arquivo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-geo-text tracking-tight">
            Quem será sua <span className="text-geo-gold italic">próxima vítima?</span>
          </h2>
          <p className="text-geo-text/70 font-sans max-w-2xl mx-auto text-lg leading-relaxed">
            Toda investigação começa com um caso. Escolha entre histórias exclusivas, tramas inteligentes e finais surpreendentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group cursor-default relative p-8 border border-geo-border bg-geo-bg hover:bg-neutral-900 transition-colors rounded-2xl overflow-hidden shadow-sm hover:shadow-xl min-h-[200px]"
            >
              <div className="absolute inset-0 z-0">
                <img src={c.bgImage} alt="" className="w-full h-full object-cover filter grayscale opacity-10 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-geo-bg via-geo-bg/80 to-transparent"></div>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-[3px] bg-geo-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-10" />
              
              <div className="flex flex-col h-full relative z-20">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 border border-[#3A3A3A] flex items-center justify-center rounded-xl bg-geo-bg-alt">
                    <c.icon className="w-5 h-5 text-geo-gold" />
                  </div>
                  <span className="text-[10px] uppercase font-sans tracking-widest text-[#5A5A40] border border-[#3A3A3A] px-3 py-1.5 rounded-full bg-geo-bg-alt">
                    {c.diff}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-geo-text group-hover:text-geo-gold transition-colors mb-2 leading-tight">
                  {c.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
