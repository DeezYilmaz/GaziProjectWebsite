import { useState } from "react";
import { ArrowLeft } from "lucide-react";

interface QuizScreenProps {
  onBack: () => void;
}

const questions = [
  { q: "Bir mıknatısın etrafındaki görünmeyen etki alanına ne ad verilir?", opts: ["Elektrik alanı", "Isı alanı", "Manyetik alan", "Işık alanı", "Ses alanı"], correct: 2 },
  { q: "İçinden akım geçen düz bir telin etrafındaki manyetik alanın yönü aşağıdakilerden hangisine bağlıdır?", opts: ["Telin uzunluğuna", "Akımın yönüne", "Telin kalınlığına", "Ortamın sıcaklığına", "Telin cinsine"], correct: 1 },
  { q: "Aynı telden geçen akım iki katına çıkarılırsa manyetik alanın büyüklüğü nasıl değişir?", opts: ["Azalır", "Değişmez", "Artar", "Yok olur", "Önce azalır sonra artar"], correct: 2 },
  { q: "i = 2 A, d = 0.2 m, K = 10⁻⁷ N/A² iken düz telden B noktasına olan manyetik alanın büyüklüğü kaç Tesla'dır? (B = K·2i/d)", opts: ["2×10⁻⁶ T", "2×10⁻⁷ T", "4×10⁻⁷ T", "2×10⁻⁵ T", "4×10⁻⁶ T"], correct: 1 },
  { q: "Sarım sayısı 30 olan bir bobinden 1 A akım geçmektedir. Bobinin uzunluğu 20 cm ise merkezdeki manyetik alan şiddeti kaç Tesla'dır? (π=3, K=10⁻⁷ N/A²)", opts: ["3×10⁻⁵", "12×10⁻⁵", "20×10⁻⁵", "18×10⁻⁵", "36×10⁻⁵"], correct: 3 },
  { q: "Sağ el kuralına göre, dört parmak akımın yönünü gösterecek şekilde tel kavrandığında baş parmak neyi gösterir?", opts: ["Akımın şiddetini", "Telin direncini", "Manyetik alanın yönünü", "Voltajı", "Telin direncini"], correct: 2 },
  { q: "Daire şeklindeki bir telin düzlemi masaya paralel ve akım saat yönündeyse, merkezdeki manyetik alanın yönü nasıldır?", opts: ["Yukarı", "Aşağı", "Sola", "Sağa", "Karşıya"], correct: 1 },
];

export default function Exp1QuizScreen({ onBack }: QuizScreenProps) {
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

        <div className="mono text-xs tracking-widest uppercase text-cyan-300 mb-3">Deney 1 · Ne Kadar Öğrendim</div>
        <h1 className="display text-3xl font-semibold mb-2">Amper Yasası testi</h1>
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
