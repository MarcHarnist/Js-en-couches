/**
 *  ENI School - France - Niort
 *  2019-07-10
 */

/** Contains all classes of this project **/
var bo = (function(){

    var libBo = {};

    libBo.SavoirUtile = class {
    
        chargementTermine()
        {
            var btn = document.querySelector("#divSaisie button");
            btn.addEventListener('click', ajouter);
            initForm();
        }

	    toutEstSaisie(savoir, auteur, dateSaisie) {
	        return savoir!="" && auteur!="" && dateSaisie!="" && dateSaisie != null;
	    }
	
	    ajouter()
	    {
	        var savoir = document.getElementById("libelleSavoir").value;
	        var auteur = document.getElementById("auteur").value;
	
	        //Si la date n'est pas valide, renvoi null
	        var dateSaisie = document.getElementById("date").valueAsDate;
	
	        if(toutEstSaisie(savoir, auteur, dateSaisie)) {
	
	            console.log(dateSaisie.toLocaleDateString());
	
	            var jour = dateSaisie.getDate().toString().padStart(2, "0");
	            var mois = (dateSaisie.getMonth() + 1).toString().padStart(2, "0");
	            var annee = dateSaisie.getFullYear();
	
	            var liSavoir = document.createElement("li");
	            var pSavoir = document.createElement("p");
	            var pInfos = document.createElement("p");
	
	
	            pSavoir.innerText = savoir;
	            //ci-dessous 3 façon de gérer un string ``, "", ''
	            pInfos.innerText = `Par ${auteur}, le ${jour}/${mois}/${annee}`;
	            pSavoir.className = "savoir";
	            pInfos.className = 'infos';
	            liSavoir.addEventListener("click", supprimer);
	
	            var olSavoir = document.getElementById("olListeSavoir");
	            olSavoir.appendChild(liSavoir);
	            liSavoir.appendChild(pSavoir);
	            liSavoir.appendChild(pInfos);
	
	            initForm();
	        }
	        else {
	            alert("Tous les champs sont obligatoires");
	        }
	        document.getElementById("libelleSavoir").focus();
	    }
	
	    supprimer(event)
	    {
	        var savoir = event.currentTarget.getElementsByTagName("p")[0].innerText
	        if(confirm(`Voulez-vous supprimer le savoir "${savoir}"?`))
	        {
	            //event.currentTarget => <li> cliquer
	            //event.currentTarget.parentNode => renvoi le <ol>
	            //event.currentTarget.parentNode.removeChild => <ol>.removeChild(<li>)
	            event.currentTarget.parentNode.removeChild(event.currentTarget);
	        }
	    }
	
	    initForm(){
	        document.getElementById("libelleSavoir").value = "";
	        document.getElementById("auteur").value = "";
	        document.getElementById("date").valueAsDate = new Date();
	        document.getElementById("libelleSavoir").focus();
	    }
    }
    libBo.AutreClass1 = class {
		afficher(){
			console.log('Console.log de la classe "AutreClasse1"');
		}
	}
	libBo.AutreClass2 = class {
    	afficher()
		{
    		console.log('Console.log de la classe "AutreClasse2"');
		}
    }
    libBo.AutreClass3 = class {
    	afficher(){
    		console.log('Console.log de la classe "AutreClasse3"');
    	}
    }

    return libBo;
})
(); // () means: execute