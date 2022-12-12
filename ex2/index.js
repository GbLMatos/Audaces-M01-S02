/*Utilizando estrutura condicional **exiba** a descrição da classificação da **idade** da pessoa de acordo com os dados abaixo:

Jovens - Indivíduos de até 15 anos;
Adultos - Indivíduos com idade entre 16 até 64 anos;
Idosos - Indivíduos de 65 anos em diante.

Utilize prompt para solicitar a idade e alert para exibir a classificação.*/

var idade = parseInt(prompt('Infome a idade:'))

if (idade >= 0 && idade <= 15) {
  alert('Jovens')
} else if (idade >= 16 && idade <= 64) {
  alert('Adultos')
} else if (idade >= 65) {
  alert('Idosos')
} else {
  alert('Valor inválido')
}
