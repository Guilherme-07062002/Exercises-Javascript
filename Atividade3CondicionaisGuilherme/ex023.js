let nome = prompt('Exercício 23 - Leia nome, sexo e valor das compras do cliente e calcule o preço com desconto sabendo que:\n - Homens ganham 5% de desconto.\n - Mulheres ganham 13% de desconto.\n\nInforme o seu nome:')
let sexo = prompt('Informe o sexo do usuário [F/M]:')
let valor = Number(prompt('Informe o valor total das compras:'))
if (sexo == 'M') {
    document.write(`O cliente ${nome}, do sexo masculino irá pagar um total de : R$${(valor - (valor * 0.05)).toFixed(2)}.`)
} else if (sexo == 'F') {
    document.write(`A cliente ${nome}, do sexo feminino, irá pagar um total de R$${(valor - (valor * 0.13)).toFixed(2)}.`)
} else {
    document.write('Valor Inválido.')
}