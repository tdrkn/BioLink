# BioLink Portfolio

This is a personal portfolio "business card" website built with **Next.js** and **Tailwind CSS**.
It showcases key projects and provides quick links to contact me.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

## Deploy

The site can be deployed on platforms like Vercel or Netlify. A sample GitHub Actions
workflow is provided under `.github/workflows/deploy.yml`.


## Docker

A `Dockerfile` is included for running the site in a container:

```bash
docker build -t biolink .
docker run -p 3000:3000 biolink
```

Then open <http://localhost:3000> in your browser.

## Customizing Content

Edit the components in `src/components/` or replace project data in `src/components/Projects.jsx`.
Portfolio images can be placed in `public/images` and referenced in `Portfolio.jsx`.
