let nota1 = Number(prompt('Informe a primeira nota:'))
let nota2 = Number(prompt('Informe a segunda nota:'))
if(nota1 >= 0 && nota2 >= 0){
    let media = (nota1 + nota2) / 2
    document.write(`Dados do Aluno:<br>
    Nota 1° Bimestre: ${nota1.toFixed(1)}<br>
    Nota 2° Bimestre: ${nota2.toFixed(1)}<br>
    Média: ${media.toFixed(1)}<br>`)
    if(media >= 0 && media <= 4.9){
        document.write('O aluno foi REPROVADO.')
    }else if(media >= 5.0 && media <= 6.9){
        document.write('O aluno está de RECUPERAÇÃO.')
    }else{
        document.write('O aluno foi APROVADO.')
    }
}else{
    document.write('Algum valor informado é inválido.')
}