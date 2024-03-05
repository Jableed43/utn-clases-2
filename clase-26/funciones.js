//Funcion nombrada
function suma(a, b) {
    return a + b;
  }
  
  // Uso de la función
  const resultado = suma(5, 3);
  console.log(resultado);

//Funcion Anonima
const resta = function(a, b) {
    return a - b;
  };
  
  // Uso de la función
  const resultadoResta = resta(8, 3);
  console.log(resultadoResta);

//Funcion flecha version 1
const multiplicacion = (a, b) => a * b;

    // Uso de la función
    const resultadoMultiplicacion = multiplicacion(4, 6);
    console.log(resultadoMultiplicacion);

//Funcion flecha version 2
const division = (a, b) => { return a / b};

    // Uso de la función
    const resultadoDivision = division(30, 6);
    console.log(resultadoDivision);