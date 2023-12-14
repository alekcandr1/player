// data
const currentUser = getCurrentUser();
const cards = getCards();
const rootElement = document.querySelector('#root');
// create div.card-block
const allCards = document.createElement('div');
allCards.classList.add('card-block');




// render
 
renderHeader(currentUser.name, currentUser.balance);
createMainBox(cards);


function renderHeader(userName, userBalance) {
  const h1Element = document.createElement('h1');
  h1Element.innerText = `Hello, ${userName} (${userBalance})`;

  rootElement.appendChild(h1Element);
}


function createMainBox(card) {
  for (let i = 0; i < card.length; i++) {
    const cardBlock = document.createElement('div');
    const cardElement = createCardElement(card[i], cardBlock);
    cardBlock.appendChild(cardElement);

    const allTransactionsCard = renderTransactions(card[i]);
    cardBlock.appendChild(allTransactionsCard);

    rootElement.appendChild(cardBlock);

    cardBlock.appendChild(document.createElement('hr'));

  }
  return rootElement;


}

function createCardElement(card, cardElement) {

  createCardType(card, cardElement);
  createNetworkLogo(card, cardElement);

  // currency sign
  let currencySign = "";

  switch (card.currencyType) {
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
  currentBalance.innerText = `${currencySign} ${card.currentBalance}`;
  const br2 = document.createElement('br');

  cardElement.appendChild(br2);
  cardElement.appendChild(currentBalance);

  // card number
  const cardNumber = document.createElement('h4');
  cardNumber.innerText = `${card.number}`;

  cardElement.appendChild(cardNumber);

  // expiration date
  const expDate = document.createElement('span');
  expDate.innerText = `${card.expirationMonth}/${card.expirationYear}`;
  cardElement.appendChild(expDate);


  return cardElement;


}

function createCardType(card, cardElement) {
  // card type
  const cardTypeElement = document.createElement('b');
  cardTypeElement.innerText = `${card.type} card`;

  cardElement.appendChild(cardTypeElement);

  const br1 = document.createElement('br');
  cardTypeElement.appendChild(br1);

}
function createNetworkLogo(card, cardElement) {
  // network logo
  const networkLogo = document.createElement('img');
  switch (card.networkType) {
    case "visa":
      networkLogo.src = 'img/visa_logo.png';
      break;
    case "mastercard":
      networkLogo.src = 'img/mastercard_logo.png';
      break;
  }
  cardElement.appendChild(networkLogo);

}


function renderTransactions(card) {

  const transactionHeader = document.createElement('h2');
  transactionHeader.innerText = `History Transaction`;
  const listTransactions = document.createElement('ul');



  for (let j = 0; j < card.transactions.length; j++) {
    renderTransaction(card.transactions[j], listTransactions)
    
  }
  return listTransactions;
}

function renderTransaction(transaction, listTransactions) {

  const itemTransaction = document.createElement('li')
  itemTransaction.innerText = `${transaction.title}, ${transaction.date}, `;

  const sumTransaction = document.createElement('span');

  if (transaction.amount > 0) {
    sumTransaction.className = 'income';
    sumTransaction.innerText = `${transaction.amount}`;
  } else {
    sumTransaction.className = 'outcome';
    sumTransaction.innerText = `${transaction.amount}`;
  }

  itemTransaction.appendChild(sumTransaction);
  listTransactions.appendChild(itemTransaction);

  return listTransactions;

}