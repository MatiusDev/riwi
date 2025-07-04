import { getGenres, getSongs } from "./assets/js/api.js";
import { createGenreCard } from "./assets/js/genres.js";
import { createSongCard } from "./assets/js/songs.js";

async function loadGenres() {
    const genresList = document.querySelector('.genres-list');
    try {
        const genres = await getGenres();
        const genreTemplates = genres.map(genre => createGenreCard(genre));
        genresList.innerHTML = genreTemplates.join('');
        console.log(genres);
    } catch (error) {
        console.error('Error fetching genres:', error);
        return;
    }
}

async function loadSongs() {
    const songsList = document.querySelector('.top-songs-list');
    try {
        const songs = await getSongs();
        const songTemplates = songs.map(({topSongs}) => createSongCard(topSongs, 4));
        console.log(songs);
        console.log(songTemplates)
        songsList.innerHTML = songTemplates.join('');
    } catch (error) {
        console.error('Error fetching songs:', error);
        return;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadGenres();
    await loadSongs();

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
