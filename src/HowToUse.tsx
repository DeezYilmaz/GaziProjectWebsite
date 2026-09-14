
export default function HowToUse(lang: any) {
  const t = (en: string, tr: string) => (lang === "en" ? en : tr);

  const steps = [
    {
      en: 'If you are using your VR headset for the first time, please complete the setup process.',
      tr: "VR başlığınızı ilk kez kullanıyorsanız, lütfen kurulum işlemini tamamlayın.",
    },
    {
      en: 'To set it up, download the "Meta Horizon" app to your mobile phone.',
      tr: 'Kurulumu yapmak için cep telefonunuza "Meta Horizon" uygulamasını indirin.',
    },
    {
      en: "Put on the VR headset and follow the on-screen instructions to complete the setup.",
      tr: "VR başlığını takın ve kurulumu tamamlamak için ekrandaki talimatları izleyin.",
    },
    {
      en: "Links to the Meta Horizon versions of the experiments featured on the webpage are provided below. After putting on the headset, you can access your desired experiment via these links, install it on your device, and run it.",
      tr: "Web sayfasında yer alan deneylerin Meta Horizon sürümlerine ait bağlantılar aşağıda sunulmuştur. Başlığı taktıktan sonra bu bağlantılar aracılığı ile istediğiniz deneye erişip gözlüğünüze deneyi yükleyin ve deneyi gerçekleştirin.",
    },
  ];

  return (
    <div className="how-to-use-page">
      <style>{`
        .how-to-use-page {
            --primary-glow: var(--primary-glow, #00f2fe);
            --secondary-glow: var(--secondary-glow, #4facfe);
            --accent-yellow: var(--accent-yellow, #ffe600);
            --bg-color: var(--bg-color, #080b12);
            --card-bg: var(--card-bg, rgba(18, 25, 41, 0.7));
            --border-color: var(--border-color, rgba(0, 242, 254, 0.25));
            --text-main: var(--text-main, #ffffff);
            --text-sub: var(--text-sub, #94a3b8);

            width: 100%;
            min-height: 100vh;
            background-color: var(--bg-color);
            background-image:
                radial-gradient(circle at 8% 15%, rgba(0, 242, 254, 0.06) 0%, transparent 22%),
                radial-gradient(circle at 92% 75%, rgba(79, 172, 254, 0.06) 0%, transparent 22%);
            color: var(--text-main);
            font-family: 'Rajdhani', sans-serif;
            padding: 96px 1.5rem 4rem;
            box-sizing: border-box;
        }

        .how-to-use-page * { box-sizing: border-box; }

        .how-to-use-container {
            max-width: 760px;
            margin: 0 auto;
        }

        /* ---- Hero ---- */
        .htu-hero {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-bottom: 3rem;
        }

        .htu-badge {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 64px;
            height: 64px;
            border-radius: 50%;
            border: 2px solid var(--primary-glow);
            box-shadow: 0 0 20px rgba(0, 242, 254, 0.35);
            margin-bottom: 1.2rem;
            font-size: 1.6rem;
        }

        .how-to-use-header {
            font-family: 'Orbitron', sans-serif;
            font-size: clamp(1.6rem, 3.5vw, 2.2rem);
            font-weight: 800;
            letter-spacing: 1px;
            background: linear-gradient(135deg, #ffffff 15%, var(--primary-glow) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: 0 0 0.7rem;
            text-transform: uppercase;
        }

        .htu-subtitle {
            font-size: 1rem;
            color: var(--text-sub);
            max-width: 480px;
            line-height: 1.5;
            margin: 0;
        }

        /* ---- Step timeline ---- */
        .htu-steps {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 1.4rem;
        }

        .htu-steps::before {
            content: '';
            position: absolute;
            left: 23px;
            top: 12px;
            bottom: 12px;
            width: 2px;
            background: linear-gradient(180deg, var(--primary-glow), rgba(79, 172, 254, 0.05));
            opacity: 0.5;
        }

        .htu-step {
            position: relative;
            display: flex;
            gap: 1.1rem;
            align-items: flex-start;
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 1rem 1.2rem;
            backdrop-filter: blur(6px);
            transition: border-color 0.25s ease, transform 0.25s ease;
        }

        .htu-step:hover {
            border-color: var(--primary-glow);
            transform: translateX(4px);
        }

        .htu-step-number {
            flex-shrink: 0;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Orbitron', sans-serif;
            font-weight: 800;
            font-size: 1.1rem;
            color: var(--bg-color);
            background: linear-gradient(135deg, var(--primary-glow), var(--secondary-glow));
            box-shadow: 0 0 14px rgba(0, 242, 254, 0.45);
            z-index: 1;
        }

        .htu-step-text {
            font-size: 1rem;
            line-height: 1.55;
            color: #e2e8f0;
            padding-top: 0.5rem;
        }

        .htu-step-text strong {
            color: var(--primary-glow);
        }

        /* ---- Callout on final / actionable step ---- */
        .htu-step-highlight {

            background: rgba(255, 230, 0, 0.08);
            border: 1px dashed var(--accent-yellow);
            border-radius: 10px;
            padding: 0.6rem 1rem;
            text-align: center;
        }

        .htu-step.htu-step-highlight .htu-step-number {
            background: linear-gradient(135deg, var(--accent-yellow), #ffb800);
            box-shadow: 0 0 14px rgba(255, 230, 0, 0.45);
        }

        @media (max-width: 850px) {
            .how-to-use-page {
                padding: 84px 1.1rem 3rem;
            }

            .htu-steps::before {
                left: 20px;
            }

            .htu-step {
                padding: 0.9rem 1rem;
                gap: 0.9rem;
            }

            .htu-step-number {
                width: 42px;
                height: 42px;
                font-size: 1rem;
            }

            .htu-step-text {
                font-size: 0.92rem;
                padding-top: 0.35rem;
            }
        }
      `}</style>

      <div className="how-to-use-container">
        <div className="htu-hero">
          <div className="htu-badge" aria-hidden="true">🥽</div>
          <h1 className="how-to-use-header">{t("How to Use", "Nasıl Kullanılır")}</h1>
          <p className="htu-subtitle">
            {t(
              "Follow these steps to set up your headset and launch your first VR STEM experiment.",
              "Başlığınızı kurmak ve ilk VR STEM deneyinizi başlatmak için bu adımları izleyin."
            )}
          </p>
        </div>

        <div className="htu-steps">
          {steps.map((step, i) => (
            <div
              className={`htu-step ${i === steps.length - 1 ? "htu-step-highlight" : ""}`}
              key={i}
            >
              <div className="htu-step-number">{i + 1}</div>
              <p className="htu-step-text">{t(step.en, step.tr)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}