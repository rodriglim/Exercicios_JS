const $produto1 = 5.00;
const $produto2 = 5.00;
const $produto3 = 5.00;

if(($produto1 < $produto2) && ($produto1 < $produto3)){
    console.log("O 1ª produto é o mais barato");
}else if(($produto1 > $produto2) && ($produto2 < $produto3)){
    console.log("O 2ª produto é o mais barato");
}else if(($produto1 > $produto3) && ($produto2 > $produto3)){
    console.log("O 3ª produto é o mais barato");
}else{
    console.log("Os valores dos produtos são iguais");
}