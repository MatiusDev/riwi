function createSongCard(song) {
    const { id, title, cover, genreId, artistId, albumId } = song;
    return `
    <div class="card top-song-card" data-song-id="${id}">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="${cover}" alt="${title}">
            </figure>
        </div>
        <div class="card-content">
            <p class="title is-6">${title}</p>
            <p class="subtitle is-7"></p>
        </div>
        <div class="card-actions">
            <button class="btnSongEdit" data-song-id="${id}" data-song-title="${title}" data-song-cover="${cover}" data-song-genre-id="${genreId || ''}" data-song-artist-id="${artistId || ''}" data-song-album-id="${albumId || ''}">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btnSongDelete" data-song-id="${id}">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    </div>
`
}

export {
  createSongCard,
}