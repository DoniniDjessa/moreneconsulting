"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Syne, Poppins } from 'next/font/google';
import { useLanguage } from '../context/LanguageContext';
import styles from './FAQ.module.css';

const syne = Syne({ subsets: ['latin'], weight: ['800'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

const FAQItem = ({ question, answer, isOpen, onToggle }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void;
}) => (
  <div className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
    <button className={styles.header} onClick={onToggle}>
      <span className={`${styles.question} ${syne.className}`}>{question}</span>
      <ChevronDown className={styles.icon} size={24} />
    </button>
    <div className={styles.contentWrapper}>
      <div className={`${styles.body} ${poppins.className}`}>
        {answer}
      </div>
    </div>
  </div>
);

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    { q: t("faq_q1"), a: t("faq_a1") },
    { q: t("faq_q2"), a: t("faq_a2") },
    { q: t("faq_q3"), a: t("faq_a3") },
    { q: t("faq_q4"), a: t("faq_a4") },
  ];

  return (
    <section className={styles.section} id="faq">
      <div className={styles.bgTitle}>{t("faq_bg")}</div>
      
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.accentBar} />
          <h2 className={`${styles.title} ${syne.className}`}>{t("faq_main")}</h2>
        </div>

        <div className={styles.accordion}>
          {faqData.map((item, idx) => (
            <FAQItem 
              key={idx}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
