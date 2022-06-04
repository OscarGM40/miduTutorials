/* el concepto de closure dice que un método va a poder acceder además de al scope interno del mismo al scope donde se declara la función(es decir al interno y al de declaración) */
const a = (b = 0);
function suma2() {
  //suma dos tiene acceso tanto a a como a b como a c
  const c = 2;
  return a + b + c;
}

/* es decir que la closure es la habilidad para acceder dentro del inner scope de un método a variables o funciones declaradas en su outer scope */
const bunny = {
  name: "Gentleman",
  tasks: ["Speak", "Learn", "Teach"],
  showTasks: function () {
    this.tasks.forEach(function (task) {
      // fijate que function va a crear otro scope que vive solo dentro de showTasks(es el outer scope).Por lo queno se puede acceder a name.
      console.log(`${this.name} wants to:  ${task}`);
    });
  },
  showMoreTasks: function ()  {
    this.tasks.forEach((task) => {
      // la cosa cambia con arrow functions que tienen el scope del padre
      console.log(`${this.name} wants to:  ${task}`);
    });
  }, // fijate que con function no se puede acceder a name.Fijate que incluso me lo pinta el IDE
};

bunny.showTasks();
bunny.showMoreTasks();

/* ¿Que es el prototype? Es una propiedad tipo objeto que se encuentra en todas las funciones y objetos de Javascript.Accediendo a él,puedo añadir más propiedades y métodos modificando el prototipo */
let proto = Object.getPrototypeOf(bunny); //fijate que para acceder al prototype de un Object es con Object.getPrototypeOf(instance)
proto.age = 44;
console.log(proto.age)
/* TIP métodos como hasOwnProperty(prop) mirarán si esa propiedad existe sin haber usado el prototipo,lo cual obviamente tiene mucho sentido */