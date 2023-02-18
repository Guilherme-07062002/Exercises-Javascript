let n = parseInt(prompt('Insira um número para exibir a sua tabuada:'))
document.write(`TABUADA DE ${n}:<br>`)
for (i = 1; i <= 10; i++) {
    document.write(`${n} x ${i} = ${n * i}<br>`)
}