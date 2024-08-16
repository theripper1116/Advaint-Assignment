const ShowSearchResult = ({ searchedData }) => {
  return (
    <div className="movie__search__list">
      {searchedData.map((ele) => {
        return <span key={ele.id}>{ele.original_title}</span>;
      })}
    </div>
  );
};

export default ShowSearchResult;
