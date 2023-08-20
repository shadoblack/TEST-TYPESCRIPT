"use strict";
console.log("test ts");
let esVerdad = true;
if (esVerdad) {
    console.log("es true");
}
else {
    console.log("es falso");
}
let numero1 = 1;
let numero2 = 2;
let unNumeroRandom = true;
function numeros(numero1, numero2, unNumeroRandom) {
    if ((unNumeroRandom = true)) {
        console.log("unnumerorandom");
    }
    if (numero1 > numero2)
        console.log(" numero1mayorquenumero2test");
    if (numero1 == numero2)
        console.log("numero1y2soniguales");
    if (numero1 < numero2)
        console.log("numero1menorquenumero2");
}
numeros(numero1, numero2, unNumeroRandom);
let leDamosAlAny;
leDamosAlAny = "any no usarlo";
console.log(leDamosAlAny);
leDamosAlAny = 34543564;
console.log(leDamosAlAny);
