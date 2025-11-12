import { FiMessageCircle } from 'react-icons/fi';
import { contactDetails } from '../data/content';

const FloatingWhatsapp = () => {
  const fallback = '+919952833078';
  const displayPhone = contactDetails?.phones?.[0] || fallback;
  const href = `https://wa.me/${displayPhone.replace(/\\D/g, '')}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
    >
      <FiMessageCircle className="h-7 w-7" />
    </a>
  );
};

export default FloatingWhatsapp;


