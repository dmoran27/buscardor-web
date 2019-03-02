$(document).ready(function(){
	//paginacion
  $('.pag').click( function(){
      $('.pag').removeClass("bg-primary");
      $(this).addClass('bg-primary');
  });

   //favoritos
  $( '.icon-star, .icon-star-filled' ).click( function(){
    if ($(this).hasClass('icon-star')){
      $ ( this ).toggleClass('icon-star-filled');
      $ ( this ).removeClass('icon-star')
      alert("url agregada como favorito");
   }else if ($(this).hasClass('icon-star-filled')){
      $ ( this ).toggleClass('icon-star');
      $ ( this ).removeClass('icon-star-filled')
      alert("url eliminada de favorito");
   }         
  });
  //efecto modal en imagenes
  $('.contenedor-imagen').on('click', function(){
    $('#modal').modal;
    var ruta_imagen = ($(this).find('img').attr('src'));
    $("#imagen-modal").attr('src', ruta_imagen );
   });
  
  $('#modal').on('click', function(){
    $('#modal').modal('hide');
 });     
 //seleccion de botones
 $('#busquedaInformatica, #busquedaNormal, #pdf, #img, #video, #definicion, #historial, .pag, #fav').click( function(){

  if($(this).attr("id")=="busquedaNormal"||
    $(this).attr("id")=="busquedaInformatica"||
    $(this).attr("id")=="definicion"||
    $(this).attr("id")=="pdf"){
alert("h");
   
  }else if ($(this).attr("id")=="img") {
    var ruta = "image.html";
               $(this).attr('data-target', ruta );
  }else if ($(this).attr("id")=="img") {
    var ruta = "image.html";
               $(this).attr('data-target', ruta );
  }else if ($(this).attr("id")=="historial") {
    var ruta = "historial.html";
               $(this).attr('data-target', ruta );
  }else if ($(this).attr("id")=="fav") {
    var ruta = "fav.html";
               $(this).attr('data-target', ruta );
  }
    
 });      
    
});           
    
 
   