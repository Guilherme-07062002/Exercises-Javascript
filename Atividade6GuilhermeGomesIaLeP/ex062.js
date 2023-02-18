let idade = 0, resp = 0, quantIdades = 0, somaIdades = 0, quantMaisVinteUm = 0
while (resp != 'N') {
    idade = parseInt(prompt(`Informe ${quantIdades + 1}° idade: `))
    if (idade > 0) {
        document.write(`Pessoa ${quantIdades + 1} - idade: ${idade} anos<br>`)
        if (idade > 21) {
            quantMaisVinteUm++
        }
        somaIdades += idade
        quantIdades++
        resp = prompt('Você deseja continuar?[S/N]').toUpperCase()
    } else {
        alert('Valor Inválido.')
    }
}
let media = somaIdades / quantIdades
document.write(`<br>Dados:<br>
Quant.idades digitadas: ${quantIdades}<br>
Média das idades: ${media.toFixed(1)}<br>
Quant.pessoas com mais de 21: ${quantMaisVinteUm}`)