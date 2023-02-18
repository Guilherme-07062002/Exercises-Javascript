let vetor = [], pares = [], indexPares = []
for (let i = 0; i < 10; i++) {
    vetor.push(prompt(`Insira o ${i + 1}° número: `))
    document.write(` | ${vetor[i]} | `)
    if (vetor[i] % 2 == 0) {
        pares.push(vetor[i])
        indexPares.push(i)
    }
}
document.write(`<br>Números pares: ${pares}<br>Estão nas posições: ${indexPares}`)