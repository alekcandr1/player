// data
import { getCurrentUser, getCards, addEventListener } from './data.js';
import { renderHeader } from './components/header.js';
import { renderCards } from './components/cards/cards.js';

addEventListener(renderApp);
 
export function renderApp() {
  const currentUser = getCurrentUser();
  const cards = getCards();

  const rootElement = document.querySelector('#root');
  rootElement.innerHTML = '';

  // render header
  const headerElement = renderHeader(currentUser.name, currentUser.balance);
  rootElement.appendChild(headerElement);

  // render cards
  const cardsElement = renderCards(cards);
  rootElement.appendChild(cardsElement);

}

renderApp();
