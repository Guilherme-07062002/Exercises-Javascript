let cont = 1
let num = 0, soma = 0
while (cont <= 7) {
    num = parseInt(prompt(`Insira o ${cont}° número:`))
    cont == 7 ? document.write(` ${num} `) : document.write(` ${num} +`)
    soma += num
    cont++
}
document.write(`= ${soma}`)