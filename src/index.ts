//ejercico 1
let contador: number = 0;
let botonContar = document.getElementById("clickear");
let visorContar = document.getElementById("visorContador");
visorContar?.innerText = "No se ha realizado ningun clic aun.";
const clickear = () => {
  contador++;
  console.log("Hiciste " + contador + " clicks");
  visorContar?.innerText = `Hiciste ${contador} clicks`;
};

botonContar?.addEventListener("click", clickear);

//ejercicio 2
let contadorIncDec: number = 0;
let botonDecrementar = document.getElementById("decrementar");
let botonIncrementar = document.getElementById("incrementar");
let inputvisor = document.getElementById("visorIncDec");

const incrementarUno = () => {
  contadorIncDec++;
  inputvisor?.value = contadorIncDec.toString();
};
const decrementarUno = () => {
  contadorIncDec--;
  inputvisor?.value = contadorIncDec.toString();
};

botonIncrementar?.addEventListener("click", incrementarUno);
botonDecrementar?.addEventListener("click", decrementarUno);

//Ejercicio 3
let precio = document.getElementById("precio-unitario");
let agregar = document.getElementById("btn-agregar");
let calcular = document.getElementById("btn-calcular");
let lista = document.getElementById("lista");
let total = document.getElementById("precio-total");
let precios: number[] = [];
let suma: number = 0;

const agregarPrecio = () => {
  precios.push(precio.value);
  lista?.innerHTML += `<li> ${precio?.value}</li>`;
  precio.value = "";
};

const calcularPrecioTotal = () => {
  suma = 0;
  for (let i: number = 0; i < precios.length; i++) {
    suma += Number(precios[i]);
  }
  total?.innerHTML =
    "La suma total de la lista de Precios ingresados es " + suma;
};

agregar.addEventListener("click", agregarPrecio);
calcular.addEventListener("click", calcularPrecioTotal);

//Ejercicio 4

let botonMostrarDiv = document.getElementById("btn-mostrar-ocultar");

const intercambiaVisual = () => {
  let elem = document.getElementById("contenido-mostrar");
  if (elem?.classList.contains("mostrar")) {
    elem.classList.remove("mostrar");
    elem.classList.add("ocultar");
    botonMostrarDiv?.innerText = "Mostrar contendio del Div";
  } else {
    elem?.classList.remove("ocultar");
    elem?.classList.add("mostrar");
    botonMostrarDiv?.innerText = "Ocultar contendio del Div";
  }
};

botonMostrarDiv?.addEventListener("click", intercambiaVisual);

//Ejercicio 5
let botonMostrar = document.getElementById("btn-mostrar-ocultar-2");

const intercambiaVisualParrafos = () => {
  let elementos = document.querySelectorAll("p");
  for (let i: number = 0; i < elementos.length; i++) {
    if (elementos[i].classList.contains("mostrar")) {
      elementos[i].classList.remove("mostrar");
      elementos[i].classList.add("ocultar");
    } else {
      elementos[i].classList.remove("ocultar");
      elementos[i].classList.add("mostrar");
    }
  }
};

botonMostrar?.addEventListener("click", intercambiaVisualParrafos);

// Ejercicio 6

let tarea = document.getElementById("tarea-unitario");
let agregarTarea = document.getElementById("btn-agregar-tarea");
let listaTareas = document.getElementById("lista-tareas");

const agregarTareas = () => {
  listaTareas?.innerHTML += `<li> ${tarea?.value} </li>`;
  tarea?.value = "";
};

agregarTarea?.addEventListener("click", agregarTareas);

// Ejercicio 7
// Ordenamiento
let cantidad: number = 10; // Cantidad total de elementos del arreglo.
let clientes: string[] = new Array(cantidad); // Arreglo para alojar nombres
let facturacion: number[] = new Array(cantidad); // Arreglo para alojar valor numerico
let btnAgregarClientes = document.getElementById("btn-cargar-clientes");
let btnVerConsola = document.getElementById("btn-ver-consola");
let listaClientes = document.getElementById("lista-clientes");

const cargarClientes = () => {
  console.log("Cargando los Clientes y su Facturación de forma ordenada");
  //Cargo de forma ordenada los clientes uno por uno
  for (let numCliente: number = 0; numCliente < cantidad; numCliente++) {
    // Solicito los datos
    let cliente: string = String(prompt(`Cliente ${numCliente + 1} : `));
    let fact: number = Number(prompt(`Facturación ${numCliente + 1} :`));
    let i: number = 0;
    // Recorro el arreglo para ubicar la posicion segun la facturacion
    while (i < numCliente && facturacion[i] > fact) {
      i++;
    }
    for (let j: number = numCliente; j > i; j--) {
      clientes[j] = clientes[j - 1];
      facturacion[j] = facturacion[j - 1];
    }
    clientes[i] = cliente;
    facturacion[i] = fact;
  }
  listaClientes?.innerHTML = "";
  for (let posicion: number = 0; posicion < clientes.length; posicion++) {
    listaClientes?.innerHTML += `<tr><td>(${posicion + 1})</td><td>${
      clientes[posicion]
    }</td><td>${facturacion[posicion]}</td><tr>`;
  }
  btnVerConsola?.classList.remove("ocultar");
  btnVerConsola?.classList.add("mostrar");
};
const mostrasCincoMejoresClientes = () => {
  for (let posicion: number = 0; posicion < 4; posicion++) {
    console.log(
      `(${posicion + 1}) ${clientes[posicion]}, ${facturacion[posicion]}`
    );
  }
};

btnAgregarClientes?.addEventListener("click", cargarClientes);
btnVerConsola?.addEventListener("click", mostrasCincoMejoresClientes);

// Generales
function Azar(tope: number): number {
  return Math.floor(Math.random() * tope);
}

/*
 Este método permite cargar un arreglo “ de dimensión “ y
 llenarlo de valores generados al azar entre 0 y “ numAzar”
*/
function cargar(arreglo: number[], cantidad: number, numAzar: number) {
  for (let i: number = 0; i < cantidad; i++) {
    arreglo[i] = Azar(numAzar);
  }
}

/*
Este método permite mostrar un arreglo de dimensión cantidad en una única línea,
 separando los valores con un espacio.
*/
function escribirEnUnaLinea(arreglo: number[], cantidad: number) {
  let vector: string = "";
  for (let i: number = 0; i < cantidad; i++) {
    vector += `${arreglo[i]} - `;
  }
  console.log(vector);
}

/*
Este método permite intercambiar los valores en las
posiciones “ y “ de un arreglo “ utilizando una variable auxiliar
*/
function intercambiar(arreglo: number[], i: number, j: number) {
  let aux: number;
  aux = arreglo[i];
  arreglo[i] = arreglo[j];
  arreglo[j] = aux;
}
/*
Este método permite comparar los valores en las posiciones “i”
y “j” del arreglo “arreglo”
• Devuelve 0 si son iguales,
• 1 si lo que hay en “i” es mayor a lo que hay en “j”
• -1 si lo que hay en “i” es menor a lo que hay en “j”
*/
function comparar(arreglo: number[], i: number, j: number): number {
  let comparacion: number;
  if (arreglo[i] === arreglo[j]) {
    comparacion = 0;
  } else if (arreglo[i] < arreglo[j]) {
    comparacion = -1;
  } else {
    comparacion = 1;
  }
  return comparacion;
}
/*
Metodo Burbuja
*/
function ordenamientoBurbuja(arreglo: number[], cantidad: number) {
  let i: number, j: number;
  for (i = 2; i < cantidad; i++) {
    for (j = 0; j < cantidad - 1; j++) {
      if (comparar(arreglo, j, j + 1) === 1) {
        intercambiar(arreglo, j, j + 1);
      }
    }
  }
}
let btnCargarArreglo = document.getElementById("btn-cargar-arreglo");
let visorEjercicio8 = document.getElementById("visor-8");
btnCargarArreglo?.addEventListener("click", () => {
  visorEjercicio8?.innerHTML = "";
  console.log("Creo el limite con valor de 10.");
  visorEjercicio8?.innerHTML += `Creo el limite con valor de 10...<br/>`;
  let lim: number = 10;
  console.log("Creo A con espacio para 10 elementos.");
  visorEjercicio8?.innerHTML += `Creo arreglo A con espacio para 10 elementos...<br/>`;
  let a: number[] = new Array(lim);
  console.log("Asigno al arreglo A 10 elementos al Azar.");
  visorEjercicio8?.innerHTML += `Asigno al arreglo A 10 elementos al Azar...<br/>`;
  cargar(a, lim, 100);
  console.log("Muestro el A cargado al Azar.");
  visorEjercicio8?.innerHTML += `Valores del Arreglo: ${a.toString()} <br/>`;
  escribirEnUnaLinea(a, lim);
  console.log("Aplico Ordenamiento de Burbuja.");
  visorEjercicio8?.innerHTML += `Aplico Ordenamiento de Burbuja...<br/>`;
  ordenamientoBurbuja(a, lim);
  console.log("Muestro A ordenado.");
  visorEjercicio8?.innerHTML += `Valores del Arreglo Ordenado: ${a.toString()} <br/>`;
  escribirEnUnaLinea(a, lim);
  visorEjercicio8?.innerHTML += `Fin de las tareas. <br/>`;
});
