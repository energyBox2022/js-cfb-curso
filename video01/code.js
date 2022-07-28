


//write("Aula 1" ) Desta maneira não aparece nada

document.write("<p style='color: #f00'>Aula 001</p>" + "<br>") /*Desta maneira, será impresso na tela do navegador a mensagem interna. Neste caso passou-se uma string. Observe que é possível utilizar tags de HTML e CSS diretamente no parâmetro de um objeto JS, sua inserção é feita de forma oculta no body do HTML e é possível ser visualizado em Elements da página do navegador.*/

document.write(100 + "<br>") /*Nesse caso, passou-se um numeral*/

document.write("<p style='color: #f00'>100</p>" + 50 + "<br>") /*Será impresso 10050 (o operador + se torna de concatenação). Observe que é possível utilizar tags de HTML e CSS diretamente no parâmetro de um objeto JS, sua inserção é feita de forma oculta no body do HTML e é possível ser visualizado em Elements da página do navegador.*/

document.write(100 + 50 + "<br>") /*Será impresso 150 (o operador + se torna de soma)*/ 


