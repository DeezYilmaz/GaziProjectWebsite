import { useState } from "react";
import TechSupport from "./TechSupport";

type Lang = "en" | "tr";
type expScreen = "main"| "exp1" | "exp2" | "exp3" | "exp4";
const sets: { titleEn: string; titleTr: string; icon:string, experiments: { en: string; tr: string, screen:expScreen }[] }[] = [
  {
    titleEn: "Ampere's Law",
    titleTr: "Ampere Yasası",
    icon: "⚡",
    experiments: [
      { en: "Motivation Experiment", tr: "Motivasyon Deneyi" , screen: "exp1" },
      { en: "Exploration Experiment-1", tr: "Keşif Deneyi-1" , screen: "exp2" },
      { en: "Exploration Experiment-2", tr: "Keşif Deneyi-2" , screen: "exp3" },
      { en: "Exploration Experiment-3", tr: "Keşif Deneyi-3", screen: "exp4" },
    ],
  },
  {
    titleEn: "Magnetic Force",
    titleTr: "Manyetik Kuvvet",
    icon: "🧲",
    experiments: [
      { en: "Motivation Experiment", tr: "Motivasyon Deneyi" , screen: "exp1"},
      { en: "Exploration Experiment-1", tr: "Keşif Deneyi-1" , screen: "exp2"},
      { en: "Exploration Experiment-2", tr: "Keşif Deneyi-2" , screen: "exp3"},
    ],
  },
  {
    titleEn: "Induction Current and Lenz's Law",
    titleTr: "İndüksiyon Akımı ve Lenz Yasası",
    icon: "🔄",
    experiments: [
      { en: "Exploration Experiment-1", tr: "Keşif Deneyi-1" , screen: "exp1"},
      { en: "Exploration Experiment-2", tr: "Keşif Deneyi-2" , screen: "exp2"},
      { en: "Exploration Experiment-3", tr: "Keşif Deneyi-3" , screen: "exp3"},
    ],
  },
];
function MainPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [screen, setScreen] = useState<expScreen>("main");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = (en: string, tr: string) => (lang === "en" ? en : tr);

  return (
    <div className="vr-stem-lab">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;800;900&family=Rajdhani:wght@500;600;700&display=swap');

        .vr-stem-lab {
          --primary-glow: #00f2fe;
          --secondary-glow: #4facfe;
          --bg-color: #080b12;
          --card-bg: rgba(18, 25, 41, 0.7);
          --border-color: rgba(0, 242, 254, 0.2);
          --text-main: #ffffff;
          --text-sub: #94a3b8;

          font-family: 'Rajdhani', sans-serif;
          background-color: var(--bg-color);
          color: var(--text-main);
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background-image:
            radial-gradient(circle at 10% 20%, rgba(0, 242, 254, 0.05) 0%, transparent 20%),
            radial-gradient(circle at 90% 80%, rgba(79, 172, 254, 0.05) 0%, transparent 20%);
        }
        .vr-stem-lab * { box-sizing: border-box; }

        .vsl-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 7%;
          background: rgba(8, 11, 18, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .vsl-logo { display: flex; align-items: center; text-decoration: none; cursor: pointer; }
        .vsl-logo-text {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.4rem;
          font-weight: 900;
          letter-spacing: 2px;
          color: #fff;
          text-transform: uppercase;
        }
        .vsl-logo-text .vr {
          color: var(--primary-glow);
          text-shadow: 0 0 12px rgba(0, 242, 254, 0.6);
          border: 2px solid var(--primary-glow);
          padding: 2px 8px;
          border-radius: 6px;
          margin-right: 6px;
        }
        .vsl-logo-text .stem { color: #ffffff; }
        .vsl-logo-text .lab {
          color: var(--secondary-glow);
          font-weight: 600;
          font-size: 1.1rem;
          margin-left: 4px;
        }
        .vsl-nav ul { display: flex; list-style: none; align-items: center; gap: 2rem; margin: 0; padding: 0; }
        .vsl-nav a {
          color: var(--text-main);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 1px;
          transition: color 0.3s ease;
          cursor: pointer;
        }
        .vsl-nav a:hover { color: var(--primary-glow); }
        .vsl-lang-switch {
          background: transparent;
          border: 2px solid var(--primary-glow);
          color: var(--primary-glow);
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.2);
          transition: all 0.3s ease;
          font-family: 'Rajdhani', sans-serif;
        }
        .vsl-lang-switch:hover { background: var(--primary-glow); color: var(--bg-color); }

        .vsl-main { flex: 1; margin: 0 auto; width: 80%; padding: 2rem 1rem; }

        .vsl-hero { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; margin-bottom: 2.5rem; }
        .vsl-hero-text { flex: 1.2; text-align: left; }
        .vsl-hero-text h1 {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
          background: linear-gradient(135deg, #ffffff 0%, var(--primary-glow) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-transform: uppercase;
        }
        .vsl-hero-text p { font-size: 1rem; color: var(--text-sub); margin: 0.5rem 0 0 0; }

        .vsl-hero-image-wrapper {
          flex: 0.8;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          min-height: 380px;
        }
        .vsl-hero-image-wrapper::before {
          content: '';
          position: absolute;
          width: 280px;
          height: 280px;
          background: radial-gradient(circle, rgba(0, 242, 254, 0.35) 0%, rgba(0, 0, 0, 0) 70%);
          border-radius: 50%;
          z-index: 0;
          animation: vslPulseGlow 4s infinite alternate;
        }
        @keyframes vslPulseGlow {
          0% { transform: scale(0.9); opacity: 0.5; }
          100% { transform: scale(1.15); opacity: 0.9; }
        }
        .vsl-hero-image {
          max-width: 280px;
          max-height: 400px;
          width: 100%;
          height: auto;
          position: relative;
          z-index: 1;
          object-fit: contain;
          filter: drop-shadow(0 0 15px rgba(0, 242, 254, 0.4));
        }

        .vsl-section-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.4rem;
          text-align: center;
          margin-bottom: 1.5rem;
          color: #fff;
          position: relative;
        }
        .vsl-section-title::after {
          content: '';
          display: block;
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, var(--primary-glow), var(--secondary-glow));
          margin: 0.5rem auto 0;
          border-radius: 2px;
        }

        .vsl-sets-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(330px, 1fr)); gap: 1.5rem; }
        .vsl-set-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 1.5rem;
          backdrop-filter: blur(5px);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .vsl-set-card:hover { transform: translateY(-5px); border-color: var(--primary-glow); }
        .vsl-set-card h3 {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.1rem;
          color: var(--primary-glow);
          margin-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 0.8rem;
        }
        .vsl-experiments-list { list-style: none; margin: 0; padding: 0; }
        .vsl-experiments-list li {
          font-size: 0.95rem;
          padding: 0.4rem 0;
          color: #e2e8f0;
          display: flex;
          align-items: center;
        }
          
        .vsl-experiments-list-active { list-style: none; margin: 0; padding: 0; }
        .vsl-experiments-list-active li {
          font-size: 0.95rem;
          padding: 0.4rem 0;
          color: #e2e8f0;
          display: flex;
          align-items: center;
          cursor: pointer;
          text-decoration: underline;
          text-decoration-color: rgba(0, 242, 254, 0.4);
        }
          
        .vsl-experiments-list-active li::before { content: "✦ "; color: var(--secondary-glow); margin-right: 8px; }
        .vsl-experiments-list-active li:hover {
            color: var(--primary-glow);
        }
        .vsl-experiments-list li::before { content: "✦ "; color: var(--secondary-glow); margin-right: 8px; }

        .vsl-footer {
          text-align: center;
          padding: 0.7rem;
          background: rgba(5, 8, 14, 0.95);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-family: 'Orbitron', sans-serif;
          color: var(--text-sub);
          letter-spacing: 0.5px;
          margin-top: auto;
          line-height: 1;
        }

                .accordion-container {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            max-width: 900px;
            margin: 0 auto;
            width: 100%;
        }

        .accordion-item {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .accordion-item.active {
            border-color: var(--primary-glow);
            box-shadow: 0 0 15px rgba(0, 242, 254, 0.25);
        }

        .accordion-header {
            width: 100%;
            padding: 0.6rem 1rem;
            background: rgba(255, 255, 255, 0.02);
            border: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            color: #fff;
            transition: background 0.3s;
        }

        .accordion-header:hover {
            background: rgba(0, 242, 254, 0.08);
        }
        .header-title {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            font-family: 'Orbitron', sans-serif;
            font-size: clamp(0.85rem, 1vw, 1rem);
            font-weight: 700;
        }

        .header-icon {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 1.5px solid var(--primary-glow);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary-glow);
            font-size: 0.9rem;
            box-shadow: 0 0 8px rgba(0, 242, 254, 0.3);
        }

        .arrow-icon {
            font-size: 0.8rem;
            color: var(--primary-glow);
            transition: transform 0.3s ease;
        }

        .accordion-item.active .arrow-icon {
            transform: rotate(180deg);
        }

        .accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease-out, padding 0.3s ease;
            background: rgba(10, 15, 26, 0.6);
            padding: 0 1.2rem;
        }

        .accordion-item.active .accordion-content {
            padding: 0.6rem 1rem;
            max-height: 350px;
            border-top: 1px solid rgba(0, 242, 254, 0.15);
        }

        .sub-experiments-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 0.6rem;
        }

        .sub-exp-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(0, 242, 254, 0.2);
            border-radius: 8px;
            padding: 0.5rem 0.6rem;
            cursor: pointer;
            transition: all 0.25s ease;
            display: flex;
            align-items: center;
            gap: 0.6rem;
        }

        .sub-exp-card:hover {
            background: rgba(0, 242, 254, 0.15);
            border-color: var(--primary-glow);
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(0, 242, 254, 0.2);
        }

        .exp-num {
            font-family: 'Orbitron', sans-serif;
            font-size: 0.85rem;
            font-weight: 800;
            color: var(--primary-glow);
        }

        .exp-name {
            font-size: 0.85rem;
            font-weight: 600;
            color: #e2e8f0;
            line-height: 1.2;
        }
        .footer-project {
            font-family: 'Orbitron', sans-serif;
            font-size: 0.7rem;
            font-weight: 700;
            color: var(--primary-glow);
            margin-bottom: 0.1rem;
            line-height: 1;
        }

        .footer-copyright {
            font-size: 0.65rem;
            opacity: 0.85;
            max-width: 900px;
            margin: 0 auto;
            line-height: 1.1;
        }

        @media (max-width: 850px) {
          .vsl-hero { flex-direction: column-reverse; text-align: center; }
          .vsl-hero-text { text-align: center; }
          .vsl-header { flex-direction: column; gap: 1.2rem; }
        }
      `}</style>

      <header className="vsl-header">
        <a href="#" className="vsl-logo" onClick={() => setScreen("main")}>
          <div className="vsl-logo-text">
            <span className="vr">VR</span>
            <span className="stem">STEM</span>
            <span className="lab">LAB</span>
          </div>
        </a>
        <nav className="vsl-nav">
          <ul>
            <li><a href="#">{t("Home", "Ana Sayfa")}</a></li>
            <li onClick={ () => {console.log("opened") ,setIsModalOpen(true)}}><a href="#">{t("Support", "Destek")}</a></li>
            <li>
              <button className="vsl-lang-switch" onClick={() => setLang(lang === "en" ? "tr" : "en")}>
                {lang === "en" ? "TR" : "ENG"}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <TechSupport Lang={lang} isOpen={isModalOpen} onClose={()=>{console.log("closed") ,setIsModalOpen(false)}}></TechSupport>
      {(screen === "main") && startPage(lang, (page: expScreen) => setScreen(page) ) }
      {(screen === "exp1") && Exp1Page(lang) }
      {(screen === "exp2") && Exp2Page(lang) }
      {(screen === "exp3") && Exp3Page(lang) }
      {(screen === "exp4") && Exp4Page(lang) }

    <footer className="vsl-footer">
        <div className="footer-project">
          {
            t("Gazi University Project (SGA-2026-11007)",
            "Gazi Üniversitesi Projesi (SGA-2026-11007)")}
        </div>
        <div className="footer-copyright">
            {t(
               " © Gazi University. All Rights Reserved. All intellectual property rights belong to Gazi University. Use for academic and scientific research requires prior written permission.",
               "© Gazi Üniversitesi. Tüm Hakları Saklıdır. Tüm fikri mülkiyet hakları Gazi Üniversitesi'ne aittir. Akademik ve bilimsel araştırmalar için kullanımı önceden yazılı izin gerektirir."
              )
            }
        </div>
    </footer>
    </div>
  );
}
function toggleAccordion(headerBtn:any) {
            const currentItem = headerBtn.closest('.accordion-item');
            const isActive = currentItem.classList.contains('active');
            
            // Tüm accordion öğelerini kapat
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Eğer daha önceden aktif değilse tıklandığında aç
            if (!isActive) {
                currentItem.classList.add('active');
            }
}
function startPage(lang: Lang, onPageChanged: (page: expScreen) => void = () => {}) {
  const t = (en: string, tr: string) => (lang === "en" ? en : tr);
  return(
     <main className="vsl-main">
        <section className="vsl-hero">
          <div className="vsl-hero-text">
            <h1>Virtual Reality STEM Laboratory</h1>
            <p>{t("Are you ready for a science adventure?", "Bir bilim macerasına hazır mısınız?")}</p>
          </div>
          <div className="vsl-hero-image-wrapper">
            <img src="src/assets/vr-student.jpeg" alt="VR STEM LAB Student" className="vsl-hero-image" />
          </div>

        
        </section>

        <section>
          <h2 className="vsl-section-title">{t("VR STEM Activity Sets", "VR STEM Etkinlik Setleri")}</h2>

        <div className="accordion-container">
            {sets.map((set, i) => (
              <div key={i} className="accordion-item">
                  <button className="accordion-header" onClick={(e)=>toggleAccordion(e.target)} >
                      <div className="header-title">
                          <span className="header-icon">{set.icon}</span>
                          <span>{t(set.titleEn,set.titleTr)}</span>
                      </div>
                      <span className="arrow-icon">▼</span>
                  </button>
                  <div className="accordion-content">
                      <div className="sub-experiments-grid">
                      {set.experiments.map((experiment,j) => (
                          <div key={j} className="sub-exp-card" onClick={i===0 ? ()=>onPageChanged(experiment.screen) : ()=>{}}>
                              <span className="exp-num">{i+1+"."+j}</span>
                              <span className="exp-name">{t(experiment.en,experiment.tr)}</span>
                          </div>
                      ))}
                      </div>
                  </div>
              </div>
            ))}

        </div>
        </section>
      </main>
  )
}
function getStyle(){
  return(
    <style>{`
        .vsl-exp-page-main {
          flex: 1;
          max-width: 1000px;
          margin: 0 auto;
          width: 100%;
          padding: 0.8rem 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow-y: auto;
        }

        .vsl-exp-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          padding: 1.2rem;
          backdrop-filter: blur(8px);
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .vsl-exp-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(1.1rem, 1.6vw, 1.5rem);
          color: var(--primary-glow);
          text-transform: uppercase;
          letter-spacing: 1px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.4rem;
        }

        .vsl-exp-text {
          font-size: clamp(0.9rem, 1.05vw, 1.05rem);
          line-height: 1.45;
          color: #e2e8f0;
          text-align: justify;
          margin: 0;
        }

        .vsl-sub-instruction {
          color: var(--secondary-glow);
          font-weight: 600;
          margin-top: 0.2rem;
        }

        .vsl-materials-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.3rem 1rem;
          background: rgba(0, 0, 0, 0.3);
          padding: 0.6rem 1rem;
          border-radius: 8px;
          border-left: 3px solid var(--primary-glow);
          margin: 0;
        }

        .vsl-materials-list li {
          font-size: clamp(0.85rem, 0.95vw, 0.95rem);
          color: #cbd5e1;
          display: flex;
          align-items: center;
        }

        .vsl-materials-list li::before {
          content: "✦ ";
          color: var(--primary-glow);
          margin-right: 6px;
        }

        .vsl-vr-notice {
            background: rgba(255, 230, 0, 0.08);
            border: 1px dashed var(--accent-yellow);
            border-radius: 10px;
            padding: 0.6rem 1rem;
            text-align: center;
        }

        .vsl-vr-notice p {
            font-family: 'Rajdhani', cursive, sans-serif;
            font-size: clamp(1.1rem, 1.4vw, 1.4rem);
            color: var(--accent-yellow);
            letter-spacing: 0.5px;
            text-shadow: 0 0 6px rgba(255, 230, 0, 0.2);
        }

        .vsl-support-btn-wrapper {
          text-align: center;
          margin-top: 0.8rem;
          margin-bottom: 0.5rem;
        }

        .vsl-tech-btn {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--bg-color);
          background: linear-gradient(135deg, var(--primary-glow), var(--secondary-glow));
          border: none;
          padding: 0.6rem 1.8rem;
          border-radius: 25px;
          cursor: pointer;
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.4);
          transition: all 0.3s ease;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .vsl-tech-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(0, 242, 254, 0.8);
        }

        .vsl-exp-section-header {
            font-family: 'Orbitron', sans-serif;
            font-size: clamp(0.95rem, 1.1vw, 1.1rem);
            color: var(--secondary-glow);
            margin-top: 0.3rem;
            margin-bottom: 0.2rem;
            display: flex;
            align-items: center;
            gap: 0.4rem;
        }
        .vsl-exp-section-header::before {
            content: "▶";
            font-size: 0.7rem;
            color: var(--primary-glow);
        }

        @media (max-width: 850px) {
          .vsl-materials-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
  )
}
function Exp1Page(lang: Lang){
  const t = (en: string, tr: string) => (lang === "en" ? en : tr);
  return(
    <div className="vsl-exp-page">
      {getStyle()}
      <main className="vsl-exp-page-main">
        <div className="vsl-exp-card">
          <h1 className="vsl-exp-title">
            {t("Ampere's Law - Motivation Experiment", "Ampere Yasası - Motivasyon Deneyi")}
          </h1>
          
          <p className="vsl-exp-text">
            {t("Many elements and compounds exist in a solid state in nature. The differences between these substances arise from the distinct atomic designs within their micro-universes. However, among these naturally occurring substances, there is one with a uniquely designed micro-universe. Iron oxides known as magnetite (Fe₃O₄) possess \"magical\" micro-universes. Unlike the hundreds of other substances found in nature, they exhibit the ability to attract elements such as iron, nickel, and cobalt, as well as alloys made from these elements. In this experiment, you will observe this property of magnetite by comparing it with other solid compounds.", "Doğada bir çok element ve bileşik katı halde bulunur. Bu maddeler arasındaki farklar, mikro evrenlerindeki farklı atomik tasarımlardan kaynaklanır. Ancak, doğal olarak oluşan bu maddeler arasında benzersiz bir şekilde tasarlanmış mikro evrene sahip bir madde vardır. Manyetit (Fe₃O₄) olarak bilinen demir oksitler \"büyülü\" mikro evrenlere sahiptir. Doğada bulunan diğer yüzlerce maddenin aksine; demir, nikel, kobalt gibi elementleri ve bu elementlerden yapılan alaşımları çekme yeteneği sergilerler. Bu deneyde, manyetitin bu özelliğini diğer katı bileşiklerle karşılaştırarak gözlemleyeceksiniz.")}
          </p>

          <p className="vsl-exp-text vsl-sub-instruction">
            {t("In this experiment, bring the substances listed below close to some pins and observe the results. Discover which one possesses the magical property of attraction:", "Bu deneyde, aşağıda listelenen maddeleri bazı toplu iğnelere yaklaştırın ve sonuçları gözlemleyin. Hangisinin büyülü çekim gücüne sahip olduğunu keşfedin:")}
          </p>

          <ul className="vsl-materials-list">
            <li>{t("Quartz (SiO₂)", "Kuvars (SiO₂)")}</li>
            <li>{t("Magnetite (Fe₃O₄)", "Manyetit (Fe₃O₄)")}</li>
            <li>{t("Limestone: Sedimentary rock (CaCO₃)", "Kireçtaşı: Kalsiyum karbonat içeren tortul kayaç (CaCO₃)")}</li>
            <li>{t("Gypsum: Calcium sulfate (CaSO₄·2H₂O)", "Alçıtaşı: Kalsiyum sülfat (CaSO₄·2H₂O)")}</li>
            <li>{t("Granite rock", "Granit kayacı")}</li>
            <li>{t("Hematite (Fe₂O₃)", "Hematit (Fe₂O₃)")}</li>
          </ul>

          <div className="vsl-vr-notice">
            <p>
              {t("PUT ON YOUR VR HEADSET. YOU WILL FIND ALL THE VIRTUAL MATERIALS FOR THE EXPERIMENT AND ZOZO THE ASSISTANT ON THE VIRTUAL EXPERIMENT TABLE.", "VR GÖZLÜĞÜNÜZÜ TAKIN. DENEY İÇİN GEREKLİ TÜM SANAL MALZEMELERİ VE ASİSTAN ZOZO'YU SANAL DENEY MASASINDA BULACAKSINIZ.")}
            </p>
          </div>
        </div>

        <div className="vsl-support-btn-wrapper">
          <button className="vsl-tech-btn" onClick={() => console.log("Technical support clicked")}>
            {t("TECHNICAL SUPPORT", "TEKNİK DESTEK")}
          </button>
        </div>
      </main>
    </div>
  )
}

function Exp2Page(lang: Lang){
  const t = (en: string, tr: string) => (lang === "en" ? en : tr);
  return(
    <div className="vsl-exp-page">
      {getStyle()}
      <main className="vsl-exp-page-main">
        <div className="vsl-exp-card">
          <h1 className="vsl-exp-title">
            {t("Ampere's Law - Exploration Experiment-1", "Ampere Yasası - Keşif Deneyi-1")}
          </h1>

          <p className="vsl-exp-section-header">
            {t("Objective of the Experiment", "Deneyin Amacı")}
          </p>
          <p className="vsl-exp-text">
            {t("You will observe that a straight wire carrying a current generates a magnetic field around it, similar to naturally occurring magnets. You will determine the direction of the resulting magnetic field. You will discover which parameters influence the magnitude of this magnetic field.", "Üzerinden akım geçen düz bir telin, doğal mıknatıslara benzer şekilde etrafında bir manyetik alan oluşturduğunu gözlemleyeceksiniz. Oluşan manyetik alanın yönünü belirleyecek ve bu manyetik alanın büyüklüğünü hangi parametrelerin etkilediğini keşfedeceksiniz.")}
          </p>

          <p className="vsl-exp-section-header">
            {t("Procedure", "Deneyin Yapılışı")}
          </p>
          <p className="vsl-exp-text">
            {t("Connect the ends of the rectangular wire to the power supply and the ammeter using alligator clip leads. Set the power supply to 2V. Sprinkle iron filings onto the rectangular wire and observe how they arrange themselves in response to the generated magnetic field. Adjust the power supply to 4V, 8V, 10V, and 12V, and observe how the iron filings form patterns at each setting.", "Dikdörtgen telin uçlarını timsah klipsli kablolar kullanarak güç kaynağına ve ampermetreye bağlayın. Güç kaynağını 2V seviyesine ayarlayın. Dikdörtgen telin üzerine demir tozları serpin ve oluşan manyetik alana tepki olarak nasıl dizildiklerini gözlemleyin. Güç kaynağını sırasıyla 4V, 8V, 10V ve 12V'a ayarlayarak demir tozlarının her bir ayarda nasıl desenler oluşturduğunu gözlemleyin.")}
          </p>

          <div className="vsl-vr-notice">
            <p>
              {t("PUT ON YOUR VR HEADSET. YOU WILL FIND ALL THE VIRTUAL MATERIALS FOR THE EXPERIMENT AND ZOZO THE ASSISTANT ON THE VIRTUAL EXPERIMENT TABLE.", "VR GÖZLÜĞÜNÜZÜ TAKIN. DENEY İÇİN GEREKLİ TÜM SANAL MALZEMELERİ VE ASİSTAN ZOZO'YU SANAL DENEY MASASINDA BULACAKSINIZ.")}
            </p>
          </div>
        </div>

        <div className="vsl-support-btn-wrapper">
          <button className="vsl-tech-btn" onClick={() => console.log("Technical support clicked")}>
            {t("TECHNICAL SUPPORT", "TEKNİK DESTEK")}
          </button>
        </div>
      </main>
    </div>
  )
}

function Exp3Page(lang: Lang){
  const t = (en: string, tr: string) => (lang === "en" ? en : tr);
  return(
    <div className="vsl-exp-page">
      {getStyle()}
      <main className="vsl-exp-page-main">
        <div className="vsl-exp-card">
          <h1 className="vsl-exp-title">
            {t("Ampere's Law - Exploration Experiment-2", "Ampere Yasası - Keşif Deneyi-2")}
          </h1>

          <p className="vsl-exp-section-header">
            {t("Objective of the Experiment", "Deneyin Amacı")}
          </p>
          <p className="vsl-exp-text">
            {t("You will observe the magnetic field generated at the center of a circular wire carrying an electric current, similar to the magnetic fields produced by natural magnets. You will determine the direction of the resulting magnetic field and discover which parameters affect its magnitude.", "Elektrik akımı taşıyan halka şeklindeki bir telin merkezinde, doğal mıknatısların ürettiği manyetik alanlara benzer şekilde oluşan manyetik alanı gözlemleyeceksiniz. Oluşan manyetik alanın yönünü belirleyecek ve büyüklüğünü hangi parametrelerin etkilediğini keşfedeceksiniz.")}
          </p>

          <p className="vsl-exp-section-header">
            {t("Procedure", "Deneyin Yapılışı")}
          </p>
          <p className="vsl-exp-text">
            {t("Connect the ends of the circular wire to the power supply and the ammeter using alligator clip leads. Set the power supply to 2V. Sprinkle iron filings onto the wire and observe how they arrange themselves in response to the magnetic field generated at the center of the circle. Adjust the power supply to 4V, 8V, 10V, and 12V, and observe how the iron filings form patterns at each setting.", "Halka şeklindeki telin uçlarını timsah klipsli kablolar kullanarak güç kaynağına ve ampermetreye bağlayın. Güç kaynağını 2V seviyesine ayarlayın. Telin üzerine demir tozları serpin ve halkanın merkezinde oluşan manyetik alana tepki olarak nasıl dizildiklerini gözlemleyin. Güç kaynağını sırasıyla 4V, 8V, 10V ve 12V'a ayarlayarak demir tozlarının her ayarda nasıl desenler oluşturduğunu gözlemleyin.")}
          </p>

          <div className="vsl-vr-notice">
            <p>
              {t("PUT ON YOUR VR HEADSET. YOU WILL FIND ALL THE VIRTUAL MATERIALS FOR THE EXPERIMENT AND ZOZO THE ASSISTANT ON THE VIRTUAL EXPERIMENT TABLE.", "VR GÖZLÜĞÜNÜZÜ TAKIN. DENEY İÇİN GEREKLİ TÜM SANAL MALZEMELERİ VE ASİSTAN ZOZO'YU SANAL DENEY MASASINDA BULACAKSINIZ.")}
            </p>
          </div>
        </div>

        <div className="vsl-support-btn-wrapper">
          <button className="vsl-tech-btn" onClick={() => console.log("Technical support clicked")}>
            {t("TECHNICAL SUPPORT", "TEKNİK DESTEK")}
          </button>
        </div>
      </main>
    </div>
  )
}

function Exp4Page(lang: Lang){
  const t = (en: string, tr: string) => (lang === "en" ? en : tr);
  return(
    <div className="vsl-exp-page">
      {getStyle()}
      <main className="vsl-exp-page-main">
        <div className="vsl-exp-card">
          <h1 className="vsl-exp-title">
            {t("Ampere's Law - Exploration Experiment-3", "Ampere Yasası - Keşif Deneyi-3")}
          </h1>

          <p className="vsl-exp-section-header">
            {t("Objective of the Experiment", "Deneyin Amacı")}
          </p>
          <p className="vsl-exp-text">
            {t("You will observe the magnetic field generated along the axis of a current-carrying coil, similar to the magnetic fields of natural magnets. You will determine the direction of the resulting magnetic field and discover which parameters influence the strength of this magnetic field.", "Akım taşıyan bir bobinin (selenoid) ekseni boyunca, doğal mıknatısların manyetik alanlarına benzer şekilde oluşan manyetik alanı gözlemleyeceksiniz. Oluşan manyetik alanın yönünü belirleyecek ve bu manyetik alanın şiddetini hangi parametrelerin etkilediğini keşfedeceksiniz.")}
          </p>

          <p className="vsl-exp-section-header">
            {t("Procedure", "Deneyin Yapılışı")}
          </p>
          <p className="vsl-exp-text">
            {t("Connect the ends of the coil to the power supply and the ammeter using alligator clip leads. Set the power supply to 2V. Sprinkle iron filings onto the coil and observe how they arrange themselves in response to the magnetic field formed along the coil's axis. Then, adjust the power supply to 4V, 8V, 10V, and 12V, observing how the iron filings form patterns at each setting.", "Bobinin uçlarını timsah klipsli kablolar kullanarak güç kaynağına ve ampermetreye bağlayın. Güç kaynağını 2V seviyesine ayarlayın. Bobinin üzerine demir tozları serpin ve bobin ekseni boyunca oluşan manyetik alana tepki olarak nasıl dizildiklerini gözlemleyin. Ardından güç kaynağını sırasıyla 4V, 8V, 10V ve 12V'a ayarlayarak demir tozlarının her ayarda nasıl desenler oluşturduğunu gözlemleyin.")}
          </p>

          <div className="vsl-vr-notice">
            <p>
              {t("PUT ON YOUR VR HEADSET. YOU WILL FIND ALL THE VIRTUAL MATERIALS FOR THE EXPERIMENT AND ZOZO THE ASSISTANT ON THE VIRTUAL EXPERIMENT TABLE.", "VR GÖZLÜĞÜNÜZÜ TAKIN. DENEY İÇİN GEREKLİ TÜM SANAL MALZEMELERİ VE ASİSTAN ZOZO'YU SANAL DENEY MASASINDA BULACAKSINIZ.")}
            </p>
          </div>
        </div>

        <div className="vsl-support-btn-wrapper">
          <button className="vsl-tech-btn" onClick={() => console.log("Technical support clicked")}>
            {t("TECHNICAL SUPPORT", "TEKNİK DESTEK")}
          </button>
        </div>
      </main>
    </div>
  )
}

export default MainPage