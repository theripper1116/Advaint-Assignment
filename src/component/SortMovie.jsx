const SortMovie = ({ sortTheArray, genreData }) => {
  return (
    <>
      <div>
        {genreData &&
          genreData.map((ele) => {
            return <span>{ele.name}</span>;
          })}
        <button onClick={() => sortTheArray("genre")}>Genre</button>
        <button onClick={() => sortTheArray("year")}>Release Year</button>
        <button onClick={() => sortTheArray("rating")}>Rating</button>
      </div>
    </>
  );
};

export default SortMovie;
