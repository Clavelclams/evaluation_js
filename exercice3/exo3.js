var tab =  ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane", " "];
var pR = prompt('entrez le prénom à rechercher :');
function searchanddeletename(prenom,tableau){
    var index = 
    tableau.indexof(prenom)
}if (index !== -1) {
    tableau.splice(index, 1); 
    console.log("Prénom trouvé et supprimé !");
} else {
    console.log("Prénom non trouvé. Aucune suppression.");
}

searchanddeletename(pR,tab);