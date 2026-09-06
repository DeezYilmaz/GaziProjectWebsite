import { useState } from "react";
import { ArrowLeft } from "lucide-react";

interface QuizScreenProps {
  onBack: () => void;
}

const questions = [
  { q: "Manyetit'in kimyasal formülü nedir?", opts: ["Fe₂O₃", "Fe₃O₄", "CaCO₃", "SiO₂", "CaSO₄·2H₂O"], correct: 1 },
  { q: "Manyetit toplu iğneleri nasıl çeker?", opts: ["Hiç çekmez", "Çok zayıf, 3-5 tanesini çeker", "Çok kuvvetli çeker", "Sadece ısıtıldığında çeker", "Sadece suda çeker"], correct: 2 },
  { q: "Hematit (Fe₂O₃) toplu iğneleri nasıl çeker?", opts: ["Çok kuvvetli çeker", "Hiç çekmez", "Çok zayıf, 3-5 tanesini çeker", "Manyetit kadar güçlü çeker", "Sadece ısıtıldığında çeker"], correct: 2 },
  { q: "Aşağıdaki minerallerden hangisi toplu iğneleri hiç çekmez?", opts: ["Manyetit", "Hematit", "Kuvars", "Hem manyetit hem hematit", "Hiçbiri, hepsi çeker"], correct: 2 },
  { q: "Kireç taşının ana bileşeni hangisidir?", opts: ["Kalsiyum sülfat (CaSO₄)", "Kalsiyum karbonat (CaCO₃)", "Silisyum dioksit (SiO₂)", "Demir oksit (Fe₂O₃)", "Sodyum klorür (NaCl)"], correct: 1 },
  { q: "Manyetit ve hematit gibi doğal mıknatısların çekim özelliği neyden kaynaklanır?", opts: ["Renklerinden", "Sertliklerinden", "Mikroevrenlerindeki atomik/moleküler tasarımlarından", "Bulundukları bölgenin ikliminden", "Ağırlıklarından"], correct: 2 },
  { q: "Alçı taşının kimyasal formülü nedir?", opts: ["CaCO₃", "SiO₂", "Fe₃O₄", "CaSO₄·2H₂O", "Fe₂O₃"], correct: 3 },
  { q: "Doğada bulunan pek çok katı madde arasında manyetit'i özel kılan nedir?", opts: ["En sert mineral olması", "Demir, nikel, kobalt gibi elementleri ve alaşımlarını çekebilmesi", "En pahalı mineral olması", "Sadece Avustralya'da bulunması", "Renginin parlak olması"], correct: 1 },
];

export default function Exp2QuizScreen({ onBack }: QuizScreenProps) {
  const [answered, setAnswered] = useState<Record<number, number>>({});

  const total = questions.length;
  const doneCount = Object.keys(answered).length;
  const score = Object.entries(answered).filter(([qi, oi]) => questions[Number(qi)].correct === oi).length;

  function answer(qi: number, oi: number) {
    if (answered[qi] !== undefined) return;
    setAnswered((prev) => ({ ...prev, [qi]: oi }));
  }

  return (
    <div
      className="min-h-screen bg-slate-950 text-slate-100 px-6 py-10"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .display { font-family: 'Space Grotesk', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <div className="max-w-2xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors">
          <ArrowLeft size={16} /> Geri
        </button>

        <div className="mono text-xs tracking-widest uppercase text-cyan-300 mb-3">Deney 2 · Ne Kadar Öğrendim</div>
        <h1 className="display text-3xl font-semibold mb-2">Sihirli Taşlar testi</h1>
        <p className="text-slate-400 text-sm mb-8">{total} soru. Her cevaptan hemen sonra doğru cevabı görürsün.</p>

        <div className="flex items-center justify-between mono text-xs text-slate-500 mb-6">
          <span>{doneCount} / {total} yanıtlandı</span>
          <div className="flex-1 h-px bg-slate-800 mx-4 relative overflow-hidden rounded">
            <div className="absolute inset-y-0 left-0 bg-cyan-300" style={{ width: `${(doneCount / total) * 100}%` }} />
          </div>
          <span>{score} doğru</span>
        </div>

        <div className="space-y-4">
          {questions.map((item, qi) => {
            const chosen = answered[qi];
            return (
              <div key={qi} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <p className="text-sm font-medium mb-4">{qi + 1}. {item.q}</p>
                <div className="flex flex-col gap-2.5">
                  {item.opts.map((o, oi) => {
                    let cls = "border-slate-700 hover:border-cyan-300";
                    if (chosen !== undefined) {
                      if (oi === item.correct) cls = "border-emerald-400 bg-emerald-400/10 text-emerald-400";
                      else if (oi === chosen) cls = "border-red-400 bg-red-400/10 text-red-400";
                      else cls = "border-slate-800 opacity-50";
                    }
                    return (
                      <button
                        key={oi}
                        disabled={chosen !== undefined}
                        onClick={() => answer(qi, oi)}
                        className={`text-left px-4 py-3 rounded-lg border text-sm transition-colors ${cls}`}
                      >
                        {o}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {doneCount === total && (
          <div className="mt-6 text-center bg-slate-900 border border-emerald-400/30 rounded-2xl p-10">
            <div className="display text-5xl font-semibold text-emerald-400">{score} / {total}</div>
            <div className="text-slate-400 text-sm mt-2">doğru cevap</div>
          </div>
        )}
      </div>
    </div>
  );
}
