"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Syne } from 'next/font/google';
import { useLanguage } from '../context/LanguageContext';
import styles from './TextualShowcase.module.css';

const syne = Syne({ subsets: ['latin'], weight: ['800'] });

export default function TextualShowcase() {
  const { t } = useLanguage();

  return (
    <section className={styles.showcaseSection}>
      <div className={`${styles.container} ${syne.className}`}>
        
        {/* Row 1: GROWING + PILL + YOUR BRAND */}
        <div className={styles.row}>
          <div className={styles.text}>{t("showcase_r1_1")}</div>
          <div className={`${styles.pillImageWrapper} ${styles.pillMedium}`}>
            <Image 
              src="/showcase/pill1.png" 
              alt="Pill decoration" 
              fill 
              className={styles.pillImage}
            />
          </div>
          <div className={styles.text}>{t("showcase_r1_2")}</div>
        </div>

        {/* Row 2: ON THE + ICON PILL + RIGHT PLATFORM */}
        <div className={styles.row}>
          <div className={`${styles.text} ${styles.underline}`}>{t("showcase_r2_1")}</div>
          <div className={`${styles.pillImageWrapper} ${styles.pillIcon}`}>
            <ArrowUpRight size={48} strokeWidth={2.5} className={styles.icon} />
          </div>
          <div className={`${styles.text} ${styles.bold}`}>{t("showcase_r2_2")}</div>
        </div>

        {/* Row 3: -AT + PILL + THE RIGHT TIME */}
        <div className={styles.row}>
          <div className={styles.text}>{t("showcase_r3_1")}</div>
          <div className={`${styles.pillImageWrapper} ${styles.pillLarge}`}>
            <Image 
              src="/showcase/pill2.png" 
              alt="Pill decoration" 
              fill 
              className={styles.pillImage}
            />
          </div>
          <div className={`${styles.text} ${styles.borderBox}`}>
            {t("showcase_r3_2")}
          </div>
        </div>

        {/* Row 4: ‘WITH’ A + PILL + SMART PLAN. */}
        <div className={styles.row}>
          <div className={styles.text}>
            <span className={styles.italic}>{t("showcase_r4_1")}</span>
          </div>
          <div className={`${styles.pillImageWrapper} ${styles.pillMedium}`}>
            <Image 
              src="/showcase/pill3.png" 
              alt="Pill decoration" 
              fill 
              className={styles.pillImage}
            />
          </div>
          <div className={`${styles.text} ${styles.italic}`}>
            {t("showcase_r4_2")}
          </div>
        </div>

      </div>
    </section>
  );
}
