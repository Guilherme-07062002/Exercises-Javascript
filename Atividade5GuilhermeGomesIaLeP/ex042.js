let num = 0
do {
    num = parseInt(prompt('Insira um número inteiro positivo:'))
} while (num <= 0)
let cont = 1
while (cont <= num) {
    document.write(` ${cont} `)
    cont++
}
document.write('Acabou.')