## Neal Abraham – Personal Website

A modern portfolio built with the Next.js App Router showcasing tech and film projects, with a clean, glassmorphism-inspired UI.

### Features
- **Home**: Featured Projects, About Me, Contact links.
- **Tech**: Scrollable project cards with descriptions, per-card tool tags, and Live/Repo links.
- **Film**: Featured video embed and placeholder grid for future films.
- **Responsive UI**: Tailwind CSS, subtle gradients, and glass effects.
- **Fixed nav**: Quick access to Home, Tech, and Film.

### Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Geist via `next/font`
- **Deployment**: Vercel-ready

### Local Development
```bash
npm install
npm run dev
# visit http://localhost:3000
```

### Project Structure
```
src/app/
  page.js           # Home
  layout.js         # Root layout + nav
  tech/page.js      # Tech projects
  film/page.js      # Film projects
public/             # Static assets (images, svgs)
```

### Editing Content
- Update homepage sections in `src/app/page.js`.
- Add/update tech projects in `src/app/tech/page.js` (data array inside the file).
- Replace the About Me image by placing a file in `public/` (e.g. `public/me.png`) and using `src="/me.png"` in the `Image` component.

### Deployment
The project is optimized for deployment on Vercel. After pushing to your repository:
- Connect the repo on Vercel and deploy with default settings.

### License
This repository is for personal portfolio use. All rights reserved.
