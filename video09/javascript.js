var pontos = 18;

/*if(pontos >= 60){
    nota="aprovado";
}
else if((pontos>=40) && (pontos<60)){
    nota="recuperação";
}
else{
    nota="reprovado";
}
document.write(nota);*/


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