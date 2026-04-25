"use client";

const locations = [
  { city: "Alphaville", price: "40,00" },
  { city: "Arujá", price: "65,00" },
  { city: "Barueri", price: "45,00" },
  { city: "Bom Sucesso", price: "55,00" },
  { city: "Campinas", price: "135,00" },
  { city: "Cajamar", price: "75,00" },
  { city: "Cotia", price: "45,00" },
  { city: "Diadema", price: "40,00" },
  { city: "Guarujá", price: "130,00" },
  { city: "Guarulhos", price: "45,00" },
  { city: "Jandira", price: "65,00" },
  { city: "Litoral", price: "130,00" },
  { city: "Mauá", price: "65,00" },
  { city: "Mogi das Cruzes", price: "100,00" },
  { city: "Mogi Guaçu", price: "190,00" },
  { city: "Mogi Mirim", price: "165,00" },
  { city: "Osasco", price: "40,00" },
  { city: "Paulínia", price: "145,00" },
  { city: "Poá", price: "75,00" },
  { city: "Santo André", price: "45,00" },
  { city: "Santos", price: "110,00" },
  { city: "São B. dos Campos", price: "45,00" },
  { city: "São Caetano do Sul", price: "40,00" },
  { city: "São Miguel", price: "50,00" },
];

export default function Pricing() {
  return (
    <section id="precos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center space-x-2 text-brand-600 font-semibold tracking-wide text-sm uppercase mb-4">
            <span className="w-8 h-px bg-brand-600"></span>
            <span>Tabela de Preços</span>
            <span className="w-8 h-px bg-brand-600"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Valores para Fora da Capital
          </h2>
          <p className="text-slate-600 text-lg">
            Transparência e preços competitivos para a Grande São Paulo e litoral.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
          {locations.map((loc, idx) => (
            <div key={idx} className="flex justify-between items-center p-3 border-b border-slate-100 hover:bg-slate-50 rounded-md transition-colors">
              <span className="text-slate-700 font-medium">{loc.city}</span>
              <span className="text-brand-700 font-bold">R$ {loc.price}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-slate-500">
          <p>* Valores sujeitos a alteração. Consulte-nos para outras localidades não listadas.</p>
        </div>

      </div>
    </section>
  );
}
