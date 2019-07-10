
/////////////////////////////////////////////////////////////////////////////
//PARTIE SERVICE/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

var savoirsInutiles = [];

function ajouterSavoir(savoirAAjouter)
{
    savoirsInutiles.push(savoirAAjouter);
    //Tri par defaut
    trierSavoirs('da_az_ra');
}

function supprimerSavoir(index)
{
    savoirsInutiles.splice(index,1);
}

function trierSavoirs(type)
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