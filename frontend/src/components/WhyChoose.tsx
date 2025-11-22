import { motion } from 'framer-motion';
import { aboutHighlights } from '../data/content';

const WhyChoose = () => (
  <section id="why" className="relative overflow-hidden bg-section py-24 md:py-32">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(255,135,77,0.18),transparent_55%)]" />
    <div className="relative mx-auto max-w-full px-6 lg:px-8">
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="tag-pill mx-auto"
        >
          Why Choose Velicham
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 font-display text-5xl sm:text-6xl text-brand-600 font-black leading-tight"
        >
          Cultivating Happy, Confident Learners
        </motion.h2>
      </div>
      <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {aboutHighlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 * index }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="glass-card group flex flex-col gap-3 rounded-bold p-6 cursor-pointer transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <motion.span 
                className="rounded-2xl border-4 border-white bg-brand-50 p-3 text-brand-500 shadow-md"
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <item.icon className="h-5 w-5" />
              </motion.span>
              <motion.h3 
                className="font-semibold text-brand-700 group-hover:text-brand-600 transition-colors"
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 * index + 0.1 }}
              >
                {item.title}
              </motion.h3>
            </div>
            <motion.p 
              className="text-brand-800/80"
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * index + 0.15 }}
            >
              {item.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;


