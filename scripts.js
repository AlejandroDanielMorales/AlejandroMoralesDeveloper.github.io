function escribirEnPantalla(texto){
   let arr=texto.split("");
   let i=0;
   let intervalo= setInterval(function(){
    if(i==arr.length-1){ 
      document.getElementById("texto-descripcion").innerHTML+=arr[i];
      clearInterval(intervalo);} 
    else {
    if(arr[i]==" "){
     document.getElementById("texto-descripcion").innerHTML+=arr[i];
     document.getElementById("texto-descripcion").innerHTML+=arr[i+1];
      i+=2;
    }else{
    document.getElementById("texto-descripcion").innerHTML+=arr[i];
    i++;
      }
    }
  },100); 
}



function cambiarImagenes(numero) {
  var carrusel = document.getElementById('miCarousel');
  var imagenes = carrusel.querySelectorAll('.carousel-item img');
  var descripcion = document.getElementById('texto-descripcion');
  var titulo = document.getElementById('tituloProyecto');
var auxdes="";
  if (numero >= 1 && numero <= 4) {
    switch (numero) {
      case 1:
        titulo.textContent='Cardjitsu Game';
        imagenes[0].setAttribute('src', 'Cardjitsu1.png');
        imagenes[1].setAttribute('src', 'Cardjitsu3.png');
        imagenes[2].setAttribute('src', 'Cardjitsu2.png');
        auxdes = "Cartjitsu fue el primer juego que programe,un juego de cartas en consola usando lenguaje C++ y libreria rlutil aplicando programacion procedural y utilizando solo funciones.";
        descripcion.textContent=escribirEnPantalla(descripcion.textContent);
          break;
      case 2:
        titulo.textContent='Nonox Game';
        imagenes[0].setAttribute('src', 'Nonox1.png');
        imagenes[1].setAttribute('src', 'Nonox2.png');
        imagenes[2].setAttribute('src', 'Nonox3.png');
        auxdes="Un juego tipo , buscaminas/nonograma y de memoria,Fue programado utilizando C++ , el mismo tiene 3 niveles y puntaje que perdura en disco duro.";
        descripcion.textContent=escribirEnPantalla(descripcion.textContent);
          break;
      case 3:
        titulo.textContent='Catalog Management';
        imagenes[0].setAttribute('src', 'cManager2.png');
        imagenes[1].setAttribute('src', 'cManager3.png');
        imagenes[2].setAttribute('src', 'cManager4.png');
        auxdes="Catalog Management es una aplicacion de escritorio hecho con C#, T-SQL ,Ado.net(.Net Framework), es un ABM que impacta directo en la base de datos.";
        descripcion.textContent= escribirEnPantalla(auxdes);
        break;
      case 4:
        titulo.textContent='Shopping Cart';
        imagenes[0].setAttribute('src', 'https://img.freepik.com/vector-gratis/proximamente-estilo-grunge-abstracto-salpicaduras-negras_1017-26690.jpg?w=740&t=st=1696524217~exp=1696524817~hmac=5df3186ad6e7851d01b65899215a8f16005773cf55456ecf115459433ac062c0');
        imagenes[1].setAttribute('src', 'https://img.freepik.com/vector-gratis/proximamente-estilo-grunge-abstracto-salpicaduras-negras_1017-26690.jpg?w=740&t=st=1696524217~exp=1696524817~hmac=5df3186ad6e7851d01b65899215a8f16005773cf55456ecf115459433ac062c0');
        imagenes[2].setAttribute('src', 'https://img.freepik.com/vector-gratis/proximamente-estilo-grunge-abstracto-salpicaduras-negras_1017-26690.jpg?w=740&t=st=1696524217~exp=1696524817~hmac=5df3186ad6e7851d01b65899215a8f16005773cf55456ecf115459433ac062c0');
        auxdes="Aplicacion de e-commerce (aun en desarrollo), es una api de compra venta de articulos, utilizando HTML,CSS, C#,T-SQL con libreria Boostrap y Asp.Net ";
        descripcion.textContent=escribirEnPantalla(auxdes);
       break;
    }
    
  }
}
 
