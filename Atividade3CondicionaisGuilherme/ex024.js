let distancia = Number(prompt('Exercício 24 - Pergunte a distância que um passageiro deseja percorrer em km. Calcule o preço da passagem cobrando R$0,50 por km para viagens até 200km e R$0,45 para viagens mais longas.\n\nInforme a distância que o passageiro deseja percorrer em Km:'))
if (distancia <= 200) {
    document.write(`Percorrendo ${distancia}km...<br>O usuário terá que pagar um total de R$${(distancia * 0.50).toFixed(2)}.`)
} else {
    document.write(`Percorrendo ${distancia}km...<br>O usuário terá que pagar um total de R$${(distancia * 0.45).toFixed(2)}.`)
}