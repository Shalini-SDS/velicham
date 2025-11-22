import { motion } from 'framer-motion';
import { facilities } from '../data/content';
import Divider from './Divider';

const Facilities = () => {
  const colorClasses = [
    'border-orange-400',
    'border-cyan-400',
    'border-yellow-400'
  ];

  const iconBgColors = [
    'bg-orange-100 text-orange-500',
    'bg-cyan-100 text-cyan-500',
    'bg-yellow-100 text-yellow-500'
  ];

  return (
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

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 text-center">
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
              className="mt-6 font-display text-4xl sm:text-5xl text-brand-600 font-black leading-tight"
            >
              Top-notch Facilities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-base text-brand-700 sm:text-lg max-w-3xl mx-auto"
            >
              We provide a comprehensive environment with top-notch facilities and dedicated care for your child's development.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {facilities.map((item, index) => {
              const colorClass = colorClasses[index % 3];
              const iconBgColor = iconBgColors[index % 3];
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * index }}
                  whileHover={{ 
                    scale: 1.08,
                    y: -12,
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)'
                  }}
                  className={`group relative rounded-3xl border-4 ${colorClass} bg-white p-6 cursor-pointer overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex flex-col gap-5 h-full">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        whileHover={{ scale: 1.15, rotate: 12 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                        className={`flex-shrink-0 rounded-2xl p-4 transition-all duration-300 group-hover:shadow-lg ${iconBgColor}`}
                      >
                        <item.icon className="h-7 w-7" />
                      </motion.div>
                      <h3 className="font-bold text-base text-brand-700 group-hover:text-brand-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-brand-800 leading-relaxed group-hover:text-brand-700 transition-colors">
                      {item.description}
                    </p>
                  </div>

                  <div className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 ${
                    index % 3 === 0 ? 'bg-orange-400' : index % 3 === 1 ? 'bg-cyan-400' : 'bg-yellow-400'
                  }`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <Divider fromColor="#FFC857" toColor="#FFE5D9" />
    </>
  );
};

export default Facilities;


