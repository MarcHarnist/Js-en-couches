

var librairieClosure = (function(){
    var libraire = {};

    libraire.enregistrer = function (cible) {
        switch (cible.toLowerCase()) {
            case 'memoire' :
                return function(data){
                   console.log("J'enregistre en mémoire : " + data);
                };
                break;
            case 'localstorage' :
                return function(data){
                    console.log("J'enregistre en localStorage : " + data);
                };
                break;
            case 'rest' :
                return function(data){
                    console.log("J'enregistre en rest : " + data);
                };
                break;

        }
    }

    return libraire;
})();

librairieClosure.enregistrerData = librairieClosure.enregistrer("rest");

librairieClosure.enregistrerData("mes datas");

librairieClosure.enregistrerData = librairieClosure.enregistrer("memoire");

librairieClosure.enregistrerData("mes datas");

