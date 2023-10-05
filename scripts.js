function cambiarImagenes(numero) {
    // Obtener el elemento del carrusel por su ID
    var carrusel = document.getElementById('miCarousel');
    
    // Obtener todas las imágenes del carrusel dentro del elemento del carrusel
    var imagenes = carrusel.querySelectorAll('.carousel-item img');
  
    // Definir las rutas de las imágenes para cada conjunto (1 al 4)
    var conjuntosImagenes = {
      1: ['Nonox1.png', 'Nonox3.png', 'Nonox3.png'],
      2: ['cManager2.png', 'cManager3.jpg', 'cManager4.jpg'],
      3: ['ALE.jpeg', 'ALE.jpeg', 'ALE.jpeg.jpg'],
      4: ['ALE.jpeg.jpg', 'ALE.jpeg.jpg', 'ALE.jpeg.jpg'],
    };
  
    // Verificar si el número está dentro del rango válido (1-4)
    if (numero >= 1 && numero <= 4) {
      // Actualizar las rutas de las imágenes en el carrusel
      switch (numero){
          case 1 : 
              imagenes[0].src = conjuntosImagenes[1][0];
              imagenes[1].src = conjuntosImagenes[1][1];
              imagenes[2].src = conjuntosImagenes[1][2];
              
              break;
          case 2: 
              imagenes[0].src = conjuntosImagenes[2][0];
              imagenes[1].src = conjuntosImagenes[2][1];
              imagenes[2].src = conjuntosImagenes[2][2];
             
              break;
          case 3: 
              imagenes[0].src = conjuntosImagenes[3][0];
              imagenes[1].src = conjuntosImagenes[3][1];
              imagenes[2].src = conjuntosImagenes[3][2];
              
              break;
          case 4: 
              imagenes[0].src = conjuntosImagenes[4][0];
              imagenes[1].src = conjuntosImagenes[4][1];
              imagenes[2].src = conjuntosImagenes[4][2];
              
              
              break;
              
      }
    } else {
      // En caso de que el número esté fuera del rango, mostrar un mensaje de error
      console.error('Número no válido. Debe estar entre 1 y 4.');
    }
  }
