/**
 * Formats product name with truncation
 * @param {string} name - Product name
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} Formatted product name
 */
export function formatProductName(name, maxLength = 30) {
  if (!name) return 'Product';
  return name.length > maxLength ? `${name.substring(0, maxLength)}...` : name;
}

/**
 * Creates SEO-friendly alt text for product images
 * @param {string} productName - Product name
 * @returns {string} SEO-friendly alt text
 */
export function createImageAlt(productName) {
  return `${productName} - Premium product from mettä muse`;
}

/**
 * Sorts products based on sort option
 * @param {Array} products - Array of products
 * @param {string} sortBy - Sort option
 * @returns {Array} Sorted products
 */
export function sortProducts(products, sortBy) {
  const sorted = [...products];
  
  switch (sortBy) {
    case 'newest':
      return sorted.sort((a, b) => b.id - a.id);
    case 'popular':
      return sorted.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
    case 'price-high':
      return sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
    case 'price-low':
      return sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
    default:
      return sorted;
  }
}

/**
 * Checks if device is mobile
 * @returns {boolean} True if mobile device
 */
export function isMobile() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
}

