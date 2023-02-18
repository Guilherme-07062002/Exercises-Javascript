function Gerador(msg, vezes) {
    for (let i = 0; i < vezes; i++) {
        document.write(`+-------=======-------+<br>`)
        document.write(`-${msg}-<br>`)
        document.write(`+-------=======-------+<br><br>`)
    }
}
Gerador('Aprendendo Javascript!', 4)