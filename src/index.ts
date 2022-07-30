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

botonContar.addEventListener("click", clickear);
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

botonIncrementar.addEventListener("click", incrementarUno);
botonDecrementar.addEventListener("click", decrementarUno);

//Ejercicio 3
let precio = document.getElementById("precio-unitario");
let agregar = document.getElementById("btn-agregar");
let calcular = document.getElementById("btn-calcular");
let lista = document.getElementById("lista");
let total = document.getElementById("precio-total");
//let vaciar = document.getElementById("vaciar");
let precios: number[] = [];
let suma: number = 0;

const agregarPrecio = () => {
  precios.push(precio.value);
  lista?.innerHTML += `<li> ${precio?.value}</li>`;
};

const calcularPrecioTotal = () => {
  suma = 0;
  for (let i: number = 0; i < precios.length; i++) {
    suma += Number(precios[i]);
  }
  total?.innerHTML = suma;
};

agregar.addEventListener("click", agregarPrecio);
calcular.addEventListener("click", calcularPrecioTotal);
