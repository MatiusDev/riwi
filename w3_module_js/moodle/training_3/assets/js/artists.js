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
                
            </div>
        </div>
    `;
}


/* <div class="card-content">
    <p class="title is-6">${name}</p>
    <p class="subtitle is-7">Álbumes:</p>
    <ul>
        ${albums.map(album => `<li>${album.title} (${album.year})</li>`).join('')}
    </ul>
</div> */

export {
  createArtistCard
}