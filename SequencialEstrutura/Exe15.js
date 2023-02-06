const $salarioHora = 10;
const $horasMensalTrabalhada = 100;
const $inss = 5, $impostoDeRenda = 11, $sindicato = 8;

const $salarioBruto = ($salarioHora * $horasMensalTrabalhada);

const $valorIR = ($salarioBruto * $impostoDeRenda) / 100;
const $valorInss = ($salarioBruto * $inss) / 100;
const $valorSindicato = ($salarioBruto * $sindicato) / 100;

const $salarioLiquido = $salarioBruto - ($valorIR + $valorInss + $valorSindicato);

console.log(`Salário Bruto: R$${$salarioBruto.toFixed(2)}
    IR(${$impostoDeRenda}%):R$${$valorIR.toFixed(2)}
    INSS(${$inss}%):R$${$valorInss.toFixed(2)}
    Sindicato(${$sindicato}):R$${$sindicato.toFixed(2)}
    Salário Bruto:R$${$salarioLiquido.toFixed(2)}`
);