let nome = prompt('Exercício 19 - Leia o nome e duas notas de um aluno, calcule a sua média e mostre na tela, depois analise se aluno teve ou não um bom aproveitamento (média 7,0)\n\nDigite o nome do aluno: ')
let nota1 = Number(prompt('Nota 1° Bimestre:'))
let nota2 = Number(prompt('Nota 2° Bimestre:'))
let media = (nota1 + nota2) / 2
if (media > 7) {
    document.write(`O aluno ${nome} obteve média ${media.toFixed(1)}<br>Portanto teve um bom aproveitamento.`)
} else {
    document.write(`O aluno ${nome} obteve média ${media.toFixed(1)}<br>Talvez ele precise estudar mais.`)
}
