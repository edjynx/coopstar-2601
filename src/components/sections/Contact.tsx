"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100">
          
          {/* Contact Info */}
          <div className="p-8 md:p-12 bg-brand-900 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-800 rounded-full blur-[80px] -mr-20 -mt-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">Fale Conosco</h2>
              <p className="text-brand-200 mb-10">
                Estamos prontos para atender sua necessidade. Entre em contato ou solicite um orçamento direto pelo formulário.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-100">Telefones</h4>
                    <p className="text-lg font-medium">(11) 5052-3563</p>
                    <p className="text-lg font-medium">(11) 5051-4442</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-100">E-mail</h4>
                    <p className="text-brand-50">coopstar_express@hotmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-100">Localização</h4>
                    <p className="text-brand-50 leading-relaxed">
                      Av. Jurucê, 898 - Moema<br />
                      São Paulo - SP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Envie uma mensagem</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                <input 
                  type="text" 
                  id="nome"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all outline-none"
                  placeholder="Seu nome"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all outline-none"
                    placeholder="voce@exemplo.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-slate-700 mb-1">Telefone</label>
                  <input 
                    type="text" 
                    id="telefone"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all outline-none"
                    placeholder="(11) 90000-0000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                <textarea 
                  id="mensagem"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none outline-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full h-12 text-base mt-2">
                Enviar Mensagem
              </Button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
