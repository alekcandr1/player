// rendering of all card transactions
export function createCardTransactions(transactions) {
    const cardInformationElement = document.createElement('div');

    // header transactions
    const transactionsHeader = document.createElement('h2');
    transactionsHeader.innerText = `History Transaction`;

    // list transactions
    const listTransactions = document.createElement('ul');

    for (let j = 0; j < transactions.length; j++) {
        listTransactions.appendChild(createCardTransaction(transactions[j]));
    }

    cardInformationElement.appendChild(listTransactions);



    return cardInformationElement;
};

    // rendering of single transaction
    function createCardTransaction(transaction) {
        const itemTransaction = document.createElement('li')
        itemTransaction.innerText = `${transaction.title}, ${transaction.date}, `;

        const amountTransaction = document.createElement('span');

        if (transaction.amount > 0) {
            amountTransaction.className = 'income';
        } else {
            amountTransaction.className = 'outcome';
        }
        amountTransaction.innerText = `${transaction.amount}`;


        itemTransaction.appendChild(amountTransaction);

        return itemTransaction;
    }
