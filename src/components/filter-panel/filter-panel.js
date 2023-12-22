import { renderSearchInput } from './search-input.js';
import { renderSearchButton } from './search-button.js';
import { renderSortButtons } from './sort-buttons.js';

export function renderFilterPanel() {
    const filterPanelElement = document.createElement('div');

    filterPanelElement.appendChild(renderSearchInput());
    // filterPanelElement.appendChild(renderSearchButton());

    filterPanelElement.appendChild(renderSortButtons());

    return filterPanelElement;
}