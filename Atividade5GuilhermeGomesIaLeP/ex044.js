let inicio = parseInt(prompt('Informe qual o inicio da contagem:'))
let fim = parseInt(prompt('Informe qual será o ultimo número da contagem:'))
let incremento = parseInt(prompt('Informe qual o incremento:'))
while (inicio <= fim) {
    document.write(` ${inicio} `)
    inicio += incremento
}
document.write('Acabou.')