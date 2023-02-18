let maiorIdade = 0, mulherMaisJovem = 0, contador = 1, resp = '', quantHomens = 0, somaIdadeHomens = 0, quantMulheres = 1
while (resp != 'N') {
    idade = Number(prompt(`Informe a idade:`))
    sexo = prompt('Informe o sexo:').toUpperCase()
    document.write(`Pessoa ${contador} = Idade: ${idade}, sexo: ${sexo}<br>`)
    if (idade > maiorIdade) {
        maiorIdade = idade
    }
    switch (sexo) {
        case 'F':
            if (quantMulheres == 1) {
                mulherMaisJovem = idade
                quantMulheres++
            }
            if (idade < mulherMaisJovem) {
                mulherMaisJovem = idade
            }
            break
        case 'M':
            somaIdadeHomens += idade
            quantHomens++
            break
    }
    resp = prompt('Deseja continuar?[S/N]:').toUpperCase()
    contador++
    if (resp == 'N') {
        break
    }
}
let mediaIdadeHomens = somaIdadeHomens / quantHomens
document.write(`<br>Dados:<br>
Maior idade Lida: ${maiorIdade} anos<br>
Quant.de Homens cadastrados: ${quantHomens}<br>
Idade da mulher mais jovem: ${mulherMaisJovem} anos<br>
Média da idade entre os homens: ${mediaIdadeHomens.toFixed(1)}`)