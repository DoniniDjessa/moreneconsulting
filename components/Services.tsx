"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Syne, Poppins } from 'next/font/google';
import { useLanguage } from '../context/LanguageContext';
import styles from './Services.module.css';

const syne = Syne({ subsets: ['latin'], weight: ['800'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

export default function Services() {
  const { t } = useLanguage();

  const tags = [
    t("serv_tag1"),
    t("serv_tag2"),
    t("serv_tag3"),
    t("serv_tag4"),
    t("serv_tag5")
  ];

  const servicesList = [
    t("serv_nav1"),
    t("serv_nav2"),
    t("serv_nav3"),
    t("serv_nav4")
  ];

  return (
    <section className={styles.servicesSection} id="services">
      {/* Background Heading */}
      <h2 className={`${styles.bgTitle} ${syne.className}`}>
        {t("serv_bg")}
      </h2>

      <div className={styles.container}>
        {/* Top Content Header */}
        <div className={styles.headerRow}>
          <div className={styles.headerLine}>
            <div className={styles.line}></div>
            <h3 className={`${styles.subtitle} ${syne.className}`}>
              {t("serv_subtitle").split('?').map((part, i, arr) => 
                i === 0 ? <React.Fragment key={i}>{part}?<br/></React.Fragment> : part
              )}
            </h3>
          </div>
        </div>

        {/* Description Row with Image */}
        <div className={styles.descRow}>
          <div className={styles.serviceImageWrapper}>
             {/* Using a placeholder or the main morene image since we don't have the exact img from template */}
             <Image 
                src="/morene.jpeg" 
                alt="Service Representation" 
                width={282} 
                height={200} 
                className={styles.serviceImage}
             />
          </div>
          <p className={`${styles.description} ${poppins.className}`}>
            {t("serv_desc").split(',').map((part, i, arr) => 
                i === 0 ? <React.Fragment key={i}>{part},<br/></React.Fragment> : part
            )}
          </p>
        </div>

        {/* Tags Row */}
        <div className={styles.tagsContainer}>
          {tags.map((tag, idx) => (
            <span key={idx} className={`${styles.tag} ${poppins.className} ${idx === 0 ? styles.active : ''}`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Accordion List */}
        <div className={styles.accordionList}>
          {servicesList.map((serviceName, index) => (
            <div key={index} className={styles.accordionItem}>
              <h4 className={`${styles.accTitle} ${syne.className}`}>
                {serviceName}
              </h4>
              <div className={styles.iconBox}>
                <ArrowUpRight size={24} className={styles.arrowIcon} strokeWidth={3} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
