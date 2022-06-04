// flatMap se usa para aplanar un array de arrays(2d) a un unico array(1d)

// Dado un array de odd integers devuelva un nuevo array que incluya los odds dados más los pares que faltan(beneficios,devuelve multiples valores por cada iteración)

let arr = [1,3,5,7];
let resultFlatMap = arr.flatMap(v => [v, v+1]); // <- fijate que me va a respetar las posiciones,y al aplanar me dará [1,2,3,4,...] aunque originalmente me daba[[1,2],[3,4],[5,6],[7,8]]
console.log(resultFlatMap)

// si usara map o reduce me devolvería subarrays(porqué??)
let resultMap = arr.map(v => [v, v+1]);
console.log(resultMap)

// sin embargo puedo usar el método flat en el map para conseguir lo mismo
let resultMapFlat = arr.map(v => [v, v+1]).flat();
console.log(resultMapFlat)


// imaginando este array de objetos[ {name:string,kids:[]} ] lo que quiero es sacar todo asi ['Dave','Max','Jack]
const friends = [
  { name: 'Dave',kids:['Max','Jack']},
  { name: 'Max',kids:['Dave','Jack','Megan']},
  { name: 'Jordan',kids:['Mason','Bob','Cameron']},
];
// lo primero es entender que map es una función uno a uno,es decir,entra un objeto y devuelve otro.Pero flatMap es one-to-many,es decir,entra un objeto y devuelve un array:
console.log(friends.flatMap(p => p.kids))

// queremos que si un comprador compra un smartphone se le agrege un protector.Si es una tablet le damos un keyboard.
let cart = [
  {
    name: "Smartphone",
    qty: 2,
    price: 500,
    freeOfCharge: false,
  },
  {
    name: "Tablet",
    qty: 1,
    price: 800,
    freeOfCharge: false,
  },
];

let newCart = cart.flatMap( item => {
  if(item.name === "Smartphone"){
    return [item, {
      name: "Screen Protector", qty: item.qty, price: 5, freeOfCharge: true}]
  } else if(item.name === "Tablet"){
    return [item,{
      name: "Keyboard", qty: item.qty, price: 10, freeOfCharge: true}]
    }
})

const total = newCart.reduce( (sum,item) => {
  if(!item.freeOfCharge){
    return sum+= item.qty * item.price
  }
  return sum
},0)

console.log(newCart)
console.log(total)

// Importante: el método reducer 'reduce' una colección de elementos a un único valor,de la forma que quiera.De nuevo no modifica el array original.Importante entender que devuelve el accumulator

// Javascript tiene hoisting por defecto.Para quitarlo debo usar let y const,pero nunca podré quitar la feature de hoisting que tiene el lenguaje,si no evitarla usando let y const