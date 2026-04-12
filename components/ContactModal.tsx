"use client";

import React from 'react';
import { X } from 'lucide-react';
import { Syne, Poppins } from 'next/font/google';
import { useLanguage } from '../context/LanguageContext';
import styles from './ContactModal.module.css';

const syne = Syne({ subsets: ['latin'], weight: ['800'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory: string;
}

export default function ContactModal({ isOpen, onClose, defaultCategory }: ContactModalProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  // We can list all categories for the dropdown
  const categories = [
    t("sol_c1_title"),
    t("sol_c2_title"),
    t("sol_c3_title"),
    t("sol_c4_title")
  ];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>

        <h2 className={`${styles.title} ${syne.className}`}>{t("form_title")}</h2>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          {/* Category Select */}
          <div className={styles.inputGroup}>
            <label className={`${styles.label} ${poppins.className}`}>{t("form_category")}</label>
            <select className={styles.select} defaultValue={defaultCategory}>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label className={`${styles.label} ${poppins.className}`}>{t("form_surname")}</label>
              <input type="text" className={styles.input} placeholder="John" />
            </div>
            <div className={styles.inputGroup}>
              <label className={`${styles.label} ${poppins.className}`}>{t("form_name")}</label>
              <input type="text" className={styles.input} placeholder="Doe" />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label className={`${styles.label} ${poppins.className}`}>{t("form_phone")}</label>
              <input type="tel" className={styles.input} placeholder="+1 234 567 890" />
            </div>
            <div className={styles.inputGroup}>
              <label className={`${styles.label} ${poppins.className}`}>{t("form_email")}</label>
              <input type="email" className={styles.input} placeholder="john@example.com" />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={`${styles.label} ${poppins.className}`}>{t("form_message")}</label>
            <textarea className={styles.textarea} placeholder="How can we help?"></textarea>
          </div>

          <button type="submit" className={`${styles.submitButton} ${poppins.className}`}>
            {t("form_submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
