let vetor = [], nome = ''
for (let i = 0; i < 7; i++) {
    nome = prompt('Insira um nome: ')
    vetor.push(nome)
}
(vetor.reverse()).forEach(element => {
    document.write(` | ${element} | `)
});