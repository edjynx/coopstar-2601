"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand-400 opacity-20 blur-[100px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-6 border border-brand-100">
            Moto Frete & Delivery em São Paulo
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
            Sua entrega no <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400">tempo certo</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            Especialistas em entregas rápidas de documentos e volumes na Capital e Grande São Paulo. Agilidade, segurança e confiança há mais de 12 anos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto h-14 text-base px-8" asChild>
              <a href="#contato">
                Chamar Agora <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 text-base px-8" asChild>
              <a href="#servicos">Conhecer Serviços</a>
            </Button>
          </div>
        </motion.div>

        {/* Feature grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20"
        >
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center mb-4 text-brand-600">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg text-slate-900 mb-2">Plantão 24 Horas</h3>
            <p className="text-slate-600 text-sm">Disponíveis de Segunda a Segunda, mediante agendamento.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center mb-4 text-brand-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg text-slate-900 mb-2">12 Anos de Mercado</h3>
            <p className="text-slate-600 text-sm">Equipe especializada para garantir o sucesso de sua empresa.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center mb-4 text-brand-600">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg text-slate-900 mb-2">Ampla Cobertura</h3>
            <p className="text-slate-600 text-sm">Atendimento em toda São Paulo e Grande São Paulo.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
