//global
let casa = 'buenos aires'
console.log('global:', casa)

function hogar() {
//local
    casa = 'haedo'
    console.log('local:',casa)
}
hogar()
console.log("final:", casa)
// 