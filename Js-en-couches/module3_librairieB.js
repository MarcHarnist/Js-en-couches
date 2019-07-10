/*
function traitement() {
    document.write("<div>La librairie B a fait le traitement.</div>");
}

 */

var librairieB = (
    function (){
        var librairie = {};
        librairie.traitement = function () {
            document.write("Traitement librairie B");
        };
        return librairie;
    }
)();