# Anandovsky Digital Asset Gallery

> **Curated AI Art & Digital Assets Marketplace**  
> *A clean, modern, responsive single-page web application featuring algorithmic art, stippling dotwork, futuristic landscapes, and persistent client-side collection curation.*

---

## 🎨 Project Overview & Visual Theme

**Anandovsky Digital Asset Gallery** is engineered with a light cream and soft blue background theme (`#FAF8F5` cream and `#EBF3FA` / `#3B82F6` soft sky and royal blues), subtle warm border framing, crisp glassmorphic elevation headers, and typography inspired by modern luxury editorial design.

### Key Visual & Technical Highlights:
- **Theme Palette:** Warm Ivory Cream (`#FAF8F5`, `#F3EFE6`) paired with Soft Slate Blue (`#EFF6FF`, `#2563EB`, `#1E3A8A`).
- **Typography:** `Outfit` and `Plus Jakarta Sans` with `Cinzel` serif branding accents.
- **Icons:** Crisp vector Lucide icons.
- **Zero-Dependency Core:** Self-contained single-page architecture that runs instantly in any modern web browser.

---

## 🚀 Core Features & Architecture

### 1. Header & Dynamic Navigation
- **Branding:** "Anandovsky Digital Asset Gallery" with subtitle *"Curated AI Art & Digital Assets"*.
- **Quick Navigation & Genre Filter Tabs:** Real-time filter pills with dynamic count badges:
  - *All Assets*
  - *Pointillism & Stippling*
  - *Abstract*
  - *Landscapes*
  - *Portraits*
  - *Concept Art*
  - *(Dynamically displays any custom categories added via Admin mode)*
- **Universal Real-Time Search Bar:** Instant debounced filtering across title, description, tags, prompt parameters, and AI model/generator.
- **Header Actions:** Quick asset counter badge, status filter dropdown (*Available for License*, *Print Ready*, *Free Blueprint*), sort order selector, and curator admin login trigger.

### 2. Asset Display Grid & Card Structure
- **Responsive Masonry Grid:** Adaptive 1-column (mobile), 2-column (tablet), and 3-column (desktop/ultrawide) layouts.
- **Card Elements:**
  - High-resolution image preview with smooth scale-up hover zoom.
  - Floating license availability badge (*Available for License*, *Print Ready*, *Free Blueprint*).
  - Categorical badge color-coded by genre.
  - Title & short description snippet.
  - Interactive, clickable tag pills (clicking any tag instantly filters the entire gallery).
  - Quick technical indicators (AI model & native resolution).
  - Primary action buttons: **View Details** and **Inquire / Download**.
  - Contextual Admin controls (Edit & Delete buttons visible when curator mode is active).

### 3. Detailed Metadata Modal (Expanded View)
- Side-by-side or stacked split view with high-resolution artwork viewer.
- Full artistic and conceptual description.
- Generation Specifications:
  - **AI Model / Engine** (Midjourney v6.1, Flux.1 Pro/Dev, SDXL, DALL-E 3).
  - **Native Resolution & Aspect Ratio** (e.g. 3840×2160 UHD, 4096×4096).
  - **License Format** (Extended Commercial, Fine Art Print, Creative Commons).
  - **Creation Date & Lineage**.
  - **Interactive Chromatic Palette:** Visual color swatches with one-click copy of Hex codes.
  - **Master Prompt & Parameters:** Full synthesis prompt with one-click "Copy Prompt" button.

### 4. Admin Panel & Authentication
- **Curator Security Gate:** Password-protected authentication modal with sanitized error handling and zero client-side credential exposure.
- **Prominent Admin Mode Active Banner:** Unmistakable top notification banner with live pulsing status indicator, rapid "+ Add New Asset" button, "Reset Demo Data" option, and "Exit Admin" button.
- **Add / Edit Asset Modal Form:**
  - Asset Title (required).
  - Image Source: supports both **Direct Web URL** (with live thumbnail preview) and **Local File Upload** (reads image file as Base64 Data URL so it is fully stored in `LocalStorage`).
  - Category: dropdown with preset options + "+ Add Custom Category" text field.
  - Short Description (card snippet) & Full Description.
  - Tags input (comma-separated with auto-trimming).
  - AI Model / Generator used.
  - Resolution & Dimensions.
  - License Type & Status.
  - Chromatic Color Palette (comma-separated hex codes).
  - Prompt / Synthesis Parameters.
- **Data Persistence:** Universal Cloud Database Persistence powered by Vercel KV and Supabase REST backend (`/api/assets`), coupled with offline browser `LocalStorage` fallback and safe-merge syncing. Any assets added, edited, or deleted persist directly to the cloud and remain synchronized in real time across browser sessions.

### 5. Download & Inquire System
- Direct instant watermarked comp preview download simulation.
- Commercial licensing inquiry form for custom advertising, print, film, or editorial commissions.

### 6. Project Attribution & Provenance
- Footer attribution:
  > **Created by ANAND MOHANDAS | Quality Assurance: Sreegovind & Gayathri**

---

## 💻 How to Run the Application

Simply open `index.html` in any web browser:

```powershell
# In PowerShell:
Start-Process "C:\Users\USER\.gemini\antigravity\scratch\anandovsky-gallery\index.html"
```

Or double-click `index.html` in File Explorer.

---

## 🔑 Curator Authentication

- **Admin Login:** Click the **Admin Login** button in the header and enter your authorized curator security credentials. Authentication unlocks asset creation, catalog editing, and exhibition management.
