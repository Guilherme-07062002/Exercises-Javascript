function Fibonnacci(quantTermos) {
    let cont = []
    cont.push(1, 1)
    document.write(`${cont[0]} >> `)
    for (let i = 1; i < quantTermos; i++) {
        document.write(`${cont[i]} >> `)
        cont.push((cont[i] + cont[i - 1]))
    }
    document.write("FIM")
}
Fibonnacci(9)
