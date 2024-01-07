/* Creates
        <div class="header">
            <button class="home">HOME</button>
            <button class="menu">MENU</button>
            <button class="contact">CONTACT</button>
        </div>
        <div class="display">
        </div>
        <div class="footer">
            <p>© Jay Singh <a href="https://github.com/mathdebate09/restaurant-page" target="_blank">(mathdebate09)</a></p>
        </div> */

const container = document.querySelector('.container');

const createHeader = document.createElement('div');
createHeader.classList.add('header');
createHeader.innerHTML = '<button class="home">HOME</button> <button class="menu">MENU</button> <button class="contact">CONTACT</button>'
container.appendChild(createHeader);

const createDisplay = document.createElement('div');
createDisplay.classList.add('display');
container.appendChild(createDisplay);

const createFooter = document.createElement('div');
createFooter.classList.add('footer');
createFooter.innerHTML = '<p>© Jay Singh <a href="https://github.com/mathdebate09/restaurant-page" target="_blank">(mathdebate09)</a></p>'
container.appendChild(createFooter);