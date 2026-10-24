const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/?q=place_id:ChIJoyD33vD3zpQRawlwf_Lw5k4';

export default function Testimonials() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-2xl font-bold mb-3">Conheça as avaliações dos clientes</h2>
        <p className="text-gray-600 mb-5">Consulte os relatos e as notas atualizadas no perfil da Refrigeration Company no Google.</p>
        <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 border border-blue-600 text-blue-700 font-bold rounded-lg hover:bg-blue-50">Ver avaliações no Google</a>
      </div>
    </section>
  );
}
