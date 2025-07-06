import { createArtistCard } from "./artists.js";

function createGenreCard(genre, artists) {
    const { name } = genre;
    return `
        <div class="box genre-card">
            <h3 class="has-text-weight-bold has-text-centered mb-3">${name}</h3>
        </div>
    `;
}

export {
  createGenreCard
}