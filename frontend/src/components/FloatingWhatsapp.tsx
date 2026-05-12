import { motion } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';

const FloatingWhatsapp = () => {
  // Use the exact phone number as requested: 9952833078
  const phoneNumber = '9952833078';
  const message = encodeURIComponent('Hi Velicham Preschool & Daycare Team, I would like to know more about your services.');
  const href = `https://wa.me/91${phoneNumber}?text=${message}`;

  // Try opening WhatsApp desktop/mobile app first using the protocol handler,
  // then fall back to the web URL. This improves chances of opening the
  // correct chat on Windows/macOS if the app is installed.
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const appUrl = `whatsapp://send?phone=91${phoneNumber}&text=${message}`;

    // Try to open the WhatsApp app using the protocol handler
    window.location.href = appUrl;

    // If the app isn't installed, the protocol handler will fail silently.
    // After a short delay, open the web version as a fallback.
    setTimeout(() => {
      window.open(href, '_blank');
    }, 1000);
  };

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.5, type: 'spring', damping: 20 }}
    >
      <motion.a
        href={href}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
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
        // Decorative pulse should not block clicks, so disable pointer events
        className="absolute -inset-2 rounded-full bg-[#25D366]/20 pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default FloatingWhatsapp;


