# 🏥 E-MyR Setup Guide

## Milestone 1: Getting Your Site Running

This guide will walk you through setting up your new Astro-based E-MyR site. **Don't worry if you're new to this** - I'll explain every step.

---

## ✅ What You've Got

This is a complete, working Astro site with:

- ✅ Your existing EMR interface (tabs, intro, EKG animation)
- ✅ All your current content migrated
- ✅ Blog system set up (with your first post: "Coherence, Heard Not Forced")
- ✅ Light/Dark theme toggle
- ✅ Dot grid background (orange tint)
- ✅ New "Diagnosis" tab for projects
- ✅ "Notes" tab expanded to show blog posts
- ✅ RSS feed for blog subscribers
- ✅ Fully responsive (works on mobile)
- ✅ GitHub Pages deployment ready

---

## 📋 Prerequisites

Before you start, you need:

1. **Node.js 18 or newer** installed on your computer
   - Check if you have it: Open Terminal/Command Prompt and type `node --version`
   - Don't have it? Download from [nodejs.org](https://nodejs.org/) (get the LTS version)

2. **A code editor** (I recommend [VS Code](https://code.visualstudio.com/))

3. **Git** installed
   - Check: `git --version`
   - Don't have it? Download from [git-scm.com](https://git-scm.com/)

---

## 🚀 Step 1: Get the Files on Your Computer

### Option A: If you have the files already
Just navigate to the folder in your terminal:

```bash
cd /path/to/ppeck-me-v2
```

### Option B: If you need to download from somewhere
```bash
# Navigate to where you want the project
cd ~/Documents

# Then move the ppeck-me-v2 folder here
```

---

## 📦 Step 2: Install Dependencies

This downloads all the code libraries Astro needs to run. **You only do this once.**

### Easy Way (Recommended):
```bash
./setup.sh
```

This script will:
- Check if you have Node.js and npm
- Install all dependencies
- Tell you if anything went wrong

### Manual Way:
```bash
npm install
```

**What's happening?**  
npm (Node Package Manager) is downloading Astro and all its dependencies. This might take 1-2 minutes. You'll see a lot of text scroll by - that's normal!

---

## 🖥️ Step 3: Start the Development Server

This lets you see your site locally on your computer:

```bash
npm run dev
```

**What you'll see:**
```
🚀  astro  v4.16.17 ready in 150 ms

  ┃ Local    http://localhost:4321/
  ┃ Network  use --host to expose
```

**Open your browser** and go to: `http://localhost:4321`

🎉 **You should see your E-MyR site!**

**To stop the server:** Press `Ctrl + C` in the terminal

---

## ✏️ Step 4: Test Your Blog Post

1. Make sure the dev server is running
2. Go to `http://localhost:4321` in your browser
3. Click on the **"Notes"** tab
4. You should see "Coherence, Heard Not Forced" listed
5. Click on it to read the full post
6. Click "Back to Chart" to return

✅ **If this works, your blog system is working!**

---

## 🎨 Step 5: Verify the Styling

Check these features:

1. **Dot Grid Background**
   - Look closely at the background - you should see subtle orange dots
   - Toggle light/dark mode (button in top-right) - dots should be visible in both

2. **EKG Animation**
   - Open the site in a new incognito/private window
   - You should see:
     - "Initializing system..." text
     - EKG line drawing animation
     - Welcome modal with "Enter Chart" button

3. **Theme Toggle**
   - Click the sun/moon icon (top-right)
   - Page should switch between light and dark mode
   - Your preference should persist if you refresh

4. **Tabs**
   - Click through all tabs: Demographics, History, Diagnosis, Meds, Labs, Notes, Documents
   - Content should appear for each
   - Active tab should be highlighted in teal

5. **Dock**
   - Bottom bar should have 4 buttons
   - Click "Restart Intro" - modal should reappear
   - Click "Home" - should go to Demographics tab

✅ **If all of these work, Milestone 1 is complete!**

---

## 🚢 Step 6: Deploy to GitHub Pages

### 6.1: Create a GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the **"+"** in top-right → **"New repository"**
3. Name it: `ppeck1.github.io` (or whatever matches your username)
4. Set to **Public**
5. **Don't** initialize with README (we have one)
6. Click **"Create repository"**

### 6.2: Push Your Code

In your terminal (in the ppeck-me-v2 folder):

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial E-MyR v2 setup"

# Connect to GitHub (replace with YOUR repo URL)
git remote add origin https://github.com/ppeck1/ppeck1.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 6.3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. Wait 2-3 minutes for the first deployment

Your site will be live at: `https://ppeck1.github.io` (or your custom domain if DNS is configured)

---

## 🔧 Common Issues & Solutions

### "npm: command not found"
**Problem:** Node.js/npm isn't installed or not in your PATH  
**Solution:** Install Node.js from [nodejs.org](https://nodejs.org/)

### "Port 4321 is already in use"
**Problem:** Something else is using that port  
**Solution:** 
```bash
# Kill the process or use a different port
npm run dev -- --port 3000
```

### "Module not found" errors
**Problem:** Dependencies didn't install correctly  
**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Intro modal doesn't appear
**Problem:** You've already seen it (flag in localStorage)  
**Solution:** Click "Restart Intro" in the dock OR clear localStorage in browser dev tools

### Changes aren't showing up
**Problem:** Browser cache  
**Solution:** Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

---

## 📝 Next Steps

Once Milestone 1 is working:

### Add Your PDFs
1. Get your actual resume and certificate PDFs
2. Place them in: `public/assets/`
3. Name them exactly as referenced in Documents tab
4. Rebuild: `npm run build`

### Write More Blog Posts
1. Create a new file: `src/content/blog/my-second-post.md`
2. Use this template:
```markdown
---
title: "Your Title"
description: "Brief description"
date: 2026-02-10
tags: ["tag1", "tag2"]
draft: false
---

Your content here...
```
3. Save and it will auto-appear in the Notes tab!

### Add Projects
1. Create files in: `src/content/projects/`
2. They'll auto-appear in the Diagnosis tab

### Customize Colors
Edit `src/styles/global.css`:
```css
:root {
  --color-teal: #009688;
  --color-orange: #C46B3B;
  /* etc... */
}
```

---

## 🆘 Getting Help

**Something not working?**

1. Check the error message in the terminal
2. Check the browser console (F12 → Console tab)
3. Read the error carefully - it usually tells you what's wrong
4. Google the error message
5. Email me: paultpeck@gmail.com

**Want to understand how it works?**

- Open files in your code editor
- Read the comments (lines starting with `//` or `/* */`)
- Check the [Astro docs](https://docs.astro.build)

---

## ✅ Milestone 1 Checklist

Before you consider Milestone 1 complete, verify:

- [ ] `npm run dev` starts without errors
- [ ] Site loads at `localhost:4321`
- [ ] Intro sequence plays (boot screen + EKG + modal)
- [ ] Theme toggle works (light/dark mode)
- [ ] All 7 tabs work and show content
- [ ] "Coherence, Heard Not Forced" blog post renders correctly
- [ ] "Back to Chart" link returns to EMR and activates Notes tab
- [ ] Dot grid is visible in background (both light and dark mode)
- [ ] Dock buttons all work
- [ ] Site is pushed to GitHub
- [ ] GitHub Pages deployment succeeds
- [ ] Site is live at your GitHub Pages URL

**Once all these are checked, you've successfully completed Milestone 1!** 🎉

---

*Last updated: February 9, 2026*
