 //TP : le savoir inutile
//http://www.topito.com/top-infos-insolites-corps-humain
/*
* Créer une application single-page permettant d'ajouter des savoirs inutiles (avec le nom de l'auteur et la date de saisie).
* Ceux-ci s'affichent dans une liste sur la même page.
* Un bouton supprimer à côté de chaque savoir permet de le supprimer.
*/

window.onload = chargementTermine;

function chargementTermine()
{
    var btn = document.querySelector("#divSaisie button");
    btn.addEventListener('click', ajouter);
    initForm();
}
