let cont = 1
let num = 0, quantPar = 0, quantImpar = 0
document.write(`Números informados:<br>`)
while (cont <= 6) {
    num = parseInt(prompt(`Insira o ${cont}° número:`))
    document.write(`/ ${num} `)
    if (num % 2 == 0) {
        quantPar++
    }
    else if (num % 2 != 0) {
        quantImpar++
    }
    cont++
}
document.write(`<br>Dados:<br>
Quant.Números impares: ${quantImpar}<br>
Quant.Números pares: ${quantPar}`)