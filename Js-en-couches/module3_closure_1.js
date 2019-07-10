
var afficher  = function (avecDetail) {
  return function (separateur) {

      if(avecDetail){
          console.log("Detail "+ "prefixe "+ separateur + " mon contenu");
      }
      else{
          console.log("prefixe "+ separateur + " mon contenu");
      }

  };
};

var afficherDetail = afficher(true);
var afficherSansDetail = afficher(false);

console.log(typeof  afficherDetail);

afficherDetail("|");
afficherSansDetail("+");