import { getSongs, subscribe } from './data.js';
import { renderSongs } from './components/songs.js';

const rootElement = document.querySelector('#root');

function renderApp () {
    rootElement.innerHTML = '';
    const songs = getSongs();
    const songsElement = renderSongs(songs);
    rootElement.appendChild(songsElement);
}

renderApp();

subscribe(renderApp);