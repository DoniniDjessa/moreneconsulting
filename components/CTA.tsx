"use client";

import React from 'react';
import { Syne, Poppins } from 'next/font/google';
import { useLanguage } from '../context/LanguageContext';
import styles from './CTA.module.css';

const syne = Syne({ subsets: ['latin'], weight: ['800'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.meshBackground} />
      
      {/* Decorative Floating 3D Assets */}
      <img 
        src="/chooseus/expert_icon.png" 
        alt="Expertise" 
        className={styles.floatingIconLeft} 
      />
      <img 
        src="/chooseus/growth_icon.png" 
        alt="Growth" 
        className={styles.floatingIconRight} 
      />

      <div className={styles.glassCard}>
        <h2 className={`${styles.title} ${syne.className}`}>
          <span className={styles.accent}>{t("cta_ready")}</span> <br />
          <span className={styles.midText}>{t("cta_mid")}</span>{' '}
          <span className={styles.italic}>{t("cta_growth")}</span>
        </h2>

        <p className={`${styles.desc} ${poppins.className}`}>
          {t("cta_desc")}
        </p>

        <div className={styles.btnGroup}>
          <button className={`${styles.primaryBtn} ${poppins.className}`}>
            {t("cta_app")}
          </button>
          <button className={`${styles.secondaryBtn} ${poppins.className}`}>
            {t("cta_start")}
          </button>
        </div>
      </div>
    </section>
  );
}
