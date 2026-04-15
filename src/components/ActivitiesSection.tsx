import { motion } from "framer-motion";
import { Palette, Coins, Leaf, BookText, Trophy, Cpu, LayoutList, Backpack, Music, Clock, Sparkles, HeartHandshake } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

import { ReactNode } from "react";

import pinturaImg from "@/assets/pintura.webp";
import leituraImg from "@/assets/leitura.webp";
import meditacaoImg from "@/assets/meditacao.webp";
import mentalidadeImg from "@/assets/mentalidade.webp";
import roboticaImg from "@/assets/robotica.webp";
import organizacaoImg from "@/assets/organizacao.webp";
import musicaImg from "@/assets/musica.webp";
import empreendedorismoImg from "@/assets/empreendedorismo.webp";

const activities: { icon: ReactNode; title: string; desenvolve: string; horarios: string[]; color: string; image: string }[] = [
  {
    icon: <Palette className="text-primary" size={28} strokeWidth={1.5} />,
    title: "Artes “Modelando e Pintando Meus Sonhos”",
    desenvolve: "Criatividade, expressão artística e coordenação motora",
    horarios: ["Terça-feira: 14:30", "Quinta-feira: 14:30"],
    color: "border-primary/30 hover:border-primary/60",
    image: pinturaImg,
  },
  {
    icon: <Coins className="text-primary" size={28} strokeWidth={1.5} />,
    title: "Educação Financeira e Empreendedorismo",
    desenvolve: "Planejamento financeiro, tomada de decisão e autonomia",
    horarios: ["Terça-feira: 13:30", "Quinta-feira: 13:30"],
    color: "border-primary/30 hover:border-primary/60",
    image: empreendedorismoImg,
  },
  {
    icon: <Leaf className="text-primary" size={28} strokeWidth={1.5} />,
    title: "Mindfulness",
    desenvolve: "Atenção plena, regulação emocional e autocontrole",
    horarios: ["Terça-feira: 16:30", "Quarta-feira: 09:30", "Quinta-feira: 16:30"],
    color: "border-primary/30 hover:border-primary/60",
    image: meditacaoImg,
  },
  {
    icon: <BookText className="text-primary" size={28} strokeWidth={1.5} />,
    title: "Literatura Crítica",
    desenvolve: "Interpretação, pensamento crítico e expressão escrita",
    horarios: ["Quarta-feira: 10:30", "Sexta-feira: 10:30"],
    color: "border-primary/30 hover:border-primary/60",
    image: leituraImg,
  },
  {
    icon: <Trophy className="text-primary" size={28} strokeWidth={1.5} />,
    title: "Mentalidade Campeã",
    desenvolve: "Foco, resiliência, disciplina emocional e mentalidade de crescimento",
    horarios: ["Quarta-feira: 11:30 e 15:30", "Quinta-feira: 15:30", "Sexta-feira: 15:30"],
    color: "border-primary/30 hover:border-primary/60",
    image: mentalidadeImg,
  },
  {
    icon: <Music className="text-primary" size={28} strokeWidth={1.5} />,
    title: "Música e Ritmo",
    desenvolve: "Atenção, coordenação, memória e expressão musical",
    horarios: ["Segunda-feira: 14:30", "Terça-feira: 10:30", "Quinta-feira: 10:30"],
    color: "border-primary/30 hover:border-primary/60",
    image: musicaImg,
  },
  {
    icon: <LayoutList className="text-primary" size={28} strokeWidth={1.5} />,
    title: "Organização para a Vida",
    desenvolve: "Organização, rotina, autonomia e gestão do tempo",
    horarios: ["Segunda-feira: 16:30", "Quarta-feira: 16:30"],
    color: "border-primary/30 hover:border-primary/60",
    image: organizacaoImg,
  },
  {
    icon: <Cpu className="text-primary" size={28} strokeWidth={1.5} />,
    title: "Robótica Educacional",
    desenvolve: "Raciocínio lógico, criatividade e resolução de problemas",
    horarios: ["Segunda-feira: 15:30", "Terça-feira: 09:30", "Quarta-feira: 14:30", "Quinta-feira: 09:30"],
    color: "border-primary/30 hover:border-primary/60",
    image: roboticaImg,
  },
];

const ActivitiesSection = () => (
  <section className="relative py-20 md:py-28 bg-background overflow-hidden">
    <div className="absolute top-0 left-0 right-0">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full rotate-180">
        <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z" fill="hsl(210 100% 95%)" />
      </svg>
    </div>

    <div className="relative max-w-6xl mx-auto px-6 pt-8">
      <AnimatedSection>
        <div className="text-center mb-4 flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-wiggle">
            <Backpack className="text-primary" size={36} strokeWidth={1.5} />
          </div>
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4 leading-tight">
          Experiências
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Escolha as <strong className="text-primary">3 trilhas</strong> que mais combinam com o momento do seu filho:
        </p>
      </AnimatedSection>

      <div className="flex flex-col gap-6 mb-12">
        {activities.map((item, i) => (
          <AnimatedSection key={i} delay={0.1 + i * 0.08}>
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              className={`rounded-2xl border-2 flex flex-col md:flex-row bg-background overflow-hidden transition-all duration-300 ${item.color}`}
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* Coluna 01 - Foto */}
              <div className="w-full md:w-1/4 h-48 md:h-auto shrink-0 border-b md:border-b-0 md:border-r border-primary/10">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* Box para Colunas 02 e 03 */}
              <div className="flex flex-col md:flex-row flex-1 p-6 md:p-8 gap-6 md:gap-8 items-start">

                {/* Coluna 02 - Titulo e Desenvolve */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">{item.title}</h3>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-primary flex items-center gap-2 mb-2">
                      <Sparkles size={16} /> Desenvolve:
                    </p>
                    <p className="text-muted-foreground text-base leading-relaxed">{item.desenvolve}</p>
                  </div>
                </div>

                {/* Divider em Desktop */}
                <div className="hidden md:block w-px self-stretch bg-primary/10 mx-2"></div>

                {/* Coluna 03 - Horários */}
                <div className="w-full md:w-1/3 lg:w-1/4 shrink-0 pt-6 md:pt-0 border-t md:border-t-0 border-primary/10">
                  <p className="text-base font-semibold text-foreground flex items-center gap-2 mb-4">
                    <Clock size={16} className="text-primary" /> Horários:
                  </p>
                  <ul className="text-base text-muted-foreground space-y-2.5">
                    {item.horarios.map((horario, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-primary/70 mt-1.5 text-[10px]">●</span>
                        <span className="leading-tight">{horario}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.3}>
        <div className="w-full p-8 md:p-10 rounded-3xl border-2 border-primary/20 bg-primary/5 flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-lg mb-8">
          <div className="w-16 h-16 shrink-0 rounded-2xl bg-primary/20 flex items-center justify-center">
            <HeartHandshake className="text-primary" size={32} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Adequado para crianças Neurodivergentes
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
              <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-sm tracking-wide">TDAH</span>
              <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-sm tracking-wide">TEA</span>
              <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-sm tracking-wide">TOD</span>
              <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-sm tracking-wide">ALTAS HABILIDADES</span>
            </div>
            <p className="text-muted-foreground font-medium text-sm md:text-base">
              (Nível 01 de Suporte)
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ActivitiesSection;
