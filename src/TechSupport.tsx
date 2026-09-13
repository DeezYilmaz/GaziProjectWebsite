
export default function TechSupport({ isOpen, onClose,Lang }:any) {
  if (!isOpen) return null; // Do not render anything if the modal is closed

  // Prevent closing the modal when clicking inside the actual content box
  const handleContentClick = (e:any) => {
    e.stopPropagation();
  };
  const t = (en: string, tr: string) => (Lang === "en" ? en : tr);
  return (

    /* The backdrop overlay covering the full viewport */
    <div className={`modal-overlay active`} onClick={onClose}>
    <style>{`
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(4, 6, 12, 0.85);
            backdrop-filter: blur(8px);
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1000;
        }

        .modal-overlay.active {
            opacity: 1;
            pointer-events: auto;
        }

        .modal-card {
            background: #0f172a;
            border: 1px solid var(--primary-glow);
            border-radius: 16px;
            width: 90%;
            max-width: 500px;
            padding: 1.5rem;
            box-shadow: 0 0 30px rgba(0, 242, 254, 0.3);
            transform: translateY(20px);
            transition: transform 0.3s ease;
        }

        .modal-overlay.active .modal-card {
            transform: translateY(0);
        }

        .modal-header {
            font-family: 'Orbitron', sans-serif;
            color: var(--primary-glow);
            font-size: 1.2rem;
            margin-bottom: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 0.5rem;
        }

        .close-btn {
            background: none;
            border: none;
            color: var(--text-sub);
            font-size: 1.5rem;
            cursor: pointer;
        }

        .close-btn:hover { color: #fff; }

        .modal-body {
            font-size: 0.98rem;
            line-height: 1.5;
            color: #e2e8f0;
        }

        .modal-body ul {
            list-style: none;
            margin-top: 0.5rem;
        }

        .modal-body li {
            position: relative;
            padding-left: 1.2rem;
        }

        .modal-body li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: var(--primary-glow);
            font-size: 1.2rem;
        }`}
    </style>
        <div className="modal-card" onClick={handleContentClick}>
            <div className="modal-header">
                <span>{t(
                    "Technical Support",
                    "Teknik Destek")}
                </span>
                <button className="close-btn" onClick={onClose}>&times;</button>
            </div>
            <div className="modal-body">
                <ul>
                    <li>
                        <span dangerouslySetInnerHTML={{__html: t(
                            "If you are going to use your headset for the first time, set it up. To do this, first download the <strong>Meta Horizon</strong> app on your mobile phone.",
                            "Gözlüğünüzü ilk defa kullanacaksanız kurulumunu yapın. Bunun için cep telefonunuza önce <strong>Meta Horizon</strong> uygulamasını indirin.")}}
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}
