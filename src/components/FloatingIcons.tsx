import { motion } from "framer-motion";
import { useMemo } from "react";

import elem01Img from "@/assets/float/Elem01.png";
import elem02Img from "@/assets/float/Elem02.png";
import elem03Img from "@/assets/float/Elem03.png";
import elem04Img from "@/assets/float/Elem04.png";
import elem05Img from "@/assets/float/Elem05.png";
import elem06Img from "@/assets/float/Elem06.png";
import elem07Img from "@/assets/float/Elem07.png";
import elem08Img from "@/assets/float/Elem08.png";
import elem09Img from "@/assets/float/Elem09.png";
import elem10Img from "@/assets/float/Elem10.png";

interface FloatingIconProps {
  src: string;
  alt: string;
  size?: number;
  delay?: number;
  duration?: number;
  rotate?: number[];
  y?: number[];
  side?: 'left' | 'right' | 'random';
}

// Wrapper that adds the continuous floating after initial appearance, with randomized entry and position
const FloatingIconAnimated = (props: FloatingIconProps) => {
  const { top, left, entryX, entryY, initialRotate } = useMemo(() => {
    // Determine target zone: left, right or random
    let zone = props.side;
    if (!zone || zone === 'random') {
      const zones: ('left' | 'right')[] = ['left', 'right'];
      zone = zones[Math.floor(Math.random() * zones.length)];
    }
    
    let leftVal;
    if (zone === 'left') {
      leftVal = Math.floor(Math.random() * 10) + 2; // 2% to 12%
    } else {
      leftVal = Math.floor(Math.random() * 10) + 85; // 85% to 95%
    }
    
    // Random vertical position
    const topVal = Math.floor(Math.random() * 70) + 10; // 10% to 80% (avoiding overflowing the section bottom)
    
    // Random entry directions (like flying from edges to their final random spot)
    const dirs = [
      { x: 0, y: 120 },     // from bottom
      { x: 0, y: -120 },    // from top
      { x: -120, y: 0 },    // from left
      { x: 120, y: 0 },     // from right
      { x: -100, y: 100 },  // from bottom left
      { x: 100, y: 100 },   // from bottom right
    ];
    const dir = dirs[Math.floor(Math.random() * dirs.length)];

    return { 
      top: `${topVal}%`, 
      left: `${leftVal}%`,
      entryX: dir.x,
      entryY: dir.y,
      initialRotate: Math.floor(Math.random() * 90) - 45 // Random initial rotation between -45 and 45 degrees
    };
  }, [props.side]);

  return (
    <motion.div
      className="absolute pointer-events-none select-none z-50"
      style={{ 
        width: props.size || 100, 
        height: props.size || 100,
        top,
        left
      }}
      initial={{ opacity: 0, scale: 0.3, x: entryX, y: entryY, rotate: initialRotate }}
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ 
        type: "spring",
        stiffness: 60,
        damping: 12,
        mass: 1,
        duration: 0.8, 
        delay: (props.delay || 0) * 0.2
      }}
    >
      <motion.img
        src={props.src}
        alt={props.alt}
        className="w-full h-full"
        animate={{
          y: props.y || [0, -15, 0],
          rotate: props.rotate || [0, 8, 0],
        }}
        transition={{
          y: { duration: props.duration || 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: (props.duration || 6) + 1, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </motion.div>
  );
};

// Icons distributed across different sections
// Now explicitly placing one on the left and one on the right, with size 100.

export const ProblemFloatingIcons = () => (
  <>
    <FloatingIconAnimated src={elem01Img} alt="" size={100} delay={1} duration={7} side="left" />
    <FloatingIconAnimated src={elem02Img} alt="" size={100} delay={3} duration={5.5} rotate={[-5, 5, -5]} side="right" />
  </>
);

export const SolutionFloatingIcons = () => (
  <>
    <FloatingIconAnimated src={elem03Img} alt="" size={100} delay={0} duration={6} side="right" />
    <FloatingIconAnimated src={elem04Img} alt="" size={100} delay={2} duration={7.5} rotate={[0, -10, 0]} side="left" />
  </>
);

export const BenefitsFloatingIcons = () => (
  <>
    <FloatingIconAnimated src={elem05Img} alt="" size={100} delay={1} duration={6.5} side="left" />
    <FloatingIconAnimated src={elem06Img} alt="" size={100} delay={2} duration={5} rotate={[-6, 6, -6]} side="right" />
  </>
);

export const ActivitiesFloatingIcons = () => (
  <>
    <FloatingIconAnimated src={elem07Img} alt="" size={100} delay={0} duration={6} side="right" />
    <FloatingIconAnimated src={elem08Img} alt="" size={100} delay={2} duration={7} rotate={[0, 12, 0]} side="left" />
  </>
);

export const CTAFloatingIcons = () => (
  <>
    <FloatingIconAnimated src={elem09Img} alt="" size={100} delay={1} duration={6} side="left" />
    <FloatingIconAnimated src={elem10Img} alt="" size={100} delay={3} duration={5.5} rotate={[-4, 4, -4]} side="right" />
  </>
);
