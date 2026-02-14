# Personal CV / Portfolio

A single-page CV website with a dark theme, sidebar profile, and services section.

## View locally

Open `index.html` in a browser, or run a local server:

```bash
npx serve .
```

## Publish on the web (GitHub Pages)

To let others visit your CV at a public URL:

### 1. Push the code to GitHub

From the project folder:

```bash
cd C:\Users\zsf\ai-welcome-page
git add index.html styles.css script.js README.md
git commit -m "Add CV webpage"
git push cv master
```

(If your default remote is `origin` instead of `cv`, use `git push origin master`.)

### 2. Turn on GitHub Pages

1. Open your repo on GitHub: **https://github.com/98ShufangZheng/cv** (or your repo URL).
2. Go to **Settings** → **Pages** (left sidebar).
3. Under **Source**, choose **Deploy from a branch**.
4. Under **Branch**, select **master** (or **main**) and **/ (root)**.
5. Click **Save**.

### 3. Your live URL

After a minute or two, the site will be available at:

- **https://98ShufangZheng.github.io/cv/**

(Replace `98ShufangZheng` and `cv` with your GitHub username and repository name if different.)

You can add this URL to your repo description or share it so others can visit your CV in a browser.
