const persona = {
  nombre: 'Dory',
  apellido: 'Cirujano Azul',
  edad: 32,
  direccion:{
    col: 'P Sherman', 
    calle: 'Wallaby', 
    num: 42, 
    cuidad: 'Sydney',
  }
};

const persona2 = {...persona}
persona2.nombre = "Nemo";

console.log( persona );
console.log( persona2)
//console.table( persona );