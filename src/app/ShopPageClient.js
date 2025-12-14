"use client";

import ShopClient from "./ShopClient";
import styles from "./page.module.css";

export default function ShopPageClient({ products, itemCount }) {
  return (
    <main className={styles.main}>
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.heroDescription}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>

      <div className={styles.contentWrapper}>
        <ShopClient initialProducts={products} itemCount={itemCount} />
      </div>
    </main>
  );
}
