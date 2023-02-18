let cont = 1
let num = 0, maiorCinco = 0, divTres = 0
document.write(`Números sorteados:<br>`)
while (cont <= 5) {
    num = parseInt(Math.random() * 11)
    if (num > 5) {
        maiorCinco++
    }
    if (num % 3 == 0 && num != 0) {
        divTres++
    }
    document.write(`/ ${num} `)
    cont++
}
document.write(`<br>Dados:<br>
Números maiores que cinco: ${maiorCinco}<br>
Números divisiveis por três: ${divTres}`)