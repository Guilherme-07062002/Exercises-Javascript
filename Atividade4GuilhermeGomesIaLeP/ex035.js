let tipoCarro = prompt('Informe o tipo de carro alugado (Popular ou Luxo):').toUpperCase()
let diasAlugados = parseInt(prompt('Informe a quantidade de dias de aluguel:'))
let kmPercorrido = Number(prompt('Informe a quantidade de Km percorridos: '))
if (diasAlugados > 0 && kmPercorrido > 0 && (tipoCarro == 'POPULAR' || tipoCarro == 'LUXO')) {
    let aluguel = 0
    switch (tipoCarro) {
        case 'POPULAR':
            aluguel = diasAlugados * 90
            if (kmPercorrido < 100) {
                aluguel += 0.20 * kmPercorrido
            } else {
                aluguel += 0.10 * kmPercorrido
            }
            break;
        case 'LUXO':
            aluguel = 150 * diasAlugados
            if (kmPercorrido < 200) {
                aluguel += 0.30 * kmPercorrido
            } else {
                aluguel += 0.25 * kmPercorrido
            }
            break;
        default:
            document.write('Algum valor informado é inválido.')
            break;
    }
    document.write(`Dados:<br>
    Tipo de carro alugado: ${tipoCarro}<br>
    Dias de aluguel: ${diasAlugados} dia(s)<br>
    Quilômetros percorridos: ${kmPercorrido}Km<br>
    Valor a ser pago: R$ ${aluguel.toFixed(2)}`)
} else {
    document.write('Algum valor informado é inválido')
}