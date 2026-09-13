
export default function HowToUse(lang:any) {
  const t = (en: string, tr: string) => (lang === "en" ? en : tr);

  return (
    <div className="how-to-use-page">
      <style>{`
        .how-to-use-page {
            width: 100%;
            min-height: 100vh;
            background-color: var(--bg-color);
            color: var(--text-main);
            font-family: 'Rajdhani', sans-serif;
            padding-top: 80px;
        }

        .how-to-use-container {
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem 1.5rem;
        }

        .how-to-use-header {
            font-family: 'Orbitron', sans-serif;
            font-size: 2rem;
            color: var(--primary-glow);
            margin-bottom: 2rem;
            text-align: center;
            position: relative;
        }

        .how-to-use-header::after {
            content: '';
            display: block;
            width: 80px;
            height: 3px;
            background: linear-gradient(90deg, var(--primary-glow), var(--secondary-glow));
            margin: 0.5rem auto 0;
            border-radius: 2px;
        }

        .how-to-use-section {
            margin-bottom: 2.5rem;
        }

        .how-to-use-section h3 {
            font-family: 'Orbitron', sans-serif;
            color: var(--primary-glow);
            font-size: 1.3rem;
            margin-bottom: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 0.5rem;
        }

        .how-to-use-section ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .how-to-use-section li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.8rem;
            font-size: 0.95rem;
            line-height: 1.5;
            color: #e2e8f0;
        }

        .how-to-use-section li::before {
            content: "→";
            position: absolute;
            left: 0;
            color: var(--secondary-glow);
            font-weight: bold;
        }

        @media (max-width: 850px) {
            .how-to-use-page {
                padding-top: 70px;
            }

            .how-to-use-header {
                font-size: 1.6rem;
            }

            .how-to-use-section h3 {
                font-size: 1.1rem;
            }
        }
      `}</style>

      <div className="how-to-use-container">
        <h1 className="how-to-use-header">{t("How to Use", "Nasıl Kullanılır")}</h1>

        <section className="how-to-use-section">
          <h3>{t("Getting Started", "Başlangıç")}</h3>
          <ul>
            <li>{t("Select an experiment set from the main menu", "Ana menüden bir deney seti seçin")}</li>
            <li>{t("Click on any experiment to start the activity", "Etkinliği başlatmak için herhangi bir deneyye tıklayın")}</li>
            <li>{t("Use your VR headset to interact with the virtual environment", "Sanal ortamla etkileşim kurmak için VR gözlüğünüzü kullanın")}</li>
          </ul>
        </section>

        <section className="how-to-use-section">
          <h3>{t("Navigation", "Navigasyon")}</h3>
          <ul>
            <li>{t("Click the logo to return to the main menu anytime", "İstediğiniz zaman ana menüye dönmek için logoya tıklayın")}</li>
            <li>{t("Use the language switcher to change between English and Turkish", "İngilizce ve Türkçe arasında geçiş yapmak için dil seçicisini kullanın")}</li>
            <li>{t("Expand experiment sets by clicking on their titles", "Deney setlerini başlıklarına tıklayarak genişletin")}</li>
          </ul>
        </section>

        <section className="how-to-use-section">
          <h3>{t("Experiments", "Deneyler")}</h3>
          <ul>
            <li>{t("Follow the on-screen instructions carefully", "Ekrandaki talimatları dikkatlice izleyin")}</li>
            <li>{t("Use hand controllers or hand tracking to interact", "Etkileşim kurmak için el kontrolörleri veya el izlemesini kullanın")}</li>
            <li>{t("Complete all steps to successfully finish the experiment", "Deneyı başarıyla tamamlamak için tüm adımları tamamlayın")}</li>
          </ul>
        </section>

        <section className="how-to-use-section">
          <h3>{t("Support", "Destek")}</h3>
          <ul>
            <li>{t("Check the Technical Support section for setup help", "Kurulum yardımı için Teknik Destek bölümünü kontrol edin")}</li>
            <li>{t("Contact your instructor if you encounter any issues", "Herhangi bir sorunla karşılaşırsanız eğitmene başvurun")}</li>
          </ul>
        </section>
      </div>
    </div>
  );
}