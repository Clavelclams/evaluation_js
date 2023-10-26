document.getElementById('formulaire').addEventListener('submit', function(e) {
    e.preventDefault(); 
    var erreur;
    var nom = document.getElementById('nom');
    var prenom = document.getElementById('prenom');
    var dtn = document.getElementById('date_naissance');
    var cp = document.getElementById('code_postale');
    var email = document.getElementById('email');
    var checkbox = document.getElementById('accepter');

    if (!nom.value) {
        erreur = 'Veuillez renseigner votre nom';
    }
    if (!prenom.value) {
        erreur = 'Veuillez renseigner votre prenom';
    }
    if (!dtn.value) {
        erreur = 'Veuillez renseigner votre date de naissance';
    }
    // if (!cp.value) {
    //     erreur = 'Veuillez renseigner votre code postal';
    // }
    if (!email.value) {
        erreur = 'Veuillez renseigner votre email';
    }
    if (!checkbox.value) {
        erreur = 'Veuillez accepter le traitement informatique de ce formulaire';
    } 
    if (erreur) {
        e.preventDefault();
        document.getElementById('erreur').innerHTML = erreur;
        return false;
    }else {
        alert('Formulaire envoyé !');
    }
    console.log('Formulaire soumis !');
    // alert('Formulaire envoyé !');
});

