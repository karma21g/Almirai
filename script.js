const data = [
  { name: "Domino", photo: "images/1.png" },
  { name: "Alex", photo: "images/2.png" },
  { name: "Sarah", photo: "images/3.png" }
];

let index = 0;
let results = [];

function answer(know) {
  results.push({
    name: data[index].name,
    know: know
  });

  console.log(results); // tu verras les réponses dans la console
}

function restart() {
  index++;

  if (index >= data.length) {
    alert("Sondage terminé !");
    console.log("Résultats finaux :", results);
    return;
  }

  document.getElementById("photo").src = data[index].photo;
  document.getElementById("name").textContent = data[index].name;
}