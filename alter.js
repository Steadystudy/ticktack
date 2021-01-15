const ticktack = document.querySelector(".ticktack");
const tr1 = document.querySelector(".ticktackrow1");
const tr2 = document.querySelector(".ticktackrow2");
const tr3 = document.querySelector(".ticktackrow3");
const tds = document.getElementsByTagName("td");
const gameRestart = document.querySelector(".gamerestart");

function addO() {
  this.classList.add("inputO");
  this.textContent = "O";
}

function addX() {
  this.classList.add("inputX");
  this.textContent = "X";
}

for (let i = 0; i < tds.length; ) {
  const turnO = [0, 2, 4, 6, 8];
  const turnX = [1, 3, 5, 7];
  if (turnO.includes(i)) {
    for (let j = 0; j < tds.length; j++) {
      tds[j].addEventListener("click", addO);
      i++;
    }
  } else if (turnX.includes(i)) {
    for (let j = 0; j < tds.length; j++) {
      tds[j].addEventListener("click", addX);
      i++;
    }
  }
}

function removeAll() {
  for (let j = 0; j < tds.length; j++) {
    tds[j].classList.remove("inputO");
    tds[j].classList.remove("inputX");
    tds[j].textContent = "";
  }
}

gameRestart.addEventListener("click", removeAll);
