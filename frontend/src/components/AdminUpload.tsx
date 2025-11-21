import { useEffect, useMemo, useState } from 'react';
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
    <section className="mx-auto my-8 max-w-full px-6 lg:px-8">
      <div className="glass-card rounded-[1.5rem] p-6">
        <h3 className="font-display text-xl text-brand-700">Admin Upload</h3>
        <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
          <label htmlFor="admin-photo" className="sr-only">Upload photo</label>
          <input
            id="admin-photo"
            type="file"
            accept="image/*"
            title="Upload photo"
            aria-label="Upload photo"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="block rounded-xl border-2 border-white bg-white/90 px-4 py-3 shadow-inner"
          />
          <button disabled={disabled} className="button-primary disabled:opacity-50">
            Upload Photo
          </button>
          <button
            type="button"
            className="button-secondary"
            onClick={() => {
              localStorage.removeItem('isAdmin');
              setIsAdmin(false);
            }}
          >
            Exit Admin
          </button>
        </form>
        {error && <p className="mt-3 text-sm text-red-600">Error: {error}</p>}
        {uploadedUrl && <p className="mt-3 text-sm text-green-600">✓ Uploaded: {uploadedUrl}</p>}
      </div>
    </section>
  );
};

export default AdminUpload;
