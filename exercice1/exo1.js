var age ;
var jeunes = 0;
var moyens = 0;
var vieux = 0;
var centenaires = 0;
while (true) {
    age = parseInt (prompt('Entrer un âge :'));
    if (age === 0) {
        break
    }  else if (age >= 1 && age < 20) {
        jeunes++
    }  else if (age >= 20 && age <= 40) {
        moyens++
    }  else if (age > 40 && age < 100) {
        vieux++
    }  else if (age >= 100) {
        centenaires++
    }
}
alert('Nombre de jeunes : '+jeunes);
alert('Nombre de moyens : '+moyens);
alert('Nombre de vieux : '+vieux);
// les alertes  s'affichent pas mais le calcul se fait dans console
alert('Nombre de centenaire : '+centenaires);
console.log('Nombre de jeunes : '+jeunes);
console.log('Nombre de moyens : '+moyens);
console.log('Nombre de vieux : '+vieux);
console.log('Nombre de centenaire : '+centenaires);
