let nome = prompt('Informe nome:')
let sexo = prompt('Informe sexo [F/M]:').toUpperCase()
let valor = Number(prompt('Informe valor total das compras:'))
if (valor > 0) {
    switch (sexo) {
        case 'M':
            document.write(`Cliente ${nome}<br>
    Compra: R$ ${valor.toFixed(2)}<br>
    Recebe desconto de 5%<br>
    Terá de pagar R$ ${(valor - (valor * 0.05)).toFixed(2)}`)
            break
        case 'F':
            document.write(`Cliente ${nome}<br>
     Compra: R$ ${valor.toFixed(2)}<br>
     Recebe desconto de 13%<br>
     Terá de pagar R$ ${(valor - (valor * 0.13)).toFixed(2)}`)
            break
        default:
            document.write('Valor Inválido.')
    }
} else {
    document.write('Valor Inválido.')
}