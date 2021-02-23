import { random } from 'faker';

const mount = (el) => {
  const div = document.createElement('div');

  div.innerText = `You have ${random.number()} products`;

  el.appendChild(div);
};

if (process.env.NODE_ENV === 'development') {
  const root = document.getElementById('dev-cart');

  if (root) {
    mount(root);
  }
}

export { mount };
