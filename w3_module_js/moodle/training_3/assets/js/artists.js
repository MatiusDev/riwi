import { createAlbumCard } from "./albums.js";

function createArtistCard(artist) {
    const { id, name, image, albums, genreId } = artist;

    const albumCards = albums.map(album => createAlbumCard(album)).join('');

    return `
        <div class="column artist-column">
            <div class="card artist-card" data-artist-id="${id}">
                <div class="card-image">
                    <figure class="image is-5by4">
                        <img id="artist-image" src="${image}" alt="${name}">
                    </figure>
                </div>
                <div class="card-content">
                    <p class="title is-6">${name}</p>
                    <p class="subtitle is-7">Álbumes:</p>
                    <ul>
                        ${albumCards}
                    </ul>
                </div>
                <div class="card-actions">
                    <button class="btnArtistEdit" data-artist-id="${id}" data-artist-name="${name}" data-artist-image="${image}" data-artist-genre-id="${genreId || ''}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btnArtistDelete" data-artist-id="${id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

export {
  createArtistCard
}