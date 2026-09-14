import { useEffect, useRef, useState } from 'react';

interface ImageListProps {
  tags: string[]; // An array containing only strings
}

function GalleryImage({source} :{source:string}){
const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set state to true if the element enters the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
        else{
          setIsVisible(false);

        }
      },
      { threshold: 0.6 } // Triggers when 20% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div style={{ height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <style>{`
           .fade-in-element {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }

            .fade-in-element.visible {
            opacity: 1;
            transform: translateY(0);
            }
            .vsl-section-title {
            font-family: 'Rajdhani', sans-serif;
            font-size: 1.4rem;
            text-align: center;
            margin-bottom: 1.5rem;
            color: #fff;
            position: relative;
            }
            .vsl-gallery-image {
            max-width: 500px;
            max-height: 600px;
            width: 100%;
            height: auto;
            position: relative;
            z-index: 1;
            object-fit: contain;
            filter: drop-shadow(0 0 15px rgba(0, 242, 254, 0.4));
            }

            `}
        </style>      
      <div
        ref={elementRef}
        className={`fade-in-element ${isVisible ? 'visible' : ''}`}
      >
        <img src={source} alt="VR STEM LAB Student" className="vsl-gallery-image" />
      </div>
    </div>
  );
}
export default function Gallery({lang,images,showTag}:{lang:any ,images:ImageListProps["tags"],showTag:boolean}) {
  const t = (en: string, tr: string) => (lang === "en" ? en : tr);
    return(
        <div>
            {showTag && <div className="vsl-section-title">{t("Images", "Görselles")}</div>}
            {images.map((item,i) => (
                 <GalleryImage key = {i} source={item}/>
                )
            )}
        </div>
    )
}