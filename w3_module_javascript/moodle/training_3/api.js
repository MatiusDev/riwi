export const getGenres = async () => {
    return fetch('http://localhost:3000/genres')
        .then(response => response.json())
        .catch(error => console.error('Error fetching genres:', error));
};
