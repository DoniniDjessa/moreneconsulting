"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, LayoutGrid, ArrowUpRight } from "lucide-react";
import { Poppins, Syne } from "next/font/google";
import { useLanguage } from "../context/LanguageContext";
import styles from "./Navbar.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });
const syne = Syne({ subsets: ["latin"], weight: ["800"], display: "swap" });

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactSidebarOpen, setIsContactSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const { lang, setLang, t } = useLanguage();

  // Handle scroll for sticky background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen || isContactSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen, isContactSidebarOpen]);

  // Toggle specific mobile dropdown
  const toggleMobileDropdown = (menu: string) => {
    setOpenMobileDropdown(openMobileDropdown === menu ? null : menu);
  };

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/#about" },
    { label: t("services"), href: "/#solutions" },
    {
      label: t("pages"),
      href: "#",
      children: [
        { label: t("Portfolio"), href: "/#portfolio" },
        { label: "FAQ", href: "/#faq" },
        { label: t("test_bg"), href: "/#testimonials" },
      ],
    },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${poppins.className}`}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Link href="/" className={`${styles.logo} ${syne.className}`}>
            <img src="/logo.png" alt="Logo" style={{ height: '40px', width: 'auto' }} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className={item.children ? styles.dropdownWrapper : ""}
            >
              <Link href={item.href} className={styles.navLink}>
                {item.label}
                {item.children && <ChevronDown size={14} />}
              </Link>
              
              {/* Desktop Dropdown */}
              {item.children && (
                <div className={styles.dropdownMenu}>
                  {item.children.map((child, cIdx) => (
                    <Link
                      key={cIdx}
                      href={child.href}
                      className={styles.dropdownItem}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Language Switcher Desktop */}
        <div className={styles.languageSwitcher}>
          <button 
            className={`${styles.langBtn} ${lang === 'fr' ? styles.active : ''}`}
            onClick={() => setLang('fr')}
          >
            FR
          </button>
          <button 
            className={`${styles.langBtn} ${lang === 'en' ? styles.active : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>

        {/* Desktop CTA Button */}
        <div className={styles.ctaGroup}>
          <button className={styles.ctaButton}>
            {t("getStarted")}
            <ArrowUpRight size={18} />
          </button>
          
          <button 
            className={styles.contactToggleBtn}
            onClick={() => setIsContactSidebarOpen(true)}
            aria-label="Open Contact Information"
          >
            <LayoutGrid size={22} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Navigation Menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileMenuOverlay} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`${styles.mobileMenuPanel} ${
          isMobileMenuOpen ? styles.open : ""
        } ${poppins.className}`}
      >
        <div className={styles.mobileMenuHeader}>
          <div className={styles.mobileLogoWrapper}>
             <img src="/logo.png" alt="Logo" style={{ height: '36px', width: 'auto' }} />
          </div>
          <button
            className={styles.mobileMenuBtn}
            style={{ display: "flex" }} // Override none for mobile layout logic
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
          >
            <X size={28} />
          </button>
        </div>

        <div className={styles.mobileNav}>
          {navItems.map((item, idx) => (
            <div key={idx} className={item.children ? styles.mobileDropdownGroup : ""}>
              {item.children ? (
                <>
                  <button
                    className={styles.mobileNavLink}
                    onClick={() => toggleMobileDropdown(item.label)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={20}
                      style={{
                        transform:
                          openMobileDropdown === item.label
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </button>
                  <div
                    className={styles.mobileDropdownList}
                    style={{
                      display:
                        openMobileDropdown === item.label ? "flex" : "none",
                    }}
                  >
                    {item.children.map((child, cIdx) => (
                      <Link
                        key={cIdx}
                        href={child.href}
                        className={styles.mobileDropdownItem}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <div className={styles.mobileDropdownGroup} style={{ borderBottom: "1px solid rgba(0,0,0,0.05)", paddingBottom: "1rem" }}>
                  <Link
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.mobileCtaWrapper}>
          <div className={styles.mobileLangSwitcher}>
            <button 
              className={`${styles.langBtn} ${lang === 'fr' ? styles.active : ''}`}
              onClick={() => setLang('fr')}
            >
              FR
            </button>
            <button 
              className={`${styles.langBtn} ${lang === 'en' ? styles.active : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <button className={styles.mobileCtaButton}>
            {t("getStarted")}
            <ArrowUpRight size={20} />
          </button>

          {/* Mobile Contact Info */}
          <div className={styles.mobileContactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.flag}>🇮🇪</span>
              <a href="tel:+353870395175">+353 87 039 5175</a>
            </div>
            <div className={styles.divider}>|</div>
            <div className={styles.contactItem}>
              <span className={styles.flag}>🇨🇮</span>
              <a href="tel:+2250566842033">+225 05 66 84 20 33</a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Sidebar Panel (Desktop Overlay) */}
      <div
        className={`${styles.contactOverlay} ${
          isContactSidebarOpen ? styles.open : ""
        }`}
        onClick={() => setIsContactSidebarOpen(false)}
      />
      <div
        className={`${styles.contactPanel} ${
          isContactSidebarOpen ? styles.open : ""
        } ${poppins.className}`}
      >
        <div className={styles.contactPanelHeader}>
          <h3 className={syne.className}>CONTACT US</h3>
          <button onClick={() => setIsContactSidebarOpen(false)}>
            <X size={28} />
          </button>
        </div>
        
        <div className={styles.contactPanelContent}>
          <div className={styles.panelSection}>
            <p className={styles.panelLabel}>Europe Office</p>
            <div className={styles.panelContactItem}>
              <span className={styles.panelFlag}>🇮🇪</span>
              <a href="tel:+353870395175" className={styles.panelNumber}>+353 87 039 5175</a>
            </div>
          </div>

          <div className={styles.panelSeparator} />

          <div className={styles.panelSection}>
            <p className={styles.panelLabel}>Africa Office</p>
            <div className={styles.panelContactItem}>
              <span className={styles.panelFlag}>🇨🇮</span>
              <a href="tel:+2250566842033" className={styles.panelNumber}>+225 05 66 84 20 33</a>
            </div>
          </div>

          <div className={styles.panelFooter}>
            <p>Let's build something sustainable together.</p>
          </div>
        </div>
      </div>
    </>
  );
}
