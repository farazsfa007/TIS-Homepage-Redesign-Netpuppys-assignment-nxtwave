# Tulas International School (TIS) - Homepage Redesign

This project is a frontend redesign of the Tulas International School (TIS) homepage.

The main goal of this project was to create a modern, responsive and interactive homepage while keeping the main TIS branding and information. I focused on clean components, simple code and smooth animations.

## Live Demo

* Live Website: https://tis-home-page-redesign-netpuppys.netlify.app/
* GitHub: https://github.com/farazsfa007/TIS-Homepage-Redesign-Netpuppys-assignment-nxtwave
* Official TIS Website: https://tis.edu.in/

## Tech Stack

* React.js
* Vite
* CSS
* Framer Motion
* Lucide React
* JavaScript

## Features

The project includes all four standout features mentioned in the assignment:

### 1. Custom Cursor

A custom mouse cursor is added for desktop users. It changes its size when hovering over links and buttons.

The cursor is automatically disabled on touch devices.

### 2. Scroll Animations

Sections and cards animate when they enter the screen while scrolling.

Framer Motion is used for these animations.

### 3. Light / Dark Theme

The website has a light and dark mode switcher.

The selected theme is saved in `localStorage`, so it remains active after refreshing the page.

### 4. Scroll Progress Bar

A small progress bar is displayed at the top of the page.

It shows how much of the page has been scrolled.

The assignment required at least two of these features. I implemented all four.

## Main Sections

The homepage contains:

* Navigation bar
* Hero section
* About TIS
* School statistics
* Academics
* Sports and activities
* Parent stories/testimonials
* Admissions call-to-action
* Footer and contact information

## Project Structure

```text
tis-homepage-redesign/
│
├── public/
│   └── assets/
│
├── src/
│   │
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Academics.jsx
│   │   ├── CTA.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Reveal.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── Sports.jsx
│   │   ├── Stats.jsx
│   │   ├── Stories.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── data/
│   │   └── content.js
│   │
│   ├── hooks/
│   │   └── useScrollProgress.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/farazsfa007/TIS-Homepage-Redesign-Netpuppys-assignment-nxtwave.git
```

Go inside the project folder:

```bash
cd TIS-Homepage-Redesign-Netpuppys-assignment-nxtwave
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment file

Create a `.env` file using `.env.example`.

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

No private API keys or secret values are required for this project.

### 4. Start the development server

```bash
npm run dev
```

Vite will normally start the project at:

```text
http://localhost:5173
```

### 5. Create production build

```bash
npm run build
```

To test the production build locally:

```bash
npm run preview
```

## Deployment

The project can be deployed using Vercel, Netlify or GitHub Pages.

### Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Select Vite if Vercel asks for the framework.
4. Use the following build command:

```text
npm run build
```

5. Set the output directory to:

```text
dist
```

6. Deploy the project.

### Netlify

Use:

```text
Build command: npm run build
Publish directory: dist
```

Then deploy the project from the GitHub repository.

## Backend and Database

This project is only a frontend homepage redesign.

The assignment does not require a backend, database, authentication system or custom API. Because of this, I kept the project frontend-only instead of adding unnecessary backend code.

There are no API endpoints in this project.

The admission button links to the school's admission portal, while the contact details are used for the contact actions.

## Responsive Design

The page has been designed for different screen sizes:

* Mobile: around 375px
* Tablet: around 768px
* Desktop: 1280px and above

The navigation, cards, sections, typography and spacing adjust according to the screen size.

## Testing

Before deployment, I checked the following:

* `npm run build`
* Mobile responsive layout
* Tablet responsive layout
* Desktop layout
* Navigation links
* Light/dark theme
* Theme persistence after refresh
* Custom cursor
* Scroll animations
* Scroll progress bar
* Admission links
* Contact links
* Reduced-motion support
* No API keys or private credentials committed to GitHub

## Assets

The project uses TIS-related branding and publicly available school content for the redesign.

Some sports images are loaded from Unsplash.

If completely local assets are required, the images can be downloaded and placed inside:

```text
public/assets/
```

The corresponding image paths can then be updated in the project.

## Assignment

This project was created as part of the Frontend Developer assessment.

The assignment required:

* A modern TIS homepage redesign
* Responsive frontend
* Smooth animations
* Clean component structure
* At least two standout features
* GitHub repository
* Deployment-ready project

I implemented the project using React, Vite, CSS and Framer Motion and included all four suggested standout features.

## Notes

The existing TIS website was used as a reference for the school's branding, general content and public information.

The page layout, component structure and visual design were created as a redesign for this assignment.
