function tableMultiplication(nombre){
    for (var i = 1; i <= 10; i++) {
        var resultat = i * nombre;
        alert(i+' x '+nombre+' = '+resultat);
        console.log(i+' x '+nombre+' = '+resultat);
    }
}
tableMultiplication(7);