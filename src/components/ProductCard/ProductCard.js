"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { formatProductName, createImageAlt } from "@/lib/utils";
import { PRODUCT_CONFIG } from "@/lib/constants";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, priority = false }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const imageUrl = product?.image || "/placeholder-product.jpg";
  const productName = product?.title || "Product";
  const truncatedName = useMemo(
    () => formatProductName(productName, PRODUCT_CONFIG.MAX_NAME_LENGTH),
    [productName]
  );
  const imageAlt = useMemo(() => createImageAlt(productName), [productName]);
  const isOutOfStock = product?.rating?.count === PRODUCT_CONFIG.OUT_OF_STOCK_COUNT;
  const isNewProduct = product?.id <= PRODUCT_CONFIG.NEW_PRODUCT_MAX_ID && !isOutOfStock;

  return (
    <article className={styles.productCard}>
      <div className={`${styles.imageContainer} ${isOutOfStock ? styles.outOfStockImage : ''}`}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={300}
          height={400}
          className={styles.productImage}
          priority={priority}
        />
        {isOutOfStock && (
          <div className={styles.outOfStockOverlay}>
            <span className={styles.outOfStock}>OUT OF STOCK</span>
          </div>
        )}
        {isNewProduct && (
          <span className={styles.newBadge}>NEW PRODUCT</span>
        )}
      </div>
      <div className={styles.productInfo}>
          <h3 className={styles.productName}>{truncatedName.toUpperCase()}</h3>
        <div className={styles.productHeader}>
        <p className={styles.pricingText}>
          <span className={styles.pricingTextSpan}>Sign in</span> or Create an account to see pricing
        </p>
          <button
            className={styles.wishlistButton}
            aria-label="Add to wishlist"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart 
              size={24} 
              fill={isWishlisted ? "#EB4C6B" : "none"} 
              stroke={isWishlisted ? "#EB4C6B" : "currentColor"}
            />
          </button>
        </div>
      </div>
    </article>
  );
}
