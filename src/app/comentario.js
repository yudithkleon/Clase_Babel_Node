import {fetch as fetchPolyfill} from 'whatwg-fetch'

class Comentario{
    
    async obtenerCategorias(){
      const rest = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
      const categorias = await rest.json();
      return categorias;
    }
}
export default Comentario;




/*
async function inicio(){
    const com = new Comentario();
    const res = await com.obtenerCategorias();
    console.log(res.categories);
}
console.log("Entrro!!!");*/