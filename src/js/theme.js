// тут будеш робити імпорт menu.json
import menuTemplate from "../templates/menu.hbs"; 
import menuCards from "../data/menu.json";
// console.log(menuCards);
// console.log(menuTemplate);

const markUp = menuTemplate(menuCards);
const menuList = document.querySelector(".js-menu");

menuList.insertAdjacentHTML("beforeend", markUp);
 