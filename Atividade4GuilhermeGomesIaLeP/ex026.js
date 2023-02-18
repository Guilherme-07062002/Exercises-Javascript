let n1 = parseInt(prompt('Informe um número inteiro:'))
let n2 = parseInt(prompt('Informe outro número inteiro:'))
if (n1 > n2) {
    document.write(`O número ${n1} é maior que ${n2}`)
} else if (n1 < n2) {
    document.write(`O número ${n1} é menor que ${n2}`)
} else if (n1 == n2) {
    document.write(`O número ${n1} é igual á ${n2}`)
} else {
    document.write('Algum valor informado é inválido.')
}