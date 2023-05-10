#styles_joias_v2
<html>
  <head>
    <link rel="stylesheet" href="libs/flickity/css/flickity-docs.css" media="screen">
    <script src="libs/flickity/js/flickity-docs.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      .carousel {
  background: #EEE;
  height: 300px; /* Defina a altura desejada */
}

.carousel-cell {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  counter-reset: carousel-cell; /* Redefine o contador */
}

.carousel-cell:before {
  content: none; /* Define o conteúdo como vazio */
}

.carousel-cell img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
}

      </style>
  </head>
  <body>
    <div class="carousel" data-flickity='{ "groupCells": 1 }'>
      <div class="carousel-cell">
        <img src="campanha_home_page/1.png" alt="Imagem 1">
      </div>
      <div class="carousel-cell">
        <img src="campanha_home_page/2.png" alt="Imagem 2">
      </div>
      <div class="carousel-cell">
        <img src="campanha_home_page/3.png" alt="Imagem 3">
      </div>
    </div>
  </body>
</html>


