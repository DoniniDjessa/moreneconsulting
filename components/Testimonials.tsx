"use client";

import React from 'react';
import { Quote, ArrowUpRight } from 'lucide-react';
import { Syne, Poppins } from 'next/font/google';
import { useLanguage } from '../context/LanguageContext';
import styles from './Testimonials.module.css';

const syne = Syne({ subsets: ['latin'], weight: ['800'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

const TestimonialCard = ({ name, role, text }: { name: string; role: string; text: string }) => (
  <div className={styles.card}>
    <div className={styles.quoteIcon}>
      <Quote size={48} fill="currentColor" />
    </div>
    
    <p className={`${styles.testimonialText} ${poppins.className}`}>
      {text}
    </p>

    <div className={styles.clientInfo}>
      <div className={styles.clientAccentLine} />
      <div className={styles.clientDetails}>
        <h5 className={`${styles.clientName} ${syne.className}`}>{name}</h5>
        <p className={`${styles.clientRole} ${poppins.className}`}>{role}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    { name: t("test_c1_name"), role: t("test_c1_role"), text: t("test_c1_text") },
    { name: t("test_c2_name"), role: t("test_c2_role"), text: t("test_c2_text") },
    { name: t("test_c3_name"), role: t("test_c3_role"), text: t("test_c3_text") },
    { name: t("test_c4_name"), role: t("test_c4_role"), text: t("test_c4_text") },
  ];

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.bgTitle}>{t("test_bg")}</div>
      
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h3 className={`${styles.mainTitle} ${syne.className}`}>
            {t("test_title1")}
          </h3>
          <div className={styles.titleRow}>
            <h3 className={`${styles.mainTitle} ${syne.className}`}>
              {t("test_title2")}
            </h3>
            <div className={styles.divider} />
            <p className={`${styles.desc} ${poppins.className}`}>
              {t("test_desc")}
            </p>
            <a href="#about" className={styles.arrowLink}>
              <ArrowUpRight size={28} strokeWidth={3} />
            </a>
          </div>
        </div>

        <div className={styles.sliderWrapper}>
          <div className={styles.sliderContainer}>
            {testimonials.map((item, idx) => (
              <TestimonialCard 
                key={idx}
                name={item.name}
                role={item.role}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
