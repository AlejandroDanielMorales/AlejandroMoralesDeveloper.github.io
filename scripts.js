function cambiarImagenes(numero) {
  // Obtener el elemento del carrusel por su ID
  var carrusel = document.getElementById('miCarousel');

  // Obtener todas las imágenes del carrusel dentro del elemento del carrusel
  var imagenes = carrusel.querySelectorAll('.carousel-item img');

  // Obtener el div del carrusel para aplicar la transición de opacidad
  var carouselDiv = carrusel.querySelector('.carousel-inner');

  // Aplicar una clase CSS para la transición de opacidad
  carouselDiv.classList.add('fade-out');

  // Esperar a que termine la transición antes de cambiar las imágenes
  setTimeout(function () {
    // Definir las rutas de las imágenes para cada conjunto (1 al 4)
    if (numero >= 1 && numero <= 4) {
      // Actualizar las rutas de las imágenes en el carrusel
      switch (numero) {
        case 1:
          imagenes[0].setAttribute('src', 'Nonox1.png');
          imagenes[1].setAttribute('src', 'Nonox2.png');
          imagenes[2].setAttribute('src', 'Nonox3.png');
          break;
        case 2:
          imagenes[0].setAttribute('src', 'cManager2.png');
          imagenes[1].setAttribute('src', 'cManager3.png');
          imagenes[2].setAttribute('src', 'cManager4.png');
          break;
        case 3:
          imagenes[0].setAttribute('src', 'Nonox3.png');
          imagenes[1].setAttribute('src', 'cManager4.png');
          imagenes[2].setAttribute('src', 'ALE.jpeg');
          break;
        case 4:
          imagenes[0].setAttribute('src', 'ALE.jpeg');
          imagenes[1].setAttribute('src', 'Nonox3.png');
          imagenes[2].setAttribute('src', 'cManager4.png');
          break;
      }

      // Eliminar la clase CSS para la transición de opacidad
      setTimeout(function () {
        carouselDiv.classList.remove('fade-out');
      }, 10); // Ajusta el tiempo aquí para asegurarte de que la clase se elimine correctamente
    } else {
      // En caso de que el número esté fuera del rango, mostrar un mensaje de error
      console.error('Número no válido. Debe estar entre 1 y 4.');
    }
  }, 1000); // Cambia este valor para ajustar la duración de la transición (en milisegundos)
                                   }
