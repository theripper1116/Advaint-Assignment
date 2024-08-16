const SortMovie = ({ sortTheArray, genreData, movieData }) => {
  let yearSet = new Set();
  movieData.forEach((ele) => {
    yearSet.add(ele.release_date.split("-")[0]);
  });
  const getMovieYear = Array.from(yearSet);
  return (
    <>
      <div className="sort__list">
        <h3>Genre</h3>
        <div className="sort__list__category">
          {genreData &&
            genreData.map((ele, index) => {
              return (
                <span
                  className="sort__list__item"
                  key={index}
                  onClick={() => {
                    sortTheArray(ele, "genre");
                  }}
                >
                  {ele.name}
                </span>
              );
            })}
        </div>
        <h3>Year</h3>
        <div className="sort__list__category">
          {getMovieYear &&
            getMovieYear.map((ele, index) => {
              return (
                <span
                  className="sort__list__item"
                  key={index}
                  onClick={() => {
                    sortTheArray(ele, "year");
                  }}
                >
                  {ele}
                </span>
              );
            })}
        </div>
        <h3>Rating</h3>
        <div className="sort__list__category">
          <span
            className="sort__list__item"
            onClick={() => {
              sortTheArray("good", "rating");
            }}
          >
            Good
          </span>
          <span
            className="sort__list__item"
            onClick={() => {
              sortTheArray("average", "rating");
            }}
          >
            Average
          </span>
          <span
            className="sort__list__item"
            onClick={() => {
              sortTheArray("bad", "rating");
            }}
          >
            Bad
          </span>
        </div>
      </div>
    </>
  );
};

export default SortMovie;
