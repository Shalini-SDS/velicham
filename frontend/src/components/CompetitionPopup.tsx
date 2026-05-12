import { useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CompetitionPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const openMap = useCallback(() => {
    const address = `18, Haridasspuram Main Rd, MC Nagar, Hasthinapuram, Chitlapakkam, Chennai, Tamil Nadu 600064`;
    const encoded = encodeURIComponent(address);
    const googleUrl = `https://www.google.com/maps/search/?api=1&query=${encoded}`;
    const appleUrl = `maps://?q=${encoded}`; // Apple Maps
    const geoUrl = `geo:0,0?q=${encoded}`; // Android native geo intent

    try {
      const ua = navigator.userAgent || '';
      const isIOS = /iPhone|iPad|iPod/.test(ua) && !/Windows/.test(ua);
      const isAndroid = /Android/.test(ua);

      if (isIOS) {
        // Try opening Apple Maps first; fallback to Google Maps web
        window.location.href = appleUrl;
        setTimeout(() => window.open(googleUrl, '_blank', 'noopener,noreferrer'), 800);
      } else if (isAndroid) {
        // Try native geo intent which opens Google Maps app; fallback to web
        window.location.href = geoUrl;
        setTimeout(() => window.open(googleUrl, '_blank', 'noopener,noreferrer'), 800);
      } else {
        // Desktop / unknown: open Google Maps web
        window.open(googleUrl, '_blank', 'noopener,noreferrer');
      }
    } catch (err) {
      // On any error, open the web link
      window.open(googleUrl, '_blank', 'noopener,noreferrer');
    }

    onClose();
  }, [onClose]);

  // Generate random positions for crackers and bubbles
  const crackers = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    size: Math.random() * 20 + 10
  }));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Crackers */}
            {crackers.map((cracker) => (
              <motion.div
                key={`cracker-${cracker.id}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 2,
                  delay: cracker.delay,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="absolute text-4xl"
                style={{
                  left: `${cracker.x}%`,
                  top: `${cracker.y}%`,
                }}
              >
                🎆
              </motion.div>
            ))}

            {/* Bubbles */}
            {bubbles.map((bubble) => (
              <motion.div
                key={`bubble-${bubble.id}`}
                initial={{ y: '100vh', opacity: 0 }}
                animate={{
                  y: '-10vh',
                  opacity: [0, 1, 0],
                  x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50]
                }}
                transition={{
                  duration: 4,
                  delay: bubble.delay,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30"
                style={{
                  left: `${bubble.x}%`,
                  width: `${bubble.size}px`,
                  height: `${bubble.size}px`,
                }}
              />
            ))}
          </div>

          {/* Main popup content */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full mx-4 overflow-hidden max-h-[90vh] sm:max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-4 sm:p-6 pr-12 sm:pr-14 text-white text-center">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-2xl font-bold mb-2 leading-tight"
              >
                🎉 Admission Open 2026–2027 🎉
              </motion.h2>
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg"
              >
                Enroll Your Little One Today!
              </motion.p>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[70vh]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Visit Our Centre
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We'd love to welcome you! Visit us for admissions, enquiry, and complete details.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-blue-800">
                      📍 18, Haridasspuram Main Rd, MC Nagar, Hasthinapuram, Chitlapakkam, Chennai, Tamil Nadu 600064
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openMap}
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Visit Us 📍
                </motion.button>
              </motion.div>
            </div>

            {/* Close button (styled for visibility) */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              aria-label="Close"
              title="Close"
              className="absolute top-4 right-4 bg-white/95 text-gray-800 hover:bg-white p-1.5 rounded-full shadow-md w-9 h-9 flex items-center justify-center text-xl ring-1 ring-gray-200"
            >
              ×
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CompetitionPopup;