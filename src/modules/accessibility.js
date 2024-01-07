import createDisplay from './display.js'

const buttons = document.querySelectorAll('.home, .menu, .contact');

const homeButton = document.querySelector('.home');
homeButton.addEventListener('click', () => {
    const card = document.querySelector('.display div');
    card.remove();
    createDisplay.createHome();

    buttons.forEach(button => button.classList.remove('selected')); // remove the class from all buttons
    homeButton.classList.add('selected');
});

const menuButton = document.querySelector('.menu');
menuButton.addEventListener('click', () => {
    const card = document.querySelector('.display div');
    card.remove();
    createDisplay.createMenu();

    buttons.forEach(button => button.classList.remove('selected')); 
    menuButton.classList.add('selected');
});

const contactButton = document.querySelector('.contact');
contactButton.addEventListener('click', () => {
    const card = document.querySelector('.display div');
    card.remove();
    createDisplay.createContact();

    buttons.forEach(button => button.classList.remove('selected'));
    contactButton.classList.add('selected');
});