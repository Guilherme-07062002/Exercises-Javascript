let cont = 6
let soma = 0
while (cont < 15) {
    cont == 6 ? document.write(`${cont} `) :
        document.write(`+ ${cont} `)
    soma += cont
    cont += 2
}
document.write(`= ${soma}.`)