# Week 8: Movie Database Application

## 📽️ Project Overview

A modern movie database web application that fetches data from The Movie Database (TMDB) API. Users can browse popular movies, explore top-rated films, check out upcoming releases, filter by rating, and sort by various criteria.

## ✨ Features

- **React Router Navigation:** Navigate between Popular, Top Rated, and Upcoming movies
- **Three Movie Categories:**
  - 🔥 Popular - Currently trending movies
  - ⭐ Top Rated - Highest rated movies of all time
  - 🎉 Upcoming - Soon-to-be-released movies
- **Movie Grid Display:** Beautiful card layout showing movie posters, titles, and ratings
- **Rating Filter:** Toggle filtering movies by minimum rating (6, 7, or 8 stars)
- **Advanced Sorting:** Sort by title or rating in ascending/descending order
- **Active Link Highlighting:** Visual feedback for current page
- **Responsive Design:** Fully responsive layout that works on mobile, tablet, and desktop
- **Real-time Updates:** Instant filter and sort updates without page reload
- **Loading States:** User feedback while fetching data

## 🛠️ Technologies Used

- **React 19.2.0** - UI library with hooks (useState, useEffect)
- **React Router DOM 7** - Client-side routing for single-page application
- **Vite** - Next-generation frontend build tool
- **Lodash 4.17.21** - Utility library for advanced sorting/filtering
- **TMDB API** - The Movie Database REST API
- **CSS3** - Styling with responsive design
- **ESLint** - Code quality and consistency

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Steps

```bash
# Clone/navigate to the project
cd week8

# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Get your TMDB API key from https://www.themoviedb.org/settings/api
# Add it to .env: VITE_TMDB_API_KEY=your_key_here

# Start development server
npm run dev

# Build for production
npm run build
```

## 🚀 Usage

1. Open the application in your browser (typically `http://localhost:5173`)
2. **Navigate between categories:**
   - Click "Popular" to see trending movies
   - Click "Top Rated" to see highest-rated films
   - Click "Upcoming" to see soon-to-be-released movies
3. Click rating buttons (6, 7, 8 stars) to filter movies by rating
4. Use the sort dropdown to organize movies by title or rating
5. Click the rating button again to toggle the filter off
6. Notice the active link highlighting showing your current page

## 📁 Project Structure

```
src/
├── pages/
│   ├── Popular.jsx              # Popular movies page
│   ├── TopRated.jsx             # Top rated movies page
│   └── Upcoming.jsx             # Upcoming movies page
├── components/
│   ├── movieList/
│   │   ├── movieList.jsx        # Reusable list component with filter/sort logic
│   │   ├── movieList.css
│   │   ├── mainHeader.jsx       # Filter and sort controls
│   │   ├── movieCard.jsx        # Individual movie card component
│   │   └── movieCard.css
│   ├── navbar/
│   │   ├── navbar.jsx           # Navigation with React Router Links
│   │   └── navbar.css
│   └── App.jsx                  # Router setup and routes
├── main.jsx
└── index.css
```

## 💡 Key Learning Points

- **React Router:** Implementing client-side routing with React Router DOM
- **Dynamic Routes:** Creating reusable components that adapt based on route parameters
- **API Integration:** Fetching and handling real-world API responses from multiple endpoints
- **State Management:** Managing multiple state variables (movies, filters, sort, loading)
- **Component Reusability:** Single MovieList component serving multiple pages
- **Props Drilling:** Passing category and title props to customize component behavior
- **Component Composition:** Breaking UI into reusable components
- **Data Manipulation:** Using Lodash for complex sorting operations
- **Environment Variables:** Secure handling of sensitive API keys
- **React Hooks:** Understanding useEffect for side effects and useState for state
- **Active Link Styling:** Using NavLink for visual feedback on current route

## 🔒 Environment Variables

The project uses environment variables to keep API keys secure:

- `VITE_TMDB_API_KEY` - Your TMDB API key (not committed to version control)

## 🐛 Known Issues & Future Improvements

- Add pagination for browsing through all movies
- Implement movie detail view with cast and crew information
- Add favorite movies functionality with localStorage persistence
- Search feature to find specific movies
- Dark/light theme toggle
- Movie recommendation algorithm based on filters

## 📚 Resources

- [TMDB API Documentation](https://developers.themoviedb.org/3)
- [React Documentation](https://react.dev)
- [Lodash Documentation](https://lodash.com)
- [Vite Documentation](https://vitejs.dev)

## 👤 Author

Created as a fun fullstack development project to enhance my learning path

## 📄 License

Educational project
