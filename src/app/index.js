import Comentario from './comentario.js';
import './style.css';
//const com = new Comentario();

//console.log(com.obtenerCategorias());

async function inicio(){
    const com = new Comentario();
    const res = await com.obtenerCategorias();
    console.log(res.categories);
}
console.log("Entrro!!!");
inicio()