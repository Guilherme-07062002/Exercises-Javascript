let anoNascimento = parseInt(prompt('Exercício 18 - Leia o ano de nascimento de uma pessoa, calcule a sua idade e depois mostre se ela pode ou não votar.\n\nDigite o seu ano de nascimento:'))
let idade = 2022 - anoNascimento
if (idade > 0) {
    if (idade < 16) {
        document.write(`Usuário tem ${idade} anos de idade,<br>Ainda não pode votar.`)
    } else if (idade >= 16 && idade < 18) {
        document.write(`Usuário tem ${idade} anos de idade,<br>Voto opcional.`)
    } else {
        document.write(`Usuário tem ${idade} anos de idade,<br>Voto obrigatório.`)
    }
} else {
    document.write(`Idade Inválida.`)
}