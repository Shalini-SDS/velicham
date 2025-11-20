import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Divider from './Divider';

const Gallery = () => {
  const [active, setActive] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/photos')
      .then((r) => r.json())
      .then((urls) => {
        if (Array.isArray(urls) && urls.length) setImages(urls);
      })
      .catch(() => {});
  }, []);

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
          ⭐
        </motion.div>
        <motion.div
          className="absolute left-12 bottom-40 text-5xl text-pink-300"
          animate={{ scale: [1, 1.25, 1], rotate: [0, -18, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        >
          💖
        </motion.div>
        <motion.div
          className="absolute left-1/2 top-1/2 text-4xl text-blue-300"
          animate={{ y: ['0%', '-20%', '0%'], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          ✨
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
            Happy Moments
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 font-display text-3xl text-brand-700 sm:text-4xl"
          >
            Gallery
          </motion.h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(images.length ? images : []).map((src, index) => (
            <motion.button
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * index }}
              onClick={() => setActive(src)}
              className="gradient-ring overflow-hidden"
            >
              <img src={src} alt="Velicham memory" className="h-56 w-full rounded-[1.75rem] object-cover transition hover:scale-105" />
            </motion.button>
          ))}
          {!images.length && (
            <div className="col-span-full space-y-6 py-12 text-center">
              <p className="text-2xl font-semibold text-brand-600">No photos yet!</p>
              <div className="mx-auto max-w-md space-y-4 rounded-2xl bg-white/60 p-6 backdrop-blur-sm">
                <p className="text-brand-700/80">
                  <strong>To upload photos to the gallery:</strong>
                </p>
                <ol className="space-y-2 text-left text-sm text-brand-700/75">
                  <li className="flex gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white text-xs font-bold flex-shrink-0">1</span>
                    <span>Go to the Admin Upload section</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white text-xs font-bold flex-shrink-0">2</span>
                    <span>Select and upload your photos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white text-xs font-bold flex-shrink-0">3</span>
                    <span>Photos will appear here in the gallery</span>
                  </li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6"
            onClick={() => setActive(null)}
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={active}
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


