


var mochila=[];

mochila.push('faca'); //Inseri no final do Array
mochila.push('canivete');
mochila.push('lanterna');
mochila.push('corda');
mochila.push('fósforo');

mochila.unshift('panela'); //Inseri no início do Array
mochila.pop();//Remove o último elemento, que no caso é o fósforo pois o unshift é o primeiro
mochila.shift();//Remove o primeiro elemento, que neste caso é a panela que foi inserido pelo método unshift
mochila.splice(2,1)//A partir do índece 2, remove-se um elemento. O segundo termo determina a quantidade de elementos removidos a partir da posição estabelecida

document.write(mochila[0]+"<br>");
document.write(mochila[1]+"<br>");
document.write(mochila[2]+"<br>");
document.write(mochila[3]+"<br>");
document.write(mochila[4]+"<br>");
document.write(mochila[5]+"<br>"); //Imprime indefinido pois esse elemento foi removido pelo pop()

