window.onload = initPage;

/////////////////////////////////////////////////////////////////////////////
//PARTIE CONTROLEUR//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
function initPage(){
    var btn = document.querySelector("#divSaisie button");
    btn.addEventListener('click', ajouter);
    initialiserFormulaire();
}

function initialiserFormulaire()
{

    var savoirInutile = new SavoirInutile();
    document.getElementById("libelleSavoir").value=savoirInutile.auteur;
    document.getElementById("auteur").value=savoirInutile.savoir;
    document.getElementById("date").valueAsDate=savoirInutile.dateSaisie;
    document.getElementById("libelleSavoir").focus();
}

function effacerSavoirs()
{
    var olSavoir = document.getElementById("olListeSavoir");
    olSavoir.innerHTML="";
}

function afficherSavoirs()
{
    effacerSavoirs();

    var olSavoir = document.getElementById("olListeSavoir");

    savoirsInutiles.forEach((value, index)=>
        {
            var liSavoir = document.createElement("li");
            var pSavoir = document.createElement("p");
            var pInfos = document.createElement("p");
            pSavoir.className = "savoir";
            pInfos.className = "infos";
            liSavoir.addEventListener("click", supprimer);

            liSavoir.id=index;
            pSavoir.innerText = value.savoir;
            pInfos.innerText = value.informations();

            olSavoir.appendChild(liSavoir);
            liSavoir.appendChild(pSavoir);
            liSavoir.appendChild(pInfos);
        }
    )
}

function ajouter() {
    var savoirInutile = new SavoirInutile(document.getElementById("libelleSavoir").value,
                                        document.getElementById("auteur").value,
                                        document.getElementById("date").valueAsDate);

    if (savoirInutile.toutEstSaisie()) {
        ajouterSavoir(savoirInutile);
        afficherSavoirs();
        initialiserFormulaire();
    }
    else {
        alert("Tous les champs sont obligatoires");
    }
}

function supprimer(event)
{
    var index = event.currentTarget.id;
    if(confirm(`Voulez-vous supprimer le savoir "${savoirsInutiles[index].savoir}"?`))
    {
        supprimerSavoir(index);
        afficherSavoirs();
        initialiserFormulaire();
    }
}

function trier(type)
{
    trierSavoirs(type);
    afficherSavoirs();
}