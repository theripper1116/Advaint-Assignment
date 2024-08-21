import { REACT_APP_TMDB_API_KEY } from "./links";


export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: REACT_APP_TMDB_API_KEY,
  },
};
