# Harish Pranav V Portfolio

A premium futuristic portfolio built with React, Vite, Tailwind CSS, Framer Motion, Lucide React, and React Router. It is configured for GitHub Pages deployment.

## Local Development

```bash
npm install
npm run dev
```

Place your resume at `public/resume.pdf` so the download button works both locally and after GitHub Pages deployment.

## Production Build

```bash
npm run build
npm run preview
```

## GitHub Pages Setup

1. Update `homepage` in `package.json`:

```json
"homepage": "https://your-github-username.github.io/your-repo-name/"
```

2. Update the fallback base path in `vite.config.js` if your repo is not named `Porfolio`:

```js
const base = process.env.VITE_BASE_PATH || (repositoryName ? `/${repositoryName}/` : '/your-repo-name/');
```

3. Initialize Git and push to GitHub:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/your-github-username/your-repo-name.git
git push -u origin main
```

4. Deploy:

```bash
npm run deploy
```

5. In GitHub, open the repository settings, go to **Pages**, and select the `gh-pages` branch as the publishing source.

## Deployment Commands

```bash
npm install
npm run dev
npm run build
npm run deploy
```

## GitHub Pages Notes

- Vite `base` is configured in `vite.config.js`.
- `HashRouter` is used to avoid refresh and deep-link routing issues on GitHub Pages.
- The `gh-pages` package publishes the generated `dist` folder.
