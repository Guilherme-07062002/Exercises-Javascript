let vetor = [1]
let cont = 1
for (let i = 1; i <= 15; i++) {
    vetor.push(cont)
    cont = vetor[i] + vetor[i - 1]

}
vetor.forEach(element => {
    document.write(` | ${element} | `)
});