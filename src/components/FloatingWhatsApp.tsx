import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://api.whatsapp.com/send?phone=5541920004185&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informacoes%20sobre%20o%20clube%20EMC"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      aria-label="Falar conosco no WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2} />
    </motion.a>
  );
};

export default FloatingWhatsApp;
