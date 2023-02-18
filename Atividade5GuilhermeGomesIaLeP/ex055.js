let numeroMaquina = parseInt(Math.random() * 10 + 1)
let escolha = 0
let cont = 1
while (cont <= 4) {
    escolha = parseInt(prompt(`Tentativa ${cont}/4
Tente advinhar o número de 1 a 5`))
    if (escolha > 0 && escolha <= 10) {
        if (escolha == numeroMaquina) {
            alert(`Você escolheu: ${escolha}
Você acertou!`)
            break
        } else {
            alert(`Você escolheu: ${escolha}
Você errou.`)
        }
        cont++
        if (cont == 5) {
            alert(`O número sorteado foi ${numeroMaquina}`)
        }
    } else {
        alert('Valor Inválido.')
    }
}
alert('Fim de Jogo.')
