// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  function Usuario(opciones) { //asi defino una funcion constructor que recibe un objeto llamado opciones
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
      }

    Usuario.prototype.saludar = function() {
      return "Hola, mi nombre es " + this.nombre;
    }
    
  return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function() {
    return "Hello World!";
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function() {
    var stringReverse = '' ; //definimos la variable como tipo string
    for (let i = this.length - 1; i>= 0; i-- ){ //inicializamos i con el largo de String - 1 ya que el largo de la 
      //cadena es un numero pero los indices empiezan con 0 por lo cual ese ultimo numero no existe como indice 
      //y luego hacemos que vaya disminuyendo lo que vale i para ir yendo letra por letra hacia atras
      stringReverse = stringReverse + this.charAt(i); // charAt devuelve de a cada letra de un string dentro de un obj
    } return stringReverse; //vamos guardando cada letra desde la ultima a la primera en stringReverse para darla vuelta
  } 
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre,apellido,edad,dir) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.dir = dir;
      this.detalle = function() {
        return { // se usa asi el return porque lo que devuelve es un objeto
          Nombre: this.nombre,
          Apellido: this.apellido,
          Edad: this.edad,
          Direccion: this.dir
      }
    }
}}


function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada

  let nuevaPersona = new Persona(nombre, apellido, edad, dir);
  return nuevaPersona;

}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function() {
    return this.nombre + ", " + this.edad + " años";
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
