let largura = Number(prompt('Informe a largura do terreno:'))
let comprimento = Number(prompt('Informe o comprimento do terreno:'))
if(largura > 0 && comprimento > 0){
    let area = largura * comprimento
    document.write(`Um terreno com as proporções ${largura} x ${comprimento} e área ${area}m².<br>É considerado `)
    if(area > 0 && area < 100){
        document.write('Terreno Popular.')
    }else if(area >= 100 && area < 500){
        document.write('Terreno Master')
    }else{
        document.write('Terreno VIP.')
    }
}else{
    document.write('Algum valor informado é inválido.')
}