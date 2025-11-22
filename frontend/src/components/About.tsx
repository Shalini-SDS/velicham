import { motion } from 'framer-motion';
import { aboutHighlights } from '../data/content';
import Divider from './Divider';

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
      <div className="flex justify-center">
        <div className="w-full max-w-6xl space-y-12 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tag-pill bg-white/80"
          >
            About Velicham
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl text-brand-600 font-black leading-tight"
          >
            Cultivating <span className="text-brand-500">Curiosity and Creativity</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-900/80 max-w-2xl"
          >
            At Velicham Daycare, we believe every child deserves a nurturing environment where
            they can explore, learn, and develop at their own pace. Our experienced educators create a warm,
            safe space filled with joy and discovery.
          </motion.p>
          <div className="grid gap-8 w-full lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-w-4xl mx-auto">
            {aboutHighlights.map((item, index) => {
              const borderColors = [
                'border-brand-500',
                'border-accent-aqua',
                'border-yellow-400',
                'border-brand-500'
              ];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12)'
                  }}
                  className={`border-4 ${borderColors[index]} rounded-3xl p-8 bg-white/90 backdrop-blur-sm group flex flex-col gap-5 h-full transition-all duration-300 cursor-pointer`}
                >
                  <div className="flex justify-center">
                    <motion.span 
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className="rounded-lg bg-accent-aqua/20 p-5 text-brand-500 transition"
                    >
                      <item.icon className="h-7 w-7" />
                    </motion.span>
                  </div>
                  <h3 className="font-bold text-brand-700 text-xl">{item.title}</h3>
                  <p className="text-base text-brand-700/80 flex-grow leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <motion.span
              className="inline-block tag-pill bg-brand-500 text-white px-6 py-3 text-lg font-semibold"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              ✨ Lighting the path for every child's bright tomorrow ✨
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
    </section>
    <Divider fromColor="#FFD4B8" toColor="#00D9FF" />
  </>
);

export default About;
