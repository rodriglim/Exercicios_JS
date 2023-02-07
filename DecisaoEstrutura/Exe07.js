let $num1 = 20, $num2 = 20, $num3 = 20;

if (($num1 > $num2) && ($num1 > $num3)) {
    console.log(`Maior número: ${$num1}`);
    if ($num2 > $num3) {
        console.log(`Menor número: ${$num3}`);
    } else {
        console.log(`Menor número: ${$num2}`);
    }
} else if (($num1 < $num2) && ($num2 > $num3)) {
    console.log(`Maior número: ${$num2}`);
    if ($num1 > $num3) {
        console.log(`Menor número: ${$num3}`);
    } else {
        console.log(`Menor número: ${$num1}`);
    }
} else if (($num1 < $num3) && ($num2 < $num3)) {
    console.log(`Maior número: ${$num3}`);
    if ($num1 > $num2) {
        console.log(`Menor número: ${$num2}`);
    } else {
        console.log(`Menor número: ${$num1}`);
    }
} else {
    console.log("Números Iguais");
}