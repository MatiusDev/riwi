import { getGenres, getSongs, getAlbums, getArtists } from "./assets/js/api.js";
import { createGenreCard } from "./assets/js/genres.js";
import { createSongCard } from "./assets/js/songs.js";
import { createAlbumCard } from "./assets/js/albums.js";
import { createArtistCard } from "./assets/js/artists.js";

async function loadGenres() {
    const genresList = document.querySelector('.genres-list');
    try {
        const genres = await getGenres();
        const albums = await getAlbums();
        const artists = await getArtists();

        const formattedGenres = {};
        genres.forEach(({ id, name }) => formattedGenres[id] = name);
        
        // console.log(formattedGenres);
        // const genreArtists = artists.filter(artist => artist.genreId === id);

        console.log(albums)
        console.log(artists)
        const genreTemplates = genres.map(genre => {
            const genreArtistsId = {};
            artists
                .filter(artist => artist.genreId === parseInt(genre.id))
                .forEach(artist => genreTemplates[artist.id] = artist.name);
                
            console.log(genreArtistsId)
            // const genreAlbums = albums.filter()
            return createGenreCard(genre, genreArtists);
        });
        genresList.innerHTML = genreTemplates.join('');
    } catch (error) {
        console.error('Error fetching genres:', error);
        return;
    }
}

async function loadSongs() {
    const songsList = document.querySelector('.top-songs-list');
    try {
        const songs = await getSongs();
        const songTemplates = songs.map(song => createSongCard(song));
        songsList.innerHTML = songTemplates.join('');
    } catch (error) {
        console.error('Error fetching songs:', error);
        return;
    }
}

async function loadArtists() {
    const artistsList = document.querySelector('.artists-list');
    try {
        const artists = await getArtists();
        const artistTemplates = artists.map(artist => createArtistCard(artist));
        artistsList.innerHTML = artistTemplates.join('');
    } catch (error) {
        console.error('Error fetching artists:', error);
        return;
    }
}

async function loadAlbums() {
    const albumsList = document.querySelector('.albums-list');
    try {
        const albums = await getAlbums();
        const albumTemplates = albums.map(album => createAlbumCard(album));
        albumsList.innerHTML = albumTemplates.join('');
    } catch (error) {
        console.error('Error fetching albums:', error);
        return;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadGenres();
    await loadArtists();
    // await loadSongs();
    // await loadAlbums();

    const btnGenreUpdate = document.querySelectorAll('.btnGenreUpdate');
    const updateGenreModal = document.getElementById('updateGenreModal');
    const closeGenreModal = document.getElementById('closeGenreModal');
    const cancelGenreChanges = document.getElementById('cancelGenreChanges');

    btnGenreUpdate.forEach(button => {
        button.addEventListener('click', (event) => {
            const genreId = event.currentTarget.id.split('-')[1];
            console.log('Modificar género:', genreId);
            updateGenreModal.classList.add('is-active');
        });
    });

    closeGenreModal.addEventListener('click', () => {
        updateGenreModal.classList.remove('is-active');
    });

    cancelGenreChanges.addEventListener('click', () => {
        updateGenreModal.classList.remove('is-active');
    });

    const btnGenreDelete = document.querySelectorAll('.btnGenreDelete');
    btnGenreDelete.forEach(button => {
        button.addEventListener('click', (event) => {
            const genreId = event.currentTarget.id.split('-')[1];
            console.log('Eliminar género:', genreId);
        });
    });
});
