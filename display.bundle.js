"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["display"],{

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/map.png */ "./src/modules/assets/map.png");


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
        <img class="map-img" src=${_assets_map_png__WEBPACK_IMPORTED_MODULE_0__} alt="location pointed on a map">`

        display.appendChild(card);
    }

    // Publicly accessible methods
    return {
        createHome,
        createMenu,
        createContact
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDisplay);

/***/ }),

/***/ "./src/modules/assets/map.png":
/*!************************************!*\
  !*** ./src/modules/assets/map.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a15624301154146f868b.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/display.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7O0FBRXZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNENBQU8sRUFBRTs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYXBQYXRoIGZyb20gJy4vYXNzZXRzL21hcC5wbmcnO1xuXG5jb25zdCBjcmVhdGVEaXNwbGF5ID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXknKTtcblxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ob21lJyk7XG4gICAgICAgIGNhcmQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IFwiMWZyIDE0NXB4IDFmclwiXG5cbiAgICAgICAgY29uc3QgbG9nb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxvZ29EaXYuY2xhc3NMaXN0LmFkZCgnbG9nby1kaXYnKTtcbiAgICAgICAgbG9nb0Rpdi5pbm5lckhUTUwgPSAnPHAgY2xhc3M9XCJsb2dvLXVwcGVyXCI+QWwgR3VzdG88L3A+IDxwIGNsYXNzPVwibG9nby1sb3dlclwiPlRSRU5FVFRFPC9wPidcblxuICAgICAgICBjb25zdCBob21lSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaG9tZUluZm8uY2xhc3NMaXN0LmFkZCgnYWJvdXQtbWUnKTtcbiAgICAgICAgaG9tZUluZm8udGV4dENvbnRlbnQgPSAnQSBjdWxpbmFyeSBoYXZlbiBjZWxlYnJhdGluZyBhdXRoZW50aWMgSXRhbGlhbiBmbGF2b3JzLiBNZXRpY3Vsb3VzbHkgY3JhZnRlZCBUcmVuZXR0ZSBkaXNoZXMsIGludml0aW5nIGFtYmlhbmNlLCBhbmQgYSBjb21taXRtZW50IHRvIGRlbGl2ZXJpbmcgYSBkZWxpZ2h0ZnVsIGRpbmluZyBleHBlcmllbmNlLiBCdW9uIEFwcGV0aXRvISdcblxuICAgICAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaW5saW5lLW1lbnUnKTtcbiAgICAgICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNRU5VJztcbiAgICAgICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheSBkaXYnKTtcbiAgICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgICAgICAgICBjcmVhdGVNZW51KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobG9nb0Rpdik7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaG9tZUluZm8pO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuXG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5Jyk7XG5cbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICAgICAgY2FyZC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gXCIxODBweCAxZnJcIjtcblxuICAgICAgICBjb25zdCBjYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJyk7XG4gICAgICAgIGNhcmRIZWFkZXIudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICAgICAgY29uc3QgZGlzaExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGlzaExpc3QuY2xhc3NMaXN0LmFkZCgnZGlzaC1saXN0Jyk7XG4gICAgICAgIGRpc2hMaXN0LmlubmVySFRNTCA9XG4gICAgYDxkaXYgY2xhc3M9XCJtZW51LWNhcmRcIiBpZD1cIm1lbnUxXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiZGlzaC10aXRsZVwiPkxpbmd1aW5lIFRyZW5ldHRlIGFsIFBlc3RvIEdlbm92ZXNlPC9wPlxuICAgICAgICA8cCBjbGFzcz1cImRpc2gtZGVzcFwiPkNsYXNzaWMgTGlndXJpYW4gZGlzaCB3aXRoIGJhc2lsLCBnYXJsaWMsIHBpbmUgbnV0cywgUGFybWVzYW4sIGFuZCBvbGl2ZSBvaWw8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiZGlzaC1wcmljZVwiPjI04oKsPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWNhcmRcIiBpZD1cIm1lbnUyXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiZGlzaC10aXRsZVwiPkRlbGVjdGFibGUgVHJlbmV0dGUgYWxsZSBWb25nb2xlPC9wPlxuICAgICAgICA8cCBjbGFzcz1cImRpc2gtZGVzcFwiPkZsYXQgbm9vZGxlcyBzZXJ2ZWQgd2l0aCBmcmVzaCBjbGFtcywgZ2FybGljLCB3aGl0ZSB3aW5lLCBhbmQgcGFyc2xleTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJkaXNoLXByaWNlXCI+NDjigqw8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtY2FyZFwiPlxuICAgICAgICA8cCBjbGFzcz1cImRpc2gtdGl0bGVcIj5MYXZpc2ggVHJlbmV0dGUgYWkgRnJ1dHRpIGRpIE1hcmU8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiZGlzaC1kZXNwXCI+U2VhZm9vZCBsb3ZlcnMnIGRlbGlnaHQgZmVhdHVyaW5nIHRyZW5ldHRlIHdpdGggYSB2YXJpZXR5IG9mIGZyZXNoIHNlYWZvb2Q8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiZGlzaC1wcmljZVwiPjMy4oKsPC9wPlxuICAgIDwvZGl2PmA7XG5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSGVhZGVyKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkaXNoTGlzdCk7XG5cbiAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXknKTtcblxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgICAgICBjYXJkLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBcIjFmciAxZnJcIjtcbiAgICAgICAgY2FyZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCIzNTBweCBhdXRvXCI7XG5cbiAgICAgICAgY2FyZC5pbm5lckhUTUwgPSBcbiAgICAgICAgYDxwIGNsYXNzPVwicGhvbmUtbnVtYmVyXCI+8J+TniAxMjMgNDU2IDc4OTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJhZGRyZXNzXCI+8J+PoCBCZWFjaCBDaXR5LCBPY2VhbmZyb250IEF2ZW51ZSAyM3JkLCBJdGFseTwvcD5cbiAgICAgICAgPGltZyBjbGFzcz1cIm1hcC1pbWdcIiBzcmM9JHttYXBQYXRofSBhbHQ9XCJsb2NhdGlvbiBwb2ludGVkIG9uIGEgbWFwXCI+YFxuXG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljbHkgYWNjZXNzaWJsZSBtZXRob2RzXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlSG9tZSxcbiAgICAgICAgY3JlYXRlTWVudSxcbiAgICAgICAgY3JlYXRlQ29udGFjdFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXNwbGF5OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==