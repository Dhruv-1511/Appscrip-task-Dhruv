import styles from './LoadingSkeleton.module.css';

export default function LoadingSkeleton() {
  return (
    <div className={styles.skeletonContainer}>
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className={styles.skeletonCard}>
          <div className={styles.skeletonImage} />
          <div className={styles.skeletonContent}>
            <div className={styles.skeletonTitle} />
            <div className={styles.skeletonText} />
          </div>
        </div>
      ))}
    </div>
  );
}

