const key = `theme`;
const currentTheme = localStorage.getItem(key);
const body = document.body;
const menu = document.querySelector(".menu");
const setting = document.querySelector(".setting");

if (currentTheme === "light-theme") {
  localStorage.setItem(key, "light-theme");
  body.classList.add("light");
  menu.src = "img/menu-white.svg";
  setting.src = "img/setting-white.svg";
} else {
  localStorage.setItem(key, "dark-theme");
  menu.src = "img/menu-black.svg";
  body.classList.add("dark");
  setting.src = "img/setting-black.svg";
}
