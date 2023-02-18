let velocidade = Number(prompt('Exercício 17 - Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 km/h, exiba uma mensagem dizendo que o usuário foi multado, e o valor da multa, cobrando R$5 por cada km acima da velocidade permitida.\n\nInforme a velocidade do carro: '))
if (velocidade > 80) {
    multa = (velocidade - 80) * 5
    document.write(`Por viajar na velocidade de ${velocidade}km/h o motorista será multado.<br>O valor da multa será de R$${multa.toFixed(2)}.`)
} else {
    document.write(`Motorista viaja na velocidade de ${velocidade}km/h e não ultrapassou o limite de velocidade<br>Portanto, não será multado.`)
}