let seg1 = Number(prompt('Informe o valor do primeiro segmento de reta:'))
let seg2 = Number(prompt('Informe o valor do segundo segmento de reta:'))
let seg3 = Number(prompt('Informe o valor do terceiro segmento de reta:'))
if (seg1 > 0 && seg2 > 0 && seg3 > 0) {
    if (seg1 < (seg2 + seg3) && seg2 < (seg1 + seg3) && (seg3 < (seg1 + seg2))) {
        document.write(`É possivel formar um triângulo com as dimensões (${seg1}, ${seg2}, ${seg3})<br>`)
        if (seg1 == seg2 && seg3 == seg2) {
            document.write('Se trata de uma triângulo EQUILATERO.')
        } else if (seg1 == seg2 || seg2 == seg3 || seg3 == seg1) {
            document.write('Se trata de uma triângulo ISÓSCELES.')
        } else {
            document.write('Se trata de uma triângulo ESCALENO.')
        }
    } else {
        document.write(`NÃO é possivel formar um triângulo com as dimensões (${seg1}, ${seg2}, ${seg3})`)
    }
} else {
    document.write('Algum valor informado é inválido.')
}
