"use client";

import React from 'react';
import Marquee from './Marquee';
import { useLanguage } from '../context/LanguageContext';
import styles from './MarqueeGroup.module.css';

export default function MarqueeGroup() {
  const { t } = useLanguage();

  return (
    <section className={styles.mainWrapper}>
      <div className={styles.marqueeWrapper}>
        <Marquee 
          text={t("hero_m1") as any}
          direction="left"
          speed="25s"
          bgColor="#29a5c0"
          textColor="#000000"
          fontSize="1.5rem"
          className={styles.rotate30}
        />
        <Marquee 
          text={t("hero_m2") as any}
          direction="right"
          speed="35s"
          bgColor="#ffffff"
          textColor="#000000"
          fontSize="1.5rem"
          className={styles.marqueeNormal}
        />
        <Marquee 
          text={t("hero_m3") as any}
          direction="left"
          speed="20s"
          bgColor="linear-gradient(90deg, #8a2be2, #ff007f)"
          textColor="#ffffff"
          fontSize="1.5rem"
          className={styles.rotate60}
        />
      </div>
    </section>
  );
}
