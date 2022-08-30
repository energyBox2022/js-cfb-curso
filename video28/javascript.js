

var dt=new Date();
var dia=dt.getDate();
var mes=dt.getMonth();
var ano=dt.getFullYear();
var sem=dt.getDay();

document.write(dt + "<br>");
document.write(dia + "<br>");
document.write(mes + "<br>");
document.write(ano + "<br>");
document.write(sem + "<br>" + "<br>" + "<br>");

/*Para retornar o mes e o dia da semana, usa-se: */

var meses=new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "setembro", "outubro", "novembro", "dezembro")

var dia_sem= new Array("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado")

document.write("Estamos no mês de " + meses[mes] + " e no dia da semana que é " + dia_sem[sem] + "<br>" + "<br>" + "<br>")

/*Para modificar o mes e o dia da semana, usa-se: */

var ndt=new Date();
ndt.setDate(dt.getDate() + 2);
var dia=ndt.getDate();
var mes=ndt.getMonth();
var ano=ndt.getFullYear();
var sem=ndt.getDay();

document.write("Estamos no mês de " + meses[mes] + " e no dia da semana que é " + dia_sem[sem])