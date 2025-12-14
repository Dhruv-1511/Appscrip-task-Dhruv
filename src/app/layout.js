import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export async function generateMetadata() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://mettamuse.com";

  return {
    metadataBase: new URL(baseUrl),
    title: "mettä muse - Premium E-commerce Shop",
    description:
      "Explore mettä muse's curated collection of premium products. Discover unique items including backpacks, accessories, and more.",
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      site_name: "mettä muse",
      title: "mettä muse - Premium E-commerce Shop",
      description:
        "Discover our curated collection of premium products. Explore unique items including backpacks, accessories, and more.",
    },
    twitter: {
      card: "summary_large_image",
      title: "mettä muse - Premium E-commerce Shop",
      description:
        "Discover our curated collection of premium products. Explore unique items including backpacks, accessories, and more.",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
