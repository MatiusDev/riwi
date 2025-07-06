import { getData, postData, putData, deleteData } from "./api.js";

const ENDPOINT = "albums";

const getAlbums = async () => getData(ENDPOINT);
const createAlbum = async (albumData) => postData(ENDPOINT, albumData);
const updateAlbum = async (id, albumData) => putData(ENDPOINT, id, albumData);
const deleteAlbum = async (id) => deleteData(ENDPOINT, id);

export {
  getAlbums,
  createAlbum,
  updateAlbum,
  deleteAlbum,
}