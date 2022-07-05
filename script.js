// tuve que subir mi .json a un storage externo porque no me lo tomaba como interno. El Live Server me buscaba el ./libros.json como si fuera una web externa y me tiraba error 404 (porque obviamente no existe esa dirección). Aún así, dejé el archivo guardado por las dudas. Aunque no lo pude arreglar, me rebusqué la solución :).
// casi me vuelvo loco





// let arrayProductos = fetch('https://json.extendsclass.com/bin/2087f43656ba');
// let arrayProductos = fetch("./productos.json");



// tuve que subir mi .json a un storage externo porque no me lo tomaba como interno. El Live Server me buscaba el ./libros.json como si fuera una web externa y me tiraba error 404 (porque obviamente no existe esa dirección). Aún así, dejé el archivo guardado por las dudas. Aunque no lo pude arreglar, me rebusqué la solución :).
// casi me vuelvo loco

let arrayProductos = fetch('https://json.extendsclass.com/bin/2087f43656ba')

// let arrayProductos = ListaProductos;

.then ( (respuesta)  => respuesta.json())

.then( (productos) => {

    Rellenar_tabla (productos);


    const tbody = document.getElementById("tbody");

    for (let i = 0; i < productos.length ; i ++){

        console.log(productos[i])
    
    }

});




function Rellenar_tabla (array){

    // encontrando la tabla
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    //por cada producto que recorre crea un tr
    for (const producto of array){

        // creando un tr
        const tr = document.createElement("tr");

        // haciendo el inner necesario
        tr.innerHTML = `<td><img src='${producto.imagen}'></td>
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>`

        tbody.appendChild(tr);
    }

}


const storage = JSON.parse(localStorage.getItem("filtro")); 

if(storage){
    arrayProductos = storage;
}



Rellenar_tabla(arrayProductos)


// traer a los radio del html
const input_radio = document.getElementsByClassName("radio");

// recorrer los radio

for (let i = 0; i < input_radio.length ; i ++){
    input_radio[i].addEventListener("click", FiltrarTabla);

}


function FiltrarTabla(evento){
    // console.log(evento.target.value);

    let input_value = evento.target.value.toUpperCase();


    // operador ternario

    arrayProductos = input_value === "TODOS" 
    ? ListaProductos
    : ListaProductos.filter( (elemento) => ( elemento.tipo.toLocaleUpperCase() === input_value ));

  

    localStorage.setItem("filtro", JSON.stringify(arrayProductos));

    Rellenar_tabla(arrayProductos);
}


// // desesestructurar
// let [prod0, prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9] = ListaProductos;


// // probando
// console.log(prod0);
// console.log(prod1.nombre);

// for (let i = 0; i < ListaProductos.length ; i ++){

//     console.log(ListaProductos[i]);

// }