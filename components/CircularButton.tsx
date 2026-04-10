"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from './CircularButton.module.css';

interface CircularButtonProps {
  text?: string;
  onClick?: () => void;
  size?: number;
  className?: string;
}

export default function CircularButton({ 
  text = "Creative . strategic . professionnel . ", 
  onClick,
  size = 150,
  className
}: CircularButtonProps) {
  return (
    <div 
      className={`${styles.container} ${className || ''}`} 
      onClick={onClick}
      style={{ width: size, height: size }}
    >
      <div className={styles.rotatingText}>
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -43, 0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0"
            />
          </defs>
          <text className={styles.text}>
            <textPath xlinkHref="#circlePath">
              {text.repeat(2)} 
            </textPath>
          </text>
        </svg>
      </div>
      <div className={styles.iconWrapper}>
        <ArrowUpRight size={size * 0.22} strokeWidth={1.5} />
      </div>
    </div>
  );
}
