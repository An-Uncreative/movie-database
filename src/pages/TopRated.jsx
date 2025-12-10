import MovieList from "../components/movieList/movieList";
import star from "../assets/glowing-star.png";

const TopRated = () => {
  return <MovieList category="top_rated" title="Top Rated" emoji={star} />;
};

export default TopRated;
