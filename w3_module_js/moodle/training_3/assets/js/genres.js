import { createArtistCard } from "./artists.js";

function createGenreCard(genre) {
    const { id, name, artists } = genre;
    const artistCards = artists.map(artist => createArtistCard(artist));

    return `
        <div class="box genre-card" data-genre-id="${id}">
            <h3 class="subtitle has-text-weight-bold has-text-centered mb-5 is-4">${name}</h3>
            <div class="columns is-multiline">
                ${artistCards}
            </div>
        </div>
    `;
}

function populateGenre(genres, artists, albums) {
    const genreData = {};
    genres.forEach(genre => {
        genreData[genre.id] = {
            id: genre.id,
            name: genre.name,
            artists: []
        };

        const genreArtists = artists.filter(artist => artist.genreId === parseInt(genre.id));
        genreArtists.forEach(artist => {
            const artistAlbums = albums.filter(album => album.artistId === parseInt(artist.id));
            genreData[genre.id].artists.push({
                ...artist,
                albums: artistAlbums
            });
        });
    });
    return genreData;
}

export {
  createGenreCard,
  populateGenre
}