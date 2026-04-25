import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Como posso agendar uma coleta?",
    answer: "Você pode agendar pelo telefone (11) 5052-3563, enviar um e-mail ou preencher nosso formulário de contato. Nossa equipe retornará rapidamente para confirmar os detalhes.",
  },
  {
    question: "Vocês atendem fora de São Paulo?",
    answer: "Sim, atendemos toda a Grande São Paulo, Litoral e algumas cidades do interior como Campinas. Verifique nossa tabela de preços para consultar as localidades exatas.",
  },
  {
    question: "O serviço conta com seguro ou garantia de entrega?",
    answer: "Sim, a Coopstar Express atua com responsabilidade e equipe treinada para assegurar que seus documentos e volumes cheguem ao destino intactos e no menor tempo possível.",
  },
  {
    question: "Atendem faturamento para empresas (CNPJ)?",
    answer: "Trabalhamos com opções de faturamento mensal e contratos corporativos para agilizar o fluxo de sua empresa, além de pagamentos avulsos.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex items-center justify-center gap-2 mb-12">
          <HelpCircle className="w-8 h-8 text-brand-600" />
          <h2 className="text-3xl font-bold text-slate-900">Perguntas Frequentes</h2>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
