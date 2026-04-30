import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      q: "Preciso de experiência como detetive?",
      a: "Não! Os casos são acessíveis para qualquer pessoa. Basta trazer curiosidade e vontade de resolver o mistério junto com sua dupla.",
    },
    {
      q: "Como vou receber os casos?",
      a: "É 100% digital — entregue em PDF logo após a confirmação do pagamento. Você pode jogar direto no celular, tablet ou imprimir em casa.",
    },
    {
      q: "Posso jogar com mais pessoas?",
      a: "Sim! Os casos foram criados pensando em casais, mas podem ser jogados em grupo também. Quanto mais cabeças pensando, mais divertido fica!",
    },
    {
      q: "E se a gente não conseguir resolver?",
      a: "Fique tranquilo. Cada dossiê vem com a solução completa inclusa. Você pode consultar o veredito quando quiser, sem spoilers forçados.",
    },
    {
      q: "Qual a duração média de uma investigação?",
      a: "A maioria das duplas leva entre 1h e 3h por caso, dependendo do ritmo da investigação. Perfeito para uma noite especial em casa.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-geo-bg px-4 border-b border-geo-border">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-geo-text tracking-tight text-center mb-16 uppercase">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border border-geo-border bg-geo-bg hover:bg-neutral-900 transition-colors rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(i)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-sans text-[#5A5A40] uppercase tracking-widest block w-6">0{i+1}</span>
                  <span className="font-bold font-serif text-geo-text text-xl">{faq.q}</span>
                </div>
                <div className="w-8 h-8 border border-geo-border flex items-center justify-center shrink-0 rounded-full bg-geo-bg-alt">
                  {openIndex === i ? (
                    <Minus className="w-4 h-4 text-geo-red" />
                  ) : (
                    <Plus className="w-4 h-4 text-geo-gold" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-8 pt-2 pl-[72px] text-geo-text/60 font-sans leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
