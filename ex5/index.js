/*Exiba um prompt solicitando a entrada de um número para saber quantos pares e impares existem de 0 até o número digitado.
Calcule o número de pares e impares e exiba o resultado utilizando um alert.*/

var numero = parseInt(prompt('Digite um número:'))

if (isNaN(numero)) {
  alert('Número inválido')
} else {
  var pares = 0
  var impares = 0
  for (var i = 0; i <= numero; i++) {
    if (i % 2 === 0) {
      pares += 1
    } else {
      impares += 1
    }
  }

  alert('Existem ' + pares + ' números pares e ' + impares + ' números ímpares')
}
