$(document).ready(function() {
  // Agrega un evento mouseover a las imágenes
  $('.container-restaurant').hover(function() {
    var name = data[$(this).index()].name;
    $('.container-img', this).append('<p class="h4 name-rest">' + name + '</p>');
  }, function() {
    $('.name-rest').remove();
  });
});