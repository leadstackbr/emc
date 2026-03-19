import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FloatingShapes from "./FloatingShapes";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => (
  <section
    className="relative flex flex-col items-center justify-center overflow-hidden"
    style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center", height: "900px" }}
  >
    <FloatingShapes />

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20 pb-10">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground mb-6"
      >
        Prepare seu filho para os desafios do futuro desenvolvendo{" "}
        <span className="text-primary">foco</span>,{" "}
        <span className="text-secondary">autonomia</span> e{" "}
        <span className="text-blue-medium">inteligência emocional</span>.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
      >
        Muito além do reforço escolar: um ecossistema de aprendizagem ativa para crianças de 7 a 12 anos treinarem o cérebro para a vida.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#inscricao" className="btn-cta text-base md:text-lg">
          <ArrowRight size={20} /> Quero garantir a vaga do meu filho
        </a>
      </motion.div>
    </div>

    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z" fill="hsl(210 100% 95%)" />
      </svg>
    </div>
  </section>
);

export default HeroSection;
