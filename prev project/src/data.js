export function getCurrentUser() {
    let newUser = {
        name: 'Alex',
        role: 'Admin',
        balance: 100,
    };
    return newUser;
}
 
let card1 = {
    id: 1,
    type: "debit",
    networkType: "mastercard",
    currencyType: "USD",
    currentBalance: 5750.53,
    number: 5282345678901289,
    expirationYear: 2025,
    expirationMonth: 9,
    isActive: true,
    transactions: [
        {
            title: "Order Revenue",
            amount: 874,
            date: new Date(2022, 3, 25, 16, 43, 22),
        },
        {
            title: "Order Revenue",
            amount: -874,
            date: new Date(2022, 3, 25, 16, 43, 22),
        },
    ],
};

let card2 = {
    id: 2,
    type: "credit",
    networkType: "visa",
    currencyType: "EUR",
    currentBalance: 1343.53,
    number: 9232654321012032,
    expirationYear: 2026,
    expirationMonth: 4,
    isActive: false,
    transactions: [
        {
            title: "Order Revenue",
            amount: -874,
            date: new Date(2022, 3, 25, 16, 43, 22),
        },
        {
            title: "Order Revenue",
            amount: -874,
            date: new Date(2022, 3, 25, 16, 43, 22),
        },
    ],
};

let card3 = {
    id: 3,
    type: "debit",
    networkType: "mastercard",
    currencyType: "GBP",
    currentBalance: 3263.65,
    number: 554259349582930,
    expirationYear: 2028,
    expirationMonth: 3,
    isActive: true,
    transactions: [
        {
            title: "Order Revenue",
            amount: 874,
            date: new Date(2022, 3, 25, 16, 43, 22),
        },
        {
            title: "Order Revenue",
            amount: 874,
            date: new Date(2022, 3, 25, 16, 43, 22),
        },
    ],
};

let _cards = [card1, card2, card3];

let dataChanchedEventListener = () => {
 
}

export function addEventListener(listener) {
    dataChanchedEventListener = listener;
}

export function getCards() {
    return _cards;
}
export function createCard(cardNumber) {
    let newCard = {
        id: Number(new Date()),
        type: "debit",
        networkType: "mastercard",
        currencyType: "USD",
        currentBalance: 0.00,
        number: cardNumber,
        expirationYear: 0,
        expirationMonth: 0,
        isActive: false,
        transactions: [],
    };  

    _cards.unshift(newCard);
    dataChanchedEventListener();

}

export function updateCard(id, newCardNumber, newCardNetworkType) {
     const card = _cards.find(card => card.id === id);
     card.number = newCardNumber;
     card.networkType = newCardNetworkType;

     dataChanchedEventListener();

}