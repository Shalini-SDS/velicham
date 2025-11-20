import { motion } from 'framer-motion';
import { dailySchedule } from '../data/content';

const Schedule = () => {
  const getColors = (color: string) => {
    switch (color) {
      case 'pastelYellow':
        return {
          bg: '#FFFBF0',
          circleBg: '#FFEB99',
          border: '#FFD700',
          shadowColor: 'rgba(255, 215, 100, 0.4)',
          borderWidth: '3px'
        };
      case 'pastelPink':
        return {
          bg: '#FFF5FB',
          circleBg: '#FFD4E8',
          border: '#FF92C2',
          shadowColor: 'rgba(255, 146, 194, 0.4)',
          borderWidth: '3px'
        };
      case 'pastelBlue':
        return {
          bg: '#F0FBFF',
          circleBg: '#B8E5FF',
          border: '#00D9FF',
          shadowColor: 'rgba(0, 217, 255, 0.4)',
          borderWidth: '3px'
        };
      default:
        return {
          bg: '#FFFBF0',
          circleBg: '#FFEB99',
          border: '#FFD700',
          shadowColor: 'rgba(255, 215, 100, 0.4)',
          borderWidth: '3px'
        };
    }
  };

  return (
    <section className="relative overflow-hidden bg-sectionWarm py-24">
      <div className="absolute inset-0 bg-[radial-gradient(90%_90%_at_100%_0%,rgba(255,183,77,0.15),transparent)]" />
      <div className="relative mx-auto max-w-full px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="tag-pill mx-auto">Daily Schedule</span>
          <h2 className="mt-4 font-display text-3xl text-brand-700 sm:text-4xl">
            A Day at <span className="text-accent-gold">Velicham</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-brand-900/75">
            Every day is filled with fun, learning, and new adventures!
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-5">
          {dailySchedule.map((item, i) => {
            const colors = getColors(item.color);

            return (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
                className="flex items-center gap-4 group"
              >
                <span className="text-sm font-bold text-brand-600 min-w-20 text-right">
                  {item.time}
                </span>

                <motion.div
                  whileHover={{ scale: 1.2, y: -6 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="relative w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer shadow-lg"
                  style={{
                    backgroundColor: colors.circleBg,
                    border: `${colors.borderWidth} solid ${colors.border}`,
                    boxShadow: `
                      0 12px 30px ${colors.shadowColor},
                      inset 0 1px 0 rgba(255,255,255,0.9),
                      inset 0 -2px 4px rgba(0,0,0,0.08)
                    `
                  }}
                >
                  <span className="text-3xl drop-shadow-md">{item.emoji}</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, y: -3 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                  className="flex-1 rounded-bold px-8 py-5 shadow-md"
                  style={{
                    backgroundColor: colors.bg,
                    border: `${colors.borderWidth} solid ${colors.border}`,
                    boxShadow: `
                      0 10px 25px ${colors.shadowColor},
                      inset 0 1px 0 rgba(255,255,255,0.8),
                      inset 0 -1px 2px rgba(0,0,0,0.05)
                    `
                  }}
                >
                  <span className="font-display text-base font-bold text-brand-700">
                    {item.title}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Schedule;


