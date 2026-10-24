# Our Little Forever ♡ — Anniversary Website
A free, responsive anniversary website that runs with plain HTML, CSS, and JavaScript. No framework, build command, subscription, or paid image needed.

## Preview on your computer
Open `index.html` in Chrome. For best results, use a local preview extension like VS Code Live Server; opening the file directly also works.

## Personalize
Edit **config.js** in Notepad or VS Code. Replace `yourName`, `herName`, `anniversaryDate` (YYYY-MM-DD), `heroLine`, `intro`, `letterTitle`, `letter`, `memories`, and `reasons` with your real content.

**Important**: The `anniversaryDate` should be the day you became a couple (for example, 2024-10-24 for your second anniversary on 2026-10-24). It is just a placeholder now.

To enter a long letter, replace the words inside backticks in `letter: \`...\``. Avoid using literal backticks inside the letter.

### Photos
1. Put JPG/PNG photos in the `assets` folder (for example, `photo1.jpg`).
2. In `config.js`, change the `photos` array to:
```js
photos: ['assets/photo1.jpg', 'assets/photo2.jpg', 'assets/photo3.jpg', 'assets/photo4.jpg'],
```
3. Keep filenames and uppercase/lowercase exactly the same. Photos are blank placeholders until you do this.

### Floral artwork
The SVG flower illustrations in `assets/` were created for this site. They do not need Canva or Pinterest and work offline. If you want to replace them with Canva images, export PNGs you have rights to use and update image paths in `index.html`. Don't assume Pinterest photos are free to republish.

### Editing the letter inside the website
Click the subtle **write or edit the letter on this device** link in the love-letter section. It saves to this browser's local storage for previewing only. **It will NOT update the published site for other visitors.** For your girlfriend to read your final letter, make the change in `config.js` and upload/commit that changed file to GitHub. The editor itself is visible to visitors, so edit the published config instead if you want a surprise.

## Publish for free using GitHub Pages
1. Sign in to https://github.com.
2. Click **+** → **New repository**.
3. Name it `our-little-forever` (or any name), choose **Public**, then **Create repository**.
4. Click **Add file** → **Upload files**.
5. **Unzip the download first**. Upload `index.html`, `style.css`, `script.js`, `config.js`, and the **assets** folder's files. Make sure `index.html` is in the ROOT (not nested inside `anniversary-website`).
6. Click **Commit changes**.
7. Go to repository **Settings** → **Pages**.
8. In **Build and deployment**, set **Source: Deploy from a branch**, **Branch: main**, **Folder: /(root)**, and click **Save**.
9. When GitHub finishes publishing, use the Pages link, usually `https://YOUR_USERNAME.github.io/our-little-forever/`.

## Update your letter or photos later
Open your repository, edit `config.js` with the pencil icon, then **Commit changes**. For photos, upload them into `assets`, and reference them in `config.js`. GitHub will redeploy after your changes.

## Privacy note
GitHub Pages on a GitHub Free account requires a **public repository**, and the website and its source files are public. Avoid sharing sensitive private information. There is no password protection.
