const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
};

const {nombre, edad, clave } = persona;

//console.log(nombre);
/* console.log( persona.nombre );
   console.log( persona.edad ); */

const useContext = ({ nombre, edad, clave, rango = 'Capitan'}) => {
  console.log({nombre, edad, rango});
  return{
    nombreClave: clave,
    anios: edad,
    lating: {
      lat: 14.234,
      ing: -12.456,
    }
  }
}

const {nombreClave, anios, lating:{lat,ing}} = useContext( persona );

console.log(nombreClave,anios);
console.log(lating);