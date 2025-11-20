import { motion } from 'framer-motion';
import { FiStar, FiCloud } from 'react-icons/fi';
import { heroStats, marqueeTopics } from '../data/content';
import Divider from './Divider';

const heroImage =
  'https://images.unsplash.com/photo-1588075605001-9fb0ca7187d9?auto=format&fit=crop&w=1200&q=80';

const Hero = () => (
  <>
    <section
    id="home"
    className="relative w-full overflow-hidden bg-gradient-to-br from-[#FF7A3D] via-[#FF8C54] to-[#FFB366] pt-20 text-white lg:pt-24"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FFD1A8_0%,transparent_60%)] opacity-50" />
    
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="relative mx-auto mb-8 flex max-w-full justify-center px-6 lg:px-8"
    >
      <div className="w-full max-w-sm">
        <img
          src="/velicham-logo.svg"
          alt="Velicham Daycare"
          className="w-full drop-shadow-2xl"
        />
      </div>
      <motion.div
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-5xl"
        animate={{ y: [-20, 10, -20], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✨
      </motion.div>
    </motion.div>

    <div className="relative mx-auto flex max-w-full flex-col items-start gap-12 px-6 lg:px-8 pb-24 lg:flex-row lg:items-end lg:pb-28">
      <div className="relative z-10 max-w-xl space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-fit mx-auto"
        >
          <motion.div
            className="absolute -inset-3 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-full blur-lg"
            animate={{ 
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.08, 1]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.div 
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative bg-gradient-to-r from-white to-yellow-50 text-brand-600 px-10 sm:px-16 py-5 sm:py-6 rounded-full shadow-2xl border-3 border-yellow-200"
          >

            <motion.span 
              className="flex items-center justify-center gap-4 text-2xl sm:text-3xl lg:text-4xl font-black whitespace-nowrap"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <FiStar className="text-yellow-500" size={32} />
              </motion.span>
              Welcome to Velicham Daycare
              <motion.span
                animate={{ rotate: [0, -15, 15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }}
              >
                <FiStar className="text-yellow-500" size={32} />
              </motion.span>
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="relative w-fit mx-auto font-display text-5xl font-black leading-tight sm:text-6xl lg:text-7xl"
        >
          Crafting <span className="text-accent-gold">Bright Futures</span> Every Day
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl sm:text-2xl lg:text-2xl text-white/90 leading-relaxed max-w-lg"
        >
          A learning space where your child grows with love, creativity, and joy. Discover a playful, secure
          environment filled with imagination.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col items-start gap-4 sm:flex-row"
        >
          <a href="#enquiry" className="button-secondary">
            Enquire Now
          </a>
          <a href="#programs" className="button-secondary">
            Explore Programs
          </a>
        </motion.div>

      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="relative w-full max-w-lg"
      >
        <div className="gradient-ring">
          <img
            src={heroImage}
            alt="Happy children learning"
            className="h-full w-full rounded-[1.75rem] object-cover"
          />
        </div>
        <motion.div
          className="absolute -left-10 top-12 hidden h-20 w-20 rounded-full bg-accent-aqua/80 blur-2xl lg:block"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute -right-12 bottom-20 hidden h-24 w-24 rounded-3xl bg-accent-gold/70 blur-xl lg:block"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        {/* Removed tagline strip for a cleaner hero */}
      </motion.div>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-16 overflow-hidden bg-white/20 backdrop-blur-lg">
      <div className="flex w-[200%] animate-marquee gap-10 text-brand-700/90">
        {marqueeTopics.concat(marqueeTopics).map((topic, index) => (
          <div key={`${topic}-${index}`} className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
            <span className="h-2 w-2 rounded-full bg-accent-aqua" />
            {topic}
          </div>
        ))}
      </div>
    </div>
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute right-20 top-32 text-5xl"
        animate={{ 
          scale: [0.8, 1.3, 0.8],
          rotate: [0, 25, 0]
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        ⭐
      </motion.div>
      <motion.div
        className="absolute left-16 bottom-20 text-4xl"
        animate={{ 
          y: ['0%', '20%', '0%'], 
          scale: [0.9, 1.2, 0.9],
          rotate: [0, -20, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        ✨
      </motion.div>
    </div>
    </section>
    <Divider fromColor="#FF7A3D" toColor="#FFD4B8" />
  </>
);

export default Hero;
