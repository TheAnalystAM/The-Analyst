/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block





    // NEWS TEASER

    $('.topnewsteaser').click(function(){
        window.location.href = '/tabs/about/';
    });




    // The Latest


    $('#thelateststories1').click(function(){

        window.location.href = '/stories/markets/disneyq3earnings/';
    });


    $('#thelateststories2').click(function(){

        window.location.href = '/stories/markets/s2bumbledrop/';
    });


    $('#thelateststories3').click(function(){

        window.location.href = '/stories/markets/s2bumbledrop/';
    });


    $('#thelateststories4').click(function(){

        window.location.href = '/stories/markets/s2bumbledrop/';
    });



    // Top Picks



    $('#toppicksstories1').click(function(){

        window.location.href = '/stories/markets/s2bumbledrop/';
    });



     // Regional Markets News


    // US/North America News


    $('#usnewsstories1').click(function(){

        window.location.href = "/stories/markets/disneyq3earnings/';
    });

    $('#usnewsstories2').click(function(){

        window.location.href = "/stories/markets/s2bumbledrop/';
    });

    $('#usnewsstories3').click(function(){

       window.location.href = "/stories/economics/spiritmerger/';
    });


    // Global Markets

    $('#globalnewsstories1').click(function(){

        window.location.href = "/stories/economics/spiritmerger/';
    });

    $('#globalnewsstories2').click(function(){

        window.location.href = "/stories/economics/spiritmerger/';
    });

    $('#globalnewsstories3').click(function(){

        window.location.href = "/stories/economics/spiritmerger/';
    });



    // General Content


    // TABS

      // HOME - Tab 1

    $('#tab1').click(function(){

       window.location.href = "/";

    });

      // NEWS - Tab 2

    $('#news-btn').click(function(){
         if ($(window).width() > 1087) {
             $('#news-dropdown').toggle(); // Toggle visibility of #news-dropdown
         } else {
             window.location.href = '/stories/news'; // Redirect to the stories/news folder
         }
    });

    $('#news-dropdown').hide();


         // SUBTABS

   $('#subtab1').click(function(){

      window.location.href = '/tabs/subtabs/markets/';

   });

   $('#subtab2').click(function(){

      window.location.href = '/tabs/subtabs/business/';

   });

   $('#subtab3').click(function(){

      window.location.href = '/tabs/subtabs/economics/';

   });


   

      // ABOUT - Tab 3

   $('#tab3').click(function(){

      window.location.href = '/tabs/about/';

   });

      // SUBSCRIBE - Tab 4

   $('#tab4').click(function(){

      window.location.href = '/tabs/subscribe/';

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





    $('.subscribe').click(function(){
         
         var email = $('.emailinput').val();
            if(email) {
               
               $.ajax({
                  url: 'https://script.google.com/macros/s/AKfycbzqEj2dpy_qsRGywNb6w3Q96rBALK7GMvJNkFY5_eVOGfNmUt8XPMaMIv1j7EmA2xx_/exec', 
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
