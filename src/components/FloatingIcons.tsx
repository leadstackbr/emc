import { motion } from "framer-motion";

import cerebroImg from "@/assets/cerebro.png";
import caixaImg from "@/assets/caixa.png";
import godeImg from "@/assets/gode.png";
import livroImg from "@/assets/livro.png";
import musicaIconImg from "@/assets/musica-icon.png";
import roboImg from "@/assets/robo.png";
import trofeuImg from "@/assets/trofeu.png";
import porquinhoImg from "@/assets/porquinho.png";

interface FloatingIconProps {
  src: string;
  alt: string;
  className: string;
  size?: number;
  delay?: number;
  duration?: number;
  rotate?: number[];
  y?: number[];
}

const FloatingIcon = ({
  src,
  alt,
  className,
  size = 56,
  delay = 0,
  duration = 6,
  rotate = [0, 8, 0],
  y = [0, -14, 0],
}: FloatingIconProps) => (
  <motion.img
    src={src}
    alt={alt}
    className={`absolute pointer-events-none select-none z-0 ${className}`}
    style={{ width: size, height: size }}
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.6, delay: delay * 0.15, ease: "easeOut" }}
    animate={{ y, rotate }}
    // @ts-ignore
    _transition={{ y: { duration, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: duration + 1, repeat: Infinity, ease: "easeInOut" } }}
  />
);

// Wrapper that adds the continuous floating after initial appearance
const FloatingIconAnimated = (props: FloatingIconProps) => (
  <motion.div
    className={`absolute pointer-events-none select-none z-0 ${props.className}`}
    style={{ width: props.size || 56, height: props.size || 56 }}
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.6, delay: (props.delay || 0) * 0.15, ease: "easeOut" }}
  >
    <motion.img
      src={props.src}
      alt={props.alt}
      className="w-full h-full"
      animate={{
        y: props.y || [0, -14, 0],
        rotate: props.rotate || [0, 8, 0],
      }}
      transition={{
        y: { duration: props.duration || 6, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: (props.duration || 6) + 1, repeat: Infinity, ease: "easeInOut" },
      }}
    />
  </motion.div>
);

// Icons distributed across different sections
// Each group corresponds to a section of the page

export const ProblemFloatingIcons = () => (
  <>
    <FloatingIconAnimated src={cerebroImg} alt="" className="top-[8%] right-[3%]" size={52} delay={1} duration={7} />
    <FloatingIconAnimated src={livroImg} alt="" className="bottom-[12%] left-[2%]" size={48} delay={3} duration={5.5} rotate={[-5, 5, -5]} />
  </>
);

export const SolutionFloatingIcons = () => (
  <>
    <FloatingIconAnimated src={musicaIconImg} alt="" className="top-[6%] left-[2%]" size={50} delay={0} duration={6} />
    <FloatingIconAnimated src={roboImg} alt="" className="bottom-[10%] right-[3%]" size={54} delay={2} duration={7.5} rotate={[0, -10, 0]} />
  </>
);

export const BenefitsFloatingIcons = () => (
  <>
    <FloatingIconAnimated src={trofeuImg} alt="" className="top-[6%] right-[2%]" size={52} delay={1} duration={6.5} />
    <FloatingIconAnimated src={godeImg} alt="" className="bottom-[8%] left-[3%]" size={48} delay={2} duration={5} rotate={[-6, 6, -6]} />
  </>
);

export const ActivitiesFloatingIcons = () => (
  <>
    <FloatingIconAnimated src={caixaImg} alt="" className="top-[4%] left-[2%]" size={50} delay={0} duration={6} />
    <FloatingIconAnimated src={porquinhoImg} alt="" className="bottom-[5%] right-[2%]" size={52} delay={2} duration={7} rotate={[0, 12, 0]} />
  </>
);

export const CTAFloatingIcons = () => (
  <>
    <FloatingIconAnimated src={cerebroImg} alt="" className="top-[10%] left-[3%]" size={48} delay={1} duration={6} />
    <FloatingIconAnimated src={trofeuImg} alt="" className="bottom-[15%] right-[4%]" size={50} delay={3} duration={5.5} rotate={[-4, 4, -4]} />
  </>
);
