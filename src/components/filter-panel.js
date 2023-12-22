import { setSearchTerm, getSearchTerm, setSortDirection } from '../../data.js';

export function renderFilterPanel() {
    const filterPanelElement = document.createElement('div');

    filterPanelElement.appendChild(renderSearchInput());
    // filterPanelElement.appendChild(renderSearchButton());

    filterPanelElement.appendChild(renderSortButtons());

    return filterPanelElement;
}

function renderSearchInput() {
    const searchInput = document.createElement('input');
    searchInput.placeholder = 'Artist or song title';
    searchInput.value = getSearchTerm();
    searchInput.addEventListener('input', () => {
        setSearchTerm(searchInput.value);
    });
    requestAnimationFrame(() => {
        searchInput.focus();
    });
    return searchInput;

}

function renderSearchButton() {
    const searchButton = document.createElement('button');
    searchButton.innerText = 'Search';
    searchButton.addEventListener('click', () => {
        setFilter(searchInput.value);
    });
    return searchButton;

}
function renderSortButtons() {
    const sortButtonsContainer = document.createElement('div');
    
    const ascSortButton = document.createElement('button');
    ascSortButton.innerText = '🔼';
    ascSortButton.addEventListener('click', () => {
        setSortDirection('asc');
    });
    sortButtonsContainer.appendChild(ascSortButton);

    const descSortButton = document.createElement('button');
    descSortButton.innerText = '🔽';
    descSortButton.addEventListener('click', () => {
        setSortDirection('desc');
    });
    sortButtonsContainer.appendChild(descSortButton);

    return sortButtonsContainer;

}