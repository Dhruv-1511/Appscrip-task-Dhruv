import ShopClient from "./ShopClient";
import { SEO_CONFIG } from "@/lib/constants";
import styles from "./page.module.css";

export async function generateMetadata() {
  return {
    title: `${SEO_CONFIG.SITE_NAME} | Discover Our Products`,
    description: SEO_CONFIG.DEFAULT_DESCRIPTION,
    alternates: {
      canonical: SEO_CONFIG.BASE_URL,
    },
    openGraph: {
      type: "website",
      site_name: SEO_CONFIG.SITE_NAME,
      title: `${SEO_CONFIG.SITE_NAME} | Discover Our Products`,
      description: SEO_CONFIG.DEFAULT_DESCRIPTION,
      images: [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SEO_CONFIG.SITE_NAME} | Discover Our Products`,
      description: SEO_CONFIG.DEFAULT_DESCRIPTION,
    },
  };
}

export default function ShopPage() {
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
        <ShopClient />
      </div>
    </main>
  );
}
