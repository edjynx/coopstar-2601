import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
              {/* Using a placeholder gradient since we don't have original high-res images, 
                  but we'll simulate an office/moto environment. Next.js image can be used. */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-900 to-brand-600 opacity-90 flex items-center justify-center">
                 <span className="text-white/20 font-bold text-6xl rotate-[-45deg] tracking-wider uppercase">Coopstar</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center space-x-2 text-brand-600 font-semibold tracking-wide text-sm uppercase">
              <span className="w-8 h-px bg-brand-600"></span>
              <span>Quem Somos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Transformando a logística da sua empresa com velocidade.
            </h2>
            <div className="space-y-4 text-slate-600 text-lg">
              <p>
                A <strong>Coopstar Express</strong> é uma empresa especializada no serviço de entregas e coletas e já vem atuando há mais de nove anos no mercado.
              </p>
              <p>
                Oferecemos ótimos serviços e desempenhamos uma função importante para nossos clientes: agilizar os mais diversos trâmites operacionais, tornando-nos um diferencial de destaque neste segmento.
              </p>
            </div>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Mais de 9 anos de experiência",
                "Atendimento para Grande SP",
                "Equipe treinada e especializada",
                "Atendimento corporativo ágil"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-600 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
