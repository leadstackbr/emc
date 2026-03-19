import { motion } from "framer-motion";
import { ShieldCheck, BrainCircuit, Shuffle, Rocket, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { BenefitsFloatingIcons } from "./FloatingIcons";
import { ReactNode } from "react";

const benefits: { skill: string; result: string; icon: ReactNode; color: string }[] = [
  {
    skill: "Controle Inibitório",
    result: "Ele pensa antes de agir e lida melhor com impulsos e emoções.",
    icon: <ShieldCheck className="text-primary" size={28} strokeWidth={2} />,
    color: "bg-primary/10 border-primary/20",
  },
  {
    skill: "Memória de Trabalho",
    result: "Ele consegue seguir instruções e organizar o raciocínio com clareza.",
    icon: <BrainCircuit className="text-blue-medium" size={28} strokeWidth={2} />,
    color: "bg-blue-medium/10 border-blue-medium/20",
  },
  {
    skill: "Flexibilidade Cognitiva",
    result: "Menos \"travas\" diante do novo e mais criatividade para resolver problemas.",
    icon: <Shuffle className="text-secondary" size={28} strokeWidth={2} />,
    color: "bg-primary/10 border-primary/20",
  },
  {
    skill: "Autonomia Real",
    result: "Menos dependência dos pais para o dever de casa e rotinas básicas.",
    icon: <Rocket className="text-blue-dark" size={28} strokeWidth={2} />,
    color: "bg-secondary/10 border-secondary/20",
  },
];

const BenefitsSection = () => (
  <section className="relative py-20 md:py-28 bg-blue-light overflow-hidden">
    <div className="max-w-5xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4 leading-tight">
          Transformamos conceitos científicos em{" "}
          <span className="text-primary">conquistas diárias</span> para sua família:
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="flex justify-center gap-8 mb-10 text-sm font-bold text-muted-foreground">
          <span className="bg-primary/10 px-4 py-2 rounded-full text-primary">O que treinamos</span>
          <span className="bg-secondary/10 px-4 py-2 rounded-full text-secondary">O que você percebe em casa e na escola</span>
        </div>
      </AnimatedSection>

      <div className="grid gap-5 md:grid-cols-2 mb-12">
        {benefits.map((item, i) => (
          <AnimatedSection key={i} delay={0.15 + i * 0.1}>
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              className={`rounded-2xl border-2 p-6 md:p-8 bg-background ${item.color} transition-shadow hover:shadow-lg`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{item.skill}</h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">{item.result}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.6}>
        <div className="text-center">
          <a href="#inscricao" className="btn-cta">
            <ArrowRight size={20} /> Quero garantir a vaga do meu filho
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default BenefitsSection;
