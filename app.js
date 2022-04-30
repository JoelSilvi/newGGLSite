window.addEventListener("load", function () {
  console.log("contenido cargado");

  let imagenes = [];

  imagenes[0] = "img/img-slider-1.jpg";
  imagenes[1] = "img/img-slider-2.jpg";
  imagenes[2] = "img/img-slider-3.jpg";
  imagenes[3] = "img/img-slider-4.jpg";

  let indiceImagenes = 0;
  let tiempo = 5000;

  function cambiarImagenes() {
    document.slider.src = imagenes[indiceImagenes];

    if (indiceImagenes < 3) {
      indiceImagenes++;
    } else {
      indiceImagenes = 0;
    }
  }
  setInterval(cambiarImagenes, tiempo);
});
