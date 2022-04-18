//test de liaison
//alert("bonjour le monde")

const commencer = document.getElementById("new");
const text = document.querySelector(".text");
const text2 = document.querySelector(".text2");
let isVisible = true;
let jet = document.getElementById("jet");
let save = document.getElementById("save");
let D = document.getElementById("D");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let sauveguarde1 = document.getElementById("S1");
let sauveguarde2 = document.getElementById("S2");
let I = document.getElementById('I');
let J = document.getElementById("J");

//fonction remise a zero
function reset() {
    D.innerHTML = "0"; //mettre l'img zero
    score1.innerHTML = "0";
    score2.innerHTML = "0";
    sauveguarde1.innerHTML = "00";
    sauveguarde2.innerHTML = "00";
}

//nouvelle partie
commencer.addEventListener("click", () => {
    //console.log("commencer");
    alert("UNE NOUVELLE PARTIE VA COMMENCER, LES COMPTEURS SONT REMIS A ZERO")
    reset()

});


//function P1
function oneScore() {
    //recuperation de D dans score1
    score1.innerHTML = parseInt(Number(D.innerHTML) + Number(score1.innerHTML));
};

function towScore() {
    //recuperation de D dans score 2
    score2.innerHTML = parseInt(Number(D.innerHTML) + Number(score2.innerHTML));
}

//funtion du lancer de D
function hazard() {
    D.innerHTML = parseInt(Math.floor(Math.random() * 10) + 1);
};

//fonction du chiffre 1
function pasDeChance() {
    if (D.innerHTML === "1") {
        alert('AIII, PAS DE CHANCE, TU AS FAIT "1" AU TOUR DU JOUEUR SUIVANT')
        score1.innerHTML = 0;
        score2.innerHTML = 0;
    }
}

//fonction de lancer de dés

jet.addEventListener("click", () => {
    hazard();
    pasDeChance();
    isVisible ? oneScore() : towScore();
});

function ajout1() {
    sauveguarde1.innerHTML = parseInt(Number(score1.innerHTML) + Number(sauveguarde1.innerHTML));
    score1.innerHTML = "0";
}

function ajout2() {
    sauveguarde2.innerHTML = parseInt(Number(score2.innerHTML) + Number(sauveguarde2.innerHTML));
    score2.innerHTML = "0";
}

function win() {
    //console.log("win");
    if (sauveguarde1.innerHTML > 100) {
        alert(`nous avons un gagnant avec ${sauveguarde1.innerHTML} points`)
        score2.innerHTML = "0";
        sauveguarde2.innerHTML = "00";
    }

    if (sauveguarde2.innerHTML > 100) {
        alert(`nous avons un gagnant avec ${sauveguarde2.innerHTML} points`)
        score1.innerHTML = "0";
        sauveguarde1.innerHTML = "00";
    }
}

//function sauvergarde et passage au joueur suivant   pas fini et a verifier
save.addEventListener("click", () => {
    //passe du j1 au j2 visuel
    isVisible = !isVisible;
    text.classList.toggle('is-visible');
    ajout1();
    text2.classList.toggle('is-visible');
    ajout2();
    win();
})