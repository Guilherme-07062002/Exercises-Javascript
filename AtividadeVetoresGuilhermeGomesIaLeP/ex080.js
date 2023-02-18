let vetor = [], quantElementoSorteado = 0, posicoesChave = []
for (let i = 0; i < 10; i++) {
    vetor.push(Math.floor(Math.random() * 15 + 1))
}
let chave = Number(prompt('Insira um número: '))
if (vetor.includes(chave) == true) {
    for (let i = 0; i < 10; i++) {
        document.write(` | ${vetor[i]} | `)
        if (vetor[i] == chave) {
            posicoesChave.push(i)
            quantElementoSorteado++
        }
    }
    document.write(`<br>O número ${chave} foi encontrado nas posições: ${posicoesChave} <br>E foi sorteado ${quantElementoSorteado} vez(es).`)
} else {
    document.write(`O número ${chave} não foi sorteado.`)
}
