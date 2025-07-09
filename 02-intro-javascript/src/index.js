import heroes, { owner }  from './data/heroes';
//?imp //import {heroes} from './data/heroes';
/*npm //*Promesa // new Promise((resolve, reject) => {
  
})*/

/*const getHeroeById = (id) => {
  return heroes.find((heroe) => {
    if (heroe.id === id) {
      return true;
    }else{
      return false;
    }
  });
}
*/

/*const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
}*/
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById(3));

const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('DC'));