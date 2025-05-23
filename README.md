# ROOMLY

Live website: [https://roomly-app.netlify.app](https://roomly-app.netlify.app)

Roomly is a modern web application for finding and listing roommates and rooms, designed for trust, privacy, and real connections. Built with React, React Router, Tailwind CSS, DaisyUI, Firebase, Express, and MongoDB, Roomly offers a seamless, professional, and accessible experience for users seeking safe and compatible living arrangements.

## Repositories
- Server-side: [https://github.com/Programming-Hero-Web-Course4/b11a10-server-side-omarfaruk-dev](https://github.com/Programming-Hero-Web-Course4/b11a10-server-side-omarfaruk-dev)
- Client-side: [https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-omarfaruk-dev](https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-omarfaruk-dev)

## Key Features
- Browse and search roommate/room listings
- Add, edit, and manage your own listings
- Like listings to reveal contact details
- Responsive, modern UI with light/dark theme toggle
- Professional homepage with animated hero slider
- Accessible, mobile-friendly navigation and layout
- Secure authentication (Sign Up, Sign In, Google Auth)
- User profile dropdown and session management
- Animated feedback, error handling, and smooth transitions

## Tech Stack
- React (Vite)
- Tailwind CSS & DaisyUI
- Firebase Authentication
- React Router
- Swiper.js (Hero Slider)
- SweetAlert2, React Hot Toast (feedback)
- Express
- MongoDB
- Lottie React
- React-simple-typewriter
- React Awesome Reveal
- CORS (middleware)

## Getting Started
1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd roomly-client
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open in your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## Project Structure
- `src/components/` – UI components (NavBar, Footer, HeroSlider, etc.)
- `src/pages/` – Main pages (Home, SignIn, SignUp, RoommateDetails, etc.)
- `src/context/` – Auth context and provider
- `src/assets/` – Images and static assets
- `src/firebase/` – Firebase config

## Customization
- Update branding, colors, and logo in `tailwind.config.js` and `/public/`
- Edit homepage sections in `src/pages/Home.jsx`
- Adjust authentication logic in `src/context/AuthProvider.jsx`

## License
This project is for educational/demo purposes. All rights reserved.

---

© {new Date().getFullYear()} Roomly. All rights reserved.
