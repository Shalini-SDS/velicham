import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Divider from './Divider';

const defaultGalleryImages = ['/gal1.jpeg', '/gal2.jpeg', '/gal3.jpeg', '/gal4.jpeg', '/gal5.jpeg', '/gal6.jpeg'];

const Gallery = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="relative overflow-hidden bg-sectionSoft py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,217,255,0.12),transparent_55%)]" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute right-20 top-24 text-5xl text-yellow-400"
            animate={{ y: ['0%', '18%', '0%'], scale: [1, 1.2, 1] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {'\u2B50'}
          </motion.div>
          <motion.div
            className="absolute left-12 bottom-40 text-5xl text-pink-300"
            animate={{ scale: [1, 1.25, 1], rotate: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          >
            {'\uD83D\uDC96'}
          </motion.div>
          <motion.div
            className="absolute left-1/2 top-1/2 text-4xl text-blue-300"
            animate={{ y: ['0%', '-20%', '0%'], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            {'\u2728'}
          </motion.div>
        </div>

        <div className="relative mx-auto max-w-full px-6 lg:px-8">
          <div className="mb-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="tag-pill mx-auto"
            >
              Gallery
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 font-display text-4xl sm:text-5xl text-brand-600 font-black leading-tight"
            >
              <span className="text-brand-600">Moments of </span>
              <span className="text-brand-500">Joy & Learning</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-4 max-w-2xl text-lg text-gray-600"
            >
              Capturing the beautiful moments of growth, creativity, and happiness at Velicham Preschool & Daycare.
            </motion.p>
          </div>

          <div className="flex justify-center">
            <div className="grid w-full max-w-5xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
              {defaultGalleryImages.map((src, index) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * index, duration: 0.5 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="gradient-ring group relative overflow-hidden"
                >
                  <motion.button
                    onClick={() => setActive(src)}
                    className="group relative w-full overflow-hidden rounded-[1.5rem] shadow-md shadow-brand-500/15 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/25"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="aspect-[4/3]">
                      <motion.img
                        src={src}
                        alt="Velicham Preschool & Daycare memory"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        whileHover={{ scale: 1.05 }}
                      />
                    </div>
                    <motion.div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(4px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6"
              onClick={() => setActive(null)}
            >
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={() => setActive(null)}
                className="absolute right-6 top-6 text-3xl text-white transition-transform hover:scale-125"
                whileHover={{ rotate: 90 }}
              >
                {'\u2715'}
              </motion.button>
              <motion.img
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 25 }}
                src={active ?? ''}
                alt="Enlarged"
                className="max-h-[85vh] w-auto rounded-[1.75rem] border-8 border-white shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <Divider fromColor="#FFE5D9" toColor="#FFB3D9" />
    </>
  );
};

export default Gallery;
