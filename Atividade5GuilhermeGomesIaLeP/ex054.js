let cont = 1, somaAltura = 0, maiorNoventaKg = 0, menosCinquentaUmSessenta = 0, maisUmeNoventaCem = 0, peso = 0, altura = 0
while (cont <= 3) {
    altura = Number(prompt(`Informe altura ${cont}° pessoa:`))
    if (altura > 0) {
        peso = Number(prompt(`Informe peso ${cont}° pessoa:`))
        if (peso > 0) {
            somaAltura += altura
            document.write(`Pessoa ${cont} = Peso: ${peso.toFixed(2)}Kg / Altura: ${altura.toFixed(2)}m<br>`)
            if (peso > 100 && altura > 1.90) {
                maisUmeNoventaCem++
            }
            if (peso > 90) {
                maiorNoventaKg++
            }
            if (peso < 50 && altura < 1.60) {
                menosCinquentaUmSessenta++
            }
            cont++
        } else {
            alert('Valor Inválido.')
        }
    } else {
        alert('Valor Inválido.')
    }
}
let media = somaAltura / 3
document.write(`<br>Dados<br>
Média da altura do grupo: ${media.toFixed(1)}<br>
Quant.Pessoas pesam mais que 90Kg: ${maiorNoventaKg}<br>
Quant.Pessoas pesam menos que 50Kg e tem menos que 1.60m: ${menosCinquentaUmSessenta}<br>
Quant.Pessoas pesam mais que 100Kg e tem mais que 1.90: ${maisUmeNoventaCem}`)