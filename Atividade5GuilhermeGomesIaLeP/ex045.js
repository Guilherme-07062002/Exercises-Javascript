let inicio = parseInt(prompt('Informe qual número que a contagem começa:'))
let fim = parseInt(prompt('Informe qual o número que a contagem termina:'))
if (inicio == fim) {
    document.write(`A contagem começa e termina no mesmo número (${inicio}).`)
} else if (inicio < fim) {
    let incremento = parseInt(prompt('Informe o incremento:'))
    while (inicio <= fim) {
        document.write(` ${inicio} `)
        inicio += incremento
    }
    document.write('Acabou.')
} else {
    let incremento = parseInt(prompt('Informe o incremento:'))
    while (inicio >= fim) {
        document.write(` ${inicio} `)
        inicio -= incremento
    }
    document.write('Acabou.')
}

