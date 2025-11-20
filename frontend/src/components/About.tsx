import { motion } from 'framer-motion';
import { aboutHighlights } from '../data/content';
import Divider from './Divider';

const aboutImages = [
  'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=600&q=80'
];

const About = () => (
  <>
    <section id="about" className="relative overflow-hidden bg-sectionWarm py-24 md:py-32">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4),transparent_55%)]" />
    
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-12 top-20 text-4xl"
        animate={{ y: ['0%', '20%', '0%'], scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        ⭐
      </motion.div>
      <motion.div
        className="absolute right-20 top-40 text-5xl text-pink-400"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      >
        💗
      </motion.div>
      <motion.div
        className="absolute left-1/3 bottom-32 text-4xl text-yellow-300"
        animate={{ y: ['0%', '-15%', '0%'], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        ✨
      </motion.div>
    </div>
    <div className="relative mx-auto max-w-full px-6 lg:px-8">
      <div className="grid gap-12 md:gap-14 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tag-pill bg-white/80 mx-auto"
          >
            About Velicham
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl text-brand-700 sm:text-4xl text-center"
          >
            Cultivating Curiosity and Creativity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-900/80 text-center"
          >
            At Velicham Daycare, we believe every child deserves a nurturing environment where
            they can explore, learn, and develop at their own pace. Our experienced educators create a warm,
            safe space filled with joy and discovery.
          </motion.p>
          <div className="grid gap-6 sm:grid-cols-2">
            {aboutHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="glass-card neon-card group flex flex-col gap-3 rounded-bold p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-accent-aqua/20 p-3 text-brand-500 transition group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold text-brand-700">{item.title}</h3>
                </div>
                <p className="text-sm text-brand-700/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="space-y-6">
            {aboutImages.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
                className="gradient-ring"
              >
                <img src={src} alt="Kids at Velicham" className="h-64 w-full rounded-[1.75rem] object-cover shadow-xl" />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="absolute -right-6 top-14 hidden h-16 w-16 rounded-full border-4 border-white bg-brand-500/80 shadow-lg shadow-brand-500/30 lg:flex items-center justify-center"
            animate={{ rotate: [0, 6, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <span className="text-sm font-semibold text-white">Love &amp; Care</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </section>
    <Divider fromColor="#FFD4B8" toColor="#00D9FF" />
  </>
);

export default About;
