import { useState, useEffect } from "react";
import { Zap, Eye, Users, Award, Star, ChevronRight, Wifi, Battery } from "lucide-react";

interface ButtonProps {
  onTestClicked: () => void; 
}

const questSiteURL = "https://www.meta.com/en-gb/experiences/?srsltid=AfmBOoohQCaStk-g2iq90RKoQV5fkTH53M6TmyAnvaQZBZhSKaapQqWv"
const handleRedirectToLink = () =>{
  console.log("Redirecting to quest store")
  window.open(questSiteURL, '_blank', 'noopener,noreferrer')
}

function QuestGameAd({onTestClicked}: ButtonProps) {
  const [ring, setRing] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRing((r) => (r + 1) % 100), 60);
    return () => clearInterval(id);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Gerçek zamanlı fizik",
      desc: "Akımı, mesafeyi, sarım sayısını değiştir — manyetik alanın canlı tepkisini gör.",
    },
    {
      icon: Eye,
      title: "Tam kapsayıcı laboratuvar",
      desc: "Gerçek dünyada bulunması güç mineralleri ve devreleri güvenle elinde tut.",
    },
    {
      icon: Users,
      title: "ZOZO asistanınla birlikte",
      desc: "Deney boyunca sana rehberlik eden, soru soran, yönlendiren bir yapay zeka karakteri.",
    },
    {
      icon: Award,
      title: "Müfredata uygun içerik",
      desc: "Amper Yasası, Ohm Yasası ve daha fazlası — sınıfta veya evde kullanıma hazır.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-slate-950 text-slate-100"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .display { font-family: 'Space Grotesk', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      {/* Nav */}
      <nav className="border-b border-slate-800 sticky top-0 z-30 bg-slate-950/85 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 display font-semibold text-lg">
            <svg width="24" height="24" viewBox="0 0 26 26">
              <circle cx="13" cy="13" r="2" fill="#5EEAD4" />
              <circle cx="13" cy="13" r="7" fill="none" stroke="#5EEAD4" strokeWidth="1.2" opacity="0.7" />
              <circle cx="13" cy="13" r="11.5" fill="none" stroke="#5EEAD4" strokeWidth="1" opacity="0.35" />
            </svg>
            Alan
          </div>
          <button onClick ={() =>handleRedirectToLink()} className="bg-amber-400 text-slate-950 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-amber-300 transition-colors">
            Quest Store'da Al
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mono text-xs tracking-widest uppercase text-cyan-300 flex items-center gap-3 mb-5">
            <span className="w-5 h-px bg-cyan-300" />
            Meta Quest 3 · VR STEM Laboratuvarı
          </div>
          <h1 className="display text-5xl md:text-6xl font-semibold leading-tight tracking-tight mb-6 ">
            <span className="text-cyan-300">Fizik artık</span>
            <br/>
            <span className="text-cyan-300">görünür.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-md mb-8">
            Manyetik alanları elinle şekillendir, mineralleri dünya haritasından topla,
            gerçek laboratuvarda göremeyeceğin şeyleri gör. ZOZO sana her adımda eşlik ediyor.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button className="bg-amber-400 text-slate-950 font-semibold px-7 py-3.5 rounded-lg flex items-center gap-2 hover:bg-amber-300 transition-colors" onClick ={() =>handleRedirectToLink()}>
              Şimdi İndir — ₺149
              <ChevronRight size={18} />
            </button>
            <button onClick={onTestClicked} className="border border-slate-700 px-7 py-3.5 rounded-lg flex items-center gap-2 hover:border-cyan-300 transition-colors text-sm font-medium">
              Soruları Gör
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="mono text-xs">4.9 / 5 — 1.200+ değerlendirme</span>
          </div>
        </div>

        {/* Device mockup */}
        <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at 30% 20%, rgba(94,234,212,0.25), transparent 60%)",
            }}
          />
          <div className="relative flex items-center justify-between mono text-xs text-slate-500 mb-6">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <Wifi size={12} /> Bağlı
            </span>
            <span className="flex items-center gap-1.5">
              <Battery size={12} /> 82%
            </span>
          </div>
          <svg viewBox="0 0 320 240" className="relative w-full">
            <line x1="160" y1="20" x2="160" y2="220" stroke="#F5A524" strokeWidth="3" />
            <polygon points="154,34 166,34 160,18" fill="#F5A524" />
            {[1, 2, 3, 4, 5].map((k) => {
              const r = 10 + k * 18 + Math.sin(ring / 15 + k) * 3;
              return (
                <ellipse
                  key={k}
                  cx="160"
                  cy="120"
                  ry={r*0.5}
                  rx={r*1.2} 
                  fill="none"
                  stroke="#5EEAD4"
                  strokeWidth="1.4"
                  opacity={0.7 - k * 0.11}
                />
              );
            })}
            <circle cx="230" cy="120" r="2.5" fill="#5EEAD4" />
          </svg>
          <div className="relative mt-4 flex items-center justify-between">
            <span className="mono text-xs text-slate-500">B = K · 2i / d</span>
            <span className="mono text-xs text-cyan-300">i = 4A</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="max-w-lg mb-12">
          <div className="mono text-xs tracking-widest uppercase text-cyan-300 flex items-center gap-3 mb-4">
            <span className="w-5 h-px bg-cyan-300" />
            Neden Alan
          </div>
          <h2 className="display text-3xl font-semibold tracking-tight">
            Bir kitapta okumak başka, elinle deneyimlemek başka.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-cyan-300" />
                </div>
                <h3 className="font-semibold text-base mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="display text-2xl font-semibold mb-2">
              Quest 3'ünü tak, laboratuvara adım at.
            </h3>
            <p className="text-slate-400 text-sm">İlk deneyin ücretsiz — Amper Yasası paketiyle başla.</p>
          </div>
          <button onClick ={() =>handleRedirectToLink()} className="bg-amber-400 text-slate-950 font-semibold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-amber-300 transition-colors whitespace-nowrap">
            🥽&nbsp; Quest Store'da Görüntüle
          </button>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-600 text-xs">
        Alan — Meta Quest 3 için VR/MR STEM laboratuvarı.
      </footer>
    </div>
  );
}

export default QuestGameAd