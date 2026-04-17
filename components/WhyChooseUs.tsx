"use client";

import React, { useState } from 'react';
import { Syne, Poppins } from 'next/font/google';
import { ChevronDown, ChevronUp, Globe, Target, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import styles from './WhyChooseUs.module.css';

const syne = Syne({ subsets: ['latin'], weight: ['800'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

const Card = ({ title, shortText, fullText, icon: Icon, id }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <div className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}>
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          <Icon size={32} />
        </div>
        <h3 className={`${styles.cardTitle} ${syne.className}`}>{title}</h3>
      </div>
      
      <p className={`${styles.shortText} ${poppins.className}`}>
        {shortText}
      </p>

      <div className={`${styles.accordion} ${isExpanded ? styles.show : ''}`}>
        <p className={`${styles.fullText} ${poppins.className}`}>
          {fullText}
        </p>
      </div>

      <button 
        onClick={() => setIsExpanded(!isExpanded)} 
        className={`${styles.toggleBtn} ${poppins.className}`}
      >
        <span>{isExpanded ? t("read_less") : t("read_more")}</span>
        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
    </div>
  );
};

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const cards = [
    {
      id: 1,
      title: t("choose_card1_title"),
      shortText: t("choose_card1_short"),
      fullText: t("choose_card1_full"),
      icon: Globe
    },
    {
      id: 2,
      title: t("choose_card2_title"),
      shortText: t("choose_card2_short"),
      fullText: t("choose_card2_full"),
      icon: Target
    },
    {
      id: 3,
      title: t("choose_card3_title"),
      shortText: t("choose_card3_short"),
      fullText: t("choose_card3_full"),
      icon: TrendingUp
    }
  ];

  return (
    <section className={styles.whySection} id="why-us">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={`${styles.bgText} ${syne.className}`}>{t("choose_bg")}</h2>
          <div className={styles.titleInfo}>
            <div className={styles.line}></div>
            <h2 className={`${styles.mainTitle} ${syne.className}`}>{t("choose_title")}</h2>
          </div>
        </div>

        <div className={styles.grid}>
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
