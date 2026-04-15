import { motion } from "framer-motion";
import { Music, Brain, Eye, Users, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

import { ReactNode } from "react";

const differentials: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <Eye className="text-primary" size={32} strokeWidth={1.5} />, title: "Integração Sensorial", desc: "Estímulos que facilitam a aquisição de novas informações." },
  { icon: <Music className="text-primary" size={32} strokeWidth={1.5} />, title: "Foco Reforçado", desc: "A música treina a atenção de forma lúdica e profunda." },
  { icon: <Users className="text-primary" size={32} strokeWidth={1.5} />, title: "Interdisciplinaridade", desc: "Profissionais de diversas áreas unidos por um único objetivo: o desenvolvimento do seu pequeno aprendiz." },
];

const SolutionSection = () => (
  <section className="relative py-20 md:py-28 bg-background overflow-hidden">

    <div className="absolute bottom-10 left-0 w-60 h-60 rounded-full bg-secondary/5 blur-3xl" />

    <div className="relative max-w-5xl mx-auto px-6">
      <AnimatedSection>
        <div className="text-center mb-6 flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-float">
            <Brain className="text-primary" size={36} strokeWidth={1.5} />
          </div>
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4 leading-tight">
          Um espaço onde o cérebro se exercita{" "}
          <span className="text-primary">brincando</span>.
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-6 leading-relaxed">
          O <strong className="text-primary">Clube EMC</strong> é um ambiente planejado para o desenvolvimento cognitivo de alto nível. Aqui, aprender não é um processo passivo de ouvir e anotar. É uma experiência de movimento, construção e descoberta.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.25}>
        <div className="section-card text-center mb-10 border-2 border-primary/10">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">
            O Diferencial: Método EMC
          </h3>
          <p className="text-base text-muted-foreground mb-0">
            (Edumusicalização Cognitiva)
          </p>
          <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
            Nossa metodologia exclusiva utiliza a música e o ritmo não apenas como arte, mas como uma <strong className="text-foreground">ferramenta estruturante do cérebro</strong>.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-3 mb-12">
        {differentials.map((item, i) => (
          <AnimatedSection key={i} delay={0.3 + i * 0.12}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="section-card text-center h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 animate-bounce-gentle" style={{ animationDelay: `${i * 0.4}s` }}>
                {item.icon}
              </div>
              <h4 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-base">{item.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>


    </div>
  </section>
);

export default SolutionSection;
