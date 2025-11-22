import './index.css';
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

function App() {
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
    </>
  );
}

export default App;
