let score = 0;
let answer = 0;

function newQuestion() {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  answer = a + b;

  document.getElementById("game").innerHTML = `
    <p>${a} + ${b} = ?</p>
    <input id="rep" type="number">
    <br><br>
    <button onclick="check()">Valider</button>
  `;
}

function check() {
  const user = Number(document.getElementById("rep").value);

  if (user === answer) {
    score++;
    document.getElementById("score").textContent = score;
    newQuestion();
  } else {
    alert("Perdu ! Score : " + score);
    score = 0;
    document.getElementById("score").textContent = score;
    newQuestion();
  }
}

newQuestion();