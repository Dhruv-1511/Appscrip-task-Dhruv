## 🚀 Features

- **Performance First**: Optimized LCP (Largest Contentful Paint) and minimized layout shifts (CLS).
- **SEO Optimized**: Dynamic metadata, structured data (JSON-LD), and semantic HTML.
- **Responsive Design**: Fluid layouts adapting seamlessly from mobile to 4K desktops.
- **Accessibility (a11y)**: WCAG AA compliant navigation, contrast ratios, and screen reader support.
- **Robust Data Fetching**: Hybrid approach using Server-Side Rendering (SSR) with Client-Side Fallbacks for maximum 

reliability.
- **Clean Architecture**: Modular component structure with CSS Modules for scoped styling.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: React 19
- **Styling**: CSS Modules, PostCSS
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter (Self-hosted via `next/font`), Simplon Norm (Local)
- **Deployment**: Vercel

## 🏗️ Project Structure

```bash
src/
├── app/
│   ├── layout.js          # Root layout with Font Optimization
│   ├── page.js            # Server Component (Data Fetching / Metadata)
│   ├── ShopClient.js      # Main Client Component (State / Filtering)
│   ├── ShopPageClient.js  # Hydration Boundary Wrapper
│   └── globals.css        # Global Variables & Reset
└── components/
    ├── Header/            # Responsive Header with Mega Menu
    ├── Footer/            # SEO-rich Footer
    ├── FilterSidebar/     # Dynamic Filtering System
    ├── ProductCard/       # Optimized Product Display
    └── Loading/           # Skeleton States
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/Dhruv-1511/Appscrip-task-Dhruv.git
    cd Appscrip-task-Dhruv
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    ```

4.  **Open in browser**
    Navigate to [http://localhost:3000](http://localhost:3000)

## ⚡ Performance Optimizations

- **Font Optimization**: Google Fonts (`Inter`) are self-hosted via `next/font` to eliminate layout shifts and third-party requests.
- **Image Optimization**: Critical product images use `priority={true}` for instant LCP. All images are lazy-loaded and correctly sized.
- **Hydration Safety**: Responsive components implement `mounted` checks to prevent server/client mismatch errors.

## 🐛 Known Technical Decisions

### API & Vercel Usage

This project uses `fakestoreapi.com`. Due to Vercel IP blocking issues with this specific public API, a robust **Client-Side Fallback** mechanism was implemented:

- The server attempts to pre-render products (SSR).
- If the API blocks the server request, the client (browser) seamlessly fetches the data, ensuring the user always sees content.

## 📦 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

```bash
npm run build
npm start
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Developed by Dhruv**
