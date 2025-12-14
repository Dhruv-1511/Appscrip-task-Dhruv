import Link from 'next/link';
import styles from './not-found.module.css';

export const metadata = {
  title: '404 - Page Not Found | mettä muse',
  description: 'The page you are looking for could not be found. Return to our homepage to discover our premium products.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "404 - Page Not Found",
    description: "The requested page could not be found",
    url: "https://mettamuse.com/404",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>404</h1>
            <h2 className={styles.subtitle}>Page Not Found</h2>
            <p className={styles.description}>
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <div className={styles.actions}>
              <Link href="/" className={styles.homeButton}>
                Return to Homepage
              </Link>
              <Link href="/" className={styles.shopButton}>
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

