const tailleDuCoteDuneCellule = 32;
const directions = ['E', 'S', 'O', 'N'];
let indexDirections = 0;

const svg = document.getElementById("tableau-du-jeu");
document.addEventListener('keydown', (event) => {
    if ('ArrowLeft' === event.key) {
        console.log('Je tourne à gauche');
        if (indexDirections > 0) {
            indexDirections -= 1;
        } else {
            indexDirections = 3;
        }
    }
    if ('ArrowRight' === event.key) {
        console.log('Je tourne à droite');
        if (indexDirections < 3) {
            indexDirections += 1;
        } else {
            indexDirections = 0;
        }
    }
});

let xGaucheTeteSerpent = tailleDuCoteDuneCellule;
let yHautTeteSerpent = 0;
let xGauchePomme = 128;
let yHautPomme = 128;
let pommeEstVisible = true;

// TODO 1. faire réapparaître une nouvelle pomme quand la pomme actuelle est mangée
// TODO 2. faire un tableau des positions des parties du serpent
// TODO 3. faire grandir le serpent quand il mange une pomme
// TODO 4. faire mourir le serpent quand il arrive sur un mur
// TODO 5. faire un bouton pour relancer le jeu quand le serpent est mort
// TODO 6. faire mourir le serpent quand il arrive sur lui-même
// TODO 7. faire fonctionner le jeu sur téléphone (ne pas réagir aux touches mais aux gestes)
// TODO 8. passer sur VITE VUE
// TODO 9. faire que les contrôles passent sur 4 directions

const intervalId = setInterval(() => {
    if (indexDirections === 0) {
        xGaucheTeteSerpent += tailleDuCoteDuneCellule;
    }
    if (indexDirections === 1) {
        yHautTeteSerpent += tailleDuCoteDuneCellule;
    }
    if (indexDirections === 2) {
        xGaucheTeteSerpent -= tailleDuCoteDuneCellule;
    }
    if (indexDirections === 3) {
        yHautTeteSerpent -= tailleDuCoteDuneCellule;
    }
    console.log('xGaucheTeteSerpent: ' + xGaucheTeteSerpent / tailleDuCoteDuneCellule + ' yHautTeteSerpent: '
        + yHautTeteSerpent / tailleDuCoteDuneCellule)
    const gCellulesTableauDuJeu = document.createElementNS("http://www.w3.org/2000/svg", "g");
    gCellulesTableauDuJeu.setAttribute("id", "cellules-tableau-du-jeu");
    gCellulesTableauDuJeu.setAttribute("fill", "white");
    svg.replaceChildren();
    svg.appendChild(gCellulesTableauDuJeu);

    const gPomme = document.createElementNS("http://www.w3.org/2000/svg", "g");
    gPomme.setAttribute("id", "pomme");
    const rect1Pomme = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect1Pomme.setAttribute("width", tailleDuCoteDuneCellule.toString());
    rect1Pomme.setAttribute("height", tailleDuCoteDuneCellule.toString());
    rect1Pomme.setAttribute("fill", "white");
    rect1Pomme.setAttribute("x", xGauchePomme.toString());
    rect1Pomme.setAttribute("y", yHautPomme.toString());
    gPomme.appendChild(rect1Pomme);

    const circlePomme = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circlePomme.setAttribute("cx", (xGauchePomme + (tailleDuCoteDuneCellule/2)).toString());
    circlePomme.setAttribute("cy", (yHautPomme + (tailleDuCoteDuneCellule/2)).toString());
    circlePomme.setAttribute("r", "12");
    circlePomme.setAttribute("fill", "red");
    gPomme.appendChild(circlePomme);

    const rect2Pomme = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect2Pomme.setAttribute("width", "2");
    rect2Pomme.setAttribute("height", "7");
    rect2Pomme.setAttribute("fill", "green");
    rect2Pomme.setAttribute("x", (xGauchePomme +  (tailleDuCoteDuneCellule/2)).toString());
    rect2Pomme.setAttribute("y", (yHautPomme + 1).toString());
    //     <!-- Tige verte -->
    //     <rect x="15" y="4" width="2" height="7" fill="green"/>
    gPomme.appendChild(rect2Pomme);
    if (!pommeEstVisible) {
        gPomme.setAttribute("display", "none");
    }

    svg.appendChild(gPomme);

    if ((xGauchePomme === xGaucheTeteSerpent) && (yHautPomme === yHautTeteSerpent)) {
        pommeEstVisible = false;
    }

    for (let ligneActuelle = 0; ligneActuelle < 16; ligneActuelle++) {
        for (let colonneActuelle = 0; colonneActuelle < 16; colonneActuelle++) {
            let x = tailleDuCoteDuneCellule * ligneActuelle;
            let y = tailleDuCoteDuneCellule * colonneActuelle;
            const rectCellule = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rectCellule.setAttribute("x", x.toString());
            rectCellule.setAttribute("y", y.toString());
            rectCellule.setAttribute("width", tailleDuCoteDuneCellule.toString());
            rectCellule.setAttribute("height", tailleDuCoteDuneCellule.toString());
            gCellulesTableauDuJeu.appendChild(rectCellule);
        }
    }

    const gCorpsDuSerpent = document.createElementNS("http://www.w3.org/2000/svg", "g");
    gCorpsDuSerpent.setAttribute("id", "corps-du-serpent");
    const rectCorpsDuSerpent = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectCorpsDuSerpent.setAttribute("x", (xGaucheTeteSerpent - tailleDuCoteDuneCellule).toString());
    rectCorpsDuSerpent.setAttribute("y", yHautTeteSerpent);
    rectCorpsDuSerpent.setAttribute("width", tailleDuCoteDuneCellule.toString());
    rectCorpsDuSerpent.setAttribute("height", tailleDuCoteDuneCellule.toString());
    rectCorpsDuSerpent.setAttribute("fill", "green");
    gCorpsDuSerpent.appendChild(rectCorpsDuSerpent);
    svg.appendChild(gCorpsDuSerpent);

    const gTeteDuSerpent = document.createElementNS("http://www.w3.org/2000/svg", "g");
    gTeteDuSerpent.setAttribute("id", "tete-du-serpent");
    svg.appendChild(gTeteDuSerpent);

    const rect1TeteDuSerpent = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect1TeteDuSerpent.setAttribute("x", xGaucheTeteSerpent.toString());
    rect1TeteDuSerpent.setAttribute("y", yHautTeteSerpent);
    rect1TeteDuSerpent.setAttribute("width", tailleDuCoteDuneCellule.toString());
    rect1TeteDuSerpent.setAttribute("height", tailleDuCoteDuneCellule.toString());
    rect1TeteDuSerpent.setAttribute("fill", "white");
    gTeteDuSerpent.appendChild(rect1TeteDuSerpent);

    const circleTeteDuSerpent = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circleTeteDuSerpent.setAttribute("cx", (xGaucheTeteSerpent + 8).toString());
    circleTeteDuSerpent.setAttribute("cy", (yHautTeteSerpent + 16).toString());
    circleTeteDuSerpent.setAttribute("r", "16");
    circleTeteDuSerpent.setAttribute("fill", "green");
    gTeteDuSerpent.appendChild(circleTeteDuSerpent);

    const rect2TeteDuSerpent = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect2TeteDuSerpent.setAttribute("x", xGaucheTeteSerpent.toString());
    rect2TeteDuSerpent.setAttribute("y", yHautTeteSerpent);
    rect2TeteDuSerpent.setAttribute("width", "8");
    rect2TeteDuSerpent.setAttribute("height", tailleDuCoteDuneCellule.toString());
    rect2TeteDuSerpent.setAttribute("fill", "green");
    gTeteDuSerpent.appendChild(rect2TeteDuSerpent);

    const oeilHautTeteDuSerpent = document.createElementNS("http://www.w3.org/2000/svg",
        "circle");
    oeilHautTeteDuSerpent.setAttribute("cx", (xGaucheTeteSerpent + 8).toString());
    oeilHautTeteDuSerpent.setAttribute("cy", (yHautTeteSerpent + 8).toString());
    oeilHautTeteDuSerpent.setAttribute("r", "3");
    oeilHautTeteDuSerpent.setAttribute("fill", "white");
    gTeteDuSerpent.appendChild(oeilHautTeteDuSerpent);

    const pupilleHautTeteDuSerpent = document.createElementNS("http://www.w3.org/2000/svg",
        "circle");
    pupilleHautTeteDuSerpent.setAttribute("cx", (xGaucheTeteSerpent + 8).toString());
    pupilleHautTeteDuSerpent.setAttribute("cy", (yHautTeteSerpent + 8).toString());
    pupilleHautTeteDuSerpent.setAttribute("r", "2");
    pupilleHautTeteDuSerpent.setAttribute("fill", "black");
    gTeteDuSerpent.appendChild(pupilleHautTeteDuSerpent);

    const oeilBasTeteDuSerpent = document.createElementNS("http://www.w3.org/2000/svg",
        "circle");
    oeilBasTeteDuSerpent.setAttribute("cx", (xGaucheTeteSerpent + 8).toString());
    oeilBasTeteDuSerpent.setAttribute("cy", (yHautTeteSerpent + 24).toString());
    oeilBasTeteDuSerpent.setAttribute("r", "3");
    oeilBasTeteDuSerpent.setAttribute("fill", "white");
    gTeteDuSerpent.appendChild(oeilBasTeteDuSerpent);

    const pupilleBasTeteDuSerpent = document.createElementNS("http://www.w3.org/2000/svg",
        "circle");
    pupilleBasTeteDuSerpent.setAttribute("cx", (xGaucheTeteSerpent + 8).toString());
    pupilleBasTeteDuSerpent.setAttribute("cy", (yHautTeteSerpent + 24).toString());
    pupilleBasTeteDuSerpent.setAttribute("r", "2");
    pupilleBasTeteDuSerpent.setAttribute("fill", "black");
    gTeteDuSerpent.appendChild(pupilleBasTeteDuSerpent);

    const langueDuSerpent = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let texteDuDlangueDuSerpent = "M" + (xGaucheTeteSerpent + 31).toString() + " " +
        (yHautTeteSerpent + 19).toString() + " L" + (xGaucheTeteSerpent + 29).toString() + " " +
        (yHautTeteSerpent + 17).toString() + " L" + (xGaucheTeteSerpent + 31).toString() + " " +
        (yHautTeteSerpent + 15).toString() + " M" + (xGaucheTeteSerpent + 29).toString() + " " +
        (yHautTeteSerpent + 17).toString() + " L" + (xGaucheTeteSerpent + 19).toString() + " " +
        (yHautTeteSerpent + 17).toString()
    langueDuSerpent.setAttribute("d", texteDuDlangueDuSerpent);
    langueDuSerpent.setAttribute("stroke", "red");
    langueDuSerpent.setAttribute("stroke-width", "1.5");
    langueDuSerpent.setAttribute("fill", "none");
    gTeteDuSerpent.appendChild(langueDuSerpent);

    if (indexDirections === 0) {
        let transformation = "rotate(0, " + (xGaucheTeteSerpent + (tailleDuCoteDuneCellule / 2)) + ", " + (yHautTeteSerpent + 16).toString() + ")";
        gCorpsDuSerpent.setAttribute("transform", transformation);
        gTeteDuSerpent.setAttribute("transform", transformation);
    }
    if (indexDirections === 1) {
        let transformation = "rotate(90, " + (xGaucheTeteSerpent + (tailleDuCoteDuneCellule / 2)) + ", " + (yHautTeteSerpent + 16).toString() + ")";
        gCorpsDuSerpent.setAttribute("transform", transformation);
        gTeteDuSerpent.setAttribute("transform", transformation);
    }
    if (indexDirections === 2) {
        let transformation = "rotate(180, " + (xGaucheTeteSerpent + (tailleDuCoteDuneCellule / 2)) + ", " + (yHautTeteSerpent + 16).toString() + ")";
        gCorpsDuSerpent.setAttribute("transform", transformation);
        gTeteDuSerpent.setAttribute("transform", transformation);
    }
    if (indexDirections === 3) {
        let transformation = "rotate(270, " + (xGaucheTeteSerpent + (tailleDuCoteDuneCellule / 2)) + ", " + (yHautTeteSerpent + 16).toString() + ")";
        gCorpsDuSerpent.setAttribute("transform", transformation);
        gTeteDuSerpent.setAttribute("transform", transformation);
    }
}, 250); // 1000ms = 1 seconde
setTimeout(() => {
    clearInterval(intervalId);
}, 999999);
