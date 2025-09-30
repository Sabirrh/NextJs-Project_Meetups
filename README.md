# Meetup Events App

## Description

Meetup Events App is a full-stack web application built with Next.js and MongoDB. It allows users to browse, view, and add meetup events. This project demonstrates the core concepts of Next.js, including pages and routing (with dynamic routes), data fetching methods (`getStaticProps`, `getStaticPaths`, and `getServerSideProps`), API routes, pre-rendering with static site generation, and integration with MongoDB. The UI is built with reusable React components and styled using CSS Modules.

This project is ideal for beginners who want to learn how to build modern web applications with Next.js and MongoDB.

## Features

- Browse a list of meetups
- View detailed information for each meetup (dynamic routing)
- Add new meetups via a form (API route integration)
- Data fetching with `getStaticProps` and `getStaticPaths`
- Pre-rendering with static site generation (SSG)
- MongoDB integration for persistent data storage
- Modular React component structure
- Responsive layout and navigation

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Frontend:** React, CSS Modules
- **Backend:** Next.js API Routes
- **Database:** MongoDB Atlas
- **Other:** Node.js, Vercel (for deployment)

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or local MongoDB instance)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd NextJs-AdvancedProject
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure MongoDB connection:**
   - Create a `.env.local` file in the root directory.
   - Add your MongoDB connection string:
     ```env
     MONGODB_URI=your-mongodb-connection-string
     ```
   - (The current code uses a hardcoded connection string. For production, use environment variables for security.)
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. Open [(https://next-js-project-meetups-60yb3u70m.vercel.app]([https://next-js-project-meetups-60yb3u70m.vercel.]) in your browser to view the app.

## Folder Structure

```
NextJs-AdvancedProject/
│
├── components/
│   ├── layout/         # Layout and navigation components
│   ├── meetups/        # Meetup-related components (list, item, details, form)
│   └── ui/             # Reusable UI components (Card)
│
├── pages/
│   ├── _app.js         # Custom App component
│   ├── index.js        # Home page listing meetups
│   ├── [meetupId]/     # Dynamic route for meetup details
│   │   └── index.js
│   ├── api/            # API routes for meetups
│   │   ├── meetups.js
│   │   └── new-meetup.js
│   └── new-meetup/     # Page for adding a new meetup
│       └── index.js
│
├── public/             # Static assets (favicon, images)
├── styles/             # Global styles
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

## Screenshots

> _Add screenshots here to showcase the app UI._

## Future Improvements

- Add authentication for meetup creation
- Implement editing and deleting meetups
- Add user profiles and RSVP functionality
- Improve form validation and error handling
- Enhance UI/UX with more styling and animations
- Deploy to Vercel with environment variables

## License

This project is licensed for educational purposes.

## Author

**Sabirrh**  
GitHub: [Sabirrh](https://github.com/Sabirrh)  
Email: sabirrh1@gmail.com

---

_Feel free to use this project as a learning resource or starter template for your own Next.js applications!_# NextJs Advanced Project

This is an advanced Next.js project demonstrating dynamic routing, API routes, and component-based architecture for managing meetups.

## Features
- Dynamic routing for meetup details
- API routes for fetching and adding meetups
- Modular component structure (Layout, UI, Meetups)
- CSS Modules for scoped styling
- Responsive navigation and layout

## Project Structure
```
components/
  layout/         # Layout and navigation components
  meetups/        # Meetup-related components (list, item, details, form)
  ui/             # Reusable UI components (Card)
pages/
  _app.js         # Custom App component
  index.js        # Home page listing meetups
  [meetupId]/     # Dynamic route for meetup details
    index.js
  api/            # API routes for meetups
    meetups.js
    new-meetup.js
  new-meetup/     # Page for adding a new meetup
    index.js
public/           # Static assets
styles/           # Global styles
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. Open [https://next-js-project-meetups-60yb3u70m.vercel.app](https://next-js-project-meetups-60yb3u70m.vercel.app) to view the app.

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm start` — Start production server

## Customization
- Add or edit meetups via the UI
- Extend components in `components/` as needed
- Update API logic in `pages/api/`

## License
This project is for educational purposes.
