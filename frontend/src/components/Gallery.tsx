import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Divider from './Divider';
import { apiUrl } from '../lib/api';

const Gallery = () => {
  const [active, setActive] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
  }, []);

  useEffect(() => {
    const fetchPhotos = () => {
      fetch(apiUrl('/api/photos'))
        .then((r) => r.json())
        .then((urls) => {
          if (Array.isArray(urls) && urls.length) setImages(urls);
        })
        .catch((err) => console.error('Failed to fetch photos:', err));
    };

    fetchPhotos();
    const interval = setInterval(fetchPhotos, 2000);

    return () => clearInterval(interval);
  }, []);

  const deletePhoto = async (src: string) => {
    if (!window.confirm('Delete this photo?')) return;
    try {
      const res = await fetch(apiUrl('/api/photos/delete'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: src })
      });
      if (res.ok) {
        setImages(images.filter(img => img !== src));
      }
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

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
            Gallery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-display text-5xl sm:text-6xl text-brand-600 font-black leading-tight"
          >
            <span className="text-brand-600">Moments of </span>
            <span className="text-brand-500">Joy & Learning</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Capturing the beautiful moments of growth, creativity, and happiness at Velicham.
          </motion.p>
        </div>
        <div className="flex justify-center">
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl px-4 sm:px-0">
            {(images.length ? images : []).map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 * index, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="gradient-ring overflow-hidden relative group"
              >
                <motion.button
                  onClick={() => setActive(src)}
                  className="w-full aspect-square overflow-hidden rounded-[1.75rem] shadow-lg shadow-brand-500/20 hover:shadow-2xl hover:shadow-brand-500/40 transition-all duration-300 relative"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.img 
                    src={apiUrl(src)} 
                    alt="Velicham memory" 
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" 
                    whileHover={{ scale: 1.1 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="text-white text-4xl">🔍</span>
                  </motion.div>
                </motion.button>
                {isAdmin && (
                  <motion.button
                    onClick={() => deletePhoto(src)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition hover:bg-red-600"
                    title="Delete photo"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ✕
                  </motion.button>
                )}
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
              className="absolute top-6 right-6 text-white text-3xl hover:scale-125 transition-transform"
              whileHover={{ rotate: 90 }}
            >
              ✕
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              src={active ? apiUrl(active) : ''}
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


