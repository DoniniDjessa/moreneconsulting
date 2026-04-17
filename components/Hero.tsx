"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Syne, Poppins } from 'next/font/google';
import CircularButton from './CircularButton';
import { useLanguage } from '../context/LanguageContext';
import styles from './Hero.module.css';

const syne = Syne({ subsets: ['latin'], weight: ['800'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export default function Hero() {
  const { t } = useLanguage();
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
           resolve(true);
           return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initVanta = async () => {
      try {
        if (!window.THREE) {
          await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
        }
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js');
        
        if (vantaRef.current && !vantaEffect && window.VANTA?.HALO) {
          // Detect mobile for size adjustment
          const isMobile = window.innerWidth <= 768;
          
          const effect = window.VANTA.HALO({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            // Centering and Sizing
            xOffset: 0,
            yOffset: 0,
            size: isMobile ? 0.7 : 1.5, // Further reduced size on mobile
            backgroundColor: 0x06000f,
            amplitudeFactor: isMobile ? 0.6 : 1.5, // Further reduced amplitude on mobile
            baseColor: 0x3f99ff
          });
          setVantaEffect(effect);
        }
      } catch (err) {
        console.error("Vanta initialization failed:", err);
      }
    };

    initVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // Handle window resize to re-init Vanta with new sizes
  useEffect(() => {
    const handleResize = () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [vantaEffect]);

  return (
    <section className={styles.heroSection}>
      {/* Vanta.js Background Layer */}
      <div id="vanta-bg" ref={vantaRef} className={styles.vantaBg}></div>

      {/* Static Background Image HIDDEN for debugging Vanta */}
      {/* 
      <div className={styles.heroBg}>
        <div className={styles.bgOverlay}></div>
      </div>
      */}
      
      <div className={styles.container}>
        {/* Main Content */}
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <h1 className={`${styles.title} ${syne.className}`}>
               {t("hero_title")}
            </h1>
            <p className={`${styles.subHeader} ${poppins.className}`}>
               {t("hero_subtext")}
            </p>
          </div>

          <div className={styles.bottomRow}>
            {/* CTA and Description */}
            <div className={styles.descWrapper}>
              <div className={styles.buttonAndText}>
                <a href="#contact" className={`${styles.ctaButton} ${poppins.className}`}>
                  {t("hero_cta")}
                  <span className={styles.ctaArrow}>→</span>
                </a>
                <p className={`${styles.description} ${poppins.className}`}>
                  {t("hero_desc")}
                </p>
              </div>
              <CircularButton 
                size={180} 
                className={styles.heroButton}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
}
