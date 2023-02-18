let preco = Number(prompt('Insira o preço:'))
let precoNovo = preco - (preco * 0.05)
document.write(`R$ $(precoNovo.toFixed(2))`)