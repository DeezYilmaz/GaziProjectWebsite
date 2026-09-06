import { useState } from "react";
import { Lock, ArrowRight, ArrowLeft } from "lucide-react";

interface AuthScreenProps {
  correctCode: string;
  onAuthenticated: () => void;
  onBack: () => void;
}

export default function AuthScreen({ correctCode, onAuthenticated, onBack }: AuthScreenProps) {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (code.trim().toUpperCase() === correctCode.toUpperCase()) {
      setError(false);
      onAuthenticated();
    } else {
      setError(true);
    }
  }

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

      <div className="w-full max-w-sm">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Geri
        </button>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center mb-6">
            <Lock size={18} className="text-cyan-300" />
          </div>

          <div className="mono text-xs tracking-widest uppercase text-cyan-300 mb-3">
            Erişim Kodu
          </div>
          <h1 className="display text-2xl font-semibold mb-2">Deneye giriş yap</h1>
          <p className="text-slate-400 text-sm mb-7 leading-relaxed">
            Testleri çözebilmek için paketinle birlikte verilen erişim kodunu gir.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Örn: AMPER2024"
              autoFocus
              className={`w-full bg-slate-950 border rounded-lg px-4 py-3.5 mono text-sm tracking-wider text-slate-100 placeholder:text-slate-600 outline-none transition-colors mb-3 ${
                error ? "border-red-400" : "border-slate-700 focus:border-cyan-300"
              }`}
            />
            {error && (
              <p className="text-red-400 text-xs mb-4">
                Kod hatalı. Lütfen tekrar dene veya satın alma sonrası gelen e-postayı kontrol et.
              </p>
            )}
            <button
              type="submit"
              disabled={!code.trim()}
              className="w-full bg-amber-400 disabled:bg-slate-700 disabled:text-slate-500 text-slate-950 font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 hover:enabled:bg-amber-300 transition-colors"
            >
              Devam Et <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
