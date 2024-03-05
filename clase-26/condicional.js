let lluvia = true
let frio = true
//if comun
if(frio){
   console.log('Me abrigo')
} else {
   console.log('No me abrigo')
}
//if ternario
frio ? console.log('Me abrigo') : console.log('No me abrigo')

//otro if
var billetera = 12000
var precio = 2000

if(((billetera - precio) < 0) ){
    console.log('Fondo insuficiente para realizar compra')
} else if ((billetera - precio) === 0){
    console.log('gastaste todo el saldo')
} else {
    var saldo = billetera - precio
    console.log('Su saldo restante es: ', saldo)
}

//switch
var anioNacimiento = 1960

switch (true) {
    case ((anioNacimiento >= 1920) && (anioNacimiento <= 1940)) :
        console.log('Generacion Silenciosa')
        break;
    case ((anioNacimiento >= 1946) && (anioNacimiento <= 1964)):
        console.log('Baby boomer')
        break;
    case ((anioNacimiento >= 1965) && (anioNacimiento <= 1979)):
        console.log('Generacion X')
        break;
    case ((anioNacimiento >= 1980) && (anioNacimiento <= 2000)):
        console.log('Generacion Y')
        break;
    case ((anioNacimiento >= 2001) && (anioNacimiento <= 2010)):
        console.log('Generacion Z')
        break;
    default:
        console.log('No existe')
        break;
}