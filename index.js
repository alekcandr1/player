import { getSongs, subscribe } from './data.js';
import { renderFilterPanel } from './src/components/filter-panel.js';
import { renderPlaylist } from './src/components/songs.js';

const rootElement = document.querySelector('#root');

function renderApp () {
    rootElement.innerHTML = '';

    const filterPanelElement = renderFilterPanel();
    rootElement.appendChild(filterPanelElement);


    const playlist = getSongs();
    const playlistElement = renderPlaylist(playlist);
    rootElement.appendChild(playlistElement);
}


renderApp();

subscribe(renderApp);