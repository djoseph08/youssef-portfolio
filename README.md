# Youssef Lassoued — Portfolio

A responsive React portfolio with Tailwind CSS, project filters, project detail dialogs, a skills toolkit with local SVG icons, and direct social links. No backend, database, or star-rating service.

## Run on your laptop

Install Node.js 20.19+ or 22.12+ (the current LTS version is recommended). Unzip this project, open a terminal in its folder, and run:

```bash
npm install
npm start
```

Open the local URL printed in your terminal. Tailwind is already installed and configured; you do not need to install it separately. Vite runs internally as the development tool—no extra setup or commands are required.

## Make it yours

- **Contact links:** edit `CONTACT` near the top of `src/main.jsx`. Set `email` to your real email address to enable the email button. Existing social links come from the original portfolio; replace them whenever needed.
- **Projects:** edit the `projects` array in `src/main.jsx`. Each project has an ID, category, title, description, image, tags, and optional live URL. Add screenshots to `public/images/` and use their filenames.
- **Skills:** edit the `skills` array; SVG logos are in `public/icons/`.
- **Design:** edit `src/styles.css`. Tailwind utilities are available in JSX as well.
- **Best Store:** the preview opens its four-screen gallery; a separate live-app button opens https://best-store-catalogue.netlify.app/. The home-page cover is set explicitly in the project data, so adding gallery images does not replace it.

Historical project descriptions retain their original technologies (such as Flask or PHP); the portfolio itself is a static React application.

## Build for hosting

```bash
npm run build
```

Upload the contents of `dist/` to Netlify or another static host. No Node.js server is needed in production. The relative build paths also support deployment in a GitHub Pages subdirectory.

## Accessibility and interactions

Keyboard-accessible project and skill filters, native modal dialogs with Escape support and focus restoration, a mobile navigation menu, a skip link, and reduced-motion styling are included. All logos and project images are local assets. Google Fonts have system fallbacks if unavailable.

## Languages

The header offers English, Arabic, and French with local SVG flags. The visitor's language choice is saved in their browser. Arabic switches the page to right-to-left. Page copy and project descriptions are translated in `src/i18n.jsx` and `src/descriptions.json`. Brand and technology names remain unchanged.

## Project screenshot assets

NexusFit keeps its single full-width login cover. Its gallery order is login, dashboard, activities, payments, and member registration. Best Store keeps a split preview/live-app card and four gallery views: home and product discovery, fresh finds and the store guide, essentials and fragrances, and vehicle collections.

These image files are presentation copies prepared by the image tool from the user’s inline screenshots. They are not pixel-perfect original exports; small text or rendering differences may remain. Original PNG/JPG files can replace them at the same paths. Each gallery entry records this provenance.

The four supplied Best Store social posters are included in `best-social-campaign.png`, a generated montage based on the supplied images. The original portrait and earlier project images are retained from the previous live portfolio.

## Appearance and project organization

The main headline is “Web App Developer & Pentester,” with “Creative developer. Security mindset.” underneath. The navbar includes a light/dark appearance button. It follows the system preference on the first visit and remembers the visitor's choice afterward. The page applies the saved theme before React loads.

Projects are grouped into Applications, Design & creative work, and Security & pentesting. The category filters narrow these groups. Applications initially show a curated selection; “View all applications” expands the full list. Existing project images and descriptions remain in their relevant groups.

## Featured project case studies

Best Store uses a split preview/live-link card. NexusFit keeps a single full-width image card. Clicking either preview opens its detailed case study. Case studies describe the brief, my role, the implementation scope, and capabilities.

Original screenshot galleries are configured in `src/project-screenshots.json`. Each project accepts entries like:

```json
{"src":"./images/screenshots/nexusfit/dashboard.png","label":"Operations dashboard","caption":""}
```

Place original image files in the corresponding `public/images/screenshots/` folder to replace the current presentation copies. NexusFit contains five screen presentations, with the dashboard directly after login; Best Store contains four screen presentations. The gallery manifest records each asset’s provenance.

The viewer preserves complete images, with thumbnail selection, previous/next controls, arrow keys, touch swipes, and an expanded viewport. Escape exits the expanded image before closing the case study. Interface text is translated into English, French, and Arabic.

## Location and qualifications

The portfolio presents Youssef as based in Qatar and originally from Tunisia. The qualifications subsection beneath the skills toolkit lists CompTIA Security+ and web application development certifications completed with GOMYCODE in Tunisia. The latter is a descriptive category; replace it with exact award titles when supplied. No certification dates, exam versions, scores, IDs, or verification links have been invented. All copy is available in English, French, and Arabic.

## Toolkit categories

Skills are grouped and filterable as Development, Security, Operating Systems, and Tools. Windows, macOS, Linux, Kali Linux, and Arch Linux are listed as operating systems. The expanded security list restores names from the user's original portfolio, rather than adding unconfirmed expertise or proficiency scores. SVG files in `public/icons/` use recognized logos where available and original letter/icon marks for tools without a suitable logo asset.

## Browser and app icons

The existing dark `y` and orange dot on warm paper are used for the favicon, Apple touch icon, and web app icons. `public/favicon.svg` is the vector master. Browser fallbacks include 16px/32px PNG and a multi-resolution ICO. `public/manifest.json` declares the app identity, relative start/scope paths, 192px/512px PNGs, and a separately padded 512px maskable icon. Apple uses the 180px touch icon. All raster files are pre-generated, so `npm install` and `npm start` remain unchanged. The manifest uses credentials for this private hosted Site. This icon setup does not add offline caching or a service worker.

## Best Store professional experience

The About section includes the user-reported Best Store role in Doha, Qatar for 2026–2027, presented as “IT & Digital Solutions Lead.” Responsibilities cover store IT, development of the Best Store web application, in-car multimedia and application upgrades, VDS-assisted diagnostics and ADAS software updates, Photoshop social campaigns, and creative video advertising. The role is translated into English, French, and Arabic. Video advertising is described as a capability; the existing campaign gallery continues to show the supplied static designs. Existing project covers, screenshots, categories, qualifications, and appearance controls are retained.

## Professional experience history

The Professional Experience section keeps Best Store first, followed by Artours Consulting & Events in Tunis (2021–2022) and Franprix in Paris (2019–2020). Artours covers website development, reservation records, and customer email support. Franprix covers retail management and cashier duties, new-product photography with white backgrounds, and product entry into the store’s catalogue and point-of-sale system. A separate internship subsection presents a three-month Fibre Optic Technician internship with Bouygues Telecom in Paris. No internship year has been invented. The Excelforma training entry is retained in the background timeline; the Artours entry has moved into the work history. Copy is available in English, French, and Arabic.

Company logos are stored locally in `public/images/experience/`, with their original brand colors:

- Best Store: original header asset from https://best-store-catalogue.netlify.app/.
- Artours Consulting & Events: https://artours-events.com/wp-content/uploads/2025/04/logo.png; the company/site identity was cross-checked through https://www.destination-tunis-carthage.com/destination/artours-consulting-events/.
- Franprix: https://www.franprix.fr/_nuxt/img/logo.5c45ab9.webp.
- Bouygues Telecom: https://www.bouyguestelecom.fr/static/wbm/assets/hub/img/logo-bouygues-telecom-mobile.svg. This official three-color logo matches the brand mark supplied in the chat. The internship employer is Bouygues Telecom, rather than the wider Bouygues group.

These are unmodified company brand assets used to identify the user-reported employers. Existing project screenshots, photos, and all other portfolio sections are retained.

## Update the existing GitHub Pages site

Extract the updated project ZIP, open its folder in your terminal, and run `npm install`, then `npm run build`. To publish to the same repository and keep the résumé/LinkedIn URL unchanged, use the previously working scoped upload settings:

```bash
env GIT_CONFIG_COUNT=2 \
GIT_CONFIG_KEY_0=http.version \
GIT_CONFIG_VALUE_0=HTTP/1.1 \
GIT_CONFIG_KEY_1=http.postBuffer \
GIT_CONFIG_VALUE_1=52428800 \
npx --yes gh-pages@6 -d dist -b gh-pages -r https://github.com/djoseph08/youssef-portfolio.git
```

This publishes the built files, not the source ZIP. In GitHub Settings → Pages, keep “Deploy from a branch,” `gh-pages`, and `/ (root)`. The URL remains https://djoseph08.github.io/youssef-portfolio/. Browser caches can briefly display an older deployment.
