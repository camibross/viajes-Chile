$(function() {

  $("a").click(function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var gato = this.hash;
      $("html, body").animate({
        scrolltop: $(gato).offset().top
      }, 800, function() {
        window.location.hash = gato;
      });
    }

  });

  $('[data-toggle="tooltip"]').tooltip()

  $('[data-toggle="popover"]').popover()

  var padre = $('.card-body').parent().find('a');
  //console.log('Muestra al padre--->', padre );

  var botonUno = padre.eq(0);
  var botonDos = padre.eq(1);
  var botonTres = padre.eq(2);
  var botonCuatro = padre.eq(3);

  //console.log('btnUno--->',botonUno)
  //console.log('btnDos--->',botonDos)
  //console.log('btnTres--->',botonTres)
  //console.log('botonCuatro--->',botonCuatro)

  var hijos = $('.card').children();
  //console.log('Muestra los hijos--->', hijos);

  var textoUno = hijos.eq(1).find('p.card-text').hide();
  var textoDos = hijos.eq(3).find('p.card-text').hide();
  var textoTres = hijos.eq(5).find('p.card-text').hide();
  var textoCuatro = hijos.eq(7).find('p.card-text').hide();
  //console.log('Mostrar los textos--->', textoUno,textoDos,textoTres);

  botonUno.click(function(event) {
    event.preventDefault();
    textoUno.fadeToggle('fast');
    //console.log('Este es el boton Uno')
  });

  botonDos.click(function(event) {
    event.preventDefault();
    textoDos.fadeToggle('fast');
    //console.log('Este es el boton Dos')
  });

  botonTres.click(function(event) {
    event.preventDefault();
    textoTres.fadeToggle('fast');
  });

  botonCuatro.click(function(event) {
    event.preventDefault();
    textoCuatro.fadeToggle('fast');
  });


});
