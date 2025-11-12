import { motion } from 'framer-motion';
import { dailySchedule } from '../data/content';

const Schedule = () => (
  <section className="relative overflow-hidden bg-sectionWarm py-24">
    <div className="absolute inset-0 bg-[radial-gradient(90%_90%_at_100%_0%,rgba(255,183,77,0.25),transparent)]" />
    <div className="relative mx-auto max-w-5xl px-4">
      <div className="mb-10 text-center">
        <span className="tag-pill mx-auto">Daily Schedule</span>
        <h2 className="mt-4 font-display text-3xl text-brand-700 sm:text-4xl">
          A Day at <span className="text-accent-gold">Velicham</span>
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-brand-900/75">
          Every day is filled with fun, learning, and new adventures!
        </p>
      </div>
      <div className="space-y-4">
        {dailySchedule.map((item, i) => {
          const color = i % 3 === 0 ? 'border-accent-gold' : i % 3 === 1 ? 'border-accent-aqua' : 'border-accent-blush';
          return (
          <motion.div
            key={item.time}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`glass-card neon-card flex items-center justify-between rounded-bold px-6 py-4 ${color}`}
          >
            <span className="text-sm font-semibold text-brand-600">{item.time}</span>
            <span className="rounded-full border-4 border-white bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
              {item.title}
            </span>
          </motion.div>
        );})}
      </div>
    </div>
  </section>
);

export default Schedule;


