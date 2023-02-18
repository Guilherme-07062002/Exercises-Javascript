let vetor = [], IndicesMultiplosDez = []
for (let i = 0; i < 15; i++) {
    vetor.push(prompt(`Insira o ${i + 1}° número: `))
    document.write(` | ${vetor[i]} | `)
    if (vetor[i] % 10 == 0) {
        IndicesMultiplosDez.push(i)
    }
}
document.write(`<br>Posições dos multiplos de 10: ${IndicesMultiplosDez}`)