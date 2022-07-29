

try{
    document.write("Não ocorreu erro <br> <br>");
}catch(e){
    document.write("Ocorreu erro <br>");
}

try{
    document.writi("Não ocorreu erro");
}catch(e){
    document.write("Ocorreu erro <br>" + e.message + "<br>");
    console.log("Ocorreu erro <br>  " + e.message + "<br>")
}

var num;

try{
    num=prompt("Digite um valor <br>")
    if(num>10){
    throw new Error("Valor inválido" + num);
}
document.write("Valor " + num);
}catch(e){
    document.write("Valor inválido " + e.message)
}finally{
    document.write("<br> Fim do tratamento")
}