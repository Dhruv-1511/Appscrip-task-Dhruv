"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import FilterSidebar from "@/components/FilterSidebar/FilterSidebar";
import LoadingSkeleton from "@/components/Loading/LoadingSkeleton";
import { SORT_OPTIONS, PRODUCT_CONFIG } from "@/lib/constants";
import { sortProducts, isMobile } from "@/lib/utils";
import styles from "./page.module.css";
import { ChevronLeft, ChevronRight, ChevronDown, Check } from "lucide-react";

export default function ShopClient({ initialProducts, itemCount }) {
  const [filterOpen, setFilterOpen] = useState(true);
  const [sortBy, setSortBy] = useState("recommended");
  const [products, setProducts] = useState(initialProducts);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setFilterOpen(!isMobile());
    };

    checkMobile();
    const handleResize = () => checkMobile();
    window.addEventListener("resize", handleResize);

    // Only fetch if products are empty (likely due to server-side failure)
    if (products.length === 0) {
      setIsLoading(true);
      fetch("https://fakestoreapi.com/products?limit=20")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Client-side fetch failed:", err);
          setIsLoading(false);
        });
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [products.length]);

  const sortedProducts = useMemo(
    () => sortProducts(products, sortBy),
    [products, sortBy]
  );

  const selectedOption = useMemo(
    () => SORT_OPTIONS.find((opt) => opt.value === sortBy),
    [sortBy]
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [dropdownOpen]);

  return (
    <div className={styles.shopContainer}>
      <div className={styles.shopHeader}>
        <div className={styles.headerLeft}>
          <span className={`${styles.itemCount} ${styles.hideOnTablet}`}>
            {itemCount} ITEMS
          </span>
          {filterOpen ? (
            <>
              <button
                className={`${styles.filterButton} ${styles.hideOnTablet}`}
                onClick={() => setFilterOpen(false)}
              >
                <ChevronLeft size={16} />{" "}
                <span className={styles.filterText}>HIDE FILTER</span>
              </button>
            </>
          ) : (
            <button
              className={`${styles.filterButton} ${styles.hideOnTablet}`}
              onClick={() => setFilterOpen(true)}
            >
              <ChevronRight size={16} />{" "}
              <span className={styles.filterText}>SHOW FILTER</span>
            </button>
          )}
          <button
            className={`${styles.filterTextButton} ${styles.showOnTablet}`}
            onClick={() => setFilterOpen(true)}
          >
            FILTER
          </button>
        </div>
        <div className={styles.sortContainer} ref={dropdownRef}>
          <button
            className={styles.sortButton}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-label="Sort products"
          >
            {selectedOption?.label}
            <ChevronDown
              size={16}
              className={`${styles.chevronIcon} ${
                dropdownOpen ? styles.chevronRotated : ""
              }`}
            />
          </button>
          {dropdownOpen && (
            <div className={styles.dropdownPanel} role="menu">
              {SORT_OPTIONS.map((option) => {
                const isSelected = sortBy === option.value;
                return (
                  <button
                    key={option.value}
                    className={`${styles.dropdownOption}`}
                    onClick={() => {
                      setSortBy(option.value);
                      setDropdownOpen(false);
                    }}
                  >
                    <span className={styles.checkIconContainer}>
                      {isSelected && (
                        <Check size={16} className={styles.checkIcon} />
                      )}
                    </span>
                    <span
                      className={
                        isSelected
                          ? styles.dropdownOptionTextSelected
                          : styles.dropdownOptionText
                      }
                    >
                      {option.label}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className={styles.shopContent}>
        <div
          className={`${styles.overlay} ${filterOpen ? styles.open : ""}`}
          onClick={() => setFilterOpen(false)}
        ></div>
        <aside
          className={`${styles.sidebarWrapper} ${
            filterOpen ? styles.open : ""
          }`}
        >
          <FilterSidebar
            isOpen={filterOpen}
            onToggle={() => setFilterOpen(!filterOpen)}
            itemCount={itemCount}
          />
        </aside>

        <section className={styles.productsSection}>
          <h2 className={styles.productsHeading}>Our Products</h2>
          {isLoading ? (
            <LoadingSkeleton />
          ) : sortedProducts.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No products found. Please try again later.</p>
            </div>
          ) : (
            <div className={styles.productsGrid}>
              {sortedProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  priority={index < PRODUCT_CONFIG.PRIORITY_IMAGES_COUNT}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
