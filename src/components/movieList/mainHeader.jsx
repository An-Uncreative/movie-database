import "./mainHeader.css";

const MainHeader = ({
  handleRatings,
  rating,
  handleSort,
  sort,
  title,
  emoji,
}) => {
  return (
    <header className="movie_list_header">
      <h2>
        {title} <img src={emoji} alt="" />
      </h2>

      <nav className="movie_filter_conttainer">
        <ul className="movie_filter">
          {rating.map((rate) => (
            <li key={rate} onClick={() => handleRatings(rate)}>
              {rate}+ star
            </li>
          ))}
        </ul>
        <div className="select">
          <select
            name="by"
            id=""
            className="movie_sorting"
            value={sort.by}
            onChange={handleSort}
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select
            name="order"
            id=""
            className="movie_sorting"
            value={sort.order}
            onChange={handleSort}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
