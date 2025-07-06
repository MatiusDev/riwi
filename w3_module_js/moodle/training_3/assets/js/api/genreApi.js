import { getData } from "./api.js";

const ENDPOINT = "genres";

const getGenres = async () => getData(ENDPOINT);

export {
  getGenres,
}