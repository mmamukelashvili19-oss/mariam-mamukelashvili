# Mariam Mamukelashvili — Artist Portfolio

A multilingual artist portfolio in Georgian (`/ka`), English (`/en`) and French (`/fr`). Built with Next.js, React, Tailwind CSS, and Lucide icons.

## Before publishing
1. Replace the placeholder contact email `mmamukelashvili19@gmail.com` in `app/[locale]/page.tsx` with your real public contact email.
2. Replace the generic Instagram URL with your own artist profile.
3. Review titles, dates, medium, and descriptions to make sure they match your final choices.

## Run locally
Install Node.js 20.9+ and then run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Publish with Vercel
1. Upload the extracted project folder to a GitHub repository.
2. Import the repository at https://vercel.com/new.
3. Keep the default Next.js settings and click Deploy.
4. Vercel will provide a public URL.

The site has not been deployed yet; a public URL is created only after the deployment steps are completed.


## Design revision notes
- The hero artwork is the original `grief-and-flowers.jpeg` painting, shown without a rigid frame and softly blended into the background.
- The gallery uses only the eight artwork files in `public/artworks/`; each artwork has one gallery card.
- The background is a livelier red burgundy with subtle CSS brush-texture layers. Any decorative image texture reuses Mariam's own painting; no stock or AI-generated paintings are included.

## Updating the existing GitHub project
1. Extract this ZIP.
2. Open the extracted `mariam_artist_portfolio` folder and copy its contents into your existing local GitHub repository folder, replacing files when asked.
3. Open GitHub Desktop, review the changed files, enter a summary such as `Update burgundy paint-texture design`, click **Commit to main**, then **Push origin**.
4. Wait for Vercel to finish deploying, then refresh the website.
