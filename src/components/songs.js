import { renderSong } from './song.js'

export function renderPlaylist(songs) {
    const playlistContainer = document.createElement('div');
    playlistContainer.innerHTML = 'Songs';

    for (let i = 0; i < songs.length; i++) {
        const songElement = renderSong(songs[i]);
        playlistContainer.appendChild(songElement);

    }

    return playlistContainer;
}