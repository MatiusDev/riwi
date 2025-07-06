const BASEURL = 'http://localhost:3000';

export const getGenres = async () => {
    return fetch(`${BASEURL}/genres`)
        .then(response => response.json())
        .catch(error => console.error('Error al obtener los generos:', error));
};

export const getSongs = async () => {
    return fetch(`${BASEURL}/songs`)
        .then(response => response.json())
        .catch(error => console.error('Error al obtener las canciones:', error));
}

export const getAlbums = async () => {
    return fetch(`${BASEURL}/albums`)
        .then(response => response.json())
        .catch(error => console.error('Error al obtener los albumnes:', error));
}

export const getArtists = async () => {
    return fetch(`${BASEURL}/artists`)
        .then(response => response.json())
        .catch(error => console.error('Error al obtener los artistas:', error));
}