let idade = 0, maior = 0, somatorio = 0, maisDezoito = 0, menosCinco = 0
let contador = 1
do {
    idade = parseInt(prompt(`Digite a idade da ${contador}° pessoa em anos:`))
    if (idade > 0) {
        document.write(`Pessoa ${contador}: ${idade} ano(s)<br>`)
        if (idade > maior) {
            maior = idade
        }
        if (idade > 18) {
            maisDezoito++
        }
        if (idade < 5) {
            menosCinco++
        }
        somatorio += idade
        contador++
    } else {
        alert('Valor Inválido.')
    }
} while (contador <= 10)
let media = somatorio / 10
document.write(`<br>Dados:<br>
Média da idade do grupo: ${media}<br>
Quant.de pessoas 18: ${maisDezoito}<br>
Quant.de pessoas <5: ${menosCinco}<br>
Maior idade lida: ${maior}`)