let cont = 500
let soma = 0
while (cont >= 0) {
    cont == 500 ? document.write(`${cont} `) :
        document.write(`+ ${cont} `)
    soma += cont
    cont -= 50
}
document.write(`= ${soma}`)