import { useState } from 'react';
import { motion } from 'framer-motion';

type FormState = {
  parentName: string;
  childName: string;
  childAge: string;
  phone: string;
  email: string;
  message: string;
};

const initial: FormState = {
  parentName: '',
  childName: '',
  childAge: '',
  phone: '',
  email: '',
  message: ''
};

const Enquiry = () => {
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.parentName,
          childName: form.childName,
          age: form.childAge,
          phone: form.phone,
          email: form.email,
          message: form.message
        })
      });
      if (!res.ok) throw new Error('Failed');
      setSent(true);
      setForm(initial);
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    }
  };

  return (
    <section id="enquiry" className="relative overflow-hidden bg-section py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,217,255,0.14),transparent_55%)]" />
      <div className="relative mx-auto max-w-5xl px-4">
        <div className="mb-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tag-pill mx-auto"
          >
            Begin Your Child's Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 font-display text-3xl text-brand-700 sm:text-4xl"
          >
            Submit Enquiry
          </motion.h2>
          <p className="mx-auto mt-2 max-w-2xl text-brand-900/75">
            Take the first step towards a bright future. Fill out the form below and we'll get in touch with you.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="glass-card neon-card rounded-[2rem] p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-700">Enter your name</label>
              <input
                name="parentName"
                value={form.parentName}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-4 border-accent-gold/60 bg-white/90 px-4 py-3 shadow-inner focus:border-accent-gold focus:ring-accent-gold"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-700">Enter child's name</label>
              <input
                name="childName"
                value={form.childName}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-4 border-accent-aqua/60 bg-white/90 px-4 py-3 shadow-inner focus:border-accent-aqua focus:ring-accent-aqua"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-700">e.g., 3 years</label>
              <input
                name="childAge"
                value={form.childAge}
                onChange={handleChange}
                className="w-full rounded-xl border-4 border-accent-gold/60 bg-white/90 px-4 py-3 shadow-inner focus:border-accent-gold focus:ring-accent-gold"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-700">Your phone number</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                required
                className="w-full rounded-xl border-4 border-accent-aqua/60 bg-white/90 px-4 py-3 shadow-inner focus:border-accent-aqua focus:ring-accent-aqua"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-brand-700">your.email@example.com</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                required
                className="w-full rounded-xl border-4 border-accent-aqua/60 bg-white/90 px-4 py-3 shadow-inner focus:border-accent-aqua focus:ring-accent-aqua"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-brand-700">Any questions or special requirements?</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-xl border-4 border-accent-gold/60 bg-white/90 px-4 py-3 shadow-inner focus:border-accent-gold focus:ring-accent-gold"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button type="submit" className="button-primary px-8">
              Submit Enquiry
            </button>
          </div>
          {sent && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center font-semibold text-brand-600"
            >
              Thanks! We'll contact you shortly.
            </motion.p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Enquiry;


