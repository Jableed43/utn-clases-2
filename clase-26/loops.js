//datos
let array=["ab","bc","hjkh","opqr"];
//datos procesados
let nuevoArray = []

//  inicial // condicion       //incremento 
for(let i=0; i < array.length ; i++){ 
nuevoArray.push(array[i]) 
console.log("i:",i,array[i] )
}
console.log(nuevoArray)


let llueva = true;
let num = 0;
while(num < 20){
   console.log(num++)
   }


let array2 = [1, 2, 3, 4, 5, 6, 7]
array2.forEach((elemento)=>{
    elemento *= 2
    console.log(elemento)
})
let resultado = array2.filter((elemento)=>{
   return elemento > 3
})
console.log(resultado)

//devuelve array con numeros que cumplan condicion
  var filtrados = [12, 5, 8, 130, 44].filter((elemento) => elemento >= 10 )
  var filtrados = [12, 5, 8, 130, 44].filter((elemento) =>{ return elemento >= 10} )
  console.log(filtrados)

//devuelve el primer valor que cumpla con condicion
  var encontrados = [12, 5, 8, 130, 44].find((elemento) => elemento <= 10 )
  console.log(encontrados)

  // usa todos los valores de un array en una funcion devuelve un array
  var mapeados = [12, 5, 8, 130, 44].map((elemento) => elemento = elemento + 10 )
    
  console.log(mapeados)

  var numbers = [1, 5, 10, 15];
    var doubles = numbers.map(function (x) {
    return x * 2;
    });
    console.log(doubles)

  //   //objeto
  //   let gato = {
  //     nombre: 'michi',
  //     color: 'naranja y blanco',
  //     pelo: 'corto',
  //     ronronear(),
  //   }

  //  console.log(gato.nombre)