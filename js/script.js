/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block


// NEWS TEASER

$('.topnewsteaser').click(function(){
   
     window.location.href = "/stories/economics/spiritmerger";
   
});

// THE LATEST

$('#thelateststories1').click(function(){
   
     window.location.href = "/stories/markets/disneyq3earnings";
   
});

$('#thelateststories2').click(function(){
   
     window.location.href = "/stories/markets/bumbledrop";
   
});








// General Content

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


   

      // ABOUT

   $('#tab3').click(function(){

      window.location.href = "/tabs/about/";

   });

   
   
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


























// Tab 1 - Home

   // Subscription Email Collection

    $('.subscribe').click(function(){
         
         var email = $('.emailinput').val();
            if(email) {
               
               $.ajax({
                  url: 'https://script.google.com/macros/s/AKfycbzqEj2dpy_qsRGywNb6w3Q96rBALK7GMvJNkFY5_eVOGfNmUt8XPMaMIv1j7EmA2xx_/exec', // Replace with your Google Apps Script web app URL
                  type: 'POST',
                  data: {
                     email: email
                  },
               success: function(response) {
                  console.log('Email added:', response);
                  $('.emailinput').val('');

                  $('.thankyou').toggle();

               },
               error: function(error) {
                  console.error('Error:', error);
               }
            });

      } else {
         console.log('Please enter an email address.');
      }

    });

    $('.subscribe').click(function(){

    $('.newslettersubscribe').css('height', '700px');

    });



}); //end document.ready block
