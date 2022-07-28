var pontos = 88;
var nota;


/*
if(pontos >= 90){
    nota="Aprovado com louvor";}
else if(pontos >= 60){
    nota="Aprovado";
}
else if(pontos>=40){
    nota="Recuperação";
}
else if(pontos>=20){
    nota="Reprovado";
}
else{
    nota="Reprovado com terror";
}
document.write(nota);
*/

if(pontos >= 60){
    nota="Aprovado "
    if(pontos>=95)
    nota+="com louvor"; //Exemplo de concatenação!
    if(pontos < 95)
    nota+="com nota normal"; //Exemplo de concatenação!
}
else if(pontos<60){
    if(pontos>=40)
    nota="Recuperação";
    if(pontos<40)
    nota="Reprovado com nota normal";
    if(pontos<20)
    nota="Reprovado com terror";
}

document.write(nota);
