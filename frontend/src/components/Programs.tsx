import { motion } from 'framer-motion';
import { programs } from '../data/content';

const Programs = () => (
  <section id="programs" className="relative overflow-hidden bg-sectionSoft py-24">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,217,255,0.15),transparent_55%)]" />
    <div className="relative mx-auto max-w-6xl px-4">
      <div className="mb-12 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="tag-pill mx-auto"
        >
          Our Programs
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-display text-3xl text-brand-700 sm:text-4xl"
        >
          Programs Designed for Every Child
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-3 max-w-2xl text-brand-900/75"
        >
          We offer a variety of programs tailored to meet the unique needs and interests of children at
          different ages.
        </motion.p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        {programs.map((program, index) => (
          <motion.article
            key={program.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
            className="glass-card neon-card group flex flex-col overflow-hidden rounded-[2rem]"
          >
            <div className="relative h-56 overflow-hidden">
              <motion.img
                src={program.image}
                alt={program.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />
              <motion.span
                className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-brand-600"
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <program.icon className="h-4 w-4" />
                {program.ageRange}
              </motion.span>
            </div>
            <div className="space-y-4 px-8 pb-8 pt-6">
              <h3 className="font-display text-2xl text-brand-600">{program.title}</h3>
              <p className="text-brand-800/80">{program.description}</p>
              <div
                className={`inline-flex items-center gap-2 rounded-full border-4 bg-white px-4 py-2 text-sm font-semibold text-brand-600 shadow-md ${
                  program.accent === 'aqua'
                    ? 'border-accent-aqua'
                    : program.accent === 'gold'
                    ? 'border-accent-gold'
                    : 'border-accent-blush'
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                Holistic Development
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Programs;
