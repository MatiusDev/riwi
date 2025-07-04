function createSongCard(songs, limit = 2) {
    if (!songs || songs.length === 0
    ) return '';

    const topSongs = songs.slice(0, limit);
    return topSongs.map(song => {
        const { title, artist, cover } = song;
        return `
        <div class="card top-song-card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="${cover}" alt="${title}">
                </figure>
            </div>
            <div class="card-content">
                <p class="title is-6">${title}</p>
                <p class="subtitle is-7">${artist}</p>
            </div>
        </div>
    `}).join('');
}

export {
  createSongCard,
}