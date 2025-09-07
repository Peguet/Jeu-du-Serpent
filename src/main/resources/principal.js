const svg = document.getElementById("tableau-du-jeu");

const gCellulesTableauDuJeu = document.createElementNS("http://www.w3.org/2000/svg", "g");
gCellulesTableauDuJeu.setAttribute("id", "cellules-tableau-du-jeu");
gCellulesTableauDuJeu.setAttribute("fill", "white");
let nombreDintervalles = 0;
let xGaucheTeteSerpent = 32*6;
let yGaucheTeteSerpent = 32*6;
const intervalId = setInterval(() => {
    nombreDintervalles++;
    console.log("nombreDintervalles", nombreDintervalles)
    let resteDeLaDivision = nombreDintervalles % 12;

    if (resteDeLaDivision < 3) {
        xGaucheTeteSerpent += 32;
    }
    if (resteDeLaDivision >= 3 && resteDeLaDivision < 6) {
        yGaucheTeteSerpent += 32;
    }
    if (resteDeLaDivision >= 6 && resteDeLaDivision < 9) {
        xGaucheTeteSerpent -= 32;
    }
    if (resteDeLaDivision >= 9 && resteDeLaDivision < 12) {
        yGaucheTeteSerpent -= 32;
    }
    // TODO svg : enlever les 3 enfants corps du serpent, tête du serpent et cellules du tableau
    svg.appendChild(gCellulesTableauDuJeu);
    for (let ligneActuelle = 0; ligneActuelle < 16; ligneActuelle++) {
        for (let colonneActuelle = 0; colonneActuelle < 16; colonneActuelle++) {
            let x = 32 * ligneActuelle;
            let y = 32 * colonneActuelle;
            const rectCellule = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rectCellule.setAttribute("x", x.toString());
            rectCellule.setAttribute("y", y.toString());
            rectCellule.setAttribute("width", "32");
            rectCellule.setAttribute("height", "32");
            gCellulesTableauDuJeu.appendChild(rectCellule);
        }
    }

    const gCorpsDuSerpent = document.createElementNS("http://www.w3.org/2000/svg", "g");
    gCorpsDuSerpent.setAttribute("id", "corps-du-serpent");
    const rectCorpsDuSerpent = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectCorpsDuSerpent.setAttribute("x", (xGaucheTeteSerpent - 32).toString());
    rectCorpsDuSerpent.setAttribute("y", yGaucheTeteSerpent);
    rectCorpsDuSerpent.setAttribute("width", "32");
    rectCorpsDuSerpent.setAttribute("height", "32");
    rectCorpsDuSerpent.setAttribute("fill", "green");
    gCorpsDuSerpent.appendChild(rectCorpsDuSerpent);
    svg.appendChild(gCorpsDuSerpent);

    const gTeteDuSerpent = document.createElementNS("http://www.w3.org/2000/svg", "g");
    gTeteDuSerpent.setAttribute("id", "tete-du-serpent");
    svg.appendChild(gTeteDuSerpent);

    const rect1TeteDuSerpent = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect1TeteDuSerpent.setAttribute("x", xGaucheTeteSerpent.toString());
    rect1TeteDuSerpent.setAttribute("y", yGaucheTeteSerpent);
    rect1TeteDuSerpent.setAttribute("width", "32");
    rect1TeteDuSerpent.setAttribute("height", "32");
    rect1TeteDuSerpent.setAttribute("fill", "white");
    gTeteDuSerpent.appendChild(rect1TeteDuSerpent);

    const circleTeteDuSerpent = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circleTeteDuSerpent.setAttribute("cx", (xGaucheTeteSerpent + 8).toString());
    circleTeteDuSerpent.setAttribute("cy", (yGaucheTeteSerpent + 16).toString());
    circleTeteDuSerpent.setAttribute("r", "16");
    circleTeteDuSerpent.setAttribute("fill", "green");
    gTeteDuSerpent.appendChild(circleTeteDuSerpent);

    const rect2TeteDuSerpent = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect2TeteDuSerpent.setAttribute("x", xGaucheTeteSerpent.toString());
    rect2TeteDuSerpent.setAttribute("y", yGaucheTeteSerpent);
    rect2TeteDuSerpent.setAttribute("width", "8");
    rect2TeteDuSerpent.setAttribute("height", "32");
    rect2TeteDuSerpent.setAttribute("fill", "green");
    gTeteDuSerpent.appendChild(rect2TeteDuSerpent);

    const oeilHautTeteDuSerpent = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    oeilHautTeteDuSerpent.setAttribute("cx", (xGaucheTeteSerpent + 8).toString());
    oeilHautTeteDuSerpent.setAttribute("cy", (yGaucheTeteSerpent + 8).toString());
    oeilHautTeteDuSerpent.setAttribute("r", "3");
    oeilHautTeteDuSerpent.setAttribute("fill", "white");
    gTeteDuSerpent.appendChild(oeilHautTeteDuSerpent);

    const pupilleHautTeteDuSerpent = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    pupilleHautTeteDuSerpent.setAttribute("cx", (xGaucheTeteSerpent + 8).toString());
    pupilleHautTeteDuSerpent.setAttribute("cy", (yGaucheTeteSerpent + 8).toString());
    pupilleHautTeteDuSerpent.setAttribute("r", "2");
    pupilleHautTeteDuSerpent.setAttribute("fill", "black");
    gTeteDuSerpent.appendChild(pupilleHautTeteDuSerpent);

    const oeilBasTeteDuSerpent = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    oeilBasTeteDuSerpent.setAttribute("cx", (xGaucheTeteSerpent + 8).toString());
    oeilBasTeteDuSerpent.setAttribute("cy", (yGaucheTeteSerpent + 24).toString());
    oeilBasTeteDuSerpent.setAttribute("r", "3");
    oeilBasTeteDuSerpent.setAttribute("fill", "white");
    gTeteDuSerpent.appendChild(oeilBasTeteDuSerpent);

    const pupilleBasTeteDuSerpent = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    pupilleBasTeteDuSerpent.setAttribute("cx", (xGaucheTeteSerpent + 8).toString());
    pupilleBasTeteDuSerpent.setAttribute("cy", (yGaucheTeteSerpent + 24).toString());
    pupilleBasTeteDuSerpent.setAttribute("r", "2");
    pupilleBasTeteDuSerpent.setAttribute("fill", "black");
    gTeteDuSerpent.appendChild(pupilleBasTeteDuSerpent);

    const langueDuSerpent = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let texteDuDlangueDuSerpent = "M" + (xGaucheTeteSerpent + 31).toString() +
        " " + (yGaucheTeteSerpent + 19).toString() +
        " L" + (xGaucheTeteSerpent + 29).toString() +
        " " + (yGaucheTeteSerpent + 17).toString() +
        " L" + (xGaucheTeteSerpent + 31).toString() +
        " " + (yGaucheTeteSerpent + 15).toString() +
        " M" + (xGaucheTeteSerpent + 29).toString() +
        " " + (yGaucheTeteSerpent + 17).toString() +
        " L" + (xGaucheTeteSerpent + 19).toString() +
        " " + (yGaucheTeteSerpent + 17).toString()
    langueDuSerpent.setAttribute("d", texteDuDlangueDuSerpent);
    langueDuSerpent.setAttribute("stroke", "red");
    langueDuSerpent.setAttribute("stroke-width", "1.5");
    langueDuSerpent.setAttribute("fill", "none");
    gTeteDuSerpent.appendChild(langueDuSerpent);

    if (resteDeLaDivision >= 0 && resteDeLaDivision < 3) {
        let transformation = "rotate(0, " + (xGaucheTeteSerpent + 16) + ", "
            + (yGaucheTeteSerpent + 16).toString() + ")";
        gCorpsDuSerpent.setAttribute("transform", transformation);
        gTeteDuSerpent.setAttribute("transform", transformation);
    }
    if (resteDeLaDivision >= 3 && resteDeLaDivision < 6) {
        let transformation = "rotate(90, " + (xGaucheTeteSerpent + 16) + ", "
            + (yGaucheTeteSerpent + 16).toString() + ")";
        gCorpsDuSerpent.setAttribute("transform", transformation);
        gTeteDuSerpent.setAttribute("transform", transformation);
    }
    if (resteDeLaDivision >= 6 && resteDeLaDivision < 9) {
        let transformation = "rotate(180, " + (xGaucheTeteSerpent + 16) + ", "
            + (yGaucheTeteSerpent + 16).toString() + ")";
        gCorpsDuSerpent.setAttribute("transform", transformation);
        gTeteDuSerpent.setAttribute("transform", transformation);
    }
    if (resteDeLaDivision >= 9 && resteDeLaDivision < 12) {
        let transformation = "rotate(270, " + (xGaucheTeteSerpent + 16) + ", "
            + (yGaucheTeteSerpent + 16).toString() + ")";
        gCorpsDuSerpent.setAttribute("transform", transformation);
        gTeteDuSerpent.setAttribute("transform", transformation);
    }
}, 250); // 1000ms = 1 seconde
setTimeout(() => {
    clearInterval(intervalId);
}, 998100);
