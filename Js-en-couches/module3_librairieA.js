/*
window.onload = function () {
  document.title = "Mon titre anonyme";
};

(function(param){
    alert('param : ' + param);
})("Hello");

function traitement() {
    document.write("<div>La librairie A a fait le traitement.</div>");
}
*/
var librairieA = (
    function (param){
        var librairie = {};
        librairie.traitement = function () {
            document.write("Traitement librairie A");
        };
        return librairie;
    }
)("toto");