let escolha = prompt('Escolha entre: Pedra, Papel ou Tesoura:').toUpperCase()
escolhaMaquina = parseInt(Math.random() * 2)
if (escolhaMaquina == 0) {
    escolhaMaquina = 'PEDRA'
} else if (escolhaMaquina == 1) {
    escolhaMaquina = 'TESOURA'
} else {
    escolhaMaquina = 'PAPEL'
}
document.write(`Escolha do jogador ${escolha}<br>
Escolha do computador: ${escolhaMaquina}<br>Resultado: `)
switch (escolha) {
    case 'TESOURA':
        if (escolhaMaquina == 'PEDRA') {
            document.write('Pedra vence Tesoura<br>Jogador Perdeu')

        } else if (escolhaMaquina == 'PAPEL') {
            document.write('Tesoura vence Papel<br>Jogador Venceu')
        } else {
            document.write('<br>Empate.')
        }
        break
    case 'PEDRA':
        if (escolhaMaquina == 'PAPEL') {
            document.write('Papel vence Pedra<br>Jogador Perdeu')
        } else if (escolhaMaquina == 'TESOURA') {
            document.write('Pedra vence Tesoura<br>Jogador Venceu')
        } else {
            document.write('<br>Empate.')
        }
        break
    case 'PAPEL':
        if (escolhaMaquina == 'TESOURA') {
            document.write('Tesoura vence Papel<br>Jogador Perdeu')
        } else if (escolhaMaquina == 'PEDRA') {
            document.write('Papel vence Pedra<br>Jogador Venceu')
        } else {
            document.write('<br>Empate.')
        }
        break
    default:
        document.write('Algum valor informado é inválido.')
}