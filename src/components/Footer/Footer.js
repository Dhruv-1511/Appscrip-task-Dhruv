"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import styles from "./Footer.module.css";
import NewsletterForm from "./NewsletterForm";
import usaFlag from "@/assets/usa-flag.png";
import instagramIcon from "@/assets/Instagram.png";
import linkedinIcon from "@/assets/linkedin.png";
import gPay from "@/assets/g-pay.png";
import mastercard from "@/assets/mastercard.png";
import paypal from "@/assets/paypal.png";
import amex from "@/assets/amex.png";
import applePay from "@/assets/apple-pay.png";
import shopPay from "@/assets/shop-pay.png";

export default function Footer() {
  const [openColumns, setOpenColumns] = useState({});

  const toggleColumn = (columnName) => {
    setOpenColumns(prev => ({
      ...prev,
      [columnName]: !prev[columnName]
    }));
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.newsletterSection}>
            <h3 className={styles.sectionTitle}>BE THE FIRST TO KNOW</h3>
            <p className={styles.newsletterText}>
              Sign up for updates from mettä muse.
            </p>
            <NewsletterForm />
          </div>

          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>CONTACT US</h3>
            <p className={styles.contactText}>+44 221 133 5360</p>
            <p className={styles.contactEmail}>customercare@mettamuse.com</p>

            <div className={styles.currencySection}>
              <h3 className={styles.sectionTitle}>CURRENCY</h3>
              <div className={styles.currencySelector}>
                <Image
                  src={usaFlag}
                  alt="USA Flag"
                  width={20}
                  height={15}
                  className={styles.flagIcon}
                />
                <div className={styles.star1} />
                <span className={styles.currencyText}> USD</span>
              </div>
              <p className={styles.currencyNote}>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.footerBottom}>
          <div className={styles.footerColumn}>
            <button 
              className={styles.columnTitleButton}
              onClick={() => toggleColumn('mettamuse')}
            >
              <h4 className={styles.columnTitle}>mettä muse</h4>
              <ChevronDown 
                size={16} 
                className={`${styles.columnChevron} ${openColumns.mettamuse ? styles.chevronRotated : ''}`} 
              />
            </button>
            <ul className={`${styles.footerLinks} ${openColumns.mettamuse ? styles.footerLinksOpen : ''}`}>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/stories">Stories</a>
              </li>
              <li>
                <a href="/artisans">Artisans</a>
              </li>
              <li>
                <a href="/boutiques">Boutiques</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
              <li>
                <a href="/eu-compliances-docs">EU Compliances Docs</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <button 
              className={styles.columnTitleButton}
              onClick={() => toggleColumn('quicklinks')}
            >
              <h4 className={styles.columnTitle}>QUICK LINKS</h4>
              <ChevronDown 
                size={16} 
                className={`${styles.columnChevron} ${openColumns.quicklinks ? styles.chevronRotated : ''}`} 
              />
            </button>
            <ul className={`${styles.footerLinks} ${openColumns.quicklinks ? styles.footerLinksOpen : ''}`}>
              <li>
                <a href="/orders-shipping">Orders & Shipping</a>
              </li>
              <li>
                <a href="/join-login-seller">Join/Login as a Seller</a>
              </li>
              <li>
                <a href="/payment-pricing">Payment & Pricing</a>
              </li>
              <li>
                <a href="/return-refunds">Return & Refunds</a>
              </li>
              <li>
                <a href="/faqs">FAQs</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-conditions">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <div className={styles.footerColumn}>
              <button 
                className={styles.columnTitleButton}
                onClick={() => toggleColumn('followus')}
              >
                <h4 className={styles.columnTitle}>FOLLOW US</h4>
                <ChevronDown 
                  size={16} 
                  className={`${styles.columnChevron} ${openColumns.followus ? styles.chevronRotated : ''}`} 
                />
              </button>
              <div className={`${styles.socialLinks} ${openColumns.followus ? styles.socialLinksOpen : ''}`}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Image
                    src={instagramIcon}
                    alt="Instagram"
                    width={32}
                    height={32}
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Image
                    src={linkedinIcon}
                    alt="LinkedIn"
                    width={32}
                    height={32}
                  />
                </a>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>mettä muse ACCEPTS</h4>
              <div className={styles.paymentMethods}>
                <Image src={gPay} alt="Google Pay" width={56} height={35} />
                <Image
                  src={mastercard}
                  alt="Mastercard"
                  width={56}
                  height={35}
                />
                <Image src={paypal} alt="PayPal" width={56} height={35} />
                <Image
                  src={amex}
                  alt="American Express"
                  width={56}
                  height={35}
                />
                <Image src={applePay} alt="Apple Pay" width={56} height={35} />
                <Image src={shopPay} alt="Shop Pay" width={56} height={35} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
