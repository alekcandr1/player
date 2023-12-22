import { setSearchTerm } from '../../../data.js';

export function renderSearchButton() {
    const searchButton = document.createElement('button');
    searchButton.innerText = 'Search';
    searchButton.addEventListener('click', () => {
        setSearchTerm(searchInput.value);
    });
    return searchButton;

}
