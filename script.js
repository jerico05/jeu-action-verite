//les instructions stockées dans des tableaux

const actions = [
    "Fais 10 pompes",
    "Chante une chanson",
    "Fais le tour de la pièce en sautant",
    "Imite un animal de ton choix",
    "Fais une grimace pendant 30 secondes",
    "Raconte une blague",
    "Danse sans musique pendant 1 minute",
    "Fais semblant de téléphoner à quelqu'un de célèbre",
    "Fais un compliment à la personne à ta gauche",
    "Fais le cri d'un animal au hasard"
];

const verites = [
    "As-tu déjà menti à un ami proche ?",
    "Quel est ton plus grand secret ?",
    "Quelle est ta plus grande peur ?",
    "As-tu déjà triché à un jeu ?",
    "Quel est ton plus grand rêve ?",
    "As-tu déjà eu le béguin pour quelqu'un ici ?",
    "Quelle est la chose la plus embarrassante que tu aies faite ?",
    "As-tu déjà volé quelque chose ?",
    "Quelle est la dernière fois que tu as pleuré ?",
    "Quel est le plus gros mensonge que tu aies dit ?"
];

//accès aux éléments HTML
var main_elements = document.querySelectorAll("div");
var para_instruction = document.getElementById("para-instru");
console.log(main_elements);
var nom_jeu = main_elements[1];
//var instructions = main_elements[2];
console.log(para_instruction);
nom_jeu.innerHTML = "Action";
para_instruction.innerHTML = "Choisissez une catégorie pour commencer le jeu !";


var buttons = document.querySelectorAll("button");
var actionButton = buttons[0];
var veriteButton = buttons[1];
var instruction;

//ajout des événements aux boutons
actionButton.addEventListener("click", function() {
   // alert("vous avez choisi action")
    nom_jeu.innerHTML = "Action";
    choisir_instruction("action");
    para_instruction.innerHTML = instruction;
   }, false);
veriteButton.addEventListener("click", function() {
    nom_jeu.innerHTML = "Vérité";
    choisir_instruction("verite");
    para_instruction.innerHTML = instruction;   
    //alert("vous avez choisi vérité")
}, false);

//fonction pour choisir une instruction aléatoire
function choisir_instruction(type) {
    
    if (type === "action") {
        var index = Math.floor(Math.random() * actions.length);
        instruction = actions[index];
    } else if (type === "verite") {
        var index = Math.floor(Math.random() * verites.length);
        instruction = verites[index];
    }
}