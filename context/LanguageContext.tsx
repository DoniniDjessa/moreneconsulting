"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navbar
    home: "Accueil",
    about: "À Propos",
    services: "Services",
    pages: "Pages",
    contact: "Contact",
    getStarted: "Commencer",
    // Hero
    hero_title: "Distinguez-vous. Développez-vous. Bâtissez un moteur de revenus durable.",
    hero_subtext: "Fondé par un ancien spécialiste Google Ads",
    hero_desc: "Gestion Social Media & Agence Créative pour Entreprises & Marques.",
    // Services Submenu
    service_web: "Développement Web",
    service_design: "Stratégie Design",
    service_seo: "Optimisation SEO",
    // Pages Submenu
    page_team: "Notre Équipe",
    page_careers: "Carrières",
    page_faq: "Support FAQ",
    // About
    about_bg: "À PROPOS",
    about_subtitle: "Pourquoi Reboost ? Le partenaire idéal pour votre marque",
    about_desc: "Chez Reboost, nous ne nous contentons pas de gérer vos réseaux sociaux — nous aidons votre marque à croître et à se démarquer. Avec une approche créative et stratégique, notre équipe garantit que votre contenu atteint la bonne audience, booste l'engagement et génère des résultats concrets.",
    about_btn_learn: "En savoir plus",
    about_btn_work: "Voir comment ça marche",
    about_stat: "Évalué 4.9 Étoiles"
  },
  en: {
    // Navbar
    home: "Home",
    about: "About",
    services: "Services",
    pages: "Pages",
    contact: "Contact",
    getStarted: "Get Started",
    // Hero
    hero_title: "Stand Out. Scale Up. Build a Sustainable Revenue Engine.",
    hero_subtext: "Founded by a former Google Ads Specialist",
    hero_desc: "Social Media Management & Creative Agency for Businesses & Brands.",
    // Services Submenu
    service_web: "Web Development",
    service_design: "Design Strategy",
    service_seo: "SEO Optimization",
    // Pages Submenu
    page_team: "Our Team",
    page_careers: "Careers",
    page_faq: "FAQ Support",
    // About
    about_bg: "ABOUT US",
    about_subtitle: "Why Reboost? The Right Partner for Your Brand",
    about_desc: "At Reboost, we don't just handle social media—we help your brand grow and stand out. With a creative and strategic approach, our team ensures your content reaches the right audience, boosts engagement, and drives real results.",
    about_btn_learn: "Learn More",
    about_btn_work: "See How It Work",
    about_stat: "4.9 Star Reviewer"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("fr");

  const t = (key: string) => {
    return (translations[lang] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
