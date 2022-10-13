let idades = [], somaIdades = 0, idade = 0, maiorVinteCinco = 0, maiorIdade = 0, posicaoMaiorIdade = 0
for (let i = 0; i < 5; i++) {
    idade = Number(prompt(`Insira a idade da ${i + 1}° pessoa: `))
    idades.push(idade)
    document.write(` | ${idades[i]} | `)
    if (idade > maiorIdade) {
        maiorIdade = idade
        posicaoMaiorIdade = i
    }
    somaIdades += idade
    if (idades[i] >= 25) {
        maiorVinteCinco++
    }
}
let mediaIdades = (somaIdades / 5).toFixed(1)
document.write(`<br>Dados<br>
Média das idades cadastradas: ${mediaIdades}<br>
Pessoas com mais de 25 anos: ${maiorVinteCinco}<br>
Maior idade cadastrada: ${maiorIdade} anos<br>
Posição em que a maior idade foi cadastrada: ${posicaoMaiorIdade}`)