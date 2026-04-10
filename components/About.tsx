"use client";

import React from 'react';
import Image from 'next/image';
import { Play, ArrowUpRight, Plus } from 'lucide-react';
import { Syne, Poppins } from 'next/font/google';
import { useLanguage } from '../context/LanguageContext';
import styles from './About.module.css';

const syne = Syne({ subsets: ['latin'], weight: ['800'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });

export default function About() {
  const { t } = useLanguage();

  return (
    <section className={styles.aboutSection} id="about">
      {/* Background Heading */}
      <h2 className={`${styles.bgTitle} ${syne.className}`}>
        {t("about_bg")}
      </h2>

      <div className={styles.topContent}>
        <div className={styles.subtitleWrapper}>
          <div className={styles.line}></div>
          <h3 className={`${styles.subtitle} ${syne.className}`}>
            {t("about_subtitle")}
          </h3>
        </div>
      </div>

      <div className={styles.container}>
        {/* Left Column: Interactive Image */}
        <div className={styles.leftColumn}>
          <div className={styles.mainImageWrapper}>
            <Image 
              src="/images/about_main.png" 
              alt="Handshake" 
              width={600} 
              height={800} 
              className={styles.mainImage}
            />
          </div>
          
          {/* Play Button & Rotating Text - Moved out of overflow:hidden */}
          <div className={styles.playButtonContainer}>
            <div className={styles.rotatingText}>
              <svg viewBox="0 0 100 100" width="100%" height="100%">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text className={styles.circularText}>
                  <textPath xlinkHref="#circlePath" startOffset="0%">
                    STRATEGIC . PROFESSIONAL . CREATIVE . STRATEGIC . PROFESSIONAL . CREATIVE . 
                  </textPath>
                </text>
              </svg>
            </div>
            <div className={styles.playButton}>
              <Play fill="white" size={24} />
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className={styles.rightColumn}>
          <p className={`${styles.description} ${poppins.className}`}>
            {t("about_desc")}
          </p>

          <div className={styles.ctaButtons}>
            <button className={`${styles.learnMoreBtn} ${poppins.className}`}>
              {t("about_btn_learn")}
              <ArrowUpRight size={20} />
            </button>
            <span className={`${styles.howItWorks} ${poppins.className}`}>
              {t("about_btn_work")}
            </span>
          </div>

          {/* Social Proof / Badge */}
          <div className={`${styles.reviewBadge} ${poppins.className}`}>
            <div className={styles.avatars}>
              <div className={styles.avatar}></div>
              <div className={styles.avatar}></div>
              <div className={styles.avatar}></div>
              <div className={styles.plusIcon}>
                <Plus size={16} strokeWidth={3} />
              </div>
            </div>
            <div className={styles.statText}>
              <span className={styles.rating}>4.9 Star</span>
              <span className={styles.label}>Reviewer</span>
            </div>
          </div>

          {/* Secondary Image */}
          <div className={styles.secondaryImageWrapper}>
            <Image 
              src="/images/about_secondary.png" 
              alt="Team Collaboration" 
              width={400} 
              height={250} 
              className={styles.secondaryImage}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .circular-text-path {
          fill: white;
          font-size: 8px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2.5px;
        }
      `}</style>
    </section>
  );
}
