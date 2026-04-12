"use client";

import React from 'react';
import { Syne, Poppins } from 'next/font/google';
import CircularButton from './CircularButton';
import Marquee from './Marquee';
import { useLanguage } from '../context/LanguageContext';
import styles from './Hero.module.css';

const syne = Syne({ subsets: ['latin'], weight: ['800'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className={styles.heroSection}>
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
            {/* Left Side: Circular Button and Description */}
            <div className={styles.descWrapper}>
              <CircularButton 
                size={180} 
                className={styles.heroButton}
              />
              <p className={`${styles.description} ${poppins.className}`}>
                {t("hero_desc")}
              </p>
            </div>
            
            {/* Background elements would go here */}
          </div>
        </div>

        {/* Space between Hero content and Marquees */}
        <div className={styles.heroSpacer}></div>

        {/* Floating Social Sidebar (Simplified) */}
        <div className={styles.socialSidebar}>
           <span className={styles.followText}>{t("hero_follow")}</span>
           <div className={styles.socialLine}></div>
           <div className={styles.socialIcons}>
              <span>FB</span>
              <span>IG</span>
              <span>YT</span>
           </div>
        </div>
      </div>

      {/* 3 Infinite Marquee Bars (Slanted Cross Effect) */}
      <div className={styles.marqueeWrapper}>
        <Marquee 
          text={t("hero_m1") as any}
          direction="left"
          speed="25s"
          bgColor="#29a5c0"
          textColor="#000000"
          fontSize="1.5rem"
          className={styles.rotate30}
        />
        <Marquee 
          text={t("hero_m2") as any}
          direction="right"
          speed="35s"
          bgColor="#ffffff"
          textColor="#000000"
          fontSize="1.5rem"
          className={styles.marqueeNormal}
        />
        <Marquee 
          text={t("hero_m3") as any}
          direction="left"
          speed="20s"
          bgColor="linear-gradient(90deg, #8a2be2, #ff007f)"
          textColor="#ffffff"
          fontSize="1.5rem"
          className={styles.rotate60}
        />
      </div>
    </section>
  );
}
