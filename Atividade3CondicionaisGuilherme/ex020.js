let num = parseInt(prompt('Exercício 20 - Leia um número inteiro e mostre se ele é PAR ou IMPAR.\n\nDigite um número inteiro:'))
if (num % 2 == 0) {
    document.write(`O número ${num} é PAR.`)
} else {
    document.write(`O número ${num} é IMPAR.`)
}