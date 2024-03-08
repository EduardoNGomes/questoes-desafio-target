/*
 5. Escreva um programa que inverta os caracteres de um string.

 IMPORTANTE:

 a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

 b) Evite usar funções prontas, como, por exemplo, reverse;

*/

const readline = require('readline')

const entry = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const reverseWord = word => {
  let reversedWord = []
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord.push(word[i])
  }
  reversedWord = reversedWord.join(',').replaceAll(',', '')
  return reversedWord
}

entry.question(
  'Escreve uma palavra para ser exibida de tras para frente:',
  word => {
    console.log(`Sua palavra de tras para frente fica: ${reverseWord(word)}`)
    entry.close()
  }
)
