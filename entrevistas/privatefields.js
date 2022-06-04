/* ¿hay realmente métodos y propiedades privadas en JS */
class Auto {
  #ruedas;
  peso;

  constructor(peso, ruedas) {
    this.#ruedas = ruedas;
    this.peso = peso;
  }
  getRuedas() {
    return this.#ruedas;
  }

  setRuedas(ruedas) {
    this.#ruedas = ruedas;
  }

  getPeso() {
    return this.peso;
  }

  setPeso(peso) {
    this.peso = peso;
  }

}

// Desde ECMA6 si que puedo declarar métodos privados en JS.No confundir con Typescript,que si tiene la keyword private.

const auto = new Auto();
auto.getRuedas() // fijate que no veo  a ruedas

// Y lo mismo puedo hacer para un objeto,accediendo a la interfaz Object puedo 'congelarlo',evitando reasignarle propiedades 
const persona = {
  nombre: "Juan",
  edad: 30,
}
Object.freeze(persona);
persona.nombre="Asinto"
console.log(persona); //fijate que no da error,simplemente sigue valiendo "Juan".Muy interesante

/* recuerda que una arrow function es una función anónima o nameless function.No crean un scope interno,sino que comparten el que esté en el lugar donde se definen */