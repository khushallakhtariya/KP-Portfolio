import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Home from './sections/home';
import About from './sections/about';
import Education from './sections/education';
import Contact from './sections/contact';
import Experience from './sections/experience';
import Loader from './Components/Loader';
import { initSectionObserver } from './utils/sectionObserver';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Handle loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Initialize section observer after loader
    setTimeout(() => {
      initSectionObserver();
    }, 2100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="section-overlay"></div>
      <About />
      <div className="section-overlay"></div>
      <Experience />
      <div className="section-overlay"></div>
      <Education />
      <div className="section-overlay"></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
