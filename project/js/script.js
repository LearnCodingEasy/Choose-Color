/*
  Website Map

  -- Ling: => Html
    -- Icon
      -
  
  -- Ling: => Css
    -- Font
      -
    -- Framework
      -

  -- Ling: => Javascript
    -- Plugin
      - Swiper
    -- Function
      1 switch theme
      2 Body Background Color
      3 Main Background Color
      4 title background color
      5 title color
      6 text color
*/

/*jslint plusplus: true, evil: true */
// Todo: jslint plusplus: true for error for ++
// Todo: evil: true for error document.write

/*global console, alert, prompt, $, document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */

/*global window */

// Todo: Check File When You Type Code Javascript
// @ts-check
// Todo: Not Check File When You Type Code Javascript
// @ts-nocheck
// Todo: Ignore Line Have Error Code Javascript
// @ts-ignore

"use strict";

/*
?===============================================
?              Global Actions
?===============================================
*/

/*
?===============================================
?                  Import
?===============================================
*/

/*
?===============================================
?                Variables
?===============================================
*/
// Input
let switchInput = document.getElementById("switch");
let bodyLight = document.getElementById("body-bg-color-light");
let bodyDark = document.getElementById("body-bg-color-dark");
let mainLight = document.getElementById("main-bg-light");
let mainDark = document.getElementById("main-bg-dark");
let titleBgLight = document.getElementById("title-bg-light");
let titleBgDark = document.getElementById("title-bg-dark");
let titleColorLight = document.getElementById("title-color-light");
let titleColorDark = document.getElementById("title-color-dark");
let textColorLight = document.getElementById("text-color-light");
let textColorDark = document.getElementById("text-color-dark");
let createColor = document.querySelector(".submit");

// Output Body Light
let eleBodyLight = document.querySelector(".bg-light .body");
// Func: Get Body Background Color Light
function getBodyLight() {
  if (bodyLight.value != "") {
    eleBodyLight.style.backgroundColor = bodyLight.value;
  } else {
    eleBodyLight.style.backgroundColor = "#333";
  }
}

// Output Body Dark
let eleBodyDark = document.querySelector(".bg-dark .body");
// Func: Get Body Background Color Dark
function getBodyDark() {
  if (bodyDark.value != "") {
    eleBodyDark.style.backgroundColor = bodyDark.value;
  } else {
    eleBodyDark.style.backgroundColor = "#333";
  }
}

// Output Main Light
let eleMainLight = document.querySelector(".bg-light .main");
// Func: Get Body Background Color Light
function getMainLight() {
  if (mainLight.value != "") {
    eleMainLight.style.backgroundColor = mainLight.value;
  } else {
    eleMainLight.style.backgroundColor = "";
  }
}

// Output Main Dark
let eleMainDark = document.querySelector(".bg-dark .main");
// Func: Get Body Background Color Dark
function getMainDark() {
  if (mainDark.value != "") {
    eleMainDark.style.backgroundColor = mainDark.value;
  } else {
    eleMainDark.style.backgroundColor = "";
  }
}

// Output Title Background Light
let eleTitleBgLight = document.querySelector(".bg-light .title-bg-color");
// Func: Get Body Background Color Light
function getTitleBgLight() {
  if (titleBgLight.value != "") {
    eleTitleBgLight.style.backgroundColor = titleBgLight.value;
    eleTitleBgLight.style.color = "#fff";
  } else {
    eleTitleBgLight.style.backgroundColor = "";
  }
}

// Output Title Background Dark
let eleTitleBgDark = document.querySelector(".bg-dark .title-bg-color");
// Func: Get Body Background Color Dark
function getTitleBgDark() {
  if (titleBgDark.value != "") {
    eleTitleBgDark.style.backgroundColor = titleBgDark.value;
    eleTitleBgDark.style.color = "#fff";
  } else {
    eleTitleBgDark.style.backgroundColor = "";
  }
}

// Output Title Color Light
let eleTitleLight = document.querySelector(".bg-light .title-color");
// Func: Get Body Background Color Light
function getTitleLight() {
  if (titleColorLight.value != "") {
    eleTitleLight.style.color = titleColorLight.value;
  } else {
    eleTitleLight.style.color = "";
  }
}

// Output Title Color Dark
let eleTitleDark = document.querySelector(".bg-dark .title-color");
// Func: Get Body Background Color Dark
function getTitleDark() {
  if (titleColorDark.value != "") {
    eleTitleDark.style.color = titleColorDark.value;
  } else {
    eleTitleDark.style.color = "";
  }
}

// Output Title Color Light
let eleTextLight = document.querySelector(".bg-light .text-color");
// Func: Get Body Background Color Light
function getTextLight() {
  if (textColorLight.value != "") {
    eleTextLight.style.color = textColorLight.value;
  } else {
    eleTextLight.style.color = "";
  }
}

// Output Title Color Dark
let eleTextDark = document.querySelector(".bg-dark .title-color");
// Func: Get Body Background Color Dark
function getTextDark() {
  if (textColorDark.value != "") {
    eleTextDark.style.color = textColorDark.value;
  } else {
    eleTextDark.style.color = "";
  }
}

/*
?===============================================
?        Document Elements Html
?===============================================
*/

/*
?===============================================
?               Functions
?===============================================
*/
// Func: Create Color
let allColors = [];
if (localStorage.AllColors != null) {
  allColors = JSON.parse(localStorage.AllColors);
} else {
  let allColors = [];
  console.log("allColors: ", allColors);
}
createColor.onclick = () => {
  let newColor = {
    bodyLight: bodyLight.value,
    bodyDark: bodyDark.value,
    mainLight: mainLight.value,
    mainDark: mainDark.value,
    titleBgLight: titleBgLight.value,
    titleBgDark: titleBgDark.value,
    titleColorLight: titleColorLight.value,
    titleColorDark: titleColorDark.value,
    textColorLight: textColorLight.value,
    textColorDark: textColorDark.value,
  };
  allColors.push(newColor);
  console.log("allColors: ", allColors);
  // localStorage Accept Only String
  localStorage.setItem("AllColors", JSON.stringify(allColors));
};

// Func Show Color

function showColor() {
  let liColor = "";
  for (let i = 0; i < allColors.length; i++) {
    // liColor = allColors;
    // liColor = allColors[i].bodyDark;
    // console.log("color: ", liColor);
    liColor += `
    <li data-color='${allColors[i].bodyDark}' style='background-color: ${allColors[i].bodyDark}' onclick='getColorSelect(${i})'></li>
    `;
  }
  document.getElementById("wrapper-colors").innerHTML = liColor;
}
showColor();
/*
?===============================================
?             Event Listeners
?===============================================
*/
// let allLisColors = document.querySelectorAll("ul li");
// console.log("allLisColors: ", allLisColors);
// allLisColors.forEach((element) => {
//   // console.log("element: ", element);
//   element.onclick = function () {
//     // Print The Element Click To It
//     console.log(this);
//     console.log(this.getAttribute("data-color"));
//   };
// });

function getColorSelect(i) {
  console.log("i: ", i);
  bodyLight.value = allColors[i].bodyLight;
  bodyDark.value = allColors[i].bodyDark;
  mainLight.value = allColors[i].mainLight;
  mainDark.value = allColors[i].mainDark;
  titleBgLight.value = allColors[i].titleBgLight;
  titleBgDark.value = allColors[i].titleBgDark;
  titleColorLight.value = allColors[i].titleColorLight;
  titleColorDark.value = allColors[i].titleColorDark;
  textColorLight.value = allColors[i].textColorLight;
  getBodyLight();
  getBodyDark();
  getMainLight();
  getMainDark();
  getTitleBgLight();
  getTitleBgDark();
  getTitleLight();
  getTitleDark();
  getTextLight();
  getTextDark();
}
/*
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously Selected Topic ( If User Selected )
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We Obtain The current Theme That The Interface Has By Validating The dark-theme Class

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// We Validate If The User Previously Chose a Topic
if (selectedTheme) {
  // If the Validation Is Fulfilled
  // We Ask What the Issue Was To Know If We Activated Or Deactivated The Dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / Deactivate The Theme Manually With The Button
themeButton.addEventListener("click", () => {
  // Add Or Remove The Dark / Icon Theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // We Save The Theme And The Current Icon That The User Chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
*/
