function createGenreCard(genre) {
    const { name, artists } = genre;
    return `
        <div class="box genre-card">
            <h3 class="has-text-weight-bold has-text-centered mb-3">${name}</h3>
            <div class="columns is-multiline">
                ${artists.map(artist => createArtistCard(artist)).join('')}
            </div>
            <footer class="card-footer">
                <button id="genre-${genre.id}" class="card-footer-item button is-primary btnGenreUpdate"><i class="fas fa-edit"></i></button>
                <button id="genre-${genre.id}" class="card-footer-item button is-danger btnGenreDelete"><i class="fas fa-trash"></i></button>
            </footer>
        </div>
    `;
}

function createArtistCard(artist) {
    const { name, image, albums } = artist;
    return `
        <div class="column is-one-third">
            <div class="card artist-card">
                <div class="card-image">
                    <figure class="image is-5by4">
                        <img id="artist-image" src="${image}" alt="${name}">
                    </figure>
                </div>
                <div class="card-content">
                    <p class="title is-6">${name}</p>
                    <p class="subtitle is-7">Álbumes:</p>
                    <ul>
                        ${albums.map(album => `<li>${album.title} (${album.year})</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
}

export {
  createGenreCard,
  createArtistCard
}