import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiMenu,
  FiX,
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiPhone
} from 'react-icons/fi';
import { logoUrl, navLinks, contactDetails } from '../data/content';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="backdrop-blur-xl bg-white/95 shadow-lg shadow-brand-500/10">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:h-20">
          <div className="flex items-center gap-4">
            <img
              src={logoUrl}
              alt="Velicham Daycare"
              className="h-12 w-12 rounded-full border-4 border-white object-cover shadow-lg shadow-brand-500/40"
            />
            <div>
              <p className="font-display text-lg leading-none text-brand-600">Velicham Daycare</p>
            </div>
          </div>
          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-semibold text-brand-600 transition hover:text-brand-400 whitespace-nowrap px-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <div className="flex items-center gap-3 text-brand-500">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="rounded-full bg-white/90 p-2 shadow-md transition hover:-translate-y-1 hover:text-brand-400"
              >
                <FiFacebook />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="rounded-full bg-white/90 p-2 shadow-md transition hover:-translate-y-1 hover:text-brand-400"
              >
                <FiInstagram />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="rounded-full bg-white/90 p-2 shadow-md transition hover:-translate-y-1 hover:text-brand-400"
              >
                <FiYoutube />
              </a>
            </div>
            <a href="#enquiry" className="button-secondary">Enquiry</a>
          </div>
          <button
            onClick={() => setOpen((value) => !value)}
            className="rounded-full border-4 border-white bg-brand-500 p-3 text-white shadow-lg shadow-brand-500/40 lg:hidden"
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b-4 border-brand-200 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-4 px-4 pb-6 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl bg-brand-50 px-4 py-3 text-base font-semibold text-brand-600 shadow-inner"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <a href="#enquiry" className="button-secondary flex-1">Enquiry</a>
              </div>
              <div className="flex items-center justify-center gap-4 text-brand-500">
                <a href="https://facebook.com" aria-label="Facebook">
                  <FiFacebook className="h-5 w-5" />
                </a>
                <a href="https://instagram.com" aria-label="Instagram">
                  <FiInstagram className="h-5 w-5" />
                </a>
                <a href="https://youtube.com" aria-label="YouTube">
                  <FiYoutube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
