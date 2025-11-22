import { useState } from 'react';
import { motion } from 'framer-motion';
import Divider from './Divider';
import { apiFetch } from '../lib/api';

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
      const res = await apiFetch('/enquiry', {
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
    } catch {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    }
  };

  return (
    <>
      <section id="enquiry" className="relative overflow-hidden bg-section py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,217,255,0.14),transparent_55%)]" />
      <div className="relative mx-auto max-w-full px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
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
            transition={{ delay: 0.1 }}
            className="mt-6 font-display text-4xl sm:text-5xl text-brand-600 font-black leading-tight"
          >
            Submit Enquiry
          </motion.h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-900/70 sm:text-lg">
            Take the first step towards a bright future. Fill out the form below and we'll get in touch with you.
          </p>
        </div>
        <motion.form 
          onSubmit={handleSubmit} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-[2.5rem] border-4 border-brand-500 bg-white p-8 md:p-10"
        >
          <div className="grid gap-6 md:gap-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <label className="mb-2 block text-sm font-semibold text-brand-700">Parent/Guardian Name *</label>
              <input
                name="parentName"
                value={form.parentName}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border-4 border-brand-500/40 bg-white px-4 py-3 placeholder-gray-400 transition focus:border-brand-500 focus:ring-0 focus:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <label className="mb-2 block text-sm font-semibold text-brand-700">Child's Name *</label>
              <input
                name="childName"
                value={form.childName}
                onChange={handleChange}
                placeholder="Enter child's name"
                required
                className="w-full rounded-xl border-4 border-accent-aqua/60 bg-white px-4 py-3 placeholder-gray-400 transition focus:border-accent-aqua focus:ring-0 focus:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label className="mb-2 block text-sm font-semibold text-brand-700">Child's Age *</label>
              <input
                name="childAge"
                value={form.childAge}
                onChange={handleChange}
                placeholder="e.g., 3 years"
                className="w-full rounded-xl border-4 border-accent-gold/60 bg-white px-4 py-3 placeholder-gray-400 transition focus:border-accent-gold focus:ring-0 focus:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <label className="mb-2 block text-sm font-semibold text-brand-700">Contact Number *</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Your phone number"
                required
                className="w-full rounded-xl border-4 border-brand-500/40 bg-white px-4 py-3 placeholder-gray-400 transition focus:border-brand-500 focus:ring-0 focus:scale-105"
              />
            </motion.div>
            <motion.div 
              className="sm:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label className="mb-2 block text-sm font-semibold text-brand-700">Email Address *</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="your.email@example.com"
                required
                className="w-full rounded-xl border-4 border-accent-aqua/60 bg-white px-4 py-3 placeholder-gray-400 transition focus:border-accent-aqua focus:ring-0 focus:scale-105"
              />
            </motion.div>
            <motion.div 
              className="sm:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <label className="mb-2 block text-sm font-semibold text-brand-700">Message (Optional)</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Any questions or special requirements?"
                rows={4}
                className="w-full rounded-xl border-4 border-accent-gold/60 bg-white px-4 py-3 placeholder-gray-400 transition focus:border-accent-gold focus:ring-0 focus:scale-105"
              />
            </motion.div>
          </div>
          <motion.div 
            className="mt-6 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.button 
              type="submit" 
              className="button-primary px-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Enquiry
            </motion.button>
          </motion.div>
          {sent && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="mt-4 text-center"
            >
              <motion.p
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="font-semibold text-brand-600"
              >
                ✅ Thanks! We'll contact you shortly.
              </motion.p>
            </motion.div>
          )}
        </motion.form>
      </div>
      </section>
      <Divider fromColor="#E8F8FF" toColor="#FFF0E6" />
    </>
  );
};

export default Enquiry;


