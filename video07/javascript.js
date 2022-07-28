var nome = prompt("Digitar nome", "Digite aqui o seu nome")
var dados=confirm(nome + ", você deseja continuar?");
alert(dados)
document.write(nome + "<br> " + dados)

if(dados == true){
    document.write("<br> É verdade!")
}
else{
    document.write("<br> É mentira!")
}