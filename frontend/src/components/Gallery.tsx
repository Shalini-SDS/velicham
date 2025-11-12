import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
    <section id="gallery" className="relative overflow-hidden bg-sectionSoft py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,217,255,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
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
            <p className="col-span-full text-center text-brand-700/70">
              No photos uploaded yet. Add some from the Admin Upload box.
            </p>
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
  );
};

export default Gallery;


