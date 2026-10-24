import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Services from './Components/Services';
import BrandsCarousel from './Components/BrandsCarousel';
import Testimonials from './Components/Testimonials';
import ServiceProcess from './Components/ServiceProcess';
import ContactForm from './Components/ContactForm';
import ContactDock from './Components/ContactDock';
import Footer from './Components/Footer';
import PoliticaPrivacidade from './Components/PoliticaPrivacidade';
import SiteLink from './Components/SiteLink';

function PageNavigation() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = pathname === '/politica-de-privacidade' ? 'Política de Privacidade | Refrigeration Company' : 'Refrigeração Residencial e Comercial em São Paulo | Refrigeration Company';
    document.querySelector('meta[name="description"]').setAttribute('content', 'Instalação, manutenção e conserto de refrigeração residencial, comercial e industrial em São Paulo. Fale com a Refrigeration Company pelo WhatsApp.');
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      if (target) target.scrollIntoView();
      else window.scrollTo({ top: 0, behavior: 'instant' });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
function LegacyLanding({ section }) {
  const { search } = useLocation();
  return <Navigate replace to={{ pathname: '/', search, hash: '#' + section }} />;
}
function HomePage() {
  return <><main><Hero /><Features /><Services /><BrandsCarousel /><ServiceProcess /><Testimonials /><ContactForm /></main><ContactDock service="Orcamento" /></>;
}
export default function App() {
  return <BrowserRouter><PageNavigation /><div className="site-shell font-sans antialiased text-gray-900 bg-white relative min-h-screen flex flex-col"><Header /><div className="flex-grow"><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/conserto-geladeira" element={<LegacyLanding section="residencial" />} />
    <Route path="/refrigeracao-comercial" element={<LegacyLanding section="comercial" />} />
    <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
    <Route path="*" element={<main className="pt-40 pb-24 px-4 text-center"><h1 className="text-3xl font-bold mb-6">Página não encontrada</h1><SiteLink to="/" className="text-blue-700 underline">Voltar ao início</SiteLink></main>} />
  </Routes></div><Footer /></div></BrowserRouter>;
}
