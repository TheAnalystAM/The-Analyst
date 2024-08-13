/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

// Update Notes: Edit This to Display the Most Eye Catching Story When Clicked in News Teaser, The Latest, Regional Markets News


    // NEWS TEASER

    $('.topnewsteaser').click(function(){
       
        window.location.href = "/tabs/about/";

        $('html, body').scrollTop(0);
       
    });




// The Latest


    $('#thelateststories1').click(function(){

        window.location.href = "/tabs/about/";

        $('html, body').scrollTop(0);
       
    });


    $('#thelateststories2').click(function(){

        window.location.href = "/stories/markets/s2bumbledrop/";

        $('html, body').scrollTop(0);
    });


    $('#thelateststories3').click(function(){

        window.location.href = "/tabs/about/";

        $('html, body').scrollTop(0);

    });


    $('#thelateststories4').click(function(){

        window.location.href = "/tabs/about/";

        $('html, body').scrollTop(0);

    });



// Top Picks



    $('#toppicksstories1').click(function(){

        window.location.href = "/tabs/about/";

        $('html, body').scrollTop(0);

    });



// Regional Markets News


    // US/North America News


    $('#usnewsstories1').click(function(){

        window.location.href = "/tabs/about/";

        $('html, body').scrollTop(0);

    });

    $('#usnewsstories2').click(function(){

        window.location.href = "/tabs/about/";

        $('html, body').scrollTop(0);

    });

    $('#usnewsstories3').click(function(){

        window.location.href = "/tabs/about/";
       
        $('html, body').scrollTop(0);

    });


    // Global Markets

    $('#globalnewsstories1').click(function(){

        window.location.href = "/tabs/about/";
       
        $('html, body').scrollTop(0);

    });

    $('#globalnewsstories2').click(function(){

        window.location.href = "/tabs/about/";

        $('html, body').scrollTop(0);

    });

    $('#globalnewsstories3').click(function(){

        window.location.href = "/tabs/about/";

        $('html, body').scrollTop(0);

    });









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





   // HOME PAGE CODE - Non-connector



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
