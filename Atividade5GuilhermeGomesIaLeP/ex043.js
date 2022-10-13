let cont = 30
while (cont >= 1) {
    if (cont % 4 == 0) {
        document.write(` [${cont}] `)
    } else {
        document.write(` ${cont} `)
    }
    cont--
}
document.write('Acabou.')