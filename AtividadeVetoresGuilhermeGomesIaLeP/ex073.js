let vetor = []
let cont = 9
for (let i = 0; i < 10; i++) {
    vetor.push(cont)
    cont--
}
vetor.forEach(element => {
    document.write(` | ${element} | `)
})