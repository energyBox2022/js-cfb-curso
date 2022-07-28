

var mochila=[],pos;

mochila.push('faca');
mochila.push('fósforo');
mochila.push('alicate');
mochila.push('lanterna');
mochila.push('corda');
mochila.push('água');

document.write(mochila[0]+"<br>");
document.write(mochila[1]+"<br>");
document.write(mochila[2]+"<br>");
document.write(mochila[3]+"<br>");
document.write(mochila[4]+"<br>");
document.write(mochila[5]+"<br>");

pos=mochila.indexOf('corda')

if(pos < 0){
    document.write("O ítem não está na mochila.")
}
else{
    document.write("O ítem está na mochila." + '<br>' + 'Está na posição ' + pos + '<br>' + '<br>')
}

var num=[3,7,5,0,2,4,8]

document.write(num[0] + '<br>');
document.write(num[1] + '<br>');
document.write(num[2] + '<br>');
document.write(num[3] + '<br>');
document.write(num[4] + '<br>');
document.write(num[5] + '<br>');
document.write(num[6] + '<br>' + '<br>');


num.sort();//Ordena os elementos numericamente.

document.write(num[0] + '<br>');
document.write(num[1] + '<br>');
document.write(num[2] + '<br>');
document.write(num[3] + '<br>');
document.write(num[4] + '<br>');
document.write(num[5] + '<br>');
document.write(num[6] + '<br>' + '<br>');

num.reverse();//Ordena os elementos numericamente em uma ordem decrescente.

document.write(num[0] + '<br>');
document.write(num[1] + '<br>');
document.write(num[2] + '<br>');
document.write(num[3] + '<br>');
document.write(num[4] + '<br>');
document.write(num[5] + '<br>');
document.write(num[6] + '<br>' + '<br>');

var numeros=num.join();
document.write(numeros + '<br>'+ '<br>');

var bolsa=[], bolsa1=[], bolsa2=[], pos;

bolsa1.push('faca');
bolsa1.push('fósforo');
bolsa1.push('alicate');
bolsa1.push('lanterna');
bolsa1.push('corda');
bolsa1.push('água');

bolsa2.push('revólver');
bolsa2.push('luva');
bolsa2.push('binóculo');
bolsa2.push('coberta');
bolsa2.push('garrafa');
bolsa2.push('prato');

bolsa=bolsa1.concat(bolsa2);//Junta os elementos dos vetores da bolsa1 e bolsa2 no vetor bolsa

document.write(bolsa[0] + '<br>');
document.write(bolsa[1] + '<br>');
document.write(bolsa[2] + '<br>');
document.write(bolsa[3] + '<br>');
document.write(bolsa[4] + '<br>');
document.write(bolsa[5] + '<br>' + '<br>');
document.write(bolsa[6] + '<br>');
document.write(bolsa[7] + '<br>');
document.write(bolsa[8] + '<br>');
document.write(bolsa[9] + '<br>');
document.write(bolsa[10] + '<br>');
document.write(bolsa[11] + '<br>' + '<br>');

document.write('Tamanho da bolsa1 é ' + bolsa1.length + '<br>');//Retorna o tamanho do vetor
document.write('Tamanho da bolsa2 é ' + bolsa2.length + '<br>');
document.write('Tamanho da bolsa é ' + bolsa.length + '<br>');