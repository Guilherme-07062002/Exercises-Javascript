let distancia = Number(prompt('Informe a distância que deseja percorrer:'))
if (distancia > 0 && distancia <= 200) {
    let preco = distancia * 0.50
    document.write(`A distância que se deseja percorrer é de ${distancia}km<br>
    Tendo em vista que até 200km é cobrado 50 centavos por km<br>
    O preço a se pagar será de: R$ ${preco.toFixed(2)}`)
} else if (distancia > 200) {
    let preco = distancia * 0.45
    document.write(`A distância que se deseja percorrer é de ${distancia}km<br>
    Tendo em vista que a distância é maior que 200km, serão cobrados 45 centavos por km<br>
    O preço a se pagar será de: R$ ${preco.toFixed(2)}`)
}else{
    document.write('Valor Inválido.')
}
