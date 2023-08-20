console.log("test ts");

let esVerdad: boolean = true;
if (esVerdad) {
  console.log("es true");
} else {
  console.log("es falso");
}

let numero1: number = 1;
let numero2: number = 2;
let unNumeroRandom: boolean | null | undefined = true;

function numeros(
  numero1: number,
  numero2: number,
  unNumeroRandom: boolean
): void {
  if ((unNumeroRandom = true)) {
    console.log("unnumerorandom");
  }
  if (numero1 > numero2) console.log(" numero1mayorquenumero2test");
  if (numero1 == numero2) console.log("numero1y2soniguales");
  if (numero1 < numero2) console.log("numero1menorquenumero2");
}

numeros(numero1, numero2, unNumeroRandom);

let leDamosAlAny;

leDamosAlAny = "any no usarlo";
console.log(leDamosAlAny);
leDamosAlAny = 34543564;
console.log(leDamosAlAny);
