let ano = parseInt(prompt('Exercício 21 - Leia um determinado ano e diga se ele é ou não BISSEXTO.\n\nDigite um ano:'))
if (ano % 4 == 0 && ano % 100 != 0) {
    document.write(`O ano ${ano} é BISSEXTO`)
} else if (ano % 4 == 0 && ano % 100 == 0 && ano % 400) {
    document.write(`O ano ${ano} é BISSEXTO.`)
} else {
    document.write(`O ano ${ano} NÃO é bissexto.`)
}