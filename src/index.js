import './styles.css';
import Icon from './assets/icon.svg';

const content = document.querySelector('#content');

const pizza = document.createElement('div');
pizza.innerHTML = `<img src="${Icon}">`;
pizza.classList.add('pizza');

content.appendChild(pizza);
