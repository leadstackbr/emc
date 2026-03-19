import { motion } from "framer-motion";
import { Sparkles, CalendarDays, Stethoscope, Home, MapPin, MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { CTAFloatingIcons } from "./FloatingIcons";
import { ReactNode } from "react";

const features: { icon: ReactNode; text: string }[] = [
  { icon: <CalendarDays className="text-primary" size={22} />, text: "3 atividades semanais (1h cada)." },
  { icon: <Stethoscope className="text-secondary" size={22} />, text: "Acompanhamento profissional interdisciplinar." },
  { icon: <Home className="text-blue-medium" size={22} />, text: "Ambiente seguro e estimulante." },
];

const CTASection = () => (
  <section id="inscricao" className="relative py-20 md:py-28 bg-blue-light overflow-hidden">
    <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/5 blur-2xl" />
    <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-secondary/5 blur-2xl" />

    <div className="relative max-w-4xl mx-auto px-6 text-center">
      <AnimatedSection>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-bounce-gentle">
            <Sparkles className="text-primary" size={36} strokeWidth={1.8} />
          </div>
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
          Invista no futuro do seu filho <span className="text-primary">hoje</span>.
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          As vagas são <strong className="text-foreground">limitadas</strong> para garantir que cada criança receba a
          atenção personalizada que o Método EMC exige.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.25}>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="section-card flex items-center gap-3 bg-background"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <p className="text-foreground font-medium text-sm md:text-base text-left">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.35}>
        <div className="section-card bg-background border-2 border-primary/10 mb-10">
          <div className="flex items-center justify-center gap-2 mb-1">
            <MapPin className="text-primary" size={18} />
            <p className="text-muted-foreground text-base">Endereço</p>
          </div>
          <p className="text-foreground font-bold text-lg">
            R. Petit Carneiro, 1122 - cj 205 - Água Verde, Curitiba - PR, 80240-050
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.45}>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
          GARANTA JÁ A VAGA DO SEU FILHO.
        </h3>
      </AnimatedSection>

      <AnimatedSection delay={0.55}>
        <motion.a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="btn-whatsapp text-base md:text-lg"
        >
          <MessageCircle size={24} />
          Falar no WhatsApp
        </motion.a>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
