"use client";

import React from 'react';
import { Mail, Phone, MapPin, Globe, ChevronRight } from 'lucide-react';
import { Syne, Poppins } from 'next/font/google';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import Footer from '../../components/Footer';
import styles from './Contact.module.css';

const syne = Syne({ subsets: ['latin'], weight: ['800'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const InfoCard = ({ icon: Icon, label, value }: { icon: any, label: string, value: string | React.ReactNode }) => (
  <div className={styles.infoCard}>
    <div className={styles.iconBox}>
      <Icon size={24} />
    </div>
    <h4 className={`${styles.cardLabel} ${syne.className}`}>{label}</h4>
    <div className={`${styles.cardValue} ${poppins.className}`}>{value}</div>
  </div>
);

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <div className={styles.gridOverlay} />
      
      {/* Decorative Circular Text */}
      <div className={styles.circularWrapper}>
        <div className={styles.circularButton}>
          <svg className={styles.rotatingText} viewBox="0 0 100 100">
            <defs>
              <path
                id="contactCirclePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text fill="white" fontSize="6.5" fontWeight="bold" letterSpacing="2">
              <textPath xlinkHref="#contactCirclePath">
                {t("prefoo_slogan")} • {t("prefoo_slogan")} •
              </textPath>
            </text>
          </svg>
          <div className={styles.centerIcon}>
            <Mail size={30} strokeWidth={2.5} />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.bgText}>CONTACT</div>
        <div className={styles.heroContent}>
          <div className={styles.tagGroup}>
            <Link href="/" className={`${styles.breadcrumbs} ${poppins.className}`}>HOME</Link>
            <ChevronRight size={14} className={styles.breadcrumbs} />
            <span className={`${styles.breadcrumbs} ${poppins.className}`}>CONTACT US</span>
          </div>
          <h1 className={`${styles.title} ${syne.className}`}>
            Waiting to Hear <br /> <span style={{color: '#29a5c0'}}>from You</span>
          </h1>
        </div>
      </section>

      {/* Info Grid - 4 Cards */}
      <div className={styles.infoGrid}>
        <InfoCard 
          icon={MapPin} 
          label={t("con_office_t")} 
          value={t("con_office_a")} 
        />
        <InfoCard 
          icon={Mail} 
          label={t("con_email_us")} 
          value="hello@m-consulting.com" 
        />
        <InfoCard 
          icon={Phone} 
          label={t("con_call_us")} 
          value="+33 1 23 45 67 89" 
        />
        <InfoCard 
          icon={Globe} 
          label={t("con_website")} 
          value="www.m-consulting.com" 
        />
      </div>

      {/* Form Section */}
      <section className={styles.formSection}>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h2 className={`${styles.formTitle} ${syne.className}`}>{t("con_form_t")}</h2>
            <p className={`${styles.formSubtitle} ${poppins.className}`}>
              {t("con_form_sub")}
            </p>
          </div>

          <form className={`${styles.formGrid} ${poppins.className}`}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>{t("form_surname")}</label>
              <input type="text" className={styles.input} placeholder="John" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>{t("form_name")}</label>
              <input type="text" className={styles.input} placeholder="Doe" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>{t("form_email")}</label>
              <input type="email" className={styles.input} placeholder="john@example.com" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>{t("form_phone")}</label>
              <input type="tel" className={styles.input} placeholder="+33..." />
            </div>
            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>{t("con_subject")}</label>
              <select className={styles.select}>
                <option>{t("sol_c1_title")}</option>
                <option>{t("sol_c2_title")}</option>
                <option>{t("sol_c3_title")}</option>
                <option>{t("sol_c4_title")}</option>
                <option>{t("con_other")}</option>
              </select>
            </div>
            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>{t("form_message")}</label>
              <textarea className={styles.textarea} placeholder="Write your message here..."></textarea>
            </div>
            
            <button type="submit" className={styles.submitBtn}>
              {t("form_submit")}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
