let cont = 1
let preco = 0, maior = 0, menor = 0
do {
    preco = Number(prompt(`Insira o preço do ${cont}° produto:`))
    if (preco > 0) {
        if (cont == 1) {
            menor = preco
            maior = preco
        }
        if (preco > maior) {
            maior = preco
        }
        if (preco < menor) {
            menor = preco
        }
        document.write(`Produto ${cont} = R$${preco.toFixed(2)}<br>`)
        cont++
    } else {
        alert('Valor Inválido.')
    }
} while (cont <= 8)
document.write(`<br>Dados:<br>
Maior preço: R$${maior.toFixed(2)}<br>
Menor preço: R$${menor.toFixed(2)}`)