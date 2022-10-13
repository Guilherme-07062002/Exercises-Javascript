let cont = 1
let sexo = ''
let idade = 0, quantHomem = 0, quantMulher = 0, somaIdade = 0, somaIdadeHomem = 0, mulherMais20 = 0
while (cont <= 5) {
    idade = parseInt(prompt(`Informe idade ${cont}° pessoa: `))
    if (idade > 0) {
        somaIdade += idade
        sexo = prompt(`Informe sexo ${cont}° pessoa [F/M]:`).toUpperCase()
        document.write(`Pessoa ${cont} = idade = ${idade} `)
        switch (sexo) {
            case 'M':
                document.write(`= sexo = ${sexo}<br>`)
                quantHomem++
                somaIdadeHomem += idade
                break
            case 'F':
                document.write(`= sexo = ${sexo}<br>`)
                if (idade > 20) {
                    mulherMais20++
                }
                quantMulher++
                break
            default:
                document.write(' = sexo = Inválido<br>')
                alert('Valor Inválido.')
                break
        }
        cont++
    } else {
        alert('Valor Inválido.')
    }
}
let media = somaIdade / 5
let mediaHomem = somaIdadeHomem / quantHomem
document.write(`<br>Dados<br>
Quant.Homens cadastrados: ${quantHomem}<br>
Quant.Mulheres cadastradas: ${quantMulher}<br>
Média de idade do grupo: ${media}<br>
Média da idade dos homens: ${mediaHomem}<br>
Quant.Mulheres com mais de 20 anos: ${mulherMais20}`)