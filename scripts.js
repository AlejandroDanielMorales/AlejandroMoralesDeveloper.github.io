function cambiarImagenes(numero) {
  // Obtener el elemento del carrusel por su ID
  var carrusel = document.getElementById('miCarousel');

  // Obtener todas las imágenes del carrusel dentro del elemento del carrusel
  var imagenes = carrusel.querySelectorAll('.carousel-item img');

  // Definir las rutas de las imágenes para cada conjunto (1 al 4)

  // Verificar si el número está dentro del rango válido (1-4)
  if (numero >= 1 && numero <= 4) {
    // Actualizar las rutas de las imágenes en el carrusel
    for (var i = 0; i < imagenes.length; i++) {
      switch (numero) {
        case 1:
          imagenes[i].src = 'Nonox' + (i + 1) + '.png';
          break;
        case 2:
          imagenes[i].src = 'cManager' + (i + 1) + '.png';
          break;
        case 3:
          imagenes[i].src = 'ALE' + (i + 1) + '.jpeg';
          break;
        case 4:
          imagenes[i].src = 'ComingSoon' + (i + 1) + '.png';
          break;
      }
    }
  } else {
    // En caso de que el número esté fuera del rango, mostrar un mensaje de error
    console.error('Número no válido. Debe estar entre 1 y 4.');
  }
}
