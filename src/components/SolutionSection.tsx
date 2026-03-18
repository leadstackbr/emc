import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const differentials = [
  { emoji: "🧠", title: "Integração Sensorial", desc: "Estímulos que facilitam a aquisição de novas informações." },
  { emoji: "🎵", title: "Foco Reforçado", desc: "A música treina a atenção de forma lúdica e profunda." },
  { emoji: "🤝", title: "Interdisciplinaridade", desc: "Profissionais de diversas áreas unidos por um único objetivo: o desenvolvimento do seu pequeno aprendiz." },
];

const SolutionSection = () => (
  <section className="relative py-20 md:py-28 bg-background overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute top-10 right-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute bottom-10 left-0 w-60 h-60 rounded-full bg-secondary/5 blur-3xl" />

    <div className="relative max-w-5xl mx-auto px-6">
      <AnimatedSection>
        <div className="text-center mb-6">
          <span className="text-5xl animate-float inline-block">🎶</span>
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
              <span className="text-4xl mb-4 inline-block animate-bounce-gentle" style={{ animationDelay: `${i * 0.4}s` }}>{item.emoji}</span>
              <h4 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-base">{item.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

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

export default SolutionSection;
