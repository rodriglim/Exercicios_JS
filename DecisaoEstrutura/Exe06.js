let $num1 = 5, $num2 = 14, $num3 = 25;

if(($num1 > $num2) && ($num1 > $num3)){
    console.log(`${$num1} é o maior número!`);
}else if(($num1 < $num2) && ($num2 > $num3)){
    console.log(`${$num2} é o maior número!`);
}else{
    console.log(`${$num3} é o maior número`);
}