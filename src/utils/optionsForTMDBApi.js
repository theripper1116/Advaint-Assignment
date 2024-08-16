import { TMDB__API__KEY } from "./links";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: TMDB__API__KEY,
  },
};
