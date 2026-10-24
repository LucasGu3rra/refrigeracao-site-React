import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Services from './Components/Services';
import BrandsCarousel from './Components/BrandsCarousel';
import Testimonials from './Components/Testimonials';
import ContactForm from './Components/ContactForm';
import ContactDock from './Components/ContactDock';
import Footer from './Components/Footer';
import PoliticaPrivacidade from './Components/PoliticaPrivacidade';
import SiteLink from './Components/SiteLink';
import { landingPages } from './config/landingPages';

function PageNavigation() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const page = landingPages[pathname];
    document.title = page ? `${page.title} | Refrigeration Company` : pathname === '/politica-de-privacidade'
      ? 'Política de Privacidade | Refrigeration Company'
      : 'Refrigeration Company | Climatização e Refrigeração em SP';
    document.querySelector('meta[name="description"]').setAttribute('content', page?.description
      || 'Instalação, manutenção e conserto de equipamentos de refrigeração em São Paulo. Consulte disponibilidade pelo WhatsApp.');
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      if (target) target.scrollIntoView();
      else window.scrollTo({ top: 0, behavior: 'instant' });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

function ServicePage({ page }) {
  const service = page?.service || 'Orcamento';
  return (
    <>
      <main>
        <Hero page={page} />
        {page ? (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">{page.detailsTitle}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {page.details.map(detail => (
                  <article key={detail.title} className="p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-bold text-brand-blue mb-3">{detail.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{detail.description}</p>
                  </article>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-8 text-sm">Confirme valores, disponibilidade e condições de garantia com a equipe antes de contratar.</p>
            </div>
          </section>
        ) : <Features />}
        <Services serviceIds={page?.services} intent={service} />
        {!page && <BrandsCarousel />}
        <Testimonials />
        <ContactForm initialService={service} />
      </main>
      <ContactDock service={service} />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <PageNavigation />
      <div className="site-shell font-sans antialiased text-gray-900 bg-gray-50 relative min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<ServicePage key="home" />} />
            {Object.entries(landingPages).map(([path, page]) => (
              <Route key={path} path={path} element={<ServicePage key={path} page={page} />} />
            ))}
            <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="*" element={<main className="pt-40 pb-24 px-4 text-center"><h1 className="text-3xl font-bold mb-6">Página não encontrada</h1><SiteLink to="/" className="text-blue-700 underline">Voltar ao início</SiteLink></main>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
