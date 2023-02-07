let $nota1 = 10;
let $nota2 = 5;

let $media = ($nota1 + $nota2) / 2;

if($media == 10){
    console.log(`Média: ${$media.toFixed(1)}\nAprovado com Distinção!`);
}else if($media >= 7){
    console.log(`Média: ${$media.toFixed(1)}\nAprovado!`);
}else{
    console.log(`Média: ${$media.toFixed(1)}\nReprovado!`);
}