function createAlbumCard(album) {
    const { title, year, cover } = album;
    return `
        <div class="card album-card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="${cover}" alt="${title}">
                </figure>
            </div>
            <div class="card-content">
                <p class="title is-6">${title}</p>
                <p class="subtitle is-7">${year}</p>
            </div>
        </div>
    `;
}

export {
    createAlbumCard,
}