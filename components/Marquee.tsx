"use client";

import React from 'react';
import styles from './Marquee.module.css';

interface MarqueeProps {
  text: string[];
  direction?: 'left' | 'right';
  speed?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
  fontSize?: string;
}

export default function Marquee({ 
  text, 
  direction = 'left', 
  speed = '20s',
  bgColor = 'transparent',
  textColor = '#ffffff',
  className = '',
  fontSize = '2.5rem'
}: MarqueeProps) {
  return (
    <div 
      className={`${styles.marqueeContainer} ${className}`} 
      style={{ background: bgColor }}
    >
      <div 
        className={`${styles.marqueeTrack} ${direction === 'right' ? styles.reverse : ''}`}
        style={{ 
          animationDuration: speed,
          color: textColor
        }}
      >
        {/* Triple the items for seamless looping on large screens */}
        {[...text, ...text, ...text, ...text].map((item, index) => (
          <span 
            key={index} 
            className={styles.item}
            style={{ fontSize }}
          >
            {item} <span className={styles.dot}>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
