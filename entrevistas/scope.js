function suma(val1, val2) {
  const val3 = 1;
  return val1 + val2 + val3;
 // <- fijate que el scope lo pinta el IDE con | 
}

// console.log(suma(1, 2));

const a = 1;
function sumar() {
  const b = 2;
  return suma2();
}

const b = 3;
const c = 1;

function suma2(){
  /* cogerá la c del scope interno,ya que tiene prioridad sobre el externo,pues está más cerca */
  const c = 2;
  return a + b + c;
}

console.log(sumar())