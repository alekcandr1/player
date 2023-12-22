import { setFilter, getSearchTerm } from '../../data.js';

export function renderFilterPanel () {
    const filterPanelElement = document.createElement('div');

    const searchInput = document.createElement('input');
    searchInput.placeholder = 'Artist or song title';
    searchInput.value = getSearchTerm();

    const searchButton = document.createElement('button');
    searchButton.innerText = 'Search';

    searchButton.addEventListener('click', () => {
        setFilter(searchInput.value);
    });

    filterPanelElement.appendChild(searchInput);
    filterPanelElement.appendChild(searchButton);

    return filterPanelElement;
}