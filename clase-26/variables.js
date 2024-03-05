//global
let casa = "buenos aires";

function hogar() {
  //local
  let casa = "haedo";
  console.log("local", casa);
}

function colorFavorito() {
  let color = "azul";
  console.log(color);
}

function color() {
  let color = "rojo";
  console.log(color);
}
hogar();
console.log("global", casa);
