function cambiarImagenes(numero) {
  // Obtener el elemento del carrusel por su ID
  var carrusel = document.getElementById('miCarousel');

  // Obtener todas las imágenes del carrusel dentro del elemento del carrusel
  var imagenes = carrusel.querySelectorAll('.carousel-item img');

  // Definir las rutas de las imágenes para cada conjunto (1 al 4)

  // Verificar si el número está dentro del rango válido (1-4)
  if (numero >= 1 && numero <= 4) {
    // Actualizar las rutas de las imágenes en el carrusel
    switch (numero) {
        case 1:
        imagenes[0].setAttribute('src', 'https://thumbs.dreamstime.com/b/transparent-pattern-background-simulation-alpha-channel-png-seamless-gray-white-squares-vector-design-grid-162521286.jpg?w=450');
        imagenes[1].setAttribute('src', 'https://thumbs.dreamstime.com/b/transparent-pattern-background-simulation-alpha-channel-png-seamless-gray-white-squares-vector-design-grid-162521286.jpg?w=450');
        imagenes[2].setAttribute('src', 'https://thumbs.dreamstime.com/b/transparent-pattern-background-simulation-alpha-channel-png-seamless-gray-white-squares-vector-design-grid-162521286.jpg?w=450');
        break;
      case 2:
        imagenes[0].setAttribute('src', 'Nonox1.png');
        imagenes[1].setAttribute('src', 'Nonox2.png');
        imagenes[2].setAttribute('src', 'Nonox3.png');
        break;
      case 3:
        imagenes[0].setAttribute('src', 'cManager3.png');
        imagenes[1].setAttribute('src', 'cManager2.png');
        imagenes[2].setAttribute('src', 'cManager4.png');
        break;
      
      case 4:
        imagenes[0].setAttribute('src', 'https://img.freepik.com/vector-gratis/proximamente-estilo-grunge-abstracto-salpicaduras-negras_1017-26690.jpg?w=740&t=st=1696524217~exp=1696524817~hmac=5df3186ad6e7851d01b65899215a8f16005773cf55456ecf115459433ac062c0');
        imagenes[1].setAttribute('src', 'https://img.freepik.com/vector-gratis/proximamente-estilo-grunge-abstracto-salpicaduras-negras_1017-26690.jpg?w=740&t=st=1696524217~exp=1696524817~hmac=5df3186ad6e7851d01b65899215a8f16005773cf55456ecf115459433ac062c0');
        imagenes[2].setAttribute('src', 'https://img.freepik.com/vector-gratis/proximamente-estilo-grunge-abstracto-salpicaduras-negras_1017-26690.jpg?w=740&t=st=1696524217~exp=1696524817~hmac=5df3186ad6e7851d01b65899215a8f16005773cf55456ecf115459433ac062c0');
        break;
    }
  } else {
    // En caso de que el número esté fuera del rango, mostrar un mensaje de error
    console.error('Número no válido. Debe estar entre 1 y 4.');
  }
}
  
