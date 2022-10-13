function Gerador(msg, vezes, borda) {
    switch (borda) {
        case 1:
            borda = `+-------=======-------+<br>`
            break
        case 2:
            borda = `~~~~~~~~:::::~~~~~~~~<br>`
            break
        case 3:
            borda = `<<<<<<<<----->>>>>>>><br>`
            break
    }
    for (let i = 0; i < vezes; i++) {
        document.write(`${borda}`)
        document.write(`-${msg}-<br>`)
        document.write(`${borda}<br>`)
    }
}
Gerador('Aprendendo Javascript!', 3, 2)