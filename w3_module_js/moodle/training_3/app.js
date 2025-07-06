import { getGenres } from "./assets/js/api/genreApi.js";
import { getArtists, createArtist, updateArtist, deleteArtist } from "./assets/js/api/artistApi.js";
import { getAlbums, createAlbum, updateAlbum, deleteAlbum } from "./assets/js/api/albumApi.js";
import { getSongs, createSong, updateSong, deleteSong } from "./assets/js/api/songApi.js";

import { createGenreCard, populateGenre } from "./assets/js/genres.js";
import { createSongCard } from "./assets/js/songs.js";

async function loadGenres() {
    const genresList = document.querySelector('.genres-list');
    try {
        const genres = await getGenres();
        const artists = await getArtists();
        const albums = await getAlbums();

        const genreData = populateGenre(genres, artists, albums);

        const genreTemplate = genres.map(genre => {
            const genreInfo = genreData[genre.id];
            return createGenreCard({
                id: genreInfo.id,
                name: genreInfo.name,
                artists: genreInfo.artists
            });
        }).join('');
        genresList.innerHTML = genreTemplate;
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

// Función para cargar artistas en los selectores
async function loadArtistsInSelectors() {
    try {
        const artists = await getArtists();
        const selector = document.getElementById('newAlbumArtist');
        
        if (selector) {
            selector.innerHTML = '<option value="">Seleccionar artista</option>';
            
            artists.forEach(artist => {
                const option = document.createElement('option');
                option.value = artist.id;
                option.textContent = artist.name;
                selector.appendChild(option);
            });
        }
    } catch (error) {
        console.error('Error cargando artistas en selectores:', error);
    }
}

// Función para cargar artistas por género
async function loadArtistsByGenre(genreId) {
    try {
        const artists = await getArtists();
        const songArtistSelector = document.getElementById('newSongArtist');
        const updateSongArtistSelector = document.getElementById('updateSongArtist');
        
        // Para crear canción
        if (songArtistSelector) {
            songArtistSelector.innerHTML = '<option value="">Seleccionar artista</option>';
            
            const filteredArtists = artists.filter(artist => artist.genreId === parseInt(genreId));
            filteredArtists.forEach(artist => {
                const option = document.createElement('option');
                option.value = artist.id;
                option.textContent = artist.name;
                songArtistSelector.appendChild(option);
            });
            
            songArtistSelector.disabled = false;
        }
        
        // Para actualizar canción
        if (updateSongArtistSelector) {
            updateSongArtistSelector.innerHTML = '<option value="">Seleccionar artista</option>';
            
            const filteredArtists = artists.filter(artist => artist.genreId === parseInt(genreId));
            filteredArtists.forEach(artist => {
                const option = document.createElement('option');
                option.value = artist.id;
                option.textContent = artist.name;
                updateSongArtistSelector.appendChild(option);
            });
            
            updateSongArtistSelector.disabled = false;
        }
    } catch (error) {
        console.error('Error cargando artistas por género:', error);
    }
}

// Función para cargar álbumes por artista
async function loadAlbumsByArtist(artistId) {
    try {
        const albums = await getAlbums();
        const songAlbumSelector = document.getElementById('newSongAlbum');
        const updateSongAlbumSelector = document.getElementById('updateSongAlbum');
        
        // Para crear canción
        if (songAlbumSelector) {
            songAlbumSelector.innerHTML = '<option value="">Seleccionar álbum</option>';
            
            const filteredAlbums = albums.filter(album => album.artistId === parseInt(artistId));
            filteredAlbums.forEach(album => {
                const option = document.createElement('option');
                option.value = album.id;
                option.textContent = album.title;
                songAlbumSelector.appendChild(option);
            });
            
            songAlbumSelector.disabled = false;
        }
        
        // Para actualizar canción
        if (updateSongAlbumSelector) {
            updateSongAlbumSelector.innerHTML = '<option value="">Seleccionar álbum</option>';
            
            const filteredAlbums = albums.filter(album => album.artistId === parseInt(artistId));
            filteredAlbums.forEach(album => {
                const option = document.createElement('option');
                option.value = album.id;
                option.textContent = album.title;
                updateSongAlbumSelector.appendChild(option);
            });
            
            updateSongAlbumSelector.disabled = false;
        }
    } catch (error) {
        console.error('Error cargando álbumes por artista:', error);
    }
}

// Función para cargar álbumes en el selector de canciones
async function loadAlbumsInSelector() {
    try {
        const albums = await getAlbums();
        const albumSelector = document.getElementById('newSongAlbum');
        
        if (albumSelector) {
            albumSelector.innerHTML = '<option value="">Seleccionar álbum</option>';
            
            albums.forEach(album => {
                const option = document.createElement('option');
                option.value = album.id;
                option.textContent = album.title;
                albumSelector.appendChild(option);
            });
        }
    } catch (error) {
        console.error('Error cargando álbumes en selector:', error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadGenres();
    await loadSongs();
    await loadArtistsInSelectors();
    await loadAlbumsInSelector();

    // Song Elements
    const updateSongModal = document.getElementById('updateSongModal');
    const closeSongModal = document.getElementById('closeSongModal');
    const cancelSongChanges = document.getElementById('cancelSongChanges');

    // Artist Elements
    const updateArtistModal = document.getElementById('updateArtistModal');
    const closeArtistModal = document.getElementById('closeArtistModal');
    const cancelArtistChanges = document.getElementById('cancelArtistChanges');

    // Album Elements
    const updateAlbumModal = document.getElementById('updateAlbumModal');
    const closeAlbumModal = document.getElementById('closeAlbumModal');
    const cancelAlbumChanges = document.getElementById('cancelAlbumChanges');

    // Create modals elements
    const createArtistModal = document.getElementById('createArtistModal');
    const createAlbumModal = document.getElementById('createAlbumModal');
    const createSongModal = document.getElementById('createSongModal');

    // Song buttons
    document.addEventListener('click', async (event) => {
        if (event.target.closest('.btnSongEdit')) {
            const button = event.target.closest('.btnSongEdit');
            const songId = button.dataset.songId;
            const songTitle = button.dataset.songTitle;
            const songCover = button.dataset.songCover;
            const songGenreId = button.dataset.songGenreId;
            const songArtistId = button.dataset.songArtistId;
            const songAlbumId = button.dataset.songAlbumId;
            
            document.getElementById('newSongTitleInput').value = songTitle;
            document.getElementById('newSongCoverInput').value = songCover;
            updateSongModal.dataset.songId = songId;
            
            // Configurar selectores con los datos actuales de la canción
            const genreSelector = document.getElementById('updateSongGenre');
            const artistSelector = document.getElementById('updateSongArtist');
            const albumSelector = document.getElementById('updateSongAlbum');
            
            // Establecer el género y cargar artistas
            if (songGenreId) {
                genreSelector.value = songGenreId;
                loadArtistsByGenre(songGenreId).then(() => {
                    // Una vez cargados los artistas, establecer el artista
                    if (songArtistId) {
                        artistSelector.value = songArtistId;
                        loadAlbumsByArtist(songArtistId).then(() => {
                            // Una vez cargados los álbumes, establecer el álbum
                            if (songAlbumId) {
                                albumSelector.value = songAlbumId;
                            }
                        });
                    }
                });
            }
            
            updateSongModal.classList.add('is-active');
        }

        if (event.target.closest('.btnSongDelete')) {
            const button = event.target.closest('.btnSongDelete');
            const songId = button.dataset.songId;
            
            if (confirm('¿Estás seguro de que quieres eliminar esta canción?')) {
                try {
                    await deleteSong(songId);
                    console.log('Canción eliminada exitosamente');
                    await loadSongs();
                } catch (error) {
                    console.error('Error eliminando canción:', error);
                    console.log('Error al eliminar la canción');
                }
            }
        }
    });

    // Artist buttons
    document.addEventListener('click', async (event) => {
        if (event.target.closest('.btnArtistEdit')) {
            const button = event.target.closest('.btnArtistEdit');
            const artistId = button.dataset.artistId;
            const artistName = button.dataset.artistName;
            const artistImage = button.dataset.artistImage;
            const artistGenreId = button.dataset.artistGenreId;
            
            document.getElementById('newArtistNameInput').value = artistName;
            document.getElementById('newArtistImageInput').value = artistImage;
            document.getElementById('updateArtistGenre').value = artistGenreId || '';
            updateArtistModal.dataset.artistId = artistId;
            updateArtistModal.classList.add('is-active');
        }

        if (event.target.closest('.btnArtistDelete')) {
            const button = event.target.closest('.btnArtistDelete');
            const artistId = button.dataset.artistId;
            
            if (confirm('¿Estás seguro de que quieres eliminar este artista? También se eliminarán todos sus álbumes.')) {
                try {
                    // Primero eliminar todos los álbumes del artista
                    const albums = await getAlbums();
                    const artistAlbums = albums.filter(album => album.artistId === parseInt(artistId));
                    
                    // Eliminar cada álbum del artista
                    for (const album of artistAlbums) {
                        await deleteAlbum(album.id);
                    }
                    
                    // Luego eliminar el artista
                    await deleteArtist(artistId);
                    
                    console.log(`Artista eliminado exitosamente. Se eliminaron ${artistAlbums.length} álbumes asociados.`);
                    await loadGenres();
                    await loadArtistsInSelectors();
                    await loadAlbumsInSelector();
                } catch (error) {
                    console.error('Error eliminando artista:', error);
                    console.log('Error al eliminar el artista');
                }
            }
        }
    });

    // Album buttons
    document.addEventListener('click', async (event) => {
        if (event.target.closest('.btnAlbumEdit')) {
            const button = event.target.closest('.btnAlbumEdit');
            const albumId = button.dataset.albumId;
            const albumTitle = button.dataset.albumTitle;
            const albumYear = button.dataset.albumYear;
            
            document.getElementById('newAlbumTitleInput').value = albumTitle;
            document.getElementById('newAlbumYearInput').value = albumYear;
            updateAlbumModal.dataset.albumId = albumId;
            updateAlbumModal.classList.add('is-active');
        }

        if (event.target.closest('.btnAlbumDelete')) {
            const button = event.target.closest('.btnAlbumDelete');
            const albumId = button.dataset.albumId;
            
            if (confirm('¿Estás seguro de que quieres eliminar este álbum?')) {
                try {
                    await deleteAlbum(albumId);
                    console.log('Álbum eliminado exitosamente');
                    await loadGenres();
                    await loadAlbumsInSelector();
                } catch (error) {
                    console.error('Error eliminando álbum:', error);
                    console.log('Error al eliminar el álbum');
                }
            }
        }
    });

    // Add buttons event listeners
    document.getElementById('addArtistBtn').addEventListener('click', () => {
        createArtistModal.classList.add('is-active');
    });

    document.getElementById('addAlbumBtn').addEventListener('click', () => {
        createAlbumModal.classList.add('is-active');
    });

    document.getElementById('addSongBtn').addEventListener('click', () => {
        createSongModal.classList.add('is-active');
    });

    // Event listeners para selectores dependientes en crear canción
    document.getElementById('newSongGenre').addEventListener('change', (event) => {
        const genreId = event.target.value;
        const artistSelector = document.getElementById('newSongArtist');
        const albumSelector = document.getElementById('newSongAlbum');
        
        if (genreId) {
            // Cargar artistas del género seleccionado
            loadArtistsByGenre(genreId);
            
            // Resetear y deshabilitar selector de álbum
            albumSelector.innerHTML = '<option value="">Primero selecciona un artista</option>';
            albumSelector.disabled = true;
        } else {
            // Si no hay género seleccionado, deshabilitar ambos selectores
            artistSelector.innerHTML = '<option value="">Primero selecciona un género</option>';
            artistSelector.disabled = true;
            albumSelector.innerHTML = '<option value="">Primero selecciona un artista</option>';
            albumSelector.disabled = true;
        }
    });

    document.getElementById('newSongArtist').addEventListener('change', (event) => {
        const artistId = event.target.value;
        const albumSelector = document.getElementById('newSongAlbum');
        
        if (artistId) {
            // Cargar álbumes del artista seleccionado
            loadAlbumsByArtist(artistId);
        } else {
            // Si no hay artista seleccionado, deshabilitar selector de álbum
            albumSelector.innerHTML = '<option value="">Primero selecciona un artista</option>';
            albumSelector.disabled = true;
        }
    });

    // Event listeners para selectores dependientes en actualizar canción
    document.getElementById('updateSongGenre').addEventListener('change', (event) => {
        const genreId = event.target.value;
        const artistSelector = document.getElementById('updateSongArtist');
        const albumSelector = document.getElementById('updateSongAlbum');
        
        if (genreId) {
            // Cargar artistas del género seleccionado
            loadArtistsByGenre(genreId);
            
            // Resetear y deshabilitar selector de álbum
            albumSelector.innerHTML = '<option value="">Primero selecciona un artista</option>';
            albumSelector.disabled = true;
        } else {
            // Si no hay género seleccionado, deshabilitar ambos selectores
            artistSelector.innerHTML = '<option value="">Primero selecciona un género</option>';
            artistSelector.disabled = true;
            albumSelector.innerHTML = '<option value="">Primero selecciona un artista</option>';
            albumSelector.disabled = true;
        }
    });

    document.getElementById('updateSongArtist').addEventListener('change', (event) => {
        const artistId = event.target.value;
        const albumSelector = document.getElementById('updateSongAlbum');
        
        if (artistId) {
            // Cargar álbumes del artista seleccionado
            loadAlbumsByArtist(artistId);
        } else {
            // Si no hay artista seleccionado, deshabilitar selector de álbum
            albumSelector.innerHTML = '<option value="">Primero selecciona un artista</option>';
            albumSelector.disabled = true;
        }
    });

    // Song save
    document.getElementById('saveSongChanges').addEventListener('click', async () => {
        const songId = updateSongModal.dataset.songId;
        const newTitle = document.getElementById('newSongTitleInput').value;
        const newCover = document.getElementById('newSongCoverInput').value;
        const newGenreId = document.getElementById('updateSongGenre').value;
        const newArtistId = document.getElementById('updateSongArtist').value;
        const newAlbumId = document.getElementById('updateSongAlbum').value;

        if (!newTitle || !newGenreId || !newArtistId || !newAlbumId) {
            console.log('Por favor completa los campos requeridos');
            return;
        }

        try {
            const songData = {
                title: newTitle,
                cover: newCover || `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 1000)}`,
                genreId: parseInt(newGenreId),
                artistId: parseInt(newArtistId),
                albumId: parseInt(newAlbumId)
            };

            await updateSong(songId, songData);
            console.log('Canción actualizada exitosamente');
            
            // Recargar datos y cerrar modal
            await loadSongs();
            updateSongModal.classList.remove('is-active');
            
        } catch (error) {
            console.error('Error actualizando canción:', error);
            console.log('Error al actualizar la canción');
        }
    });

    // Artist save
    document.getElementById('saveArtistChanges').addEventListener('click', async () => {
        const artistId = updateArtistModal.dataset.artistId;
        const newName = document.getElementById('newArtistNameInput').value;
        const newImage = document.getElementById('newArtistImageInput').value;
        const newGenreId = document.getElementById('updateArtistGenre').value;

        if (!newName || !newGenreId) {
            console.log('Por favor completa los campos requeridos');
            return;
        }

        try {
            const artistData = {
                name: newName,
                image: newImage || 'https://picsum.photos/300/300?random=999',
                genreId: parseInt(newGenreId)
            };

            await updateArtist(artistId, artistData);
            console.log('Artista actualizado exitosamente');
            
            // Recargar datos y cerrar modal
            await loadGenres();
            await loadArtistsInSelectors();
            updateArtistModal.classList.remove('is-active');
            
        } catch (error) {
            console.error('Error actualizando artista:', error);
            console.log('Error al actualizar el artista');
        }
    });

    // Album save
    document.getElementById('saveAlbumChanges').addEventListener('click', async () => {
        const albumId = updateAlbumModal.dataset.albumId;
        const newTitle = document.getElementById('newAlbumTitleInput').value;
        const newYear = document.getElementById('newAlbumYearInput').value;

        if (!newTitle || !newYear) {
            console.log('Por favor completa los campos requeridos');
            return;
        }

        try {
            const albumData = {
                title: newTitle,
                year: parseInt(newYear)
            };

            await updateAlbum(albumId, albumData);
            console.log('Álbum actualizado exitosamente');
            
            // Recargar datos y cerrar modal
            await loadGenres();
            await loadAlbumsInSelector();
            updateAlbumModal.classList.remove('is-active');
            
        } catch (error) {
            console.error('Error actualizando álbum:', error);
            console.log('Error al actualizar el álbum');
        }
    });

    // Create new artist
    document.getElementById('saveNewArtist').addEventListener('click', async () => {
        const name = document.getElementById('newArtistName').value;
        const image = document.getElementById('newArtistImage').value;
        const genreId = document.getElementById('newArtistGenre').value;

        if (!name || !genreId) {
            console.log('Por favor completa los campos requeridos');
            return;
        }

        try {
            const artistData = {
                name: name,
                image: image || 'https://picsum.photos/300/300?random=999',
                genreId: parseInt(genreId)
            };

            await createArtist(artistData);
            console.log('Artista creado exitosamente');
            
            // Recargar datos y cerrar modal
            await loadGenres();
            await loadArtistsInSelectors();
            createArtistModal.classList.remove('is-active');
            
            // Limpiar formulario
            document.getElementById('newArtistName').value = '';
            document.getElementById('newArtistImage').value = '';
            document.getElementById('newArtistGenre').value = '';
            
        } catch (error) {
            console.error('Error creando artista:', error);
            console.log('Error al crear el artista');
        }
    });

    // Create new album
    document.getElementById('saveNewAlbum').addEventListener('click', async () => {
        const title = document.getElementById('newAlbumTitle').value;
        const year = document.getElementById('newAlbumYear').value;
        const artistId = document.getElementById('newAlbumArtist').value;

        if (!title || !year || !artistId) {
            console.log('Por favor completa los campos requeridos');
            return;
        }

        try {
            const albumData = {
                title: title,
                year: parseInt(year),
                cover: `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 1000)}`,
                artistId: parseInt(artistId)
            };

            await createAlbum(albumData);
            console.log('Álbum creado exitosamente');
            
            // Recargar datos y cerrar modal
            await loadGenres();
            await loadAlbumsInSelector();
            createAlbumModal.classList.remove('is-active');
            
            // Limpiar formulario
            document.getElementById('newAlbumTitle').value = '';
            document.getElementById('newAlbumYear').value = '';
            document.getElementById('newAlbumArtist').value = '';
            
        } catch (error) {
            console.error('Error creando álbum:', error);
            console.log('Error al crear el álbum');
        }
    });

    // Create new song
    document.getElementById('saveNewSong').addEventListener('click', async () => {
        const title = document.getElementById('newSongTitle').value;
        const cover = document.getElementById('newSongCover').value;
        const artistId = document.getElementById('newSongArtist').value;
        const albumId = document.getElementById('newSongAlbum').value;
        const genreId = document.getElementById('newSongGenre').value;

        if (!title || !artistId || !genreId || !albumId) {
            console.log('Por favor completa los campos requeridos');
            return;
        }

        try {
            const songData = {
                title: title,
                cover: cover || `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 1000)}`,
                artistId: parseInt(artistId),
                albumId: albumId ? parseInt(albumId) : null,
                genreId: parseInt(genreId)
            };

            await createSong(songData);
            console.log('Canción creada exitosamente');
            
            // Recargar datos y cerrar modal
            await loadSongs();
            createSongModal.classList.remove('is-active');
            
            // Limpiar formulario
            document.getElementById('newSongTitle').value = '';
            document.getElementById('newSongCover').value = '';
            document.getElementById('newSongGenre').value = '';
            
            // Resetear selectores dependientes
            const artistSelector = document.getElementById('newSongArtist');
            const albumSelector = document.getElementById('newSongAlbum');
            
            artistSelector.innerHTML = '<option value="">Primero selecciona un género</option>';
            artistSelector.disabled = true;
            artistSelector.value = '';
            
            albumSelector.innerHTML = '<option value="">Primero selecciona un artista</option>';
            albumSelector.disabled = true;
            albumSelector.value = '';
            
        } catch (error) {
            console.error('Error creando canción:', error);
            console.log('Error al crear la canción');
        }
    });

    // Close modals
    closeSongModal.addEventListener('click', () => {
        updateSongModal.classList.remove('is-active');
    });

    cancelSongChanges.addEventListener('click', () => {
        updateSongModal.classList.remove('is-active');
    });

    closeArtistModal.addEventListener('click', () => {
        updateArtistModal.classList.remove('is-active');
    });

    cancelArtistChanges.addEventListener('click', () => {
        updateArtistModal.classList.remove('is-active');
    });

    closeAlbumModal.addEventListener('click', () => {
        updateAlbumModal.classList.remove('is-active');
    });

    cancelAlbumChanges.addEventListener('click', () => {
        updateAlbumModal.classList.remove('is-active');
    });

    // Close create modals
    document.getElementById('closeCreateArtistModal').addEventListener('click', () => {
        createArtistModal.classList.remove('is-active');
    });

    document.getElementById('cancelCreateArtist').addEventListener('click', () => {
        createArtistModal.classList.remove('is-active');
    });

    document.getElementById('closeCreateAlbumModal').addEventListener('click', () => {
        createAlbumModal.classList.remove('is-active');
    });

    document.getElementById('cancelCreateAlbum').addEventListener('click', () => {
        createAlbumModal.classList.remove('is-active');
    });

    document.getElementById('closeCreateSongModal').addEventListener('click', () => {
        createSongModal.classList.remove('is-active');
    });

    document.getElementById('cancelCreateSong').addEventListener('click', () => {
        createSongModal.classList.remove('is-active');
        
        // Resetear selectores dependientes al cancelar
        const artistSelector = document.getElementById('newSongArtist');
        const albumSelector = document.getElementById('newSongAlbum');
        
        artistSelector.innerHTML = '<option value="">Primero selecciona un género</option>';
        artistSelector.disabled = true;
        artistSelector.value = '';
        
        albumSelector.innerHTML = '<option value="">Primero selecciona un artista</option>';
        albumSelector.disabled = true;
        albumSelector.value = '';
    });
});
