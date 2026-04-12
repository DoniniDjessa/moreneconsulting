"use client";

import React from 'react';
import { Globe, Send, Mail, Phone, MapPin } from 'lucide-react';
import { Syne, Poppins } from 'next/font/google';
import { useLanguage } from '../context/LanguageContext';
import styles from './Footer.module.css';

const syne = Syne({ subsets: ['latin'], weight: ['800'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={`${styles.logo} ${syne.className}`}>
              M <span className={styles.logoAccent}>CONSULTING.</span>
            </div>
            <p className={`${styles.brandDesc} ${poppins.className}`}>
              {t("foo_desc")}
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className={`${styles.colTitle} ${syne.className}`}>{t("foo_links")}</h4>
            <div className={`${styles.linkList} ${poppins.className}`}>
              <a href="#about" className={styles.link}>{t("Nav_About")}</a>
              <a href="#portfolio" className={styles.link}>{t("Portfolio_Title")}</a>
              <a href="#faq" className={styles.link}>{t("foo_faq")}</a>
              <a href="#contact" className={styles.link}>{t("Nav_Contact")}</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className={`${styles.colTitle} ${syne.className}`}>{t("foo_serv")}</h4>
            <div className={`${styles.linkList} ${poppins.className}`}>
              <a href="#solutions" className={styles.link}>{t("sol_c1_title")}</a>
              <a href="#solutions" className={styles.link}>{t("sol_c2_title")}</a>
              <a href="#solutions" className={styles.link}>{t("sol_c3_title")}</a>
              <a href="#solutions" className={styles.link}>{t("sol_c4_title")}</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`${styles.colTitle} ${syne.className}`}>{t("foo_contact")}</h4>
            <div className={`${styles.contactInfo} ${poppins.className}`}>
              <div className={styles.contactItem}>
                <Phone size={18} className={styles.logoAccent} />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={18} className={styles.logoAccent} />
                <span>contact@m-consulting.com</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={18} className={styles.logoAccent} />
                <span>{t("foo_loc")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={poppins.className}>{t("foo_copy")}</p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink}><Globe size={20} /></a>
            <a href="#" className={styles.socialLink}><Send size={20} /></a>
            <a href="#" className={styles.socialLink}><Globe size={20} /></a>
            <a href="#" className={styles.socialLink}><Globe size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
