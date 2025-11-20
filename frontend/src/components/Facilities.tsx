import { motion } from 'framer-motion';
import { facilities } from '../data/content';
import Divider from './Divider';

const Facilities = () => (
  <>
    <section id="why" className="relative overflow-hidden bg-sectionDeep py-24 md:py-32">
    <div className="absolute inset-0 bg-[radial-gradient(90%_90%_at_0%_0%,rgba(255,183,77,0.25),transparent)]" />
    
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-20 top-40 text-5xl"
        animate={{ y: ['0%', '20%', '0%'], scale: [1, 1.2, 1] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        ⭐
      </motion.div>
      <motion.div
        className="absolute right-16 bottom-32 text-5xl text-orange-400"
        animate={{ scale: [1, 1.25, 1], rotate: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
      >
        💛
      </motion.div>
      <motion.div
        className="absolute right-1/4 top-1/3 text-4xl text-lime-300"
        animate={{ y: ['0%', '-18%', '0%'], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      >
        ✨
      </motion.div>
    </div>
    <div className="relative mx-auto max-w-full px-6 lg:px-8">
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="tag-pill mx-auto"
        >
          Why Choose Us
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 font-display text-3xl text-brand-600 sm:text-4xl md:text-5xl"
        >
          Top-notch Facilities
        </motion.h2>
      </div>
      <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {facilities.map((item, index) => {
          const color =
            index % 3 === 0 ? 'border-accent-gold' : index % 3 === 1 ? 'border-accent-aqua' : 'border-accent-blush';
          return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 * index }}
            className={`glass-card neon-card group flex flex-col gap-3 rounded-bold p-6 ${color}`}
          >
            <div className="flex items-center gap-3">
              <span className="rounded-2xl border-4 border-white bg-brand-50 p-3 text-brand-500 shadow-md transition group-hover:scale-110 animate-tilt">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="font-semibold text-brand-700">{item.title}</h3>
            </div>
            <p className="text-brand-800/80">{item.description}</p>
          </motion.div>
        );
        })}
      </div>
    </div>
    </section>
    <Divider fromColor="#FFC857" toColor="#FFE5D9" />
  </>
);

export default Facilities;


