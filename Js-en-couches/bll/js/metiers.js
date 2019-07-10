
/////////////////////////////////////////////////////////////////////////////
//PARTIE METIER//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

class SavoirInutile{
    constructor(savoir, auteur, dateSaisie){
        this.savoir = savoir || "";
        this.auteur = auteur || "";
        this.dateSaisie = dateSaisie || new Date();
    }

    toutEstSaisie() {
        return this.savoir!="" && this.auteur!="" && this.dateSaisie!=""
            && this.dateSaisie != null;
    }

    informations(){
        var jour = this.dateSaisie.getDate().toString().padStart(2, "0");
        var mois = (this.dateSaisie.getMonth() + 1).toString().padStart(2, "0");
        var annee = this.dateSaisie.getFullYear();
        return `Par ${this.auteur}, le ${jour}/${mois}/${annee}`;
    }
}
