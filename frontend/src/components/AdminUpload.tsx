import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { apiFetch } from '../lib/api';

const AdminUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === '1') {
      localStorage.setItem('isAdmin', 'true');
    }
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
  }, []);

  const disabled = useMemo(() => !file || isLoading, [file, isLoading]);

  if (!isAdmin) return null;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    
    setIsLoading(true);
    setError(null);
    
    const data = new FormData();
    data.append('photo', file);
    try {
      const res = await apiFetch('/photos/upload', { method: 'POST', body: data });
      const json = await res.json();
      if (res.ok) {
        setUploadedUrl(json.url);
        setFile(null);
        setTimeout(() => setUploadedUrl(null), 3000);
      } else {
        setError(json.error || 'Upload failed');
      }
    } catch (err) {
      setError('Upload failed: ' + String(err));
      console.error('Upload failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section 
      className="mx-auto my-8 max-w-full px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="glass-card rounded-[1.5rem] p-6"
        whileHover={{ boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3 
          className="font-display text-xl text-brand-700"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Admin Upload
        </motion.h3>
        <motion.form 
          onSubmit={onSubmit} 
          className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <label htmlFor="admin-photo" className="sr-only">Upload photo</label>
          <motion.input
            id="admin-photo"
            type="file"
            accept="image/*"
            title="Upload photo"
            aria-label="Upload photo"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="block rounded-xl border-2 border-white bg-white/90 px-4 py-3 shadow-inner transition-all duration-300 focus:ring-2 focus:ring-brand-500"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button 
            disabled={disabled} 
            className="button-primary disabled:opacity-50"
            whileHover={!disabled ? { scale: 1.05 } : {}}
            whileTap={!disabled ? { scale: 0.95 } : {}}
          >
            {isLoading ? 'Uploading...' : 'Upload Photo'}
          </motion.button>
          <motion.button
            type="button"
            className="button-secondary"
            onClick={() => {
              localStorage.removeItem('isAdmin');
              setIsAdmin(false);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Exit Admin
          </motion.button>
        </motion.form>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: error ? 1 : 0, y: error ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          {error && <p className="mt-3 text-sm text-red-600">Error: {error}</p>}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: uploadedUrl ? 1 : 0, scale: uploadedUrl ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {uploadedUrl && <p className="mt-3 text-sm text-green-600">✓ Uploaded: {uploadedUrl}</p>}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AdminUpload;
