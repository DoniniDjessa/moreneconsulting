"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Syne } from 'next/font/google';
import { useLanguage } from '../context/LanguageContext';
import styles from './Portfolio.module.css';

const syne = Syne({ subsets: ['latin'], weight: ['800'] });

const ProjectCard = ({ 
  src, 
  title, 
  category, 
  desc, 
  aspect = "4/3",
  isTall = false 
}: { 
  src: string; 
  title: string; 
  category: string; 
  desc: string; 
  aspect?: string;
  isTall?: boolean;
}) => {
  return (
    <div className={`${styles.card} ${isTall ? styles.cardTall : ""}`} style={{ aspectRatio: isTall ? 'auto' : aspect }}>
      <div className={styles.imageWrapper}>
        <Image 
          src={src} 
          alt={title} 
          fill 
          style={{ objectFit: 'cover' }} 
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.overlayTop}>
          <span>2025</span>
          <span>{category}</span>
        </div>
        <h4 className={`${styles.overlayTitle} ${syne.className}`}>
          {title}
        </h4>
        <div className={styles.overlayBottom}>
          <p className={styles.overlayDesc}>{desc}</p>
          <div className={styles.iconBox}>
            <ArrowUpRight size={24} strokeWidth={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const { t } = useLanguage();

  const tags = [
    t("port_tag1"),
    t("port_tag2"),
    t("port_tag3"),
    t("port_tag4"),
    t("port_tag5")
  ];

  return (
    <section className={styles.portfolioSection} id="portfolio">
      <div className={styles.bgTitle}>
        {t("port_bg")}
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerRow}>
          <div className={styles.titleArea}>
            <div className={styles.accentBar} />
            <h3 className={`${styles.title} ${syne.className}`}>
              {t("port_title")}
            </h3>
            <p className={styles.description}>
              {t("port_desc")}
            </p>
          </div>
          
          <div className={styles.tagArea}>
            {tags.map((tag, i) => (
              <span key={i} className={`${styles.tag} ${i === 0 ? styles.activeTag : ""}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {/* Column 1 */}
          <div className={styles.column}>
            <ProjectCard 
              src="/portfolio/p1.png"
              title={t("project1_title")}
              category={t("project1_cat")}
              desc={t("project1_desc")}
              aspect="1/1"
            />
            <ProjectCard 
              src="/portfolio/p2.png"
              title={t("project2_title")}
              category={t("project2_cat")}
              desc={t("project2_desc")}
              aspect="4/3"
            />
          </div>

          {/* Column 2 - Tall Card */}
          <div className={styles.column}>
            <ProjectCard 
              src="/portfolio/p3.png"
              title={t("project3_title")}
              category={t("project3_cat")}
              desc={t("project3_desc")}
              isTall={true}
            />
          </div>

          {/* Column 3 */}
          <div className={styles.column}>
            <ProjectCard 
              src="/portfolio/p4.png"
              title={t("project4_title")}
              category={t("project4_cat")}
              desc={t("project4_desc")}
              aspect="4/3"
            />
            <ProjectCard 
              src="/portfolio/p5.png"
              title={t("project5_title")}
              category={t("project5_cat")}
              desc={t("project5_desc")}
              aspect="1/1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
