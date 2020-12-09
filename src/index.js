import './styles.css';
import "./js/theme.js";

// import зробиш файла theme.js

const body = document.querySelector("body");
const toggle = document.querySelector(".theme-switch__toggle");
const storageKey = "theme";
const localStorageGetValue = localStorage.getItem(storageKey);
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

toggle.addEventListener("change", getCheckedValue);

 function getCheckedValue() {
  if (toggle.checked === true) {
    changeTheme(Theme.LIGHT, Theme.DARK);
  } else {
    changeTheme(Theme.DARK, Theme.LIGHT);
  }
}

const changeTheme = (wTheme, bTheme) => {
  body.classList.remove(wTheme);
  localStorage.setItem(storageKey, bTheme);
  body.classList.add(bTheme);
};

initView();

function initView() {
  if (localStorageGetValue === Theme.DARK) {
    toggle.checked = true;
    body.classList.add(Theme.DARK);
  }
};
