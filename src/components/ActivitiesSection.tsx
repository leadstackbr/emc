import { motion } from "framer-motion";
import { Palette, Coins, Flower2, BookOpen, Trophy, Cpu, PuzzleIcon, Backpack, ImageIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { ReactNode } from "react";

const activities: { icon: ReactNode; title: string; desc: string; color: string }[] = [
  {
    icon: <Palette className="text-primary" size={28} strokeWidth={1.8} />,
    title: "Artes (Modelando Sonhos)",
    desc: "Mais que pintura, é o treino da regulação emocional e planejamento através da expressão manual.",
    color: "border-blue-medium/30 hover:border-blue-medium/60",
  },
  {
    icon: <Coins className="text-blue-dark" size={28} strokeWidth={1.8} />,
    title: "Educação Financeira e Empreendedorismo",
    desc: "Ensinando autonomia e visão estratégica para quem vai liderar o próprio futuro.",
    color: "border-primary/30 hover:border-primary/60",
  },
  {
    icon: <Flower2 className="text-secondary" size={28} strokeWidth={1.8} />,
    title: "Mindfulness (Atenção Plena)",
    desc: "O antídoto para a ansiedade infantil. Foco, presença e equilíbrio emocional.",
    color: "border-secondary/30 hover:border-secondary/60",
  },
  {
    icon: <BookOpen className="text-blue-medium" size={28} strokeWidth={1.8} />,
    title: "Literatura Crítica",
    desc: "Formando crianças que não apenas leem, mas interpretam e questionam o mundo ao redor.",
    color: "border-blue-dark/30 hover:border-blue-dark/60",
  },
  {
    icon: <Trophy className="text-primary" size={28} strokeWidth={1.8} />,
    title: "Mentalidade Campeã",
    desc: "Resiliência e autoconfiança para lidar com desafios, vitórias e erros, seja no esporte ou na vida.",
    color: "border-secondary/30 hover:border-secondary/60",
  },
  {
    icon: <Cpu className="text-blue-dark" size={28} strokeWidth={1.8} />,
    title: "Robótica Educacional",
    desc: "Onde o raciocínio lógico e a tecnologia se transformam em soluções reais.",
    color: "border-primary/30 hover:border-primary/60",
  },
  {
    icon: <PuzzleIcon className="text-secondary" size={28} strokeWidth={1.8} />,
    title: "Organização para a Vida",
    desc: "Estratégias práticas para arrumar o quarto, a mochila e a rotina. O fim da \"bagunça mental\".",
    color: "border-blue-medium/30 hover:border-blue-medium/60",
  },
];

const ActivitiesSection = () => (
  <section className="relative py-20 md:py-28 bg-background overflow-hidden">
    <div className="absolute top-0 left-0 right-0">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full rotate-180">
        <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z" fill="hsl(210 100% 95%)" />
      </svg>
    </div>

    <div className="relative max-w-5xl mx-auto px-6 pt-8">
      <AnimatedSection>
        <div className="text-center mb-4 flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-wiggle">
            <Backpack className="text-primary" size={36} strokeWidth={1.8} />
          </div>
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4 leading-tight">
          Experiências
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Escolha as <strong className="text-primary">3 trilhas</strong> que mais combinam com o momento do seu filho:
        </p>
      </AnimatedSection>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {activities.map((item, i) => (
          <AnimatedSection key={i} delay={0.1 + i * 0.08}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className={`rounded-2xl border-2 bg-background p-6 h-full transition-all duration-300 ${item.color}`}
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              {/* Image placeholder */}
              <div className="mt-4 w-full h-32 rounded-xl bg-muted flex items-center justify-center border-2 border-dashed border-border">
                <ImageIcon className="text-muted-foreground" size={20} />
                <span className="text-muted-foreground text-xs font-medium ml-2">Imagem da atividade</span>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ActivitiesSection;
