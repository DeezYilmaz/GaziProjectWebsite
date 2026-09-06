import { ArrowLeft, ChevronRight } from "lucide-react";

interface QuizMenuScreenProps {
  onSelectExp1: () => void;
  onSelectExp2: () => void;
  onBack: () => void;
}

export default function QuizMenuScreen({ onSelectExp1, onSelectExp2, onBack }: QuizMenuScreenProps) {
  return (
    <div
      className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .display { font-family: 'Space Grotesk', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <div className="w-full max-w-md">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors">
          <ArrowLeft size={16} /> Geri
        </button>

        <div className="mono text-xs tracking-widest uppercase text-cyan-300 mb-3">Erişim Onaylandı</div>
        <h1 className="display text-2xl font-semibold mb-8">Hangi deneyin testini çözeceksin?</h1>

        <div className="space-y-3">
          <button
            onClick={onSelectExp2}
            className="w-full text-left bg-slate-900 border border-slate-800 hover:border-cyan-300 rounded-2xl p-6 flex items-center justify-between transition-colors group"
          >
            <div>
              <div className="mono text-xs text-amber-400 uppercase tracking-wide mb-1">Deney 1</div>
              <div className="font-semibold">Sihirli Taşlar</div>
            </div>
            <ChevronRight size={18} className="text-slate-600 group-hover:text-cyan-300 transition-colors" />
          </button>

          <button
            onClick={onSelectExp1}
            className="w-full text-left bg-slate-900 border border-slate-800 hover:border-cyan-300 rounded-2xl p-6 flex items-center justify-between transition-colors group"
          >
            <div>
              <div className="mono text-xs text-amber-400 uppercase tracking-wide mb-1">Deney 2</div>
              <div className="font-semibold">Amper Yasası</div>
            </div>
            <ChevronRight size={18} className="text-slate-600 group-hover:text-cyan-300 transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
}
