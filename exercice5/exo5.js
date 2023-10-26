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
        erreur = 'Vuillez renseigner votre nom'
    } 
    if (erreur) {
        e.preventDefault();
        document.getElementById('erreur').innerHTML = erreur;
    }else {
        alert('Formulaire envoyé !');
    }
    console.log('Formulaire soumis !');
    // alert('Formulaire envoyé !');
});

