import { motion } from "framer-motion";
import { Sparkles, CalendarDays, Stethoscope, Home, MapPin, MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

import { ReactNode } from "react";
import PhotoGallery from "./PhotoGallery";

const features: { icon: ReactNode; text: string }[] = [
  { icon: <CalendarDays className="text-primary" size={22} strokeWidth={1.5} />, text: "3 atividades semanais (1h cada)." },
  { icon: <Stethoscope className="text-primary" size={22} strokeWidth={1.5} />, text: "Acompanhamento profissional interdisciplinar." },
  { icon: <Home className="text-primary" size={22} strokeWidth={1.5} />, text: "Ambiente seguro e estimulante." },
];

const CTASection = () => (
  <section id="inscricao" className="relative py-20 md:py-28 bg-blue-light overflow-hidden">

    <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/5 blur-2xl" />
    <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-secondary/5 blur-2xl" />

    <div className="relative max-w-4xl mx-auto px-6 text-center">
      <AnimatedSection>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-bounce-gentle">
            <Sparkles className="text-primary" size={36} strokeWidth={1.5} />
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
            <MapPin className="text-primary" size={18} strokeWidth={1.5} />
            <p className="text-muted-foreground text-base">Endereço</p>
          </div>
          <p className="text-foreground font-bold text-lg mb-4">
            R. Petit Carneiro, 1122 - cj 205 - Água Verde, Curitiba - PR, 80240-050
          </p>
          <PhotoGallery />
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mt-4">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.576394711335!2d-49.287501!3d-25.452422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce381147e9719%3A0xe93921f66eb4caea!2sPsiccom%20Sa%C3%BAde%20Integral%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1774027215486!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </AnimatedSection>


    </div>
  </section>
);

export default CTASection;
