// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://fakestoreapi.com',
  PRODUCTS_LIMIT: 20,
  REVALIDATE_TIME: 3600, // 1 hour
};

// Breakpoints
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
};

// Sort Options
export const SORT_OPTIONS = [
  { value: 'recommended', label: 'RECOMMENDED' },
  { value: 'newest', label: 'NEWEST FIRST' },
  { value: 'popular', label: 'POPULAR' },
  { value: 'price-high', label: 'PRICE: HIGH TO LOW' },
  { value: 'price-low', label: 'PRICE: LOW TO HIGH' },
];

// SEO Configuration
export const SEO_CONFIG = {
  SITE_NAME: 'mettä muse',
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://mettamuse.com',
  DEFAULT_DESCRIPTION: 'Explore our curated collection of premium products. Discover unique items including backpacks, accessories, and more.',
};

// Product Configuration
export const PRODUCT_CONFIG = {
  MAX_NAME_LENGTH: 30,
  OUT_OF_STOCK_COUNT: 259,
  NEW_PRODUCT_MAX_ID: 3,
  PRIORITY_IMAGES_COUNT: 4,
};

