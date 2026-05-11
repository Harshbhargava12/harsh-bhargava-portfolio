# Harsh Bhargava — Portfolio

Premium developer portfolio built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **React Icons**.

## Quick start

```bash
cd harsh-bhargava-portfolio
npm install
npm run dev
```

Open `http://localhost:5173`.

## Resume PDF (`harshresume.pdf`)

Generate from the same text as the portfolio / your resume:

```bash
pip install fpdf2
python3 scripts/build_resume_pdf.py
```

This writes `public/harshresume.pdf`. Replace that file with your official design PDF anytime.

## Build for production

```bash
npm run build
npm run preview
```

## Customize

- Links and copy: `src/components/*.jsx`
- Theme & typography: `tailwind.config.js`, `src/index.css`
- SEO meta tags: `index.html`
