"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["accessibility"],{

/***/ "./src/modules/accessibility.js":
/*!**************************************!*\
  !*** ./src/modules/accessibility.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./src/modules/display.js");


const buttons = document.querySelectorAll('.home, .menu, .contact');

const homeButton = document.querySelector('.home');
homeButton.addEventListener('click', () => {
    const card = document.querySelector('.display div');
    card.remove();
    _display_js__WEBPACK_IMPORTED_MODULE_0__["default"].createHome();

    buttons.forEach(button => button.classList.remove('selected')); // remove the class from all buttons
    homeButton.classList.add('selected');
});

const menuButton = document.querySelector('.menu');
menuButton.addEventListener('click', () => {
    const card = document.querySelector('.display div');
    card.remove();
    _display_js__WEBPACK_IMPORTED_MODULE_0__["default"].createMenu();

    buttons.forEach(button => button.classList.remove('selected')); 
    menuButton.classList.add('selected');
});

const contactButton = document.querySelector('.contact');
contactButton.addEventListener('click', () => {
    const card = document.querySelector('.display div');
    card.remove();
    _display_js__WEBPACK_IMPORTED_MODULE_0__["default"].createContact();

    buttons.forEach(button => button.classList.remove('selected'));
    contactButton.classList.add('selected');
});

/***/ }),

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/accessibility.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzaWJpbGl0eS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7O0FBRXhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBYTs7QUFFakIsb0VBQW9FO0FBQ3BFO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQWE7O0FBRWpCO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBYTs7QUFFakI7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hDc0M7O0FBRXZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNENBQU8sRUFBRTs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9hY2Nlc3NpYmlsaXR5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZURpc3BsYXkgZnJvbSAnLi9kaXNwbGF5LmpzJ1xuXG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWUsIC5tZW51LCAuY29udGFjdCcpO1xuXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5IGRpdicpO1xuICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgY3JlYXRlRGlzcGxheS5jcmVhdGVIb21lKCk7XG5cbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTsgLy8gcmVtb3ZlIHRoZSBjbGFzcyBmcm9tIGFsbCBidXR0b25zXG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufSk7XG5cbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXkgZGl2Jyk7XG4gICAgY2FyZC5yZW1vdmUoKTtcbiAgICBjcmVhdGVEaXNwbGF5LmNyZWF0ZU1lbnUoKTtcblxuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpOyBcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG59KTtcblxuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0Jyk7XG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheSBkaXYnKTtcbiAgICBjYXJkLnJlbW92ZSgpO1xuICAgIGNyZWF0ZURpc3BsYXkuY3JlYXRlQ29udGFjdCgpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufSk7IiwiaW1wb3J0IG1hcFBhdGggZnJvbSAnLi9hc3NldHMvbWFwLnBuZyc7XG5cbmNvbnN0IGNyZWF0ZURpc3BsYXkgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheScpO1xuXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhvbWUnKTtcbiAgICAgICAgY2FyZC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gXCIxZnIgMTQ1cHggMWZyXCJcblxuICAgICAgICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbG9nb0Rpdi5jbGFzc0xpc3QuYWRkKCdsb2dvLWRpdicpO1xuICAgICAgICBsb2dvRGl2LmlubmVySFRNTCA9ICc8cCBjbGFzcz1cImxvZ28tdXBwZXJcIj5BbCBHdXN0bzwvcD4gPHAgY2xhc3M9XCJsb2dvLWxvd2VyXCI+VFJFTkVUVEU8L3A+J1xuXG4gICAgICAgIGNvbnN0IGhvbWVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBob21lSW5mby5jbGFzc0xpc3QuYWRkKCdhYm91dC1tZScpO1xuICAgICAgICBob21lSW5mby50ZXh0Q29udGVudCA9ICdBIGN1bGluYXJ5IGhhdmVuIGNlbGVicmF0aW5nIGF1dGhlbnRpYyBJdGFsaWFuIGZsYXZvcnMuIE1ldGljdWxvdXNseSBjcmFmdGVkIFRyZW5ldHRlIGRpc2hlcywgaW52aXRpbmcgYW1iaWFuY2UsIGFuZCBhIGNvbW1pdG1lbnQgdG8gZGVsaXZlcmluZyBhIGRlbGlnaHRmdWwgZGluaW5nIGV4cGVyaWVuY2UuIEJ1b24gQXBwZXRpdG8hJ1xuXG4gICAgICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpbmxpbmUtbWVudScpO1xuICAgICAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01FTlUnO1xuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5IGRpdicpO1xuICAgICAgICAgICAgY2FyZC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNyZWF0ZU1lbnUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChsb2dvRGl2KTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChob21lSW5mbyk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG5cbiAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXknKTtcblxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgICAgICBjYXJkLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBcIjE4MHB4IDFmclwiO1xuXG4gICAgICAgIGNvbnN0IGNhcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNhcmRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXInKTtcbiAgICAgICAgY2FyZEhlYWRlci50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgICAgICBjb25zdCBkaXNoTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXNoTGlzdC5jbGFzc0xpc3QuYWRkKCdkaXNoLWxpc3QnKTtcbiAgICAgICAgZGlzaExpc3QuaW5uZXJIVE1MID1cbiAgICBgPGRpdiBjbGFzcz1cIm1lbnUtY2FyZFwiIGlkPVwibWVudTFcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJkaXNoLXRpdGxlXCI+TGluZ3VpbmUgVHJlbmV0dGUgYWwgUGVzdG8gR2Vub3Zlc2U8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiZGlzaC1kZXNwXCI+Q2xhc3NpYyBMaWd1cmlhbiBkaXNoIHdpdGggYmFzaWwsIGdhcmxpYywgcGluZSBudXRzLCBQYXJtZXNhbiwgYW5kIG9saXZlIG9pbDwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJkaXNoLXByaWNlXCI+MjTigqw8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtY2FyZFwiIGlkPVwibWVudTJcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJkaXNoLXRpdGxlXCI+RGVsZWN0YWJsZSBUcmVuZXR0ZSBhbGxlIFZvbmdvbGU8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiZGlzaC1kZXNwXCI+RmxhdCBub29kbGVzIHNlcnZlZCB3aXRoIGZyZXNoIGNsYW1zLCBnYXJsaWMsIHdoaXRlIHdpbmUsIGFuZCBwYXJzbGV5PC9wPlxuICAgICAgICA8cCBjbGFzcz1cImRpc2gtcHJpY2VcIj40OOKCrDwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWVudS1jYXJkXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiZGlzaC10aXRsZVwiPkxhdmlzaCBUcmVuZXR0ZSBhaSBGcnV0dGkgZGkgTWFyZTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJkaXNoLWRlc3BcIj5TZWFmb29kIGxvdmVycycgZGVsaWdodCBmZWF0dXJpbmcgdHJlbmV0dGUgd2l0aCBhIHZhcmlldHkgb2YgZnJlc2ggc2VhZm9vZDwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJkaXNoLXByaWNlXCI+MzLigqw8L3A+XG4gICAgPC9kaXY+YDtcblxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRIZWFkZXIpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGRpc2hMaXN0KTtcblxuICAgICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheScpO1xuXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgICAgIGNhcmQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IFwiMWZyIDFmclwiO1xuICAgICAgICBjYXJkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcIjM1MHB4IGF1dG9cIjtcblxuICAgICAgICBjYXJkLmlubmVySFRNTCA9IFxuICAgICAgICBgPHAgY2xhc3M9XCJwaG9uZS1udW1iZXJcIj7wn5OeIDEyMyA0NTYgNzg5PC9wPlxuICAgICAgICA8cCBjbGFzcz1cImFkZHJlc3NcIj7wn4+gIEJlYWNoIENpdHksIE9jZWFuZnJvbnQgQXZlbnVlIDIzcmQsIEl0YWx5PC9wPlxuICAgICAgICA8aW1nIGNsYXNzPVwibWFwLWltZ1wiIHNyYz0ke21hcFBhdGh9IGFsdD1cImxvY2F0aW9uIHBvaW50ZWQgb24gYSBtYXBcIj5gXG5cbiAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNseSBhY2Nlc3NpYmxlIG1ldGhvZHNcbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVIb21lLFxuICAgICAgICBjcmVhdGVNZW51LFxuICAgICAgICBjcmVhdGVDb250YWN0XG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURpc3BsYXk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9