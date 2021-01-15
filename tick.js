const tr1 = document.querySelector(".ticktackrow1");
const tr2 = document.querySelector(".ticktackrow2");
const tr3 = document.querySelector(".ticktackrow3");
const trs = [tr1, tr2, tr3];
const tds = [];
const whosturn = document.querySelector(".whosturn");

let turn = "X";

const marking = function (event) {
  const trNumber = trs.indexOf(event.target.parentNode);
  const tdNumber = tds[trNumber].indexOf(event.target);

  if (tds[trNumber][tdNumber].textContent == "") {
    tds[trNumber][tdNumber].textContent = turn;

    let threeTd = false;

    if (
      tds[trNumber][0].textContent === turn &&
      tds[trNumber][1].textContent === turn &&
      tds[trNumber][2].textContent === turn
    ) {
      threeTd = true;
    }

    if (
      tds[0][tdNumber].textContent === turn &&
      tds[1][tdNumber].textContent === turn &&
      tds[2][tdNumber].textContent === turn
    ) {
      threeTd = true;
    }

    if (trNumber - tdNumber === 0) {
      if (
        tds[0][0].textContent === turn &&
        tds[1][1].textContent === turn &&
        tds[2][2].textContent === turn
      ) {
        threeTd = true;
      }
    }

    if (Math.abs(trNumber - tdNumber) === 2) {
      if (
        tds[0][2].textContent === turn &&
        tds[1][1].textContent === turn &&
        tds[2][0].textContent === turn
      ) {
        threeTd = true;
      }
    }

    if (threeTd) {
      let wannaRegame = confirm(`Player ${turn} win! \nRegame?"`);
      alert(wannaRegame);
      whosturn.textContent = "";

      turn = "X";
      tds.forEach(function (trs) {
        trs.forEach(function (td) {
          td.textContent = "";
        });
      });
    } else {
      if (turn === "X") {
        whosturn.textContent = "O turn";
        turn = "O";
      } else {
        whosturn.textContent = "X turn";
        turn = "X";
      }
    }
  }
  // tdThree가 false인 경우지만 td가 다 찰 경우 draw를 만들어야됨
};

for (let i = 0; i < 3; i++) {
  tds.push([]);
}

for (let j = 0; j < 3; j++) {
  tds[0].push(tr1.querySelectorAll("td").item(j));
  tds[1].push(tr2.querySelectorAll("td").item(j));
  tds[2].push(tr3.querySelectorAll("td").item(j));
} // for문 안에 for을 만들수 없을까?

for (let k = 0; k < 9; k++) {
  const td = document.getElementsByTagName("td").item(k);
  td.addEventListener("click", marking);
}

const resetBtn = document.querySelector(".gamerestart");

function gameRestart() {
  turn = "X";
  tds.forEach(function (trs) {
    trs.forEach(function (td) {
      td.textContent = "";
    });
  });
  whosturn.textContent = "";
}

resetBtn.addEventListener("click", gameRestart);
