const container = document.getElementById("pricing-container");

const message = document.getElementById("message");


function Carte(titre, prix, caracteristiques) {

    const carte = document.createElement("article");

    carte.classList.add("pricing");


    const nom = document.createElement("h2");

    nom.classList.add("title");

    nom.textContent = titre;


    const tarif = document.createElement("p");

    tarif.classList.add("price");

    tarif.textContent = prix + " $";

    const periode = document.createElement("span");

    periode.textContent = "/mois";

    tarif.appendChild(periode);


    const liste = document.createElement("ul");

    liste.classList.add("features");


    caracteristiques.forEach(function (element) {

        const li = document.createElement("li");

        li.textContent = element;

        liste.appendChild(li);

    });


    const bouton = document.createElement("button");

    bouton.classList.add("btn");

    bouton.textContent = "Démarrer l'essai";


    bouton.addEventListener("click", function () {

        message.textContent =
            "Vous avez sélectionné : " + titre;

    });


    carte.appendChild(nom);

    carte.appendChild(tarif);

    carte.appendChild(liste);

    carte.appendChild(bouton);


    container.appendChild(carte);

}


Carte("Forfait de base", "9,99", [
    "1 Go de stockage",
    "Assistance de base",
    "Fonctionnalités principales"
]);


Carte("Forfait Pro", "19,99", [
    "10 Go de stockage",
    "Assistance prioritaire",
    "Fonctionnalités avancées"
]);


Carte("Forfait Premium", "29,99", [
    "Stockage illimité",
    "Assistance 24h/24",
    "Toutes les fonctionnalités"
]);