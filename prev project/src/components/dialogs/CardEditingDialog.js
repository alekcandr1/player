import { updateCard } from '../../data.js';
import { CardNetworkTypeSelect } from '../common/CardNetworkTypeSelect.js';

export function CardEditingDialog(cards) {
    const createDialogElement = document.createElement('dialog');

    const dialogHeader = document.createElement('p');
    dialogHeader.innerText = 'Edit card:';
    createDialogElement.appendChild(dialogHeader);

    const dialogForm = document.createElement('form');
    createDialogElement.appendChild(dialogForm);

    const cardNumberInput = document.createElement('input');
    cardNumberInput.value = cards.number;
    dialogForm.appendChild(cardNumberInput);

    const cardType = CardNetworkTypeSelect(cards.networkType);
    dialogForm.appendChild(cardType);

    const dialogButton = document.createElement('button');
    dialogButton.type = 'button';
    dialogButton.innerText = 'SAVE';
    dialogButton.addEventListener('click', function () {
        if (cardNumberInput.value.length !== 16) {
            alert('BAD CARD LENGTH');
        } else {
            updateCard(cards.id, BigInt(cardNumberInput.value), cardType.value);
        }
    });
    dialogForm.appendChild(dialogButton);



    createDialogElement.appendChild(dialogHeader);

    return createDialogElement;
}