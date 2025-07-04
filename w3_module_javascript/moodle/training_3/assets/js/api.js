const BASEURL = 'http://localhost:3000';

export const getGenres = async () => {
    return fetch(`${BASEURL}/genres`)
        .then(response => response.json())
        .catch(error => console.error('Error fetching genres:', error));
};

export const getSongs = async () => {
    return fetch(`${BASEURL}/songs`)
        .then(response => response.json())
        .catch(error => console.error('Error fetching songs:', error));
}
