import { commerce } from 'faker';

const mount = (el) => {
  const ul = document.createElement('ul');

  for (let i = 0; i < 10; i++) {
    const productName = commerce.productName();
    const element = document.createElement('li');
    element.innerText = productName;

    ul.appendChild(element);
  }

  el.appendChild(ul);
};

if (process.env.NODE_ENV === 'development') {
  const root = document.getElementById('dev-products');

  if (root) {
    mount(root);
  }
}

export { mount };
