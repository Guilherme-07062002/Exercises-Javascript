let primeiroTermo = parseInt(prompt('Digite o primeiro termo da PA:'))
razao = parseInt(prompt('Digite qual será a razão da PA: '))
somatorio = 0
for(let i = 0; i <= 9; i++){
    if(i == 0){
    document.write(`${primeiroTermo} `)
    }else{
    primeiroTermo += razao
    document.write(` + ${primeiroTermo}`)
    }
    somatorio += primeiroTermo
}
document.write(` = ${somatorio}`)
