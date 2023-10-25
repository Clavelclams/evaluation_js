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
if (TOT <= 500) {
    PORT = Math.max(6, TOT * 2%);
}
var PAP = TOT - REM + PORT;
console.log("Prix unitaire : " + PU + " euros");
console.log("Quantité commandée : " + QTECOM);
console.log("Total avant remise et frais de port : " + TOT + " euros");
console.log("Remise : " + REM + " euros");
console.log("Frais de port : " + PORT + " euros");
console.log("Prix à payer : " + PAP + " euros");