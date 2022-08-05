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
      //botonMostrar?.innerText = "Mostrar Parrafos";
    } else {
      elementos[i].classList.remove("ocultar");
      elementos[i].classList.add("mostrar");
      //botonMostrar?.innerText = "Ocultar Parrafos";
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
