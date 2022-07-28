

/* var nome; variável não declarada */

var nome, site, busca; //declaração de múltiplas variáveis

//document.write(nome) /*Será immpresso undefined pois a variável não foi inicializada*/

//nome=null;
//document.write(nome); /*Agora será impresso no navegador a palavra null, deixando de ser uma variável indefinida*/

/*
nome=" Joel ";
site=" energyBox ";
busca=2022;
document.write(nome, site, busca)
document.write("<br>" + nome + "<br>" + site + "<br>" + busca) //concatenação para quebra de linha
*/


//Exemplo de criação de uma variável concatenada a partir de valores de 2 outras variáveis previamente criadas.
var nome="Joel";
var ano=2022;
var num1= 15;
var num2= 17;
var info="<br>" + nome + "<br>" + ano; //Observe que é possível adicionar a tag <br> já na declaração da variável.
document.write(info)
var info2="<br>" + nome + "<br>" + ano + "<br>" + num1 + num2;
document.write(info2) //Não ocorreu a soma dos valores num1 e num2
var info3="<br>" + nome + "<br>" + ano + "<br>" + (num1 + num2);
document.write(info3) //Ocorreu a soma dos valores num1 e num2

