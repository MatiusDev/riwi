function createAlbumCard(album) {
    const { id, title, year, cover } = album;
    return `
        <div class="card album-card" data-album-id="${id}">
            <div class="card-content">
                <p class="title is-6">${title}</p>
                <p class="subtitle is-7">${year}</p>
            </div>
            <div class="card-actions">
                <button class="btnAlbumEdit" data-album-id="${id}" data-album-title="${title}" data-album-year="${year}" data-album-cover="${cover}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btnAlbumDelete" data-album-id="${id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
}

export {
    createAlbumCard,
}