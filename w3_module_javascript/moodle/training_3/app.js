import { getGenres } from "./api.js";

document.addEventListener('DOMContentLoaded', async () => {
    const genresList = document.querySelector('.genres-list');
    
    const genres = await getGenres();

    const genreTemplates = genres.map(genre => {
        const { artists} = genre;

        const genreTemplate = `
            <div class="box genre-card">
                <h3 class="has-text-weight-bold has-text-centered mb-3">${genre.name}</h3>
                <div class="columns is-multiline">
            ${
                artists.map(artist => {
                    return `
                        <div class="column is-one-third">
                            <div class="card artist-card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img id="artist-image" src="${artist.image}" alt="${artist.name}">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <p class="title is-6">${artist.name}</p>
                                    <p class="subtitle is-7">Álbumes:</p>
                                    <ul>
                                        ${artist.albums.map(album => `<li>${album.title} (${album.year})</li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')
            }
                </div>
            </div>
        `;
        return genreTemplate;
    });

    console.log(genres);
    genresList.innerHTML = genreTemplates.join('');
});
