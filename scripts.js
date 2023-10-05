function cambiarImagenes(numero) {
  var carrusel = document.getElementById('miCarousel');
  var imagenes = carrusel.querySelectorAll('.carousel-item img');
  var descripcion = document.getElementById('Descripcion');
  if (numero >= 1 && numero <= 4) {
    switch (numero) {
      case 1:
        imagenes[0].setAttribute('src', 'https://thumbs.dreamstime.com/b/transparent-pattern-background-simulation-alpha-channel-png-seamless-gray-white-squares-vector-design-grid-162521286.jpg?w=450');
        imagenes[1].setAttribute('src', 'https://thumbs.dreamstime.com/b/transparent-pattern-background-simulation-alpha-channel-png-seamless-gray-white-squares-vector-design-grid-162521286.jpg?w=450');
        imagenes[2].setAttribute('src', 'https://thumbs.dreamstime.com/b/transparent-pattern-background-simulation-alpha-channel-png-seamless-gray-white-squares-vector-design-grid-162521286.jpg?w=450');
        descripcion.textContent = 'Cartjitsu fue el primer juego que programe,un juego de cartas en consola usando lenguaje C++ y libreria rlutil,que programe aplicando programacion procedural y utilizando solo funciones.';
        break;
      case 2:
        imagenes[0].setAttribute('src', 'Nonox1.png');
        imagenes[1].setAttribute('src', 'Nonox2.png');
        imagenes[2].setAttribute('src', 'Nonox3.png');
        descripcion.textContent="Un juego tipo , buscaminas/nonograma y de memoria,Fue programado utilizando C++ , el mismo tiene 3 niveles y puntaje que perdura en disco duro."
        break;
      case 3:
        imagenes[0].setAttribute('src', 'cManager2.png');
        imagenes[1].setAttribute('src', 'cManager3.png');
        imagenes[2].setAttribute('src', 'cManager4.png');
        descripcion.textContent="Catalog Management es una aplicacion de escritorio hecho con C#, T-SQL ,Ado.net(.Net Framework), es un ABM que impacta directo en la base de datos."
        break;
      case 4:
        imagenes[0].setAttribute('src', 'https://img.freepik.com/vector-gratis/proximamente-estilo-grunge-abstracto-salpicaduras-negras_1017-26690.jpg?w=740&t=st=1696524217~exp=1696524817~hmac=5df3186ad6e7851d01b65899215a8f16005773cf55456ecf115459433ac062c0');
        imagenes[1].setAttribute('src', 'https://img.freepik.com/vector-gratis/proximamente-estilo-grunge-abstracto-salpicaduras-negras_1017-26690.jpg?w=740&t=st=1696524217~exp=1696524817~hmac=5df3186ad6e7851d01b65899215a8f16005773cf55456ecf115459433ac062c0');
        imagenes[2].setAttribute('src', 'https://img.freepik.com/vector-gratis/proximamente-estilo-grunge-abstracto-salpicaduras-negras_1017-26690.jpg?w=740&t=st=1696524217~exp=1696524817~hmac=5df3186ad6e7851d01b65899215a8f16005773cf55456ecf115459433ac062c0');
        descripcion.textContent ='Aplicacion de e-commerce (aun en desarrollo), es una api de compra venta de articulos, utilizando HTML,CSS, C#,T-SQL con libreria Boostrap y Asp.Net '
        break;
    }
    console.error('Número no válido. Debe estar entre 1 y 4.');
  }
}
