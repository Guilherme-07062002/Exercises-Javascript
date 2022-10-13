let idade = 0, contador = 1, quantAlunos = 0, somatorioIdades = 0
while (idade != 999) {
    idade = parseInt(prompt(`(Digite 999 pra parar)\nInsira idade do aluno ${contador}:`))
    if (idade != 999) {
        document.write(`Aluno ${contador} - ${idade} anos<br>`)
        somatorioIdades += idade
        quantAlunos++
        contador++
    } else {
        break
    }
}
let media = somatorioIdades / quantAlunos
document.write(`<br>Dados:<br>
Quant.de alunos: ${quantAlunos}<br>
Média das idades: ${media.toFixed(1)}`)