import { createCardTransactions } from './transactions.js'
import { CardCreationDialog } from '../../components/dialogs/CardCreationDialog.js'
import { CardEditingDialog } from '../../components/dialogs/CardEditingDialog.js'

// rendering of all cards
export function renderCards(cards) {
    const allCards = document.createElement('div');

    const cardHeader = CardHeader();
    allCards.appendChild(cardHeader);

    const dialogElement = CardCreationDialog();
    allCards.appendChild(dialogElement);

    const addCardButton = CardAddButton(dialogElement);
    allCards.appendChild(addCardButton);



    for (let i = 0; i < cards.length; i++) {
        const oneCard = document.createElement('div');
        oneCard.classList.add('card-block');

        const cardInfo = CardInfo(cards[i]);
        oneCard.appendChild(cardInfo);

        const cardTransactions = createCardTransactions(cards[i].transactions);
        oneCard.appendChild(cardTransactions);

        allCards.appendChild(oneCard);
    }
    return allCards;
}
// rendering cards header
function CardHeader() {
    const createCardHeaderElement = document.createElement('div');
    const createH2 = document.createElement('h2');
    createH2.innerText = 'Cards:';
    createCardHeaderElement.appendChild(createH2);

    return createCardHeaderElement;
}

function CardAddButton(dialog) {
    const createAddCardButton = document.createElement('button');
    createAddCardButton.innerText = 'Add card';
    createAddCardButton.addEventListener('click', function () {
        dialog.open = true;
    });

    return createAddCardButton;
}

// rendering of card info
function CardInfo(cards) {
    const cardInfoElement = document.createElement('div');

    // card type
    const cardTypeElement = document.createElement('b');
    cardTypeElement.innerText = `${cards.type} card`;

    cardInfoElement.appendChild(cardTypeElement);

    const editCardInfo = CardEditingDialog(cards);
    cardInfoElement.appendChild(editCardInfo);

    const showEditCardDialogButton = document.createElement('button');
    showEditCardDialogButton.innerText = 'Edit';
    showEditCardDialogButton.addEventListener('click', function () {
        editCardInfo.open = true;

    })
    cardInfoElement.appendChild(showEditCardDialogButton);



    const br1 = document.createElement('br');
    cardInfoElement.appendChild(br1);

    // network logo
    const networkLogo = document.createElement('img');
    switch (cards.networkType) {
        case "visa":
            networkLogo.src = 'img/visa_logo.png';
            break;
        case "mastercard":
            networkLogo.src = 'img/mastercard_logo.png';
            break;
    }
    cardInfoElement.appendChild(networkLogo);

    // currency sign
    let currencySign = "";

    switch (cards.currencyType) {
        case "USD":
            currencySign = "💵";
            break;
        case "EUR":
            currencySign = "💶";
            break;
        case "GBP":
            currencySign = "💷";
            break;
    }

    // currency balance
    const currentBalance = document.createElement('span');
    currentBalance.innerText = `${currencySign} ${cards.currentBalance}`;
    const br2 = document.createElement('br');

    cardInfoElement.appendChild(br2);
    cardInfoElement.appendChild(currentBalance);

    // card number
    const cardNumber = document.createElement('h4');
    cardNumber.innerText = `${cards.number}`;

    cardInfoElement.appendChild(cardNumber);

    // expiration date
    const expDate = document.createElement('span');
    expDate.innerText = `${cards.expirationMonth}/${cards.expirationYear}`;
    cardInfoElement.appendChild(expDate);


    return cardInfoElement;
}



