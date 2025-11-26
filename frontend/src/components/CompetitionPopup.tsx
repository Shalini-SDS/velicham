import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiFetch } from '../lib/api';

type EnrollmentForm = {
  name: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
};

const CompetitionPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<EnrollmentForm>({
    name: '',
    email: '',
    phone: '',
    childName: '',
    childAge: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await apiFetch('/competition-enrollment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setShowForm(false);
        setSubmitted(false);
        setForm({ name: '', email: '', phone: '', childName: '', childAge: '' });
      }, 3000);
    } catch (error) {
      console.error('Enrollment failed:', error);
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setShowForm(false);
        setSubmitted(false);
        setForm({ name: '', email: '', phone: '', childName: '', childAge: '' });
      }, 3000);
    }
  };

  // Generate random positions for crackers and bubbles
  const crackers = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    size: Math.random() * 20 + 10
  }));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Crackers */}
            {crackers.map((cracker) => (
              <motion.div
                key={`cracker-${cracker.id}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 2,
                  delay: cracker.delay,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="absolute text-4xl"
                style={{
                  left: `${cracker.x}%`,
                  top: `${cracker.y}%`,
                }}
              >
                🎆
              </motion.div>
            ))}

            {/* Bubbles */}
            {bubbles.map((bubble) => (
              <motion.div
                key={`bubble-${bubble.id}`}
                initial={{ y: '100vh', opacity: 0 }}
                animate={{
                  y: '-10vh',
                  opacity: [0, 1, 0],
                  x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50]
                }}
                transition={{
                  duration: 4,
                  delay: bubble.delay,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30"
                style={{
                  left: `${bubble.x}%`,
                  width: `${bubble.size}px`,
                  height: `${bubble.size}px`,
                }}
              />
            ))}
          </div>

          {/* Main popup content */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-6 text-white text-center">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold mb-2"
              >
                🎉 Exciting Competition! 🎉
              </motion.h2>
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg"
              >
                First Competition: Dec 7th
              </motion.p>
            </div>

            {/* Content */}
            <div className="p-6">
              {!showForm ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Join Our Amazing Competition!
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Showcase your child's talent and creativity. Special prizes for winners!
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <p className="text-sm text-blue-800">
                        📍 Visit our address for entry card and complete details
                      </p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowForm(true)}
                    className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Enroll Now! 🚀
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                    Enrollment Form
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Child's Name *
                    </label>
                    <input
                      type="text"
                      name="childName"
                      value={form.childName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Child's name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Child's Age *
                    </label>
                    <input
                      type="text"
                      name="childAge"
                      value={form.childAge}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 5 years"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <motion.button
                      type="button"
                      onClick={() => setShowForm(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Submit Enrollment
                    </motion.button>
                  </div>
                </motion.form>
              )}

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-center"
                >
                  <motion.p
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-green-800 font-semibold"
                  >
                    ✅ Enrollment submitted successfully! We'll contact you soon.
                  </motion.p>
                </motion.div>
              )}
            </div>

            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-200 text-2xl"
            >
              ×
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CompetitionPopup;