export function CardNetworkTypeSelect (selectedValue) {
    const cardNetworkType = document.createElement('select');

    const cardNetworkTypeOption1 = document.createElement('option');
    cardNetworkTypeOption1.innerText = 'mastercard';
    cardNetworkType.appendChild(cardNetworkTypeOption1);

    const cardNetworkTypeOption2 = document.createElement('option');
    cardNetworkTypeOption2.innerText = 'visa';
    cardNetworkType.appendChild(cardNetworkTypeOption2);

    if (selectedValue === 'mastercard') {
        cardNetworkTypeOption1.selected = true;
    }
    if (selectedValue === 'visa') {
        cardNetworkTypeOption2.selected = true;
    }

    return cardNetworkType;
}
