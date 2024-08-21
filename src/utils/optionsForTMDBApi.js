const REACT_APP_TMDB_API_KEY = import.meta.env.REACT_APP_TMDB_API_KEY;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: REACT_APP_TMDB_API_KEY,
  },
};
