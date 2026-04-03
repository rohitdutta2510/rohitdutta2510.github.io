# Personal Academic Website

A clean, responsive personal website template for PhD candidates and researchers.

## Structure

```
personal-website/
├── index.html          # Home page
├── about.html          # About/CV page  
├── publications.html   # Publications list
├── css/
│   └── style.css       # Stylesheet
├── images/
│   └── profile.jpg     # Add your photo here
└── README.md
```

## Setup for GitHub Pages

1. **Add your profile photo**: Place your photo as `images/profile.jpg`

2. **Customize content**: Edit the HTML files to add your:
   - Name and title
   - University and department
   - Research interests
   - Education history
   - Publications
   - Contact information

3. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)"
   - Your site will be live at `https://YOUR_USERNAME.github.io`

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #2563eb;  /* Main accent color */
    --text-color: #1e293b;     /* Text color */
    /* ... */
}
```

### Adding More Pages
1. Copy any HTML file as template
2. Update navigation links in all pages
3. Modify content as needed

## License

MIT License - Feel free to use and modify.
