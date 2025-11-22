import { motion } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';
import { contactDetails } from '../data/content';

const FloatingWhatsapp = () => {
  const fallback = '+919952833078';
  const displayPhone = contactDetails?.phones?.[0] || fallback;
  const href = `https://wa.me/${displayPhone.replace(/\\D/g, '')}`;
  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.5, type: 'spring', damping: 20 }}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
        >
          <FiMessageCircle className="h-7 w-7" />
        </motion.div>
      </motion.a>
      <motion.div
        className="absolute -inset-2 rounded-full bg-[#25D366]/20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default FloatingWhatsapp;


