const saludar = function (nombre){
  return `Hola, ${ nombre}`;
}

const saludar2 = (nombre) => {
  return `Hola, ${ nombre}`;
}

const saludar3 = (nombre) => `Hola, ${ nombre}`;
const saludar4 = () => `Hola Mundo`;


console.log(saludar('Dory'));
console.log(saludar2('Otra vez Dory'));
console.log(saludar3('Soy yo otra vez.'));
console.log(saludar4());

const getUser = (nombre) =>{
  return{
    uid: 'ABCD',
    username:nombre
  }
}
const user = getUser('Nemo');
console.log(user);

function getUsuarioActivo(nombre){
  return{
    uid: 'EFGH',
    username:nombre
  }
}

const getUsuario = getUsuarioActivo('Dory');
console.log(getUsuario);

const getUsuarioActivo2 = (nombre) => (
  {
    uid: 'EFGH',
    username:nombre
  }
);
const getUsuario2 = getUsuarioActivo2('kail');
console.log(getUsuario2);