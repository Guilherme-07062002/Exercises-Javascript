let vetor = []
for (let i = 0; i < 7; i++) {
    vetor.push(Math.floor(Math.random() * 10 + 1))
}
vetor.forEach(element => {
    document.write(` | ${element} | `)
});