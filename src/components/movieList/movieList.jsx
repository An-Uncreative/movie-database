import "./movieList.css";
import MainHeader from "./mainHeader";
import MovieCard from "./movieCard";
import { useState, useEffect } from "react";
import _ from "lodash";

const MovieList = ({ category = "popular", title = "Popular", emoji }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}`
        );
        const data = await response.json();
        setMovies(data.results || []);
        setFilteredMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [category]);

  useEffect(() => {
    let sorted = [...filteredMovies];

    if (sort.by !== "default") {
      sorted = _.orderBy(sorted, [sort.by], [sort.order]);
    }

    setFilteredMovies(sorted);
  }, [sort]);

  function handleRatings(rating) {
    if (rating === minRating) {
      setMinRating(0);
      setFilteredMovies(movies);
    } else {
      setMinRating(rating);

      const filtered = movies.filter(
        (movie) =>
          movie.vote_average >= rating && movie.vote_average < rating + 1
      );
      setFilteredMovies(filtered);
    }
  }

  function handleSort(e) {
    const { name, value } = e.target;
    setSort((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <section className="movie_list_section">
      {/* <h2 className="movie_list_title">{title}</h2> */}
      <MainHeader
        handleRatings={handleRatings}
        rating={[8, 7, 6]}
        handleSort={handleSort}
        sort={sort}
        title={title}
        emoji={emoji}
      />
      {isLoading && <p className="loading_text">Loading movies...</p>}
      <div className="movie_grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
