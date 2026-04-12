"use client";

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Syne, Poppins } from 'next/font/google';
import { useLanguage } from '../context/LanguageContext';
import ContactModal from './ContactModal';
import styles from './Solutions.module.css';

const syne = Syne({ subsets: ['latin'], weight: ['800'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

const SolutionCard = ({ 
  title, 
  desc, 
  features, 
  isPopular = false,
  onEnquire
}: { 
  title: string; 
  desc: string; 
  features: string[];
  isPopular?: boolean;
  onEnquire: () => void;
}) => (
  <div className={`${styles.card} ${isPopular ? styles.cardPopular : ''}`}>
    <div className={styles.cardHeader}>
      <h4 className={`${styles.cardTitle} ${syne.className}`}>{title}</h4>
      <p className={`${styles.cardSummary} ${poppins.className}`}>{desc}</p>
    </div>
    
    <div className={styles.featuresList}>
      {features.map((feature, idx) => (
        <div key={idx} className={`${styles.featureItem} ${poppins.className}`}>
          <div className={styles.checkWrapper}>
            <Check size={14} className={styles.checkIcon} strokeWidth={4} />
          </div>
          <span>{feature}</span>
        </div>
      ))}
    </div>

    <button 
      className={`${styles.ctaButton} ${poppins.className}`}
      onClick={onEnquire}
    >
      Enquire Now
    </button>
  </div>
);

export default function Solutions() {
  const { t } = useLanguage();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleEnquire = (category: string) => {
    setSelectedCategory(category);
    setModalOpen(true);
  };

  return (
    <section className={styles.section} id="solutions">
      <div className={styles.bgTitle}>{t("sol_bg")}</div>
      
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.accentBar} />
          <h2 className={`${styles.title} ${syne.className}`}>{t("sol_title")}</h2>
          <p className={`${styles.description} ${poppins.className}`}>
            {t("sol_desc")}
          </p>
        </div>

        <div className={styles.solutionsGrid}>
          <SolutionCard 
            title={t("sol_c1_title")}
            desc={t("sol_c1_desc")}
            features={[
              t("sol_c1_f1"),
              t("sol_c1_f2"),
              t("sol_c1_f3"),
              t("sol_c1_f4"),
              t("sol_c1_f5")
            ]}
            onEnquire={() => handleEnquire(t("sol_c1_title"))}
          />
          <SolutionCard 
            title={t("sol_c2_title")}
            desc={t("sol_c2_desc")}
            features={[
              t("sol_c2_f1"),
              t("sol_c2_f2"),
              t("sol_c2_f3"),
              t("sol_c2_f4"),
              t("sol_c2_f5")
            ]}
            onEnquire={() => handleEnquire(t("sol_c2_title"))}
            isPopular={true}
          />
          <SolutionCard 
            title={t("sol_c3_title")}
            desc={t("sol_c3_desc")}
            features={[
              t("sol_c3_f1"),
              t("sol_c3_f2"),
              t("sol_c3_f3"),
              t("sol_c3_f4"),
              t("sol_c3_f5")
            ]}
            onEnquire={() => handleEnquire(t("sol_c3_title"))}
          />
          <SolutionCard 
            title={t("sol_c4_title")}
            desc={t("sol_c4_desc")}
            features={[
              t("sol_c4_f1"),
              t("sol_c4_f2"),
              t("sol_c4_f3"),
              t("sol_c4_f4"),
              t("sol_c4_f5")
            ]}
            onEnquire={() => handleEnquire(t("sol_c4_title"))}
          />
        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        defaultCategory={selectedCategory} 
      />
    </section>
  );
}
