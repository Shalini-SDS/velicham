import { motion } from 'framer-motion';
import { navLinks, programs, contactDetails } from '../data/content';

const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden bg-brand-600 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(110%_110%_at_100%_0%,rgba(255,140,66,0.6),transparent)]" />
      
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-16 top-20 text-4xl text-yellow-200"
          animate={{ y: ['0%', '20%', '0%'], scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          ⭐
        </motion.div>
        <motion.div
          className="absolute right-20 bottom-24 text-5xl text-red-300"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        >
          ❤️
        </motion.div>
        <motion.div
          className="absolute left-1/2 top-1/3 text-4xl text-yellow-100"
          animate={{ y: ['0%', '-18%', '0%'], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        >
          ✨
        </motion.div>
      </div>
      <div className="relative mx-auto max-w-full px-6 lg:px-8 py-16 md:py-20">
        <div className="grid gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-xl">Velicham Daycare</h3>
            <p className="mt-2 text-white/85">Where Little Hearts Play, Learn, and Grow Every Day</p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-white/90">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:underline">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Our Programs</h4>
            <ul className="space-y-2 text-white/90">
              {programs.map((p) => (
                <li key={p.title}>{p.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Contact Us</h4>
            <ul className="space-y-2 text-white/90">
              {contactDetails.phones.map((ph) => (
                <li key={ph}>
                  <a href={`tel:${ph.replace(/\\s+/g, '')}`} className="hover:underline">{ph}</a>
                </li>
              ))}
              <li>
                <a href={`mailto:${contactDetails.email}`} className="hover:underline">
                  {contactDetails.email}
                </a>
              </li>
              <li>{contactDetails.address}</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/80">
          © 2025 Velicham Daycare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


