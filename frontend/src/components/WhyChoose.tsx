import { motion } from 'framer-motion';
import { aboutHighlights } from '../data/content';

const WhyChoose = () => (
  <section id="why" className="relative overflow-hidden bg-section py-24">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(255,135,77,0.18),transparent_55%)]" />
    <div className="relative mx-auto max-w-6xl px-4">
      <div className="mb-12 text-center">
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
          className="mt-4 font-display text-3xl text-brand-700 sm:text-4xl"
        >
          Cultivating Happy, Confident Learners
        </motion.h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {aboutHighlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 * index }}
            className="glass-card group flex flex-col gap-3 rounded-bold p-6"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-2xl border-4 border-white bg-brand-50 p-3 text-brand-500 shadow-md transition group-hover:scale-110">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="font-semibold text-brand-700">{item.title}</h3>
            </div>
            <p className="text-brand-800/80">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;


