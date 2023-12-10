var hs = document.querySelector("h2");
var Squares = document.querySelectorAll(".container > div");
var turn = "X";

function SwitchTurn(element) {
  if (turn === "X" && element.innerHTML == "") {
    element.innerHTML = turn;
    turn = "O";
    hs.innerHTML = `${turn} Turn`;
  } else if (turn === "O" && element.innerHTML == "") {
    element.innerHTML = turn;
    turn = "X";
    hs.innerHTML = `${turn} Turn`;
  }
}

function CheckSquares() {
  if (
    Squares[0].innerHTML === Squares[1].innerHTML &&
    Squares[1].innerHTML === Squares[2].innerHTML &&
    Squares[0].innerHTML != ""
  ) {
    Squares[0].classList.add("active");
    Squares[1].classList.add("active");
    Squares[2].classList.add("active");
    hs.innerHTML = `${Squares[0].innerHTML} is Winner`;
    ReloadAfterWin();
  } else if (
    Squares[3].innerHTML === Squares[4].innerHTML &&
    Squares[4].innerHTML === Squares[5].innerHTML &&
    Squares[3].innerHTML != ""
  ) {
    Squares[3].classList.add("active");
    Squares[4].classList.add("active");
    Squares[5].classList.add("active");
    hs.innerHTML = `${Squares[5].innerHTML} is Winner`;
    ReloadAfterWin();
  } else if (
    Squares[6].innerHTML === Squares[7].innerHTML &&
    Squares[7].innerHTML === Squares[8].innerHTML &&
    Squares[6].innerHTML != ""
  ) {
    Squares[6].classList.add("active");
    Squares[7].classList.add("active");
    Squares[8].classList.add("active");
    hs.innerHTML = `${Squares[7].innerHTML} is Winner`;
    ReloadAfterWin();
  } else if (
    Squares[0].innerHTML === Squares[4].innerHTML &&
    Squares[4].innerHTML === Squares[8].innerHTML &&
    Squares[4].innerHTML != ""
  ) {
    Squares[0].classList.add("active");
    Squares[4].classList.add("active");
    Squares[8].classList.add("active");
    hs.innerHTML = `${Squares[4].innerHTML} is Winner`;
    ReloadAfterWin();
  } else if (
    Squares[0].innerHTML === Squares[3].innerHTML &&
    Squares[3].innerHTML === Squares[6].innerHTML &&
    Squares[6].innerHTML != ""
  ) {
    Squares[0].classList.add("active");
    Squares[3].classList.add("active");
    Squares[6].classList.add("active");
    hs.innerHTML = `${Squares[3].innerHTML} is Winner`;
    ReloadAfterWin();
  } else if (
    Squares[2].innerHTML === Squares[5].innerHTML &&
    Squares[5].innerHTML === Squares[8].innerHTML &&
    Squares[5].innerHTML != ""
  ) {
    Squares[2].classList.add("active");
    Squares[5].classList.add("active");
    Squares[8].classList.add("active");
    hs.innerHTML = `${Squares[5].innerHTML} is Winner`;
    ReloadAfterWin();
  } else if (
    Squares[1].innerHTML === Squares[4].innerHTML &&
    Squares[4].innerHTML === Squares[7].innerHTML &&
    Squares[4].innerHTML != ""
  ) {
    Squares[1].classList.add("active");
    Squares[4].classList.add("active");
    Squares[7].classList.add("active");
    hs.innerHTML = `${Squares[1].innerHTML} is Winner`;
    ReloadAfterWin();
  }
}

function ReloadAfterWin() {
  setInterval(function () {
    hs.innerHTML += ".";
  }, 1000);

  setTimeout(function () {
    location.reload();
  }, 4000);
}

Squares.forEach((ele) => {
  ele.onclick = function () {
    SwitchTurn(ele);

    CheckSquares();
  };
});
