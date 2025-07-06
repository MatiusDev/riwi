import { getData, postData, putData, deleteData } from "./api.js";

const ENDPOINT = "songs";

const getSongs = async () => getData(ENDPOINT);
const createSong = async (songData) => postData(ENDPOINT, songData);
const updateSong = async (id, songData) => putData(ENDPOINT, id, songData);
const deleteSong = async (id) => deleteData(ENDPOINT, id);

export {
  getSongs,
  createSong,
  updateSong,
  deleteSong,
}