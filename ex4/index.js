/*Utilizando estrutura de repetição, some os números digitados através do prompt enquanto o número for diferente de -1, quando digitado -1 pare de exibir o prompt e exiba através de um alert o resultado da soma dos números digitados.*/

var soma = 0

do {
  var numero = prompt('Digite um número')

  if (numero === null) {
    break
  }

  numero = parseInt(numero)

  if (isNaN(numero) || numero === -1) {
    continue
  }

  soma += numero
} while (numero !== -1)

alert(soma)
