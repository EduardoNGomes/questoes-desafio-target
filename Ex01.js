/*
1. Observe o trecho de código abaixo:

 int INDICE = 13, SOMA = 0, K = 0;

 enquanto K < INDICE faça

 {

 K = K + 1;

 SOMA = SOMA + K;

 }
  imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?
*/

let s = 0
let k = 0

for (let i = 13; k < i; ) {
  k = k + 1
  s = s + k
}
console.log(s)

/*  RESPOSTA -> 91 */
