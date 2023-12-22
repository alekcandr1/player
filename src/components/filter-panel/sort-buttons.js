import { setSortDirection, getSortDirection } from '../../../data.js';

export function renderSortButtons() {
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

    if (getSortDirection() === 'asc') {
        ascSortButton.style.backgroundColor = '#000';
    } else if (getSortDirection() === 'desc') {
        descSortButton.style.backgroundColor = '#000';
    }


return sortButtonsContainer;
};
