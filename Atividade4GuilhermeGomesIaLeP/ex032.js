let resposta = parseInt(prompt('-----Jogo de Advinhação-----\nInforme um número entre 1 a 5:'))
let valorSorteado = parseInt(Math.random() * 5) + 1
if (resposta > 0 && resposta <= 5) {
    document.writeln(`Jogador escolheu ${resposta}<br>Valor sorteado: ${valorSorteado}<br>`)
    resposta == valorSorteado ? document.write('Usuário acertou') : document.write('Usuário errou')
} else {
    document.write('Valor Inválido.')
}
