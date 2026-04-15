import React from 'react';
import styles from './AppLoader.module.css';
import { Syne } from 'next/font/google';

const syne = Syne({ subsets: ['latin'], weight: ['800'] });

const AppLoader = () => {
  const slogan = "STRATEGIC . PROFESSIONAL . CREATIVE . ";
  
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.circularLoader}>
        <svg className={styles.rotatingText} viewBox="0 0 100 100">
          <defs>
            <path
              id="loaderPath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text fill="#29a5c0" fontSize="7" fontWeight="bold" letterSpacing="1.5" className={syne.className}>
            <textPath xlinkHref="#loaderPath">
              {slogan} {slogan}
            </textPath>
          </text>
        </svg>
        <div className={styles.centerDot}>
            <div className={styles.pulse} />
        </div>
      </div>
    </div>
  );
};

export default AppLoader;
