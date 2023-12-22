import { setSearchTerm, getSearchTerm} from '../../../data.js';

export function renderSearchInput() {
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