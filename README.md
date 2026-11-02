# AM Jewellery ✦ Luxury Digital Flagship

An ultra-luxury jewellery digital flagship experience featuring **interactive Three.js 3D WebGL scenes, real-time metal/gemstone shaders, custom CAD caliper HUD, and responsive Framer Motion animations**.

---

## ✦ Features

- **Golden AM Jewellery Emblem & Typography**: Refined luxury brand identity featuring Antonio Bold uppercase typography and custom vector assets.
- **Interactive 3D Bench & Loupe**: Three.js WebGL orbital controls, real-time lighting shaders, and mandrel temperature scrub controls.
- **31 Fully Built Pages**:
  - Full product catalog (Rings, Necklaces, Earrings, Bands, Solitaires)
  - Interactive Custom Bespoke flow (`/custom`)
  - The Bench craftsman experience (`/the-bench`)
  - Lookbook, Journal editorial posts, Care guides, and Contact concierge.
- **Production-Ready Multi-Page Architecture**:
  - Rollup/Vite multi-page static compilation.
  - Client-side React / Framer localized hydration.
  - 100% SEO-optimized with OpenGraph tags, modern WebP/PNG assets, and clean URLs.

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` to view the live site with HMR.

### 3. Production Build
```bash
npm run build
```
Compiles all 31 HTML pages and bundled JavaScript/CSS into `./dist`.

### 4. Local Preview
```bash
npm run preview
```
Previews the production `./dist` build locally.

---

## 🚀 Deploy to Vercel

This repository is pre-configured for **zero-configuration deployment on Vercel**:

- **Framework Preset**: Other / Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Clean URLs**: Enabled (`/custom` routes automatically resolve to `/custom/index.html`)

Simply import this repository on [Vercel](https://vercel.com) and deploy!
