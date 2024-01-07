(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["skeleton"],{

/***/ "./src/modules/skeleton.js":
/*!*********************************!*\
  !*** ./src/modules/skeleton.js ***!
  \*********************************/
/***/ (() => {

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/skeleton.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9za2VsZXRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDcmVhdGVzXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJob21lXCI+SE9NRTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1lbnVcIj5NRU5VPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29udGFjdFwiPkNPTlRBQ1Q8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8cD7CqSBKYXkgU2luZ2ggPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoZGViYXRlMDkvcmVzdGF1cmFudC1wYWdlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+KG1hdGhkZWJhdGUwOSk8L2E+PC9wPlxuICAgICAgICA8L2Rpdj4gKi9cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNyZWF0ZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbmNyZWF0ZUhlYWRlci5pbm5lckhUTUwgPSAnPGJ1dHRvbiBjbGFzcz1cImhvbWVcIj5IT01FPC9idXR0b24+IDxidXR0b24gY2xhc3M9XCJtZW51XCI+TUVOVTwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVwiY29udGFjdFwiPkNPTlRBQ1Q8L2J1dHRvbj4nXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKTtcblxuY29uc3QgY3JlYXRlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY3JlYXRlRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRGlzcGxheSk7XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY3JlYXRlRm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuY3JlYXRlRm9vdGVyLmlubmVySFRNTCA9ICc8cD7CqSBKYXkgU2luZ2ggPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoZGViYXRlMDkvcmVzdGF1cmFudC1wYWdlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+KG1hdGhkZWJhdGUwOSk8L2E+PC9wPidcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==