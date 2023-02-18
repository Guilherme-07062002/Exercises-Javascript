let seg1 = Number(prompt('Informe o tamanho do primeiro segmento:'))
let seg2 = Number(prompt('Informe o tamanho do segundo segmento:'))
let seg3 = Number(prompt('Informe o tamanho do terceiro segmento:'))

if (seg1 < (seg2 + seg3) && seg2 < (seg1 + seg3) && seg3 < (seg2 + seg1)) {
    document.write(`É possivel formar um triângulo com essas dimensões (${seg1}, ${seg2}, ${seg3})`)
} else if (seg1 == 0 || seg2 == 0 || seg3 == 0) {
    document.write('Os valores dos segmentos precisam ser maiores do que zero.')
} else {
    document.write(`Não é possível formar um triângulo com essas dimensões (${seg1}, ${seg2}, ${seg3})`)
}
