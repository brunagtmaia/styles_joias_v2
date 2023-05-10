function toggleArrow() {
    var arrow = document.querySelector('.arrow1');
    arrow.classList.toggle('active');
}
// menu de tela pequena
var menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('active');
});
function menu_telap() {
    var x = document.getElementById("menu_todo");
    x.classList.toggle('active');
}


// Aguarde até que o DOM esteja pronto
// document.addEventListener("DOMContentLoaded", function() {
//   // Inicialize o carrossel
//   var carousel = new Flickity('.main-carousel', {
//       groupCells: true,
//       // ... outras opções do Flickity, se necessário ...
//   });
// });

