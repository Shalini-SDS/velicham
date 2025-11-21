import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { marqueeTopics } from '../data/content';
import Divider from './Divider';

const Hero = () => (
  <>
    <section
    id="home"
    className="relative w-full overflow-hidden bg-gradient-to-br from-[#FF7A3D] via-[#FF8C54] to-[#FFB366] pt-20 text-white lg:pt-24"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FFD1A8_0%,transparent_60%)] opacity-50" />
    


    <div className="relative mx-auto flex max-w-full flex-col lg:flex-row items-center gap-12 px-6 lg:px-8 pb-24 lg:pb-28">
      <div className="relative z-10 max-w-xl space-y-6 flex-1">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-fit"
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
              className="flex items-center justify-start gap-4 text-2xl sm:text-3xl lg:text-4xl font-black whitespace-nowrap"
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
          className="relative font-display text-5xl font-black leading-tight sm:text-6xl lg:text-7xl"
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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative flex-1 w-full max-w-lg lg:max-w-2xl lg:ml-auto"
      >
        <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
          <img
            src="/home.jpg"
            alt="Velicham Daycare Activities"
            className="w-full h-auto object-cover"
          />
        </div>
        <motion.div
          className="absolute -top-6 -right-6 bg-accent-gold text-white rounded-2xl p-4 shadow-xl"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="text-center">
            <div className="text-2xl">☀️</div>
            <div className="text-sm font-bold mt-1">Excellence</div>
          </div>
        </motion.div>

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
