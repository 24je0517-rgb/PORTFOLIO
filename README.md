# Rajat Sarkar — Personal Portfolio Website

Modern, responsive personal portfolio website built with React, TypeScript, Tailwind CSS, and Vite. Designed specifically for **Product Management / Product Analyst / Data Analyst** internship applications.

---

## 🚀 Quick Start

### 1. Start the Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
The compiled, production-ready static files will be generated in the `dist/` directory.

---

## 📝 How to Update Your Content (Centralized Data)

All website content is centralized in a single file:
👉 **`src/data/portfolioData.ts`**

You do not need to modify component code to update your portfolio. Simply edit this file:

- **Personal Info**: Name, tagline, positioning statement, institute, emails, LinkedIn & GitHub links.
- **About Me**: Current status and "What I Do" pillars.
- **Skills & Tools**: PM frameworks (RICE, MoSCoW, Kano, PRD, DAU/MAU, Retention, etc.) and software tools (Figma, PostgreSQL, Power BI, Excel, Jira, Miro, Notion).
- **Experience (`experience: [...]`)**: Add your internships and roles with company, position, duration, responsibilities, and achievements.
- **Projects (`projects: [...]`)**: Update case competition decks, RCA exercises, and GOIT data analytics projects with your actual titles, links, and deck URLs.
- **Achievements (`achievements: [...]`)**: Add competition rankings, awards, and certifications.
- **Positions of Responsibility (`positions: [...]`)**: Add campus leadership, club responsibilities, and organizing initiatives.

---

## 🎨 Visual & Editorial Design Features

- **Editorial Layout & Typography**: Large hero typography, structured section division lines, and top-right section badges (`ABOUT ME`, `SKILLS / TOOLS`, `JOURNEY`, `MY WORK`, `ACHIEVEMENTS`, `POSITIONS OF RESPONSIBILITY`).
- **Interactive Project Showcase**: Horizontal scrollable card carousel with presentation deck previews, `DECK ↗` badges, and left/right arrow navigation controls.
- **Sticky Navigation**: Fixed header with smooth scrolling and active section tracking.
- **Let's Talk Section**: Standout interactive contact cards for Gmail (`mailto:`), LinkedIn, GitHub, plus a one-click copy email button.
- **Footer**: Clean attribution with **strictly non-hyperlinked plain text email** (`24je0517@iitism.ac.in`).

---

## 🌐 Deployment

### GitHub Pages / Vercel / Netlify
- To deploy to **Vercel** or **Netlify**: Connect your GitHub repository (`https://github.com/24je0517-rgb/PORTFOLIO`) and set the build command to `npm run build` and publish directory to `dist`.
