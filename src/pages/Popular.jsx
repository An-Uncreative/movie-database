import MovieList from "../components/movieList/movieList";
import fire from "../assets/fire.png";

const Popular = () => {
  return <MovieList category="popular" title="Popular" emoji={fire} />;
};

export default Popular;
