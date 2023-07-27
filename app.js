// const hiddenElementsLeft = Array.from(document.getElementsByClassName('left'));
const recettes = [];

for (let i = 0; i < 100; i++) {
  recettes.push({
    titre: `Recette ${i}`,
    description: `Description de la recette ${i}`,
    imgSrc: "./asset/hero1.jpg",
  });
}
console.log(recettes);

const Recettes = document.getElementById("recettesContainer");

for (let index = 0; index < 8; index++) {
  console.log(recettes[index]);
  const recetteDiv = document.createElement("div");

  recetteDiv.innerHTML =
    '<div class="hidden-botom"><div class="recette-s"><img src="./asset/hero1.jpg" alt="" /><div class="caption"><h2>Pizza Fraisse</h2><p>Recette pour une pizza aux fraises et au fromage blanc.</p><div class="note"></div><div class="consulter">consulter la recette</div></div></div></div>';
  recetteDiv.classList = "recette";
  Recettes.appendChild(recetteDiv);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      //       entry.target.classList.remove("hidden");
    }
  });
});

const hiddentElemtsL = document.querySelectorAll(".hidden");
const hiddentElemtsR = document.querySelectorAll(".hidden-right");
const hiddentElemtsU = document.querySelectorAll(".hidden-up");
const hiddentElemtsB = document.querySelectorAll(".hidden-botom");
hiddentElemtsL.forEach((e) => observer.observe(e));
hiddentElemtsR.forEach((e) => observer.observe(e));
hiddentElemtsU.forEach((e) => observer.observe(e));
hiddentElemtsB.forEach((e) => observer.observe(e));
