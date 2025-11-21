import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiMenu,
  FiX,
  FiInstagram,
  FiYoutube,
  FiFacebook,
  FiMessageCircle
} from 'react-icons/fi';
import { logoUrl, navLinks } from '../data/content';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-gradient-to-r from-[#FF7A3D] to-[#FF5C0A] shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_#ff5c0a,0_0_60px_#ff5c0a] hover:from-[#FF8C4F] hover:to-[#FF6E1A]">
        <div className="mx-auto flex h-16 max-w-full items-center justify-between px-6 lg:h-20 lg:px-8">
          <div className="flex items-center gap-2 flex-shrink-0">
            <img
              src={logoUrl}
              alt="Velicham Daycare"
              className="h-12 w-12 lg:h-14 lg:w-14 rounded object-cover transition-all hover:scale-110"
            />
            <div className="hidden sm:block whitespace-nowrap">
              <p className="font-comfortaa text-lg lg:text-2xl font-bold leading-tight text-white">Velicham Daycare</p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-semibold text-sm text-white transition-all duration-300 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_#ffffff] whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
            <div className="flex items-center gap-3 text-white">
              <a
                href="https://www.instagram.com/velicham_daycare"
                aria-label="Instagram"
                className="transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_#FF5C0A]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@velichamdaycare?si=k_xM28rPtlVtuJI4"
                aria-label="YouTube"
                className="transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_#FF5C0A]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiYoutube className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1FAhQveUHo/"
                aria-label="Facebook"
                className="transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_#FF5C0A]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/919952833078"
                aria-label="WhatsApp"
                className="transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_#FF5C0A]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiMessageCircle className="h-5 w-5" />
              </a>
            </div>
            <a href="#enquiry" className="bg-white text-[#FF7A3D] px-5 py-1.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_#FF5C0A] whitespace-nowrap">
              Enquiry
            </a>
          </div>
          <button
            onClick={() => setOpen((value) => !value)}
            className="rounded-full bg-white text-[#FF7A3D] p-2 lg:hidden transition hover:bg-white/90"
          >
            {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
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
            className="bg-[#FF7A3D] lg:hidden"
          >
            <div className="space-y-3 px-5 pb-6 pt-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  {link.label}
                </a>
              ))}
              <a href="#enquiry" className="block w-full bg-white text-[#FF7A3D] px-4 py-2 rounded-full font-semibold text-center text-sm transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_12px_#FF5C0A]">
                Enquiry
              </a>
              <div className="flex items-center justify-center gap-6 text-white pt-4">
                <a href="https://www.instagram.com/velicham_daycare" aria-label="Instagram" className="transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_#FF5C0A]" target="_blank" rel="noopener noreferrer">
                  <FiInstagram className="h-5 w-5" />
                </a>
                <a href="https://youtube.com/@velichamdaycare?si=k_xM28rPtlVtuJI4" aria-label="YouTube" className="transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_#FF5C0A]" target="_blank" rel="noopener noreferrer">
                  <FiYoutube className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/share/1FAhQveUHo/" aria-label="Facebook" className="transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_#FF5C0A]" target="_blank" rel="noopener noreferrer">
                  <FiFacebook className="h-5 w-5" />
                </a>
                <a href="https://wa.me/919952833078" aria-label="WhatsApp" className="transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_#FF5C0A]" target="_blank" rel="noopener noreferrer">
                  <FiMessageCircle className="h-5 w-5" />
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
