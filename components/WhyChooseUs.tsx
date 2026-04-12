"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { Syne } from 'next/font/google';
import { useLanguage } from '../context/LanguageContext';
import styles from './WhyChooseUs.module.css';

const syneFont = Syne({ subsets: ['latin'], weight: ['800'] });

const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView] as const;
};

const AnimatedNumber = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  const hasStarted = useRef(false);

  useEffect(() => {
    if (inView && !hasStarted.current) {
      hasStarted.current = true;
      let start = 0;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const CircularPlayButton = () => {
  const text = "CREATIVE. STRATEGIC. PROFESSIONAL.";
  return (
    <div className={styles.playButtonWrapper}>
      <button className="relative w-32 h-32 flex items-center justify-center group focus:outline-none">
        {/* Rotating Text */}
        <div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[8px] font-bold fill-white tracking-[2px]">
              <textPath href="#circlePath">
                {text}
              </textPath>
            </text>
          </svg>
        </div>
        {/* Play Icon Circle */}
        <div className="w-16 h-16 bg-[#29a5c0] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 z-10 box-shadow-[0_0_20px_rgba(41,165,192,0.5)]">
          <Play className="text-black fill-black ml-1" size={24} />
        </div>
      </button>
    </div>
  );
};

const Metric = ({ label, value, inView, delay = 0 }: { label: string; value: number; inView: boolean; delay?: number }) => (
  <div className={styles.metricItem}>
    <div className={styles.metricLabel}>
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className={styles.progressBar}>
      <div 
        className={styles.progressFill} 
        style={{ 
          width: inView ? `${value}%` : '0%',
          transitionDelay: `${delay}ms`
        }} 
      />
    </div>
  </div>
);

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const [statsRef, inView] = useInView(0.2);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.bgTitle} ${syneFont.className}`}>{t("choose_bg")}</div>
        
        <div className={styles.headerRow}>
          <div className={styles.accentBar} />
          <h3 className={`${styles.title} ${syneFont.className}`}>
            {t("choose_title").split('?').map((part, i) => i === 0 ? <React.Fragment key={i}>{part}?<br/></React.Fragment> : part)}
          </h3>
        </div>

        <p className={styles.mainDescription}>
          {t("choose_desc")}
        </p>

        <div className={styles.contentGrid}>
          {/* Left: Images */}
          <div className={styles.imageArea}>
            <div className={styles.mainImgWrapper}>
              <Image 
                src="/chooseus/team.png" 
                alt="Our Team" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            <div className={styles.floatImgWrapper}>
              <Image 
                src="/chooseus/workspace.png" 
                alt="Our Workspace" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            <CircularPlayButton />
          </div>

          {/* Right: Metrics */}
          <div className={styles.capabilityArea}>
            <div className={styles.expertIcon}>
              <Image src="/chooseus/icon1.png" alt="Expert" width={120} height={120} />
            </div>

            <div className={styles.metricsWrapper}>
              <Metric label={t("choose_met1")} value={93} inView={inView} delay={200} />
              <Metric label={t("choose_met2")} value={87} inView={inView} delay={400} />
              <Metric label={t("choose_met3")} value={90} inView={inView} delay={600} />
              <Metric label={t("choose_met4")} value={98} inView={inView} delay={800} />
            </div>

            <div className={styles.growthIcon}>
              <Image src="/chooseus/icon2.png" alt="Growth" width={280} height={150} />
            </div>
          </div>
        </div>

        {/* Stats Footer */}
        <div className={`${styles.statsRow} ${inView ? styles.statsRowVisible : ""}`} ref={statsRef}>
          <div className={styles.statItem}>
            <div className={`${styles.statValue} ${syneFont.className}`}>
              <AnimatedNumber end={120} suffix="+" />
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statLabel}>{t("choose_stat1_label")}</div>
          </div>
          <div className={styles.statItem}>
            <div className={`${styles.statValue} ${syneFont.className}`}>
              <AnimatedNumber end={15} />
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statLabel}>{t("choose_stat2_label")}</div>
          </div>
          <div className={styles.statItem}>
            <div className={`${styles.statValue} ${syneFont.className}`}>
              <AnimatedNumber end={200} suffix="+" />
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statLabel}>{t("choose_stat3_label")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
