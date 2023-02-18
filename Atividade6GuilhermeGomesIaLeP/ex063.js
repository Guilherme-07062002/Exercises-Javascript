let num = 0, resp = 0, contador = 1, somatorio = 0, menorValor = 0, quantPar = 0, quantImpar = 0
while (resp != 'N') {
    num = parseInt(prompt('Insira número:'))
    somatorio += num
    if (num % 2 == 0) {
        quantPar++
    } else {
        quantImpar++
    }
    if (contador == 1) {
        menorValor = num
        document.write(`${num} `)
    } else {
        document.write(`+ ${num} `)
    }
    if (num < menorValor) {
        menorValor = num
    }
    resp = prompt('Você deseja continuar?').toUpperCase()
    contador++
}
let media = somatorio / (contador - 1)
document.write(` = ${somatorio}<br>
Menor valor: ${menorValor}<br>
Média dos valores: ${media.toFixed(1)}<br>
Quant. números pares: ${quantPar}<br>
Quant. números impares: ${quantImpar}`)