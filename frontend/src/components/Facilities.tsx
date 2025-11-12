import { motion } from 'framer-motion';
import { facilities } from '../data/content';

const Facilities = () => (
  <section id="why" className="relative overflow-hidden bg-sectionDeep py-24">
    <div className="absolute inset-0 bg-[radial-gradient(90%_90%_at_0%_0%,rgba(255,183,77,0.25),transparent)]" />
    <div className="relative mx-auto max-w-6xl px-4">
      <div className="mb-12 text-center">
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
          className="mt-4 font-display text-3xl text-brand-700 sm:text-4xl"
        >
          Top-notch Facilities
        </motion.h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
);

export default Facilities;


