export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600/20 rounded flex items-center justify-center text-brand-400 font-bold text-lg">
            C
          </div>
          <span className="font-bold text-lg tracking-tight text-white">
            Coopstar<span className="text-brand-400">Express</span>
          </span>
        </div>

        <div className="text-slate-400 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Coopstar Express. Todos os direitos reservados.
        </div>

        <div className="flex gap-4">
          <a href="#" className="text-slate-400 hover:text-white transition text-sm">Privacidade</a>
          <a href="#" className="text-slate-400 hover:text-white transition text-sm">Termos de Uso</a>
        </div>

      </div>
    </footer>
  );
}
