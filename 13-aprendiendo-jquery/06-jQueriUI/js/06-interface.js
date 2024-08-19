//  **********  js/06-interface.js  **********

$(document).ready(function () {

   //  *****  Load  *****
   //$("#datos").load('https://reqres.in/');


   //  *****  draggable(), mover elementos por la página *****
   $('.elemento').draggable();

   //  *****  resizable(), redimensionar elementos por la página *****
   $('.elemento').resizable();

   //  *****  selectable(), seleccionar elementos por la página *****
   //$('.lista-seleccionable').selectable();

   //  *****  sortable(), ordenar elementos por la página *****
   $('.lista-seleccionable').sortable({
      update: function (event, ui) {
         console.log("Ha cambiado la lista...");
      }
   });

   //  *****  droppable(), soltar y arrastrar elementos por la página *****

   //  drop.

   $('#elemento-movido').draggable();
   $('#area').droppable({
      drop: function () {
         console.log("Has soltado algo dentro de el area.");
      }
   });


   //  **********  efectos  **********

   //  *****  fade  *****
   $('#mostrarFade').click(function () {
      $('.caja-efectos').toggle("fade");
   });

   //  *****  explode  *****
   $('#mostrarExplode').click(function () {
      $('.caja-efectos').toggle("explode");
   });

   //  *****  blind  *****
   $('#mostrarBlind').click(function () {
      $('.caja-efectos').toggle("blind");
   });

   //  *****  slide  *****
   $('#mostrarSlide').click(function () {
      $('.caja-efectos').toggle("slide");
   });

   //  *****  drop  *****
   $('#mostrarDrop').click(function () {
      $('.caja-efectos').toggle("drop");
   });

   //  *****  fold  *****
   $('#mostrarFold').click(function () {
      $('.caja-efectos').toggle("fold");
   });

   //  *****  puff  *****
   $('#mostrarPuff').click(function () {
      $('.caja-efectos').toggle("puff");
   });

   //  *****  scale  *****           
   $('#mostrarScale').click(function () {
      $('.caja-efectos').toggle("scale");
   });

   //  *****  shake  *****
   $('#mostrarShake').click(function () {
      $('.caja-efectos').toggle("shake", 4000);
   });

   //  **********  Plugins y Widgets  **********

   //  *****  tooltip  *****
   $(document).tooltip();

   //  *****  dialog  *****
   $('#lanzar-popus').click(function () {
      $('#popup').dialog();
   });

   //  *****  datepicker  *****
   $('#calendario').datepicker();

   //  *****  tabs  *****
   $('#pestañas').tabs();


});

