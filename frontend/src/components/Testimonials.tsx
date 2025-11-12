import { motion } from 'framer-motion';
import { testimonials } from '../data/content';

const Testimonials = () => (
  <section id="testimonials" className="relative overflow-hidden bg-[#FFF0E2] py-24">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,217,255,0.12),transparent_55%)]" />
    <div className="relative mx-auto max-w-6xl px-4">
      <div className="mb-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="tag-pill mx-auto"
        >
          Parent Love
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 font-display text-3xl text-brand-700 sm:text-4xl"
        >
          Testimonials
        </motion.h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * index }}
            className="glass-card neon-card rounded-bold p-6"
          >
            <blockquote className="text-brand-800/90">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-brand-600">
              {t.name}
              <span className="block text-xs font-normal text-brand-800/70">{t.relation}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;


