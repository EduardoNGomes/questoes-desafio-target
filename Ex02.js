/*
 2. Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

 IMPORTANTE:

 Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
 
*/
const readline = require('readline')

const entry = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const verifyIfIsIncludeOnFibonacci = numberToVerify => {
  let fibonacci = [1, 1]

  for (let i = 2; i <= numberToVerify; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
  }
  fibonacci.unshift(0)

  const numberIsIncluded = fibonacci.findIndex(
    value => value === Number(numberToVerify)
  )
  if (numberIsIncluded > -1) {
    return true
  } else {
    return false
  }
}

entry.question(
  'Escreva um numero para verificar se ele faz parte da sequencia de fibonacci: ',
  numberToVerify => {
    console.log(
      `O numero digitado esta na sequencia de fibonacci? ${
        verifyIfIsIncludeOnFibonacci(numberToVerify) ? 'Sim' : 'Nao'
      }`
    )
    entry.close()
  }
)
