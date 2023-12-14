import { createCard } from '../../data.js';


export function CardCreationDialog() {
    const createDialogElement = document.createElement('dialog');
    const dialogHeader = document.createElement('p');
    const dialogForm = document.createElement('form');
    const dialogInput = document.createElement('input');
    const dialogButton = document.createElement('button');
    dialogButton.type = 'button';

    dialogHeader.innerText = 'Add card:';
    createDialogElement.appendChild(dialogHeader);

    createDialogElement.appendChild(dialogForm);

    dialogForm.appendChild(dialogInput);

    dialogButton.innerText = 'Send';
    dialogButton.addEventListener('click', function () {
        if (dialogInput.value.length !== 16) {
            alert('BAD CARD LENGTH');
        } else {
            createCard(Number(dialogInput.value));
        }
    });
    dialogForm.appendChild(dialogButton);



    createDialogElement.appendChild(dialogHeader);

    return createDialogElement;
}