let n = 0, resp = 0, soma = 0
document.write('<br>')
while (resp != 1111) {
    resp = parseInt(prompt('Somar vários números\nDigite 1111 pra parar.\nInsira um número:'))
    if (resp != 1111) {
        soma += resp
        document.write(`${resp} + `)
    } else {
        document.write(` 0`)
        break
    }
}
document.write(` = ${soma}`)