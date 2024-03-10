const themeBtn = document.querySelector(".theme-switch-btn");
const body = document.body;
const menu = document.querySelector(".menu");
const setting = document.querySelector(".setting");

const onThemeSwitch = (e) => {
  const { target } = e;
  const key = `theme`;
  const currentTheme = localStorage.getItem(key);
  if (currentTheme === "light-theme") {
    localStorage.setItem(key, "dark-theme");
    body.classList.add("dark");
    body.classList.remove("light");
    menu.src = "img/menu-black.svg";
    setting.src = "img/setting-black.svg";
  } else {
    localStorage.setItem(key, "light-theme");
    body.classList.add("light");
    body.classList.remove("dark");
    menu.src = "img/menu-white.svg";
    setting.src = "img/setting-white.svg";
  }
};

themeBtn.addEventListener("click", onThemeSwitch);

//

const scissors = document.querySelector(".choise-scissors");
const rock = document.querySelector(".choise-rock");
const paper = document.querySelector(".paper");
const choices = document.querySelectorAll(".choice");
let rchoise;
let pchoise;
const resultGame = document.querySelector(".result-game");
const resultP = document.querySelector(".result-choise-p");
const resultR = document.querySelector(".result-choise-r");
const btns = document.querySelector(".game-btns");
const resetbtn = document.querySelector(".reset-game");

const onChoiseClick = (e) => {
  const { target } = e;

  const resetGame = (e) => {
    choices.forEach((e) => {
      e.disabled = false;
      resultGame.textContent = `Game result:`;
      resultP.textContent = `Your choice:`;
      resultR.textContent = `Machine choice:`;
    });
  };

  resetbtn.addEventListener("click", resetGame);

  if (target.nodeName !== "BUTTON" || target.textContent === "reset") return;
  const robotChoise = Math.random();
  console.dir(robotChoise);
  if (robotChoise > 0.6) {
    resultR.textContent = `Machine Choise: Rock`;
    rchoise = "rock";
    console.dir(`Robot Choice is ${rchoise}!`);
  } else if (robotChoise > 0.3) {
    resultR.textContent = `Machine Choise: Paper`;
    rchoise = "paper";
    console.dir(`Robot Choice is ${rchoise}!`);
  } else if (robotChoise > 0) {
    resultR.textContent = `Machine Choise: Scissors`;
    rchoise = "scissors";
    console.dir(`Robot Choice is ${rchoise}!`);
  }

  if (target.textContent === "Rock") {
    resultP.textContent = `Player choise: ${target.textContent}`;
    pchoise = "rock";
  } else if (target.textContent === "Paper") {
    resultP.textContent = `Player choise: ${target.textContent}`;
    pchoise = "paper";
  } else if (target.textContent === "Scissors") {
    resultP.textContent = `Player choise: ${target.textContent}`;
    pchoise = "scissors";
  }

  if (pchoise === "rock") {
    if (pchoise === rchoise) {
      resultGame.textContent = `Game result: no one win`;
    }
    console.dir(`Player Choice is ${pchoise}!`);
  } else if (pchoise === "paper") {
    if (pchoise === rchoise) {
      resultGame.textContent = `Game result: no one win`;
    }
    console.dir(`Player Choice is ${pchoise}!`);
  } else if (pchoise === "scissors") {
    if (pchoise === rchoise) {
      resultGame.textContent = `Game result: no one win`;
    } else if (pchoise) {
      console.dir(pchoise + " " + rchoise);
    }
    console.dir(`Player Choice is ${pchoise}!`);
  }

  if (pchoise === "scissors" && rchoise === "paper")
    resultGame.textContent = `Game result: Win Player`;
  if (pchoise === "scissors" && rchoise === "rock")
    resultGame.textContent = `Game Result: Win Machine`;

  if (pchoise === "rock" && rchoise === "scissors")
    resultGame.textContent = `Game result: Win Player`;
  if (pchoise === "rock" && rchoise === "paper")
    resultGame.textContent = `Game Result: Win Machine`;

  if (pchoise === "paper" && rchoise === "rock")
    resultGame.textContent = `Game result: Win Player`;
  if (pchoise === "paper" && rchoise === "scissors")
    resultGame.textContent = `Game Result: Win Machine`;

  choices.forEach((e) => {
    e.disabled = true;
  });
};

btns.addEventListener("click", onChoiseClick);
