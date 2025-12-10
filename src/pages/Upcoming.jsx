import MovieList from "../components/movieList/movieList";
import party from "../assets/partying-face.png";

const Upcoming = () => {
  return <MovieList category="upcoming" title="Upcoming" emoji={party} />;
};

export default Upcoming;
