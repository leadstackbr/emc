import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const problems = [
  { emoji: "🎯", text: "Manter o foco em uma única tarefa até o fim." },
  { emoji: "😤", text: "Lidar com frustrações sem desistir no primeiro erro." },
  { emoji: "📋", text: "Organizar o próprio tempo e materiais de forma independente." },
  { emoji: "💡", text: "Pensar de forma crítica e criativa diante de problemas." },
];

const ProblemSection = () => (
  <section className="relative py-20 md:py-28 bg-blue-light">
    <div className="max-w-4xl mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-6 leading-tight">
          Você sente que seu filho tem um potencial incrível, mas falta{" "}
          <span className="text-primary">"algo"</span> para ele decolar?
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10 leading-relaxed">
          Muitas vezes, a dificuldade na escola ou na organização em casa não é falta de inteligência, mas a falta de treino nas <strong className="text-foreground">Funções Executivas</strong>. No mundo das telas e do imediatismo, as crianças estão perdendo a capacidade de:
        </p>
      </AnimatedSection>

      <div className="grid gap-4 md:grid-cols-2 mb-10">
        {problems.map((item, i) => (
          <AnimatedSection key={i} delay={0.2 + i * 0.1}>
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              className="section-card flex items-start gap-4 bg-background"
            >
              <span className="text-3xl flex-shrink-0 animate-bounce-gentle" style={{ animationDelay: `${i * 0.3}s` }}>{item.emoji}</span>
              <p className="text-foreground font-medium text-base md:text-lg">{item.text}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.5}>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10 leading-relaxed">
          O <strong className="text-primary">Clube EMC</strong> nasceu para preencher essa lacuna que o ensino tradicional, sozinho, não consegue suprir.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <div className="text-center">
          <a href="#inscricao" className="btn-cta">
            🚀 Quero garantir a vaga do meu filho
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ProblemSection;
