//Rentrer le nom d'une équipe et l'inscrire dans le tableau
let teamsPlayerOne = document.getElementById("P1");
let teamsPlayerTwo = document.getElementById("P2");
let addTeam1 = document.getElementById("add");
let addTeam2 = document.getElementById("add2");
let array1 = document.getElementById("array1");

addTeam1.addEventListener("click", () => {
	console.log(teamsPlayerOne.value);
});

addTeam2.addEventListener("click", () => {
	console.log(teamsPlayerTwo.value);
});

//Quand on clique sur le bouton "tirez au sort", le tableau des 16e se rempli
