let $numInteiro1 = 5;
let $numInteiro2 = 5;
let $numReal = 2.5;

let $produto = ($numInteiro1 * 2) * ($numInteiro2 / 2);
let $soma = ($numInteiro1 * 3) + $numReal;
let $elevado = Math.pow($numReal, 3);

console.log(`Produto: ${$produto}\nSoma: ${$soma}\nElevado: ${$elevado.toFixed(1)}`);