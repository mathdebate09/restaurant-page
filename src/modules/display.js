import mapPath from './assets/map.png';

const createDisplay = (() => {
    function createHome() {
        const display = document.querySelector('.display');

        const card = document.createElement('div');
        card.classList.add('card-home');
        card.style.gridTemplateRows = "1fr 145px 1fr"

        const logoDiv = document.createElement('div')
        logoDiv.classList.add('logo-div');
        logoDiv.innerHTML = '<p class="logo-upper">Al Gusto</p> <p class="logo-lower">TRENETTE</p>'

        const homeInfo = document.createElement('p');
        homeInfo.classList.add('about-me');
        homeInfo.textContent = 'A culinary haven celebrating authentic Italian flavors. Meticulously crafted Trenette dishes, inviting ambiance, and a commitment to delivering a delightful dining experience. Buon Appetito!'

        const menuButton = document.createElement('button');
        menuButton.classList.add('inline-menu');
        menuButton.textContent = 'MENU';
        menuButton.addEventListener('click', () => {
            const card = document.querySelector('.display div');
            card.remove();
            createMenu();
        });

        card.appendChild(logoDiv);
        card.appendChild(homeInfo);
        card.appendChild(menuButton);

        display.appendChild(card);
    }

    function createMenu() {
        const display = document.querySelector('.display');

        const card = document.createElement('div');
        card.classList.add('card');
        card.style.gridTemplateRows = "180px 1fr";

        const cardHeader = document.createElement('p');
        cardHeader.classList.add('menu-header');
        cardHeader.textContent = 'Menu';

        const dishList = document.createElement('div');
        dishList.classList.add('dish-list');
        dishList.innerHTML =
    `<div class="menu-card" id="menu1">
        <p class="dish-title">Linguine Trenette al Pesto Genovese</p>
        <p class="dish-desp">Classic Ligurian dish with basil, garlic, pine nuts, Parmesan, and olive oil</p>
        <p class="dish-price">24€</p>
    </div>
    <div class="menu-card" id="menu2">
        <p class="dish-title">Delectable Trenette alle Vongole</p>
        <p class="dish-desp">Flat noodles served with fresh clams, garlic, white wine, and parsley</p>
        <p class="dish-price">48€</p>
    </div>
    <div class="menu-card">
        <p class="dish-title">Lavish Trenette ai Frutti di Mare</p>
        <p class="dish-desp">Seafood lovers' delight featuring trenette with a variety of fresh seafood</p>
        <p class="dish-price">32€</p>
    </div>`;

        card.appendChild(cardHeader);
        card.appendChild(dishList);

        display.appendChild(card);
    }

    function createContact() {
        const display = document.querySelector('.display');

        const card = document.createElement('div');
        card.classList.add('card');
        card.style.gridTemplateRows = "1fr 1fr";
        card.style.gridTemplateColumns = "350px auto";

        card.innerHTML = 
        `<p class="phone-number">📞 123 456 789</p>
        <p class="address">🏠 Beach City, Oceanfront Avenue 23rd, Italy</p>
        <img class="map-img" src=${mapPath} alt="location pointed on a map">`

        display.appendChild(card);
    }

    // Publicly accessible methods
    return {
        createHome,
        createMenu,
        createContact
    };
})();

export default createDisplay;