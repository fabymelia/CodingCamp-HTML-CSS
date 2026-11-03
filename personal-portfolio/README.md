# Faby Melia Shanni – Personal Portfolio Website

A modern, minimalist, and fully responsive personal portfolio built with plain HTML5, CSS3, and vanilla JavaScript. No frameworks, no backend, no build step required.

## 📁 Folder Structure

```
personal-portfolio/
├── index.html            ← Single-page portfolio (all sections)
├── css/
│   └── style.css         ← All styles, CSS variables, layout, responsive rules
├── js/
│   └── script.js         ← All JavaScript interactivity
├── assets/
│   └── images/           ← Place your own photos here (see table below)
└── README.md             ← This file
```

## 📄 File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Complete single-page HTML document with 9 sections: Navbar, Hero, About, Core Competencies & Skills, Experience, Education & Certifications, Projects, Publications, Contact, Footer. |
| `css/style.css` | External stylesheet using CSS custom properties (`:root` variables), Flexbox, CSS Grid, scroll-reveal animations, hover effects, and responsive media queries for desktop, tablet, and mobile. |
| `js/script.js` | Vanilla JavaScript: navbar scroll state, mobile hamburger toggle, smooth scrolling, IntersectionObserver scroll-reveal, contact form validation with success feedback, dynamic copyright year, back-to-top button. |
| `assets/images/` | Folder for profile and project images. Automatic placeholder fallback if files are missing. |

## 🖼️ Replacing Images

Place your images in `assets/images/`. Recommended sizes:

| Filename | Section | Recommended Size |
|----------|---------|-----------------|
| `profile.jpg` | Hero section | 400 × 400 px (square) |
| `about.jpg` | About section | 450 × 500 px (portrait) |
| `project-batikvision.jpg` | Batik Classification card | 600 × 340 px (landscape) |
| `project-attendance.jpg` | Employee Attendance card | 600 × 340 px |
| `project-motorcycle.jpg` | Motorcycle Service card | 600 × 340 px |
| `project-agenda.jpg` | Teacher Daily Agenda card | 600 × 340 px |

If any image is missing, a styled placeholder loads automatically via the `onerror` attribute.

## ✏️ Updating Personal Information

All personal content is in `index.html`. Key locations:

| What to update | Where in index.html |
|----------------|---------------------|
| Name, title, intro | Hero section (`#home`) |
| Bio, GPA, stats | About section (`#about`) |
| Skills | Competencies section (`#competencies`) |
| Work experience | Experience section (`#experience`) |
| Education & Certifications | Education section (`#education`) |
| Projects | Projects section (`#projects`) |
| Publications | Publications section (`#publications`) |
| Email, LinkedIn, Portfolio URL | Contact section (`#contact`) and Footer |

Social media links to update (search for these in `index.html`):
- `https://www.linkedin.com/in/fabymeliashanni`
- `https://canva.link/mlb0cbbje06v0pd`
- `mailto:fabymelia461@gmail.com`

## 🚀 How to Run

1. Download or clone this repository.
2. Open `index.html` directly in any modern browser (Chrome, Firefox, Edge, Safari).
3. No server, no XAMPP, no Node.js, no build step needed.

```
Double-click index.html  →  opens in browser  →  done ✅
```

## ☁️ Deploying to GitHub Pages (Free)

1. Create a new GitHub repository.
2. Upload all files from this `personal-portfolio/` folder as the repository root (so `index.html` is at the root).
3. Go to **Settings → Pages**.
4. Under **Source**, select **Deploy from a branch**, choose `main` and `/ (root)`.
5. Click **Save**. Your site will be live at `https://<username>.github.io/<repo-name>/` within a minute.

## 📋 Sections

| # | Section | Content |
|---|---------|---------|
| 1 | Hero | Name, title, introduction, profile photo, social links |
| 2 | About | Professional summary, GPA badge, achievement stats, personal info |
| 3 | Core Competencies | 6 competency cards + categorised technical skills (tags, no misleading bars) |
| 4 | Experience | 2 professional experiences with bullet point descriptions |
| 5 | Education | Bachelor's degree card with GPA pill + 4 certification cards |
| 6 | Projects | 4 project cards with achievement callouts and tech tags |
| 7 | Publications | 2 journal publication cards with metadata |
| 8 | Contact | Email + LinkedIn + Portfolio links, additional info, validated contact form |
| 9 | Footer | Copyright (auto year), social links |

## 🛠️ Technologies

- **HTML5** – semantic elements, ARIA attributes
- **CSS3** – custom properties, Flexbox, Grid, animations, media queries
- **Vanilla JavaScript** – ES6+, IntersectionObserver API
- [Google Fonts – Poppins](https://fonts.google.com/specimen/Poppins)
- [Font Awesome 6](https://fontawesome.com/)

## 📝 License

Free to use for personal and educational purposes.
