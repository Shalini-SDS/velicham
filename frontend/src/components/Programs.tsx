import { motion } from 'framer-motion';
import { programs } from '../data/content';
import Divider from './Divider';

const Programs = () => (
  <>
    <section id="programs" className="relative overflow-hidden bg-gradient-to-b from-orange-400 via-orange-300 to-orange-200 py-24 md:py-32">
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute right-12 top-32 text-4xl"
        animate={{ y: ['0%', '15%', '0%'], scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        ⭐
      </motion.div>
      <motion.div
        className="absolute right-1/4 bottom-16 text-5xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
      >
        ❤️
      </motion.div>
    </div>
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mb-16 text-center">
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
          className="mt-6 font-display text-4xl sm:text-5xl text-brand-600 font-black leading-tight"
        >
          Programs Designed for <span className="text-brand-500">Every Child</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-base text-orange-900/70 sm:text-lg"
        >
          We offer a variety of programs tailored to meet the unique needs and interests of children at
          different ages.
        </motion.p>
      </div>
      <div className="grid gap-8 md:gap-10 lg:grid-cols-2">
        {programs.map((program, index) => (
          <motion.article
            key={program.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
          >
            <div className="relative h-64 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              />
              <motion.img
                src={program.image}
                alt={program.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                whileHover={{ scale: 1.1 }}
              />
              <motion.div 
                className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white shadow-md p-3"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <program.icon className="h-6 w-6 text-orange-500" />
              </motion.div>
            </div>
            <motion.div className="space-y-4 px-8 pb-10 pt-7">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index + 0.1 }}
                className={`inline-block rounded-full px-4 py-2 text-sm font-semibold text-white ${
                  program.accent === 'aqua'
                    ? 'bg-cyan-400'
                    : program.accent === 'gold'
                    ? 'bg-orange-400'
                    : 'bg-rose-400'
                }`}
              >
                {program.ageRange}
              </motion.div>
              <motion.h3 
                className="font-display text-2xl font-bold text-orange-600 group-hover:text-orange-700 transition-colors"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index + 0.15 }}
              >
                {program.title}
              </motion.h3>
              <motion.p 
                className="text-base text-gray-700"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index + 0.2 }}
              >
                {program.description}
              </motion.p>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </div>
    </section>
    <Divider fromColor="#FFA500" toColor="#FFB366" />
  </>
);

export default Programs;
