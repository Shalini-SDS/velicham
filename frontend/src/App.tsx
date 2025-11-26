import './index.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';

import FloatingWhatsapp from './components/FloatingWhatsapp';
import AdminUpload from './components/AdminUpload';
import CompetitionPopup from './components/CompetitionPopup';

function App() {
  const [showCompetitionPopup, setShowCompetitionPopup] = useState(false);

  useEffect(() => {
    // Show popup after a short delay when the site loads
    const timer = setTimeout(() => {
      setShowCompetitionPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Facilities />
        <Gallery />
        <AdminUpload />
        <Testimonials />
        <Enquiry />
      </main>
      <Footer />
      <FloatingWhatsapp />
      <CompetitionPopup
        isOpen={showCompetitionPopup}
        onClose={() => setShowCompetitionPopup(false)}
      />
    </>
  );
}

export default App;
