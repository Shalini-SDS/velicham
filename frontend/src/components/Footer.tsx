import { navLinks, programs, contactDetails } from '../data/content';

const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden bg-brand-600 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(110%_110%_at_100%_0%,rgba(255,140,66,0.6),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-xl">Velicham Daycare &amp; Play School</h3>
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
          © 2025 Velicham Daycare &amp; Play School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


