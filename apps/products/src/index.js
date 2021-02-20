import { commerce } from 'faker';

const ul = document.createElement('ul');

for (let i = 0; i < 10; i++) {
  const productName = commerce.productName();
  const element = document.createElement('li');
  element.innerText = productName;

  ul.appendChild(element);
}

document.getElementById('products').appendChild(ul);
