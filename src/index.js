import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import '@mdi/font/css/materialdesignicons.min.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
import IntroSection from './components/IntroSection';
import ServicesSection from './components/ServicesSection';
import WhyUs from './components/WhyUsSection';
import Sponsors from './components/SponsorsSection';
import ValuesSection from './components/ValuesSection';
import Location from './components/LocationSection';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <NavBar />
    </header>
    <main>
      <IntroSection />
      <ServicesSection />
      <WhyUs />
      <ValuesSection />
      <Sponsors />
      <Location />
    </main>
    <footer>
      <Footer />
    </footer>
  </React.StrictMode>
);

reportWebVitals();
