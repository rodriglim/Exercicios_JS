const $turno = "p".toUpperCase();

switch($turno){
    case "M":
        console.log("Bom Dia!");
        break;
    case "V":
        console.log("Boa Tarde");
        break;
    case "N":
        console.log("Boa Noite");
        break;
    default:
        console.log("Turno Inválido");
}