var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane", " "];
var pR = prompt('Entrez le prénom à rechercher (attention au majuscule):');

function searchAndDeleteName(prenom, tableau) {
    var index = tableau.indexOf(prenom);
    if (index !== -1) {
        tableau.splice(index, 1);
        tableau[tableau.length - 1] = " ";
        alert('Prénom trouvé et supprimé !');
        console.log('Prénom trouvé et supprimé !');
    } else {
        alert('Prénom non trouvé ! Donc aucune suppression.');
        console.log('Prénom non trouvé. Donc aucune suppression.');
    }
}

searchAndDeleteName(pR, tab);
