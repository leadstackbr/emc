import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const plans = [
  {
    title: "1 Atividade",
    price: "R$ 150,00",
    note: "por mês",
    perActivity: "R$ 150,00 / atividade",
    highlight: false,
    upsellText: "Ideal para experimentar",
  },
  {
    title: "2 Atividades",
    price: "R$ 270,00",
    note: "por mês",
    perActivity: "R$ 135,00 / atividade",
    highlight: true,
    upsellText: "Melhor custo-benefício",
  },
  {
    title: "3 Atividades",
    price: "R$ 360,00",
    note: "por mês",
    perActivity: "R$ 120,00 / atividade",
    highlight: false,
    upsellText: "Desenvolvimento completo",
  },
];

const PricingSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-blue-light overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Investimento
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha a opção que melhor se adapta às necessidades do seu filho e veja a economia ao adicionar mais atividades.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <AnimatedSection key={index} delay={0.15 * index}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative p-8 rounded-3xl border-2 flex flex-col h-full transition-shadow duration-300 ${
                  plan.highlight
                    ? "border-primary bg-background shadow-xl"
                    : "border-primary/10 bg-background hover:shadow-lg"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-1.5 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
                    Mais Procurado
                  </div>
                )}
                
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
                  {plan.title}
                </h3>
                
                <p className="text-sm font-medium text-primary mb-6">{plan.upsellText}</p>
                
                <div className="mb-2 flex items-end gap-2">
                  <span className="text-4xl md:text-5xl font-black text-foreground tracking-tight">{plan.price}</span>
                </div>
                <div className="mb-8 block">
                  <span className="text-base text-muted-foreground">{plan.note}</span>
                </div>
                
                <div className="mt-auto pt-6 border-t border-primary/10">
                  <p className="text-sm font-medium text-muted-foreground flex flex-col gap-1">
                    <span>Equivalente a:</span>
                    <span className="text-foreground font-bold text-base">{plan.perActivity}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={0.5}>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="mt-12 md:mt-16 bg-[#8b5cf6] text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-4 shadow-xl mx-auto max-w-3xl border border-[#7c3aed]"
          >
            <div className="bg-white/20 p-3 rounded-full shrink-0 mb-2 md:mb-0">
              <CalendarDays size={32} className="text-white" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-1">
                Início dia 27/04.
              </h3>
              <p className="text-lg md:text-xl text-white/90 font-medium">
                Garanta a vaga do seu filho.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default PricingSection;
