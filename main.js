let initial = document.querySelector("#initial");
let birthDate = document.querySelector("#birthDate");
let address = document.querySelector("#address");
let idCard = document.querySelector("#id-card");
let faculty = document.querySelector("#faculty");
const btn = document.getElementById("btn");
const infoContainer = document.querySelector(".info_container");
let numberOfRow = 6;
let numberOfColumns = 6;
let tableContainer = document.querySelector(".table_container");
let colorPicker = document.getElementById("colorInput");
let elArray = [initial, idCard, faculty, birthDate, address];
let regExArray = [
  /([А-Яа-я-.]+) ([А-Яа-я-.]+) ([А-Яа-я-.]+)/,
  /([А-Я]{2}) (№)(\d{6})/,
  /^[А-Я, І]{4}$/,
  /(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)/,
  /(м|с|смт). ([А-Я]{1}[а-яё]{1,23})/,
];

function checkIfValid(elArray, regExArray) {
  let boolArray = [];
  for (let i = 0; i < elArray.length; i++) {
    if (elArray[i].value.match(regExArray[i])) {
      sessionStorage.setItem("data" + i, elArray[i].value);
      boolArray.push(1);
    } else {
      boolArray.push(0);
    }
  }

  if (boolArray.includes(0)) {
    for (let i = 0; i < boolArray.length; i++) {
      if (boolArray[i] === 0) {
        checkColor(i);
      }
    }
    boolArray = [];
  } else {
    window.open("./action.html");
    for (let i = 0; i < elArray.length; i++) {
      elArray[i].classList.add("getNormal");
    }
  }
  boolArray = [];
}

function checkColor(index) {
  elArray[index].classList.remove("getNormal");
  elArray[index].classList.add("getRed");
}

btn.addEventListener("click", () => {
  checkIfValid(elArray, regExArray);
});

let myCell = document.querySelector("#cell4");

myCell.addEventListener("mouseover", () => {
  myCell.setAttribute("style", `background-color:#${randomColor()}`);
});

myCell.addEventListener("click", () => {
  myCell.setAttribute("style", `background-color:${colorPicker.value}`);
});

myCell.addEventListener("dblclick", () => {
  let diagonale = document.querySelectorAll(".diagonale");
  diagonale.forEach((el) => {
    el.setAttribute("style", `background-color:${colorPicker.value}`);
    myCell.setAttribute("style", `background-color: #ffffff}`);
  });
});

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
