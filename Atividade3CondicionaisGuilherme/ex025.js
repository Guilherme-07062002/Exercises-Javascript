let seg1 = Number(prompt('Exercício 25 - [DESAFIO] Leia o tamanho de três segmentos de reta analise seus comprimentos e diga se é possivel formar um triangulo.\nPara isso o comprimento de cada lado deve ser menor que a soma dos outros dois.\n\nInforme o comprimento do primeiro segmento de reta:'))
let seg2 = Number(prompt('Informe o comprimento do segundo segmento de reta:'))
let seg3 = Number(prompt('Informe o comprimento do terceiro segmento de reta:'))
if ((seg1 < (seg2 + seg3) && seg2 < (seg1 + seg3) && seg3 < (seg1 + seg2))) {
    document.write(`Com as medidas (${seg1}, ${seg2} e ${seg3}) é possivel formar um triângulo.`)
} else {
    document.write(`Com as medidas (${seg1}, ${seg2} e ${seg3}) NÃO é possivel formar um triângulo.`)
}