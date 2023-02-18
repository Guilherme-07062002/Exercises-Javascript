let vetor = []
let cont = 5
for (let i = 0; i < 10; i++) {
    vetor.push(cont)
    cont += 5
}
vetor.forEach(element => {
    document.write(` | ${element} | `)
});