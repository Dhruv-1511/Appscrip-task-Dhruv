import ShopPageClient from "./ShopPageClient";
import { API_CONFIG, SEO_CONFIG, PRODUCT_CONFIG } from "@/lib/constants";

async function getProducts() {
  try {
    const res = await fetch(
      `${API_CONFIG.BASE_URL}/products?limit=${API_CONFIG.PRODUCTS_LIMIT}`,
      {
        next: { revalidate: API_CONFIG.REVALIDATE_TIME },
        headers: {
          "Content-Type": "application/json",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
      }
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch products: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching products:", error);
    // Return empty array to prevent page crash
    return [];
  }
}

export async function generateMetadata() {
  const products = await getProducts();
  const firstProduct = products[0];

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
      images: firstProduct?.image ? [firstProduct.image] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SEO_CONFIG.SITE_NAME} | Discover Our Products`,
      description: SEO_CONFIG.DEFAULT_DESCRIPTION,
    },
  };
}

export default async function ShopPage() {
  const products = await getProducts();
  const itemCount = products.length;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Discover Our Products",
    description: "Explore our curated collection of premium products",
    url: "https://mettamuse.com",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: itemCount,
      itemListElement: products
        .slice(0, PRODUCT_CONFIG.PRIORITY_IMAGES_COUNT * 2.5)
        .map((product, index) => {
          const productData = {
            "@type": "Product",
            position: index + 1,
            name: product.title,
            image: product.image,
            description: product.description,
            brand: {
              "@type": "Brand",
              name: "mettä muse",
            },
            offers: {
              "@type": "Offer",
              availability:
                product.rating?.count > 0
                  ? "https://schema.org/InStock"
                  : "https://schema.org/OutOfStock",
              priceCurrency: "USD",
              url: `https://mettamuse.com/products/${product.id}`,
            },
          };

          if (product.rating) {
            productData.aggregateRating = {
              "@type": "AggregateRating",
              ratingValue: product.rating.rate,
              reviewCount: product.rating.count,
            };
          }

          return productData;
        }),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ShopPageClient products={products} itemCount={itemCount} />
    </>
  );
}
