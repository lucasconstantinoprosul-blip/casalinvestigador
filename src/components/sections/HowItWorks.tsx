import { motion } from "motion/react";
import { BookOpen, Search, ShieldCheck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: BookOpen,
      title: "Leia o Dossiê Oficial",
      desc: "Absorva cada detalhe. Toda palavra pode ser uma pista — ou uma mentira. Crie suas primeiras teorias.",
    },
    {
      num: "02",
      icon: Search,
      title: "Analise as Evidências",
      desc: "Examine relatórios policiais, perfis de suspeitos e álibis. Cada peça foi projetada para desafiar sua lógica.",
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "Prenda o Culpado",
      desc: "Junte as pontas soltas, identifique o culpado e entregue o veredito final. Você tem coragem?",
    },
  ];

  return (
    <section className="py-24 bg-geo-bg border-b border-geo-border px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-geo-text tracking-tight mb-16">
          Como Funciona a <span className="text-geo-gold italic">Investigação</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="relative z-10 p-10 text-center group bg-geo-bg hover:bg-neutral-900 transition-colors border border-geo-border rounded-3xl shadow-sm hover:shadow-lg"
            >
              <div className="text-[10px] uppercase font-sans tracking-widest text-[#5A5A40] mb-8 relative">
                 <span className="bg-geo-bg px-4 py-1 border border-geo-border rounded-full relative z-10">PASSO {step.num}</span>
              </div>
              <div className="w-20 h-20 mx-auto border border-[#3A3A3A] bg-[#0A0A0A] flex items-center justify-center mb-8 relative group-hover:border-[#A59A7D] transition-colors rounded-2xl shadow-inner">
                <step.icon className="w-8 h-8 text-geo-text group-hover:text-geo-gold transition-colors" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-geo-red scale-0 group-hover:scale-100 transition-transform origin-center rounded-full shadow-lg"></div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-geo-text mb-4 uppercase tracking-wide">{step.title}</h3>
              <p className="text-geo-text/60 font-sans leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
