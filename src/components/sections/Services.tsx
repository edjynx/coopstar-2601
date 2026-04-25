"use client";

import { motion } from "framer-motion";
import { Package, Truck, Compass } from "lucide-react";

const services = [
  {
    title: "Serviços Moto Frete",
    desc: "Entregas rápidas de documentos e pequenos volumes de um ponto a outro da cidade, incluindo serviços bancários, cartórios e despachos em aeroportos.",
    icon: Package,
  },
  {
    title: "Delivery Empresarial",
    desc: "Se sua empresa tem um grande volume de documentos ou encomendas leves, nós implantamos um serviço de delivery com o melhor custo-benefício (Farmácias, Restaurantes, etc).",
    icon: Truck,
  },
  {
    title: "Fora da Capital",
    desc: "Confira nossa tabela de preços otimizada para envios rápidos para toda a Grande São Paulo e Região Metropolitana.",
    icon: Compass,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center space-x-2 text-brand-600 font-semibold tracking-wide text-sm uppercase mb-4">
            <span className="w-8 h-px bg-brand-600"></span>
            <span>Nossos Serviços</span>
            <span className="w-8 h-px bg-brand-600"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Soluções completas para sua rota
          </h2>
          <p className="text-slate-600 text-lg">
            Da pequena encomenda emergencial ao fluxo diário do seu negócio, temos a modalidade certa de moto frete.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-brand-200 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
                <svc.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{svc.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
