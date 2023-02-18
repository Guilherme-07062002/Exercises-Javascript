let sexo = ''
let peso = 0, quantMulheres = 0, homemMaisCem = 0, somaPesoMulheres = 0, maiorPesoHomem = 0
for (let i = 1; i <= 8; i++) {
    sexo = prompt(`Insira o sexo da pessoa ${i} [M/F]:`).toUpperCase()
    peso = Number(prompt(`Insira o peso da pessoa ${i} (Kg):`))
    if (sexo == 'M' || sexo == 'F') {
        if (peso < 0) {
            peso = '(Inválido)'
        }
        document.write(`Pessoa ${i} = sexo: ${sexo} / peso: ${peso}<br>`)
        switch (sexo) {
            case 'M':
                if (peso > 100) {
                    homemMaisCem++
                }
                if (peso > maiorPesoHomem) {
                    maiorPesoHomem = peso
                }
                break
            case 'F':
                somaPesoMulheres += peso
                quantMulheres += 1
                break
        }
    } else {
        alert('Valor Inválido.')
        i--
    }
}
let mediaPesoMulheres = somaPesoMulheres / quantMulheres
document.write(`<br>DADOS<br>
Quant.de Mulheres cadastradas: ${quantMulheres}<br>
Quant.de homens com mais de 100kg: ${homemMaisCem}<br>
Média do peso entre as mulheres: ${mediaPesoMulheres.toFixed(1)}<br>
Maior peso entre os homens: ${maiorPesoHomem}Kg`)