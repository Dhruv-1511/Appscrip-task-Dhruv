export function formatProductName(name, maxLength = 30) {
  if (!name) return 'Product';
  return name.length > maxLength ? `${name.substring(0, maxLength)}...` : name;
}

export function createImageAlt(productName) {
  return `${productName} - Premium product from mettä muse`;
}

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

export function isMobile() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
}

