$(document).ready(function() {
    // Logic to show mobile menu on click.
    $('.language-dropdown-icon').click(function() {
        $('.language-links').css("display", "block");
    });
    $('.lang-mobile-close').click(function() {
        $('.language-links').css("display", "none");
    });

    // Hide/Show Languages based on Page you're on.
    $('.lang-en').hide();
    if(window.location.pathname.indexOf('/de') > -1) {
       $('.language-dropdown').text('Deutsch');
       $('.lang-de').hide();
       $('.lang-en').show();
    }
    if(window.location.pathname.indexOf('/es') > -1) {
       $('.language-dropdown').text('Español');
       $('.lang-es').hide();
       $('.lang-en').show();
   }
   if(window.location.pathname.indexOf('/fr') > -1) {
      $('.language-dropdown').text('Français');
      $('.lang-fr').hide();
      $('.lang-en').show();
   }
   if(window.location.pathname.indexOf('/it') > -1) {
      $('.language-dropdown').text('Italiano');
      $('.lang-it').hide();
      $('.lang-en').show();
   }
   if(window.location.pathname.indexOf('/jp') > -1) {
      $('.language-dropdown').text('日本語');
      $('.lang-jp').hide();
      $('.lang-en').show();
   }
   if(window.location.pathname.indexOf('/pt') > -1) {
      $('.language-dropdown').text('Português');
      $('.lang-pt').hide();
      $('.lang-en').show();
   }
});



/*
switch(window.location.pathname){
  case '/de/':
  console.log($('.lang-en').show());
    $('.language-dropdown').text('Deutsch');
    $('.lang-de').hide();
    break;
  case '/es/':
    $('.language-dropdown').text('Español');
    $('.lang-es').hide();
    break;
  case '/fr/':
    $('.language-dropdown').text('Français');
    $('.lang-fr').hide();
    break;
  case '/it/':
    $('.language-dropdown').text('Italiano');
    $('.lang-it').hide();
    break;
  case '/jp/':
    $('.language-dropdown').text('日本語');
    $('.lang-jp').hide();
    break;
  case '/pt/':
    $('.language-dropdown').text('Português');
    $('.lang-pt').hide();
    break;
  case '/':
    $('.language-dropdown').text('English');
    $('.lang-en').hide();
    break;
  default:

    $('.language-dropdown').text('English');

      break;
}
*/