import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/content';
import Divider from './Divider';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setAutoPlay(false);
    setCurrentIndex(index);
  };

  const current = testimonials[currentIndex];
  const firstLetter = current.name.charAt(0).toUpperCase();
  const colors = ['#FF7A3D', '#00D9FF', '#FFB3D9', '#FFD700', '#87CEEB', '#98FB98', '#FF6B9D'];
  const colorIndex = current.name.charCodeAt(0) % colors.length;
  const bgColor = colors[colorIndex];

  return (
    <>
      <section id="testimonials" className="relative overflow-hidden bg-sectionSoft py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,217,255,0.12),transparent_55%)]" />
        
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 text-3xl"
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              💛
            </motion.div>
            <motion.div
              className="absolute top-40 right-12 text-4xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              ⭐
            </motion.div>
          </div>
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="tag-pill mx-auto"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 font-display text-4xl sm:text-5xl text-brand-600 font-black leading-tight"
            >
              <span className="text-brand-600">What </span>
              <span className="text-brand-500">Parents Say</span>
              <span className="text-brand-600"> About Us</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-base text-brand-700/80"
            >
              Don't just take our word for it - hear from the families who trust us with their children.
            </motion.p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-card neon-card rounded-[2rem] p-8 md:p-12"
              >
                <div className="grid gap-8 md:grid-cols-[1fr,1.2fr]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="relative mb-6">
                      <div className="absolute -inset-2 rounded-full opacity-30 blur" style={{ backgroundColor: bgColor }} />
                      <div
                        className="relative h-40 w-40 rounded-full shadow-xl flex items-center justify-center"
                        style={{ backgroundColor: bgColor }}
                      >
                        <span className="text-6xl font-bold text-white">{firstLetter}</span>
                      </div>
                      <motion.div
                        className="absolute -bottom-3 -right-3 rounded-full bg-brand-500 p-3 shadow-lg"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <span className="text-2xl">💛</span>
                      </motion.div>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: current.rating }).map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="text-2xl"
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <div className="flex flex-col justify-center">
                    <motion.blockquote
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mb-6 text-lg leading-relaxed text-brand-800/90 md:text-xl"
                    >
                      "{current.quote}"
                    </motion.blockquote>
                    <motion.figcaption
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="border-t border-brand-300/40 pt-4"
                    >
                      <p className="font-display text-lg font-semibold text-brand-700">{current.name}</p>
                      <p className="text-sm text-brand-600/80">{current.relation}</p>
                    </motion.figcaption>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div 
              className="absolute -left-6 top-1/2 -translate-y-1/2 md:-left-16"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.15, rotate: -10 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-brand-500 p-3 text-white shadow-lg transition hover:bg-brand-600"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="h-6 w-6" />
              </motion.button>
            </motion.div>

            <motion.div 
              className="absolute -right-6 top-1/2 -translate-y-1/2 md:-right-16"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={next}
                whileHover={{ scale: 1.15, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-brand-500 p-3 text-white shadow-lg transition hover:bg-brand-600"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="h-6 w-6" />
              </motion.button>
            </motion.div>
          </div>

          <div className="mt-12 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all ${
                  index === currentIndex
                    ? 'h-3 w-8 bg-brand-500'
                    : 'h-2 w-2 bg-brand-300 hover:bg-brand-400'
                } rounded-full`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-br from-brand-400/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-brand-300/5 to-transparent blur-3xl" />
        </div>
      </section>
      <Divider fromColor="#FFB3D9" toColor="#E8F8FF" />
    </>
  );
};

export default Testimonials;
