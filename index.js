import { subscribe } from './data.js';
import { renderFilterPanel } from './src/components/filter-panel/filter-panel.js';
import { renderPlaylist } from './src/components/songs.js';

const rootElement = document.querySelector('#root');

function renderApp () {
    rootElement.innerHTML = '';

    const filterPanelElement = renderFilterPanel();
    rootElement.appendChild(filterPanelElement);

    const playlistElement = renderPlaylist();
    rootElement.appendChild(playlistElement);
}

renderApp();

subscribe(renderApp);