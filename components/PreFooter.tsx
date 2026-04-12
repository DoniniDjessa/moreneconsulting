"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Syne, Poppins } from 'next/font/google';
import { useLanguage } from '../context/LanguageContext';
import styles from './PreFooter.module.css';

const syne = Syne({ subsets: ['latin'], weight: ['800'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function PreFooter() {
  const { t } = useLanguage();
  const slogan = t("prefoo_slogan");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.leftCol}>
          <h2 className={`${styles.readyText} ${syne.className}`}>
            {t("prefoo_ready")}
          </h2>
          <p className={`${styles.tagline} ${poppins.className}`}>
            {t("prefoo_tagline")}
          </p>
          <a href="mailto:hello@domainsite.com" className={`${styles.emailLink} ${syne.className}`}>
            hello@domainsite.com
          </a>
        </div>

        {/* Right Section */}
        <div className={styles.rightCol}>
          <div className={styles.circularButton}>
            <svg className={styles.rotatingText} viewBox="0 0 100 100">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text fill="white" fontSize="7" fontWeight="bold" letterSpacing="1.5">
                <textPath xlinkHref="#circlePath">
                  {slogan} {slogan}
                </textPath>
              </text>
            </svg>
            <div className={styles.centerIcon}>
              <ArrowUpRight size={40} strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
