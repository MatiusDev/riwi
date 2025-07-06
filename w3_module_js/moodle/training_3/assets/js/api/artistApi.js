import { getData, postData, putData, deleteData } from "./api.js";

const ENDPOINT = "artists";

const getArtists = async () => getData(ENDPOINT);
const createArtist = async (artistData) => postData(ENDPOINT, artistData);
const updateArtist = async (id, artistData) => putData(ENDPOINT, id, artistData);
const deleteArtist = async (id) => deleteData(ENDPOINT, id);

export {
  getArtists,
  createArtist,
  updateArtist,
  deleteArtist,
}