var PU = parseFloat(prompt('Saisissez le prix unitaire du produit (en euro) '));
var QTECOM = parseInt(prompt('Saisissez la quantité commandée : '));
var TOT = PU * QTECOM;
var REM = 0;
var PORT = 0;
if (TOT >= 100 && TOT <= 200){
    REM = TOT * 5% ;
} else if (TOT > 200) {
    REM = TOT * 10% ;
}
var PAP = TOT - REM + PORT;