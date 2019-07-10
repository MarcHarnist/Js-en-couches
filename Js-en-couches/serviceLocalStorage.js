var service = (
    function(bo)
    {
        var service={};
        var cleSavoirsInutiles="savoirsInutiles";
        var savoirsInutiles;

        (function()
        {
            //Si le JSON.parse renvoi null alors on crée un tableau vide []
            savoirsInutiles = JSON.parse(localStorage.getItem(cleSavoirsInutiles)) || [];
            savoirsInutiles.forEach(value => {Object.setPrototypeOf(value,bo.SavoirInutile.prototype);
                                              value.dateSaisie=new Date(value.dateSaisie)});
            savoirsInutiles.forEach(value => {console.log(value)});

        })();

        service.ajouterSavoir = function(savoir,auteur,dateSaisie)
        {
            var savoirAAjouter = new bo.SavoirInutile(savoir, auteur, dateSaisie);
            if(savoirAAjouter.toutEstSaisie()) {
                savoirsInutiles.push(savoirAAjouter);
                service.trierSavoirs('da_az_ra');
                service.persister();
                return true;
            }
            return false;
        }

        service.supprimerSavoir = function(index)
        {
            savoirsInutiles.splice(index,1);
            service.persister();
        }

        service.trierSavoirs = function(type)
        {
            switch (type) {
                case 'a_az':
                    //Tri par auteur - A=>Z
                    savoirsInutiles.sort((siA,siB)=>siA.auteur.localeCompare(siB.auteur));
                    break;
                case 'a_za':
                    //Tri par auteur - Z=>A
                    savoirsInutiles.sort((siA,siB)=>siB.auteur.localeCompare(siA.auteur));
                    break;
                case 'd_ra':
                    //Tri par date - Récent=>Ancien
                    savoirsInutiles.sort((siA,siB)=>siB.dateSaisie-siA.dateSaisie);
                    break;
                case 'd_ar':
                    //Tri par date - Ancien=>Récent
                    savoirsInutiles.sort((siA,siB)=>siA.dateSaisie-siB.dateSaisie);
                    break;
                case 'da_az_ra' :

                    savoirsInutiles.sort(function (siA,siB){
                        //Auteur identique
                        if(siA.auteur.localeCompare(siB.auteur) == 0)
                        {
                            //test des dates
                            return siB.dateSaisie-siA.dateSaisie;
                        }
                        else
                        {
                            //test des auteurs
                            return siA.auteur.localeCompare(siB.auteur);
                        }

                    });
                    break;
                default:
                    break;
            };
        }

        service.getSavoirsInutiles = function()
        {
            return savoirsInutiles;
        }

        service.getSavoirDefaut = function()
        {
            return new bo.SavoirInutile("","",new Date());
        }

        service.persister = function()
        {
            localStorage.setItem(cleSavoirsInutiles,JSON.stringify(savoirsInutiles));
        }


        return service;
    }
)(bo);