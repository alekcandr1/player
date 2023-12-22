import { renderSong } from './song.js'
import { getSongs } from '../../data.js'

export function renderPlaylist() {
    const songs = getSongs();

    const playlistContainer = document.createElement('div');
    playlistContainer.innerHTML = 'Songs';

    for (let i = 0; i < songs.length; i++) {
        const songElement = renderSong(songs[i]);
        playlistContainer.appendChild(songElement);

    }

    return playlistContainer;
}