
let intervalo; // Variable global para almacenar el intervalo del efecto de tipeo

function escribirEnPantalla(texto, callback) {
  clearInterval(intervalo); // Detener cualquier efecto de tipeo anterior

  let arr = texto.split("");
  let i = 0;
  intervalo = setInterval(function () {
    if (i == arr.length - 1) {
      document.getElementById("texto-descripcion").innerHTML = arr.join(""); // Establecer el texto completo
      clearInterval(intervalo);
      if (callback) {
        callback(); // Llamar a la función de devolución de llamada si se proporciona
      }
    } else {
      if (arr[i] == " ") {
        document.getElementById("texto-descripcion").innerHTML += arr[i];
        document.getElementById("texto-descripcion").innerHTML += arr[i + 1];
        i += 2;
      } else {
        document.getElementById("texto-descripcion").innerHTML += arr[i];
        i++;
      }
    }
  }, 75);
}
function escribirSobreMi() {
  const texto = "Texto con efecto de tipeo."; // El texto que deseas mostrar
  escribirEnPantalla(texto);
}
function cambiarImagenes(numero) {
  var carrusel = document.getElementById('miCarousel');
  var imagenes = carrusel.querySelectorAll('.carousel-item img');
  var descripcion = document.getElementById('texto-descripcion');
  var titulo = document.getElementById('tituloProyecto');
  var auxdes = "";

  var carruselContainer = document.getElementById('carruselContainer');

  // Mostrar el carrusel y la descripción al hacer clic en un label


  carruselContainer.style.visibility = 'visible';
  descripcion.style.visibility = 'visible';


  if (numero >= 1 && numero <= 4) {
    titulo.textContent = ''; // Limpiar el título mientras se actualiza
    descripcion.textContent = ''; // Limpiar la descripción antes de comenzar el nuevo tipeo
    clearInterval(intervalo); // Detener cualquier efecto de tipeo anterior

    switch (numero) {
      case 1:
        carruselContainer.style.visibility = 'visible';
        descripcion.style.visibility = 'visible';
        titulo.textContent = 'Cardjitsu Game';
        imagenes[0].setAttribute('src', 'Cardjitsu1.png');
        imagenes[1].setAttribute('src', 'Cardjitsu3.png');
        imagenes[2].setAttribute('src', 'Cardjitsu2.png');
        auxdes = "Cartjitsu fue el primer juego que programé, un juego de cartas en consola usando lenguaje C++ y librería rlutil aplicando programación procedural y utilizando solo funciones.";
        escribirEnPantalla(auxdes);
        break;
      case 2:
        carruselContainer.style.visibility = 'visible';
        descripcion.style.visibility = 'visible';
        titulo.textContent = 'Nonox Game';
        imagenes[0].setAttribute('src', 'Nonox1.png');
        imagenes[1].setAttribute('src', 'Nonox2.png');
        imagenes[2].setAttribute('src', 'Nonox3.png');
        auxdes = 'Un juego tipo , buscaminas/nonograma y de memoria,Fue programado utilizando C++ , el mismo tiene 3 niveles y puntaje que perdura en disco duro.';
        escribirEnPantalla(auxdes);
        break;
      case 3:
        carruselContainer.style.visibility = 'visible';
        descripcion.style.visibility = 'visible';
        titulo.textContent = 'Catalog Management';
        imagenes[0].setAttribute('src', 'cManager2.png');
        imagenes[1].setAttribute('src', 'cManager3.png');
        imagenes[2].setAttribute('src', 'cManager4.png');
        auxdes = 'Catalog Management es una aplicacion de escritorio hecho con C#, T-SQL ,Ado.net(.Net Framework), es un ABM que impacta directo en la base de datos.';
        escribirEnPantalla(auxdes);
        break;
      case 4:
        carruselContainer.style.visibility = 'visible';
        descripcion.style.visibility = 'visible';
        titulo.textContent = 'Shopping Cart';
        imagenes[0].setAttribute('src', 'https://t4.ftcdn.net/jpg/01/01/97/41/240_F_101974188_JmL9UeRv9Vr5Xgy2mLYDy0p1cCKvixes.jpg');
        imagenes[1].setAttribute('src', 'https://t4.ftcdn.net/jpg/01/01/97/41/240_F_101974188_JmL9UeRv9Vr5Xgy2mLYDy0p1cCKvixes.jpg');
        imagenes[2].setAttribute('src', 'https://t4.ftcdn.net/jpg/01/01/97/41/240_F_101974188_JmL9UeRv9Vr5Xgy2mLYDy0p1cCKvixes.jpg');
        auxdes = 'Aplicacion de e-commerce (aun en desarrollo), es una api de compra venta de articulos, utilizando HTML,CSS, C#,T-SQL con libreria Boostrap y Asp.Net ';
        escribirEnPantalla(auxdes);
        break;
      // Resto de los casos...
    }
  }
}
