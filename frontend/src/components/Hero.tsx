import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { heroStats, marqueeTopics } from '../data/content';

const heroImage =
  'https://images.unsplash.com/photo-1588075605001-9fb0ca7187d9?auto=format&fit=crop&w=1200&q=80';

const Hero = () => (
  <section
    id="home"
    className="relative overflow-hidden bg-hero pt-36 text-white lg:pt-40"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FFD1A8_0%,transparent_60%)] opacity-80" />
    <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pb-24 lg:flex-row lg:items-end lg:pb-28">
      <div className="relative z-10 max-w-xl space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="tag-pill w-fit bg-white/90 text-brand-500 scale-110 sm:scale-125"
        >
          Welcome to Velicham Daycare <FiStar className="text-brand-400" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl"
        >
          Crafting <span className="text-accent-gold">Bright Futures</span> Every Day
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-white/90"
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
          <a href="#enquiry" className="button-primary">
            Enquire Now
          </a>
          <a href="#programs" className="button-secondary">
            Explore Programs
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {heroStats.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -6 }}
              className="glass-card animate-bounceLively rounded-bold px-6 py-5 text-center"
            >
              <p className="font-display text-2xl text-brand-600">{item.value}</p>
              <p className="text-sm text-brand-900/80">{item.label}</p>
            </motion.div>
          ))}
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
    <div className="pointer-events-none absolute inset-0">
      <motion.span
        className="absolute left-10 top-10 h-4 w-4 rounded-full bg-accent-aqua"
        animate={{ y: ['0%', '20%', '0%'] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.span
        className="absolute right-12 top-24 h-3 w-3 rounded-full bg-white"
        animate={{ x: ['0%', '15%', '0%'] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.span
        className="absolute left-1/3 bottom-16 h-3 w-3 rotate-45 bg-accent-gold"
        animate={{ rotate: [0, 20, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </div>
  </section>
);

export default Hero;
