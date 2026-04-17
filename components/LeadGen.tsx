"use client";

import React from 'react';
import { Syne, Poppins } from 'next/font/google';
import { Send, Phone, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import styles from './LeadGen.module.css';

const syne = Syne({ subsets: ['latin'], weight: ['800'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function LeadGen() {
  const { t } = useLanguage();

  return (
    <section className={styles.leadSection}>
      <div className={styles.bgWrapper}>
        <Image 
          src="/lead-gen-bg.png" 
          alt="Background" 
          fill 
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={`${styles.title} ${syne.className}`}>
            {t("lead_title")}
          </h2>
          <p className={`${styles.subtitle} ${poppins.className}`}>
            {t("lead_subtitle")}
          </p>
        </div>

        <div className={styles.formContainer}>
          {/* Email row */}
          <div className={styles.formGroup}>
            <label className={styles.label}>{t("lead_email_label")}</label>
            <div className={styles.inputWrapper}>
              <input 
                type="email" 
                placeholder={t("lead_email_placeholder")} 
                className={styles.input}
              />
              <button className={styles.actionBtn}>
                <Send size={20} />
              </button>
            </div>
          </div>

          <div className={styles.orRow}>
             <div className={styles.line}></div>
             <span className={styles.orText}>{t("lead_or")}</span>
             <div className={styles.line}></div>
          </div>

          {/* WhatsApp row */}
          <div className={styles.formGroup}>
            <label className={styles.label}>{t("lead_whatsapp_label")}</label>
            <div className={styles.inputWrapper}>
              <input 
                type="text" 
                placeholder={t("lead_whatsapp_placeholder")} 
                className={styles.input}
              />
              <button className={styles.actionBtn}>
                <Phone size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Brand Footer */}
        <div className={styles.brandFooter}>
          <div className={styles.footerBranding}>
             <div className={styles.logoCircle}>M</div>
             <h3 className={`${styles.brandName} ${syne.className}`}>Morene Strategy Consulting</h3>
          </div>
          <p className={styles.brandDesc}>
            Data-driven marketing expertise powered by Google-level insights.
          </p>
          
          <div className={styles.contactChips}>
             <div className={styles.chip}>
               <img src="https://flagcdn.com/w40/ie.png" alt="Ireland" className={styles.flagIcon} />
               +353 87 039 5175
             </div>
             <div className={styles.chip}>
               <img src="https://flagcdn.com/w40/ci.png" alt="Cote d'Ivoire" className={styles.flagIcon} />
               +225 05 66 84 20 33
             </div>
          </div>
          
          <div className={styles.footerLink}>
             msc@morenestrategyconsulting.tech
          </div>
        </div>
      </div>
    </section>
  );
}
