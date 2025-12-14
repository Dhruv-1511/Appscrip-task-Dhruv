"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, Heart, ShoppingBag, User, ChevronDown, X } from 'lucide-react';
import navElementIcon from '@/assets/nav-element.png';
import logoIcon from '@/assets/logo.png';
import styles from './Header.module.css';

export default function Header() {
  const [navSidebarOpen, setNavSidebarOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setNavSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setNavSidebarOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBanner}>
        <div className={styles.bannerItem}>
          <Image 
            src={navElementIcon}
            alt="Navigation element icon" 
            width={16} 
            height={16} 
            className={styles.bannerIcon}
          />
          <span className={styles.bannerText}>Lorem  ipsum  dolor</span>
        </div>
        <div className={styles.bannerItem}>
          <Image 
            src={navElementIcon}
            alt="Navigation element icon" 
            width={16} 
            height={16} 
            className={styles.bannerIcon}
          />
          <span className={styles.bannerText}>Lorem  ipsum  dolor</span>
        </div>
        <div className={styles.bannerItem}>
          <Image 
            src={navElementIcon}
            alt="Navigation element icon" 
            width={16} 
            height={16} 
            className={styles.bannerIcon}
          />
          <span className={styles.bannerText}>Lorem  ipsum  dolor</span>
        </div>
      </div>
      <nav className={styles.nav}>
        <div className={styles.navTop}>
          <div className={styles.navLeft}>
            <button className={styles.menuButton} aria-label="Menu" onClick={handleMenuButtonClick}>
              <Menu size={24} />
            </button>
            <Image 
              src={logoIcon}
              alt="mettä muse logo" 
              width={36} 
              height={36} 
              className={styles.logoIcon}
            />
          </div>
          <div className={styles.navCenterTop}>
            <span className={styles.logoText}>LOGO</span>
          </div>
          <div className={styles.navRight}>
            <button className={styles.iconButton} aria-label="Search">
              <Search size={20} />
            </button>
            <button className={styles.iconButton} aria-label="Wishlist">
              <Heart size={20} />
            </button>
            <button className={styles.iconButton} aria-label="Cart">
              <ShoppingBag size={20} />
            </button>
            <button className={`${styles.iconButton} ${styles.hideOnTablet}`} aria-label="Account">
              <User size={20} />
            </button>
            <div className={`${styles.languageSelectorWrapper} ${styles.hideOnTablet}`}>
              <select className={styles.languageSelector} aria-label="Language">
                <option value="eng">ENG</option>
                <option value="es">ES</option>
                <option value="fr">FR</option>
              </select>
              <ChevronDown size={16} className={styles.chevronIcon} />
            </div>
          </div>
        </div>
        <div className={styles.navBottom}>
          <div className={styles.navCenter}>
            <Link href="/" className={styles.navLink}>SHOP</Link>
            <Link href="/" className={styles.navLink}>SKILLS</Link>
            <Link href="/" className={styles.navLink}>STORIES</Link>
            <Link href="/" className={styles.navLink}>ABOUT</Link>
            <Link href="/" className={styles.navLink}>CONTACT US</Link>
          </div>
        </div>
      </nav>
      <div className={styles.breadcrumbsTablet}>
        <Link href="/" className={styles.breadcrumbLink}>HOME</Link>
        <span className={styles.breadcrumbSeparator}>|</span>
        <Link href="/" className={styles.breadcrumbLinkActive}>SHOP</Link>
      </div>
      <>
        <div 
          className={`${styles.navOverlay} ${navSidebarOpen ? styles.open : ''}`}
          onClick={handleCloseSidebar}
        ></div>
        <div className={`${styles.navSidebar} ${navSidebarOpen ? styles.open : ''}`}>
          <button 
            className={styles.closeButton}
            onClick={handleCloseSidebar}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <nav className={styles.sidebarNav}>
            <Link href="/" className={styles.sidebarNavLink} onClick={handleCloseSidebar}>SHOP</Link>
            <Link href="/" className={styles.sidebarNavLink} onClick={handleCloseSidebar}>SKILLS</Link>
            <Link href="/" className={styles.sidebarNavLink} onClick={handleCloseSidebar}>STORIES</Link>
            <Link href="/" className={styles.sidebarNavLink} onClick={handleCloseSidebar}>ABOUT</Link>
            <Link href="/" className={styles.sidebarNavLink} onClick={handleCloseSidebar}>CONTACT US</Link>
          </nav>
        </div>
      </>
    </header>
  );
}

