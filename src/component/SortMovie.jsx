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
        <div className="sort__list__genre">
          {genreData &&
            genreData.map((ele, index) => {
              return (
                <span
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
        <div className="sort__list__year">
          {getMovieYear &&
            getMovieYear.map((ele, index) => {
              return (
                <span
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
        <div className="sort__list__rating">
          <span
            onClick={() => {
              sortTheArray("good", "rating");
            }}
          >
            Good
          </span>
          <span
            onClick={() => {
              sortTheArray("average", "rating");
            }}
          >
            Average
          </span>
          <span
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
