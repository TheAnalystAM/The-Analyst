/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block











// General Content


    // TABS

      // HOME

   $('#tab1').click(function(){

      window.location.href = "/";

   });

      // NEWS (+ Dropdown Menu)

   $('#news-btn').click(function(){
        if ($(window).width() > 1087) {
            $('#news-dropdown').toggle(); // Toggle visibility of #news-dropdown
        } else {
            window.location.href = '/stories/news'; // Redirect to the stories/news folder
        }
    });

   $('#news-dropdown').hide();

   
   
    // OVERLAY


    $('#openMenu').click(function() {
        $('.menu').addClass('show');
        $('.overlay').addClass('show');
        $('#openMenu').hide();
        $('#closeMenu').show();
    });

    $('#closeMenu, .overlay').click(function() {
        $('.menu').removeClass('show');
        $('.overlay').removeClass('show');
        $('#closeMenu').hide();
        $('#openMenu').show();
    });

    $('.tablinks').click(function() {
        $('.menu').removeClass('show');
        $('.overlay').removeClass('show');
        $('#closeMenu').hide();
        $('#openMenu').show();
    });





    // Overlay


























}); //end document.ready block
