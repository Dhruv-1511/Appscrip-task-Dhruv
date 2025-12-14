# mettä muse - E-commerce Shop

A modern, responsive e-commerce shop built with Next.js 16, featuring Server-Side Rendering (SSR), SEO optimization, and clean code structure.

## Features

- ✅ **Next.js 16** - React framework with App Router
- ✅ **Server-Side Rendering** - Product data fetched server-side for optimal SEO
- ✅ **Responsive Design** - Mobile, tablet, and desktop support
- ✅ **SEO Optimized** - Metadata, schema markup, semantic HTML, and proper heading structure
- ✅ **Accessibility** - WCAG compliant with proper contrast ratios and ARIA labels
- ✅ **Clean Architecture** - Well-organized components with CSS Modules
- ✅ **Minimal Dependencies** - Only essential packages (Next.js, React, lucide-react)

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with Header/Footer
│   ├── page.js            # Home/Shop page (SSR)
│   ├── ShopClient.js       # Client-side shop logic
│   ├── ShopPageClient.js  # Shop page wrapper
│   ├── page.module.css    # Shop page styles
│   ├── not-found.js       # 404 page
│   └── globals.css        # Global styles
└── components/
    ├── Header/            # Header component
    ├── Footer/             # Footer component
    ├── ProductCard/       # Product card component
    └── FilterSidebar/      # Filter sidebar component
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## SEO & Accessibility

- Page titles and meta descriptions
- H1 and H2 heading structure
- Schema.org JSON-LD markup
- SEO-friendly image alt text
- Open Graph and Twitter Card metadata
- WCAG AA contrast compliance

## Responsive Design

- **Mobile**: < 768px (2 columns)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3 columns)

## API

Uses [FakeStoreAPI](https://fakestoreapi.com/) for product data. All data is fetched server-side for optimal SEO and performance.

## Tech Stack

- **Framework**: Next.js 16
- **Language**: JavaScript (React)
- **Styling**: CSS Modules
- **Icons**: lucide-react
