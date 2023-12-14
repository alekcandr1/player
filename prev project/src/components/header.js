export function renderHeader(userName, userBalance) {
    
    const h1Element = document.createElement('h1');
    h1Element.innerText = `Hello, ${userName} (${userBalance})`;

    return h1Element;
  };
  