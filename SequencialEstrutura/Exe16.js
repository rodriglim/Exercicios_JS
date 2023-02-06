const $areaQuadrada = 34;

const $coberturaTintaLitros = ($areaQuadrada / 3);
const $qtdLatas = Math.ceil($coberturaTintaLitros / 18);
const $precoTotal = $qtdLatas * 80;

console.log(`Total de latas: ${$qtdLatas}\nPreço total:R$ ${$precoTotal}`);