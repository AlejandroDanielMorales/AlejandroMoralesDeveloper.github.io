function cambiarImagenes(numero) {
  var carrusel = document.getElementById('miCarousel');
  var imagenes = carrusel.querySelectorAll('.carousel-item img');
    if (numero >= 1 && numero <= 4) {
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
      console.error('Número no válido. Debe estar entre 1 y 4.');
    }
  }
