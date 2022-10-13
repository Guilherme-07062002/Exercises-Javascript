let nome = 0, idade = 0, sexo = 0, contador = 1, resp = 0, nomeMaisVelha = 0, nomeMulherMaisJovem = 0, IdademulherMaisJovem = 0, maisVelha = 0, somaIdades = 0, homensMaisTrinta = 0, mulheresMenosDezoito = 0, quantMulheres = 1
while (resp != 'N') {
    nome = prompt(`Ìnsira o nome da ${contador}° pessoa:`)
    idade = parseInt(prompt(`Ìnsira a idade da ${contador}° pessoa:`))
    if (idade > 0) {
        somaIdades += idade
        document.write(`Pessoa ${contador}/nome: ${nome}/idade:${idade}/sexo:${sexo}<br>`)
        if (idade > maisVelha) {
            maisVelha = idade
            nomeMaisVelha = nome
        }
        sexo = prompt(`Ìnsira o sexo da ${contador} pessoa:`).toUpperCase()
        switch (sexo) {
            case 'M':
                if (idade > 30) {
                    homensMaisTrinta++
                }
                break
            case 'F':
                if (quantMulheres == 1) {
                    IdademulherMaisJovem = idade
                    nomeMulherMaisJovem = nome
                } else {
                    if (idade < IdademulherMaisJovem) {
                        nomeMulherMaisJovem = nome
                    }
                }
                if (idade < 18) {
                    mulheresMenosDezoito++
                }
                break
        }
        resp = prompt('Deseja continuar?[S/N]:').toUpperCase()
        if (resp == 'N') {
            break
        }
        contador++
    } else {
        alert('Valor Inválido.')
    }
}
let mediaIdades = somaIdades / (contador)
document.write(`<br>Dados:<br>
Nome da pessoa mais velha: ${nomeMaisVelha}<br>
Nome da mulher mais jovem: ${nomeMulherMaisJovem}<br>
Média da idade do grupo: ${mediaIdades.toFixed(1)}<br>
Quant.homens com mais de 30 anos: ${homensMaisTrinta}<br>
Quant.mulheres com menos de 18 anos: ${mulheresMenosDezoito}`)