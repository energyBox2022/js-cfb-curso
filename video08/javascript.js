var nome = prompt("Digitar um número", "Digite aqui o número aqui entre 10 e 20 ou 40 e 50")
var dados=confirm(nome + ", você deseja continuar?");
alert(dados)
document.write(nome + "<br> " + dados)

if( ((nome>= 10 && nome<= 20) || (nome>= 40 && nome<= 50)) ){
    document.write("<br> Você venceu!")
}
else{
    document.write("<br> Você perdeu!")
}

