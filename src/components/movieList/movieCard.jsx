import "./movieCard.css";
import star from "../../assets/star.png";

const MovieCard = ({ movie }) => {
  const posterSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" className="movie_card">
      <img
        src={posterSrc}
        alt={movie.original_title}
        className="movie_card_img"
      />
      <div className="movie_card_info">
        <h3 className="movie_card_title">{movie.original_title}</h3>
        <div className="movie_date_rate">
          <p>{movie.release_date}</p>
          <p>
            {movie.vote_average?.toFixed
              ? movie.vote_average.toFixed(1)
              : movie.vote_average}{" "}
            <img src={star} alt="Rating" />
          </p>
        </div>
        <p className="movie_card_desc">{movie.overview.slice(0, 100)}...z</p>
      </div>
    </a>
  );
};

export default MovieCard;
