$(document).ready(function() {  
  // Animación splash  
  $('.element-hide').hide();
  $('.splashscreen').show();    
  setTimeout(function() {
    $('.splashscreen').fadeOut(500);
    $('.element-hide').show();
  }, 2000);

  // Evento mouseover a las imágenes
  $('.container-restaurant').hover(function() {
    var name = data[$(this).index()].name;
    $('.container-img', this).append('<p class="h4 name-rest">' + name + '</p>');
  }, function() {
    $('.name-rest').remove();
  });

  // Filtrar elección
  $('#search-btn').on('click', function() {
    var filterValue = $('#search').val();
    var selector = '.' + filterValue;
    $('.container-restaurant').fadeIn();
    $('.container-restaurant').not(selector).hide('slow');
  });

  $('#search').on('click', function() {
    $('#search').val('');
    $('.container-restaurant').show();
  });

  // Datos del Modal
  $('.container-restaurant').on('click', function() {
    var name2 = data[$(this).index()].name2;
    var phrase = data[$(this).index()].phrase;
    var address = data[$(this).index()].address;
    var phone = data[$(this).index()].phone;

    $('.modal h4').text(name2);
    $('.p-prahse').text(phrase);
    $('.p-address').text(address);
    $('.p-phone').text(phone);
  });
});