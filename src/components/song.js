export function renderSong(song) {
    const songContainer = document.createElement('div');
    songContainer.innerHTML = `▶ ${song.title} ${song.artist} ${song.year}`;
    return songContainer;
}