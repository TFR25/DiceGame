window.addEventListener("load", onLoad);
function onLoad() {
  // auto update copyright date
  const copyrightEl = document.getElementById("copyright");
  if (copyrightEl) {
    const currentYear = new Date().getFullYear();
    const copyrightText = `Copyright &copy; ${currentYear} All rights reserved. Built and maintained by Tasha Fernandez-Ross`;
    copyrightEl.innerHTML = copyrightText;
  }
}

// collection of die images
const images = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

// placeholder to store random number to use in result function
let result = [0, 0];

function clearH3() {
  // function to clear rules and results
  document.querySelector("h3").innerHTML = " ";
}

function playGame() {
  // function to return game results
  setTimeout(()=> {
    if (result[0] > result[1]) {
      document.querySelector("h3").innerHTML = "🚩 Player 1 Wins!";
    }
    else if (result[1] > result[0]) {
      document.querySelector("h3").innerHTML = "Player 2 Wins! 🚩";
    }
    else if (result[0] === result[1]) {
      document.querySelector("h3").innerHTML = "It's a draw!";
    }
    else {
      document.querySelector("h3").innerHTML = "Something went wrong ☹️"
    }
  }, 2000);
}

function playSound() {
  new Audio("./sound/DiceRoll.mp3").play();
}

function rollDie1() {
  // Function to change die face at regular intervals
  clearH3();
  let dieImg = document.getElementById('die1');
  let changeDieFace = () => {
      let randomIndex = Math.floor(Math.random() * 6);
      result.splice(0, 0, randomIndex + 1);
      let dieImageFileName = images[randomIndex];
      dieImg.src = dieImageFileName;
  };
  let interval = setInterval(changeDieFace, 200);

  // Stop the interval after 2 second
  setTimeout(() => {
      clearInterval(interval);
      dieImg.src = dieImageFileName;
  }, 2000);
}

// play dice rolling sound when die2 button is pressed
let sound2 = document.getElementById("die2btn");
  sound2.addEventListener("click", function() {
    new Audio("./sound/DiceRoll.mp3").play();
  });

function rollDie2() {
  let dieImg = document.getElementById('die2');
  // Function to change die face at regular intervals
  let changeDieFace = () => {
      let randomIndex = Math.floor(Math.random() * 6);
      result.splice(1, 0, randomIndex + 1);
      let dieImageFileName = images[randomIndex];
      dieImg.src = dieImageFileName;
  };
  let interval = setInterval(changeDieFace, 200);

  // Stop the interval after 2 second
  setTimeout(() => {
      clearInterval(interval);
      dieImg.src = dieImageFileName;
  }, 2000);
};












