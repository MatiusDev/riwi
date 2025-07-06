function createSongCard(song) {
    const { title } = song;
    return `
    <div class="card top-song-card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="" alt="${title}">
            </figure>
        </div>
        <div class="card-content">
            <p class="title is-6">${title}</p>
            <p class="subtitle is-7"></p>
        </div>
    </div>
`
}

export {
  createSongCard,
}